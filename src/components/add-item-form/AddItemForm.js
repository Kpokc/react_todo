import React, { Component } from "react";

import './AddItemForm.css';

export default class AddItemForm extends Component {

    state = {
        userInput: ""
    }

    handleChange=(elm)=>{
        this.setState( { userInput:elm.target.value } );
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem( this.state.userInput );
        this.setState({
            userInput: ""
        });
    }

    render (){
        return(
            <div className="row">
                <div className="col-12">
                    <form className="add-item-form d-flex mt-3"
                          onSubmit={this.onSubmit}>
                        <input  type="text"
                            value={ this.state.userInput }
                            className="form-control"
                            onChange={ this.handleChange }
                            placeholder="Add your note here!"
                            />
                        <button type="submit" 
                                className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">
                            Add
                        </button>
                    </form>
                </div>
            </div>
            
        )
    }
}