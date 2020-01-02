import React from "react"
import {login} from "../../../assets/axios"
import { Col, Row, Input, Button, notification } from "antd"

interface iState {
    email: string,
    password: string
}

interface iProps {}

export default class FormLogin extends React.Component<iProps, iState> {
    constructor (props:iProps){
        super(props) 

        this.state = {
            email: "usuario-test@adopets.com",
            password: "123123"
        }     
    }

    async handleLogin(){
        if( await login( this.state ) ) {
            notification.success({
                message: "Login efetuado com sucesso!"
            })
        }else {
            notification.error({
                message: "Erro ao efetuar login"
            })
        }
    }

    render(){
        return (
            <Col span={12}>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <Row type="flex" justify="end" gutter={[16, 16]}>
                    <Col>
                        <Input 
                            value={this.state.email}
                            onChange={ev => this.setState({email: ev.target.value})}
                            placeholder="Email" 
                        />
                    </Col>
                    <Col>
                        <Input.Password 
                            value={this.state.password}
                            onChange={ev => this.setState({password: ev.target.value})}
                            placeholder="Password" 
                        />
                    </Col>
                    <Col>
                        <Button onClick={() => this.handleLogin()} type="primary" block>
                            Log in
                        </Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}