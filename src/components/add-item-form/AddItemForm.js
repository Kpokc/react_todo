import React, { Component } from "react";

import './AddItemForm.css';

export default class AddItemForm extends Component {

    render (){
        return(
            <div className="add-item-form">
                <div className="btn-group float-right">
                    <button type="button" 
                            className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm mt-3"
                            onClick={ () => this.props.onAddItem('Hello World') }>Add</button>
                </div>
            </div>
        )
    }
}