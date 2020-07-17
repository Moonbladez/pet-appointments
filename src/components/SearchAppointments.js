import React, { Component } from 'react';
import M from "materialize-css";

export class SearchAppointments extends Component {
    render() {
        M.AutoInit()
        return (
            <div className="search-appointment">
                <div className="col s12">
                    <div className="input-group">
                        <input
                            id="SearchApts"
                            type="text"
                            className="form-control"
                            aria-label="Search Appointments"
                            onChange={event => this.props.searchAppointments(event.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn dropdown-trigger indigo darken-1 waves-effect"
                                data-target="sortDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: {this.props.orderBy}<i class="material-icons right">arrow_drop_down</i>
                            </button>

                            <ul className="sort-menu dropdown-content" id="sortDropdown">
                                <li><a href="#!" className={`${this.props.orderBy === "petName" ? "active" : ""}`} onClick={event => this.props.changeOrder("petName", this.props.orderBy)}>Pet Name</a></li>
                                <li><a href="#!" className={`${this.props.orderBy === "aptDate" ? "active" : ""}`} onClick={event => this.props.changeOrder("aptDate", this.props.orderBy)}>Date</a></li>
                                <li><a href="#!" className={`${this.props.orderBy === "ownerName" ? "active" : ""}`} onClick={event => this.props.changeOrder("ownerName", this.props.orderBy)}>Owner</a></li>
                                <li class="divider" tabIndex="-1"></li>
                                <li><a href="#!" className={`${this.props.orderDirection === "asc" ? "active" : ""}`} onClick={event => this.props.changeOrder("asc", this.props.orderDirection)}>Asc</a></li>
                                <li><a href="#!" className={`${this.props.orderDirection === "dec" ? "active" : ""}`} onClick={event => this.props.changeOrder("dec", this.props.orderDirection)}>Desc</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

