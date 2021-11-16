import React, { Component } from "react";

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {

    render () {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">All</button>
                <button type="button" className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">Active</button>
                <button type="button" className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">Done</button>
            </div>
        );
    };
};
