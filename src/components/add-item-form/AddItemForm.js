import React, { Component } from "react";

import './AddItemForm.css';

export default class AddItemForm extends Component {

    state = {
        userInput: ""
    }

    handleChange=(elm)=>{
        this.setState( { userInput:elm.target.value } );
        console.log(elm)
    }

    render (){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="add-item-form">
                        <input  type="text" 
                            className="mt-3 w-50"
                            onChange={ this.handleChange }
                            />
                        <div className="btn-group float-right">
                            <button type="button" 
                                    className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm mt-3"
                                    onClick={ () => this.props.onAddItem( this.state.userInput ) }>Add</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}