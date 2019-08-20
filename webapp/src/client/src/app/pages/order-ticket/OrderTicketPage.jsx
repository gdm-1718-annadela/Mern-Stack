/*
Import extenal libraries
*/
import React, { Component } from 'react';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types'

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

class OrderTicketPage extends Component {

    static propTypes ={
        classes: PropTypes.object.isRequired,
    }

    constructor (props) {
        super (props);
        this.state={
            name: "",
            firstname: "",
            validationCode: "",
            amount: "",
            museumId: "",
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
        let orderData = this.state;
        console.log( orderData);
    
        fetch('/api/v1/order',{
            method: "POST",
            body: JSON.stringify(orderData),
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

    change = (name, e) => {
        e.persist();
        this.props.handleChange(e);
        this.props.setFieldTouched(name, true, false);
    }

    render() {
        // const { posts } = this.state;
        // const { musea } = this.state;
        const {
            values:{name, location, lat, long, image, museumId},
            musea,
            touched,
        } =  this.props;


        return (
            <React.Fragment>
                <h1 className="hidden">Bestel Ticket</h1>
                <form action="/order" method="POST" onSubmit={this.handleFormSubmit.bind(this)} class="form">
                    <label>Name</label>
                    <input value={this.state.name} type="tekst" placeholder="name" name="name" onChange={this.handleChange.bind(this)}/>

                    <label>FirstName</label>
                    <input value={this.state.firstname} type="tekst" placeholder="name" name="firstname" onChange={this.handleChange.bind(this)}/>

                    <label>Validation Code</label>
                    <input value={this.state.validationCode} type="tekst" placeholder="name" name="validationCode" onChange={this.handleChange.bind(this)}/>
                    <FormControl>
                    <InputLabel htmlFor="museumId">Museum</InputLabel>
                    <Select onChange={this.change.bind(null,'museumId')} value={museumId} inputProps={{
                        name:"museumId",
                        id:'museumId,'
                    }} >
                    {musea && musea.map((museum, index)=> 
                        <MenuItem key={museum.id} value={museum.id}>
                            {museum.name}
                        </MenuItem>
                    )}

                    </Select>

                    </FormControl>


                    <label>Amount</label>
                    <input type="number" placeholder="name" name="amount" onChange={this.handleChange.bind(this)}/>

                    <button type="submit">Bestel ticket</button>
                </form>
                {/* <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input value={this.state.name} type="tekst" placeholder="name" name="name" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.location} type="tekst" placeholder="location" name="location" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.lat} type="number" placeholder="latitude" name="lat" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.long} type="number" placeholder="long" name="long" onChange={this.handleChange.bind(this)}/>
                    <input value={this.state.image} type="tekst" placeholder='src' name="image" onChange={this.handleChange.bind(this)} />
                    <input type="submit" value="Submit" />
                </form> */}
            </React.Fragment>
        )
    }
}

export default (OrderTicketPage);