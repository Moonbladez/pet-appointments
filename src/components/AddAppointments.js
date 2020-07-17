import React, { Component } from 'react';
import M from "materialize-css";

export class AddAppointments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            petName: "",
            ownerName: "",
            aptDate: "",
            aptTime: "",
            aptNotes: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.petName === "" || this.state.ownerName === "" || this.state.aptDate === "") {
            M.toast({ html: "Please complete all fields", classes: "rounded" })
            return
        } else {
            let newAppointment = {
                petName: this.state.petName,
                ownerName: this.state.ownerName,
                aptDate: `${this.state.aptDate} ${this.state.aptTime}`,
                aptNotes: this.state.aptNotes
            };

            this.props.addAppointment(newAppointment)

            this.setState({
                petName: "",
                ownerName: "",
                aptDate: "",
                aptTime: "",
                aptNotes: ""
            })


            M.toast({ html: "Appointment Added", classes: "rounded" })
        }



    }


    render() {
        M.AutoInit();

        return (

            <div id="addAppointment" className="white z-depth-1">
                <div className="modal-content" >
                    <h5>Add Appointment</h5>
                    <form id="aptForm" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="petName" type="text" className="validate" value={this.state.petName} onChange={this.handleChange} name="petName" />
                                <label htmlFor="petName">Name of Pet</label>
                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s12">
                                <input id="ownerName" type="text" className="validate" value={this.state.ownerName} onChange={this.handleChange} name="ownerName" />
                                <label htmlFor="ownerName">Name of Owner</label>
                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s6">
                                <input id="aptDate" type="date" className="validate" value={this.state.aptDate} onChange={this.handleChange} name="aptDate" />
                                <label htmlFor="aptDate">Date of Appointment</label>
                            </div>



                            <div className="input-field col s6">
                                <input id="aptTime" type="time" className="validate" value={this.state.aptTime} onChange={this.handleChange} name="aptTime" />
                                <label htmlFor="aptTime">Time of Appointment</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="aptNotes" type="text" className="validate" className="materialize-textarea truncate" value={this.state.aptNotes} onChange={this.handleChange} name="aptNotes" />
                                <label htmlFor="aptNotes">Appointment Notes</label>
                            </div>
                        </div>

                        <div>
                            <div>
                                <button className="btn waves-effect green" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

