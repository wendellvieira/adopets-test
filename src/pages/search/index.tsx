import React, { Component } from "react"
import GenericLayout from "../../layouts/generic"
import Filters from "./components/filters"
import List from "./components/list"
import "./style.less"

export default class Search extends Component {
    render(){
        return (
            <div className="container-search-page">
                <GenericLayout >
                    <Filters />
                    <List />
                </GenericLayout>
            </div>
        )
    }
};