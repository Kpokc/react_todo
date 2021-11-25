import React, { Component } from "react";

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render () {

        const { filter } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;

            const clazz = isActive ? 'active' : '';

            return (
                <button type="button"
                        key={ name }
                        className={`btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm ${clazz}`}
                        // onClick={() => onSearchChange(name)}
                        >{label}</button>
            );
        });

        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    };
};
