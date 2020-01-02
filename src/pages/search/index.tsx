import React, { Component } from "react"
import GenericLayout from "../../layouts/generic"
import Filters from "./components/filters"
import List from "./components/list"
import "./style.less"

import axios from "../../assets/axios"
import BaseSearch from "../../assets/base-search.json"

interface iProps {}

export enum sex_key { ALL, MALE, FEMALE };
export enum size_key { ALL, S, M, L, XL };
export enum age_key { ALL, BABY, YOUNG, ADULT, SENIOR };
export interface iFilter {
    sex_key?: sex_key | null;
    size_key?: size_key | null;
    age_key?: age_key | null;
}

export interface Complement {
    id: number;
    name?: string;
    uuid?: string;
}
export interface Pets {
    id: number;
    name: string;
    uuid: string;
    custom_code: string|number|null;
    specie_id: number;
    breed_primary_id: number;
    price: string;
    picture: string;
    created_date: string;
    status_key: string;
    branch_id: number;
    payment_model_key: string;
    sex_key: string;
    size_key: string;
    age_key: string;
    specie: Complement;
    branch: Complement;
    breed_primary: Complement;
}
interface iState {
    filters: iFilter,
    list: Array<Pets>
}
export default class Search extends Component<iProps, iState> {
    constructor(props:iProps){
        super(props)
        this.state = {
            filters: {
                sex_key: 0,
                size_key: 0,
                age_key: 0
            },
            list: []
        }

        this.setFilter = this.setFilter.bind(this)
        this.refreshList = this.refreshList.bind(this)
        
        this.refreshList()
    }

    refreshList(){
        const ClonnedBaseSearch = JSON.parse( JSON.stringify(BaseSearch))

        const filters = this.state.filters || {}
        if( !!filters.sex_key ) ClonnedBaseSearch.search.sex_key = sex_key[filters.sex_key]
        if( !!filters.size_key ) ClonnedBaseSearch.search.size_key = size_key[filters.size_key]
        if( !!filters.age_key ) ClonnedBaseSearch.search.age_key = age_key[filters.age_key]

        

        axios.post("/pet/search", ClonnedBaseSearch).then( data => {
            const { data: { data: { result: list }}} = data
            this.setState({list})
        })

    }

    setFilter( filter:iFilter ): void {
        const filters:iFilter = Object.assign({}, this.state.filters, filter) 
        this.setState({ filters })
    }

    render(){
        return (
            <div className="container-search-page">
                <GenericLayout >
                    <Filters 
                        filters={this.state.filters}
                        setFilter={ this.setFilter }
                        refreshList={ this.refreshList }
                    />                    
                    <List
                        list={this.state.list}
                    />
                </GenericLayout>
            </div>
        )
    }
};