import React, { Component } from "react";

import './TodoListItems.css'

export default class TodoListItems extends Component{

    constructor() {
        super();

        this.state = {
            done: false
        };
    }

    onLabelClick = () => {
        this.setState({
            done: true
        });
    };

    render () {

        // To get access to all function props
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
    
        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
    
        return (
          <div className="row">
              <div className="col-12">
                  <div className="list-text"> 
                      <span 
                          style={ style }
                          className={ classNames }
                          onClick={ this.onLabelClick }>
                          { label }
                      </span>
                  </div>
                  <div className="list-icons">
                      <span>
                        <button type="button" className="btn"><i className="fas fa-trash-alt"></i></button>
                        <button type="button" className="btn"><i className="fas fa-exclamation-triangle"></i></button>
                      </span>
                  </div>
                </div>
          </div>
        );

    }
}