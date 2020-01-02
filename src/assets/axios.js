import axios from "axios"
import localforage from "localforage"

const system_api_key = "505763d6-4202-4b05-9efc-93b366939bcf";
const AxiosInstance = axios.create({
    baseURL: "https://test.adopets.app/v1"
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
    async (config) => {
        const logged_token = await localforage.getItem("logged_token")
        if(!logged_token) return config
        config.headers.common['Authorization'] = `Bearer ${logged_token}`
        return config;
    }, 
    function (error) {
        return Promise.reject(error);
    }
);

const register =  async () =>{
    try {
        const {data: {data: {access_key}}} = await AxiosInstance.post(`/auth/session-request`, { system_api_key } )
        return access_key            
    } catch (error) {
        return false
    }
};

export const login = async ({email, password}) => {
    try {
        if(! (await localforage.getItem("logged_token") ) ) {
            const sData = { organization_user : { email, password }} 
            const register_token = await register()          
            if(!register_token) return false
    
            AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${register_token}`
            const { data: {data: {organization_user, access_key }} } = await AxiosInstance.post(`/auth/session-register`, sData)
    
            await localforage.setItem( "organization_user", organization_user )
            await localforage.setItem( "logged_token", access_key )
            return true
        } else {
            return true
        }        
    } catch (error) {
        return false
    }
};

export default AxiosInstance;