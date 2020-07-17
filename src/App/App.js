import React, { Component } from 'react';
import { AddAppointments } from "../components/AddAppointments"
import { SearchAppointments } from "../components/SearchAppointments"
import { ListAppointments } from "../components/ListAppointments"
import { Navbar } from "../Navigation/Navbar/Navbar"
import { Footer } from "../Navigation/Footer/Footer"


import './App.css';
import { without } from 'lodash';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myAppointments: [],
      orderBy: "petName",
      orderDirection: "asc",
      queryText: "",
    }

    this.deleteAppointment = this.deleteAppointment.bind(this)
    this.addAppointment = this.addAppointment.bind(this)
    this.changeOrder = this.changeOrder.bind(this)
    this.searchAppointments = this.searchAppointments.bind(this)

  }

  addAppointment(appointment) {
    let tempAppointments = this.state.myAppointments
    tempAppointments.unshift(appointment)


    this.setState({
      myAppointments: tempAppointments
    })

  }

  deleteAppointment(appointment) {
    let tempAppointments = this.state.myAppointments;
    tempAppointments = without(tempAppointments, appointment)

    this.setState({
      myAppointments: tempAppointments
    })

  }

  searchAppointments(query) {
    this.setState({ queryText: query })
  }


  changeOrder(order, direction) {
    this.setState({
      orderBy: order,
      orderDirection: direction
    })
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
    let order;
    let filteredAppointments = this.state.myAppointments;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredAppointments = filteredAppointments.sort((a, b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (
        eachItem["petName"].toLowerCase()
          .includes(this.state.queryText.toLocaleLowerCase()) ||
        eachItem["ownerName"].toLowerCase()
          .includes(this.state.queryText.toLocaleLowerCase()) ||
        eachItem["aptNotes"].toLowerCase()
          .includes(this.state.queryText.toLocaleLowerCase())
      )
    });

    return (
      <div className="App">
        <Navbar searchAppointments={this.searchAppointments} />
        <main className="grey lighten-5 grey darken-4-text" >
          <div className="container">
            <div className="row">
              <div>
                <div className="container">
                  <AddAppointments addAppointment={this.addAppointment} />
                  <SearchAppointments orderBy={this.state.orderBy} orderDirection={this.state.orderDirection} changeOrder={this.changeOrder} searchAppointments={this.searchAppointments} />
                  <ListAppointments appointments={filteredAppointments} deleteAppointment={this.deleteAppointment} />
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


