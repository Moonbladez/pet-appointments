import React, { Component } from 'react'
import Moment from "react-moment"
import { RiCalendar2Line } from "react-icons/ri"

import { v4 as uuidv4 } from 'uuid';




export class ListAppointments extends Component {
    render() {
        return (
            <div className="row">
                <div className="appointment-list">
                    <h2>Current Appointments:</h2>
                    {this.props.appointments.map(appointment => (
                        <div className="s12 m6 l4" key={uuidv4()} >
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="card-title">{appointment.petName}</h4>
                                    <span>Owner: {appointment.ownerName}</span>
                                    <div><RiCalendar2Line />
                                        <Moment date={appointment.aptDate} parse={"YYYY-MM-dd hh:mm"} format="MMM-D h:mma" />
                                    </div>
                                    <p>{appointment.aptNotes}</p>
                                </div>

                                <div className="card-action">
                                    <button className="waves-effect waves-light btn-small red" onClick={() => this.props.deleteAppointment(appointment)}><i class="material-icons right">delete</i>delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    }
}