import React, { Component } from 'react';
import { AddAppointments } from "../components/AddAppointments"
import { SearchAppointments } from "../components/SearchAppointments"
import { ListAppointments } from "../components/ListAppointments"
import { Navbar } from "../Navigation/Navbar/Navbar"
import { Footer } from "../Navigation/Footer/Footer"


import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myAppointments: []
    }
  }

  componentDidMount() {
    fetch("./db.json")
      .then(response => response.json())
      .then(result => {
        const appointments = result.map(appointment => {
          return appointment;
        })

        this.setState({
          myAppointments: appointments
        })
      })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />
        <main className="grey lighten-5 grey darken-4-text" >
          <div className="container">
            <div className="row">
              <div>
                <div className="container">
                  <AddAppointments />
                  <SearchAppointments />
                  <ListAppointments appointments={this.state.myAppointments} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

    );
  }
}


