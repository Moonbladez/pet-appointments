import React from "react"



export const Navbar = (props) => {
    console.log(props)
    return (
        <nav>
            <div className="nav-wrapper indigo darken-1">
                <a href="/" className="brand-logo">Pawsome Pets</a>

                <form>
                    <div class="input-field">
                        <input id="search" type="search" onChange={event => props.searchAppointments(event.target.value)} onBlur={event => (event.target.value = "")} />
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>


            </div>
        </nav>
    )
}