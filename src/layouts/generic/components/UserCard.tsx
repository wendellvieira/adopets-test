import React from "react"
import localforage from "localforage"
import {Card, Avatar} from "antd"

interface iState {
    full_name: string,
    pronoun_key: string
}
interface iProps {}

export default class UserCard extends React.Component<iProps, iState> {
    constructor( props:iProps ){
        super(props)

        this.state = {
            full_name: "",
            pronoun_key: ""
        }

        this.defineName()
    }

    async defineName(){
        const {_formatted: {full_name, pronoun_key}} = await localforage.getItem("organization_user")
        this.setState({full_name, pronoun_key})
    }

    render(){
        return (
            <Card.Meta
                avatar={<Avatar />}
                title={this.state.full_name}
            />
        )
        
            /* <div>
                <b>{this.state.full_name}</b>
                <small>{this.state.pronoun_key}</small>
            </div> */
    }
}