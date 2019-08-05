/*
Import extenal libraries
*/
import React, { Component } from 'react';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

class OrderTicketPage extends Component {

    constructor (props) {
        super (props);
        this.state={
            name: "",
            location: "",
            lat: "",
            long: "",
            image: "",
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let museaData = this.state;
        console.log( museaData);
    
        fetch('/api/v1/musea',{
            method: "POST",
            body: JSON.stringify(museaData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data =>{
              console.log("Successful" + data);
            })
        })
    }
    render() {
        // const { posts } = this.state;
        return (
            <React.Fragment>
                <h1 className="hidden">Bestel Ticket</h1>
                {/* <form class="form">
                    <label>Museum</label>
                    <select>
                        <option>Museum</option>
                        <option>Museum</option>
                        <option>Museum</option>
                        <option>Museum</option>
                    </select>

                    <label>Company</label>
                    <input type="text" placeholder="naam van company"></input>

                    <label>Soort route museum</label>
                    <select>
                        <option>Voorgeselecteerde route</option>
                        <option>Eigen selectie route</option>
                    </select>

                    <button type="submit">Bestel ticket</button>
                </form> */}
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input value={this.state.name} type="tekst" placeholder="name" name="name" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.location} type="tekst" placeholder="location" name="location" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.lat} type="number" placeholder="latitude" name="lat" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.long} type="number" placeholder="long" name="long" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.image} type="tekst" placeholder='src' name="image" onChange={this.handleChange.bind(this)} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default (OrderTicketPage);