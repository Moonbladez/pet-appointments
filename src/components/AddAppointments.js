import React, { Component } from 'react';

export class AddAppointments extends Component {
    render() {
        return (

            <div>
                <h2>Add Appointment</h2>
                <form id="aptForm" >
                    <div className="row">
                        <div class="input-field col s12">
                            <input id="petName" type="text" class="validate" />
                            <label htmlFor="petName">Name of Pet</label>
                        </div>
                    </div>


                    <div className="row">
                        <div class="input-field col s12">
                            <input id="ownerName" type="text" class="validate" />
                            <label htmlFor="ownerName">Name of Owner</label>
                        </div>
                    </div>


                    <div className="row">
                        <div class="input-field col s12">
                            <input id="aptDate" type="date" class="validate" />
                            <label htmlFor="aptDate">Date of Appointment</label>
                        </div>
                    </div>

                    <div className="row">
                        <div class="input-field col s12">
                            <textarea id="aptNotes" type="text" class="validate" className="materialize-textarea" />
                            <label htmlFor="aptNotes">Appointment Notes</label>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <button class="btn waves-effect green" type="submit" name="action">Submit
                                    <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

