import React, { Component } from 'react'



export class AddAppointmentButton extends Component {
    render() {
        return (

            <div class="fixed-action-btn">
                <a class="btn-floating btn-large waves-effect red modal-trigger tooltipped" href="#addAppointment" data-position="left" data-tooltip="Add Appointment" ><i class="material-icons">add</i></a>
            </div>

        )
    }
}