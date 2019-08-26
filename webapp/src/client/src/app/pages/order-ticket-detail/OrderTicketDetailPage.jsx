/*
Import extenal libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


/*
Import internal libraries
*/
import Api from '../../services';

class OrderTicketDetailPage extends Component {
    constructor (props) {
        super (props);
        this.state={
            name: "",
            firstname: "",
            validationCode: "", 
            amount: "",
            museumId: "",
            museum: null,
            collections: [],
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount() {
        this.loadMuseum(this.props.match.params.id);

    }

    loadMuseum = (id) => {
        Api.findOnePost(id)
            .then((data) => {
                console.log(data['id'])
                this.setState(prevState => ({
                    ...prevState,
                    museum: data,
                    museumId: data['id'],
                }));
            })
            .catch((error) => {

            });
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
              window.location.href=`/home`
            })
        })
    }

    // valueMusea(id) {
    //     // this.setState({
    //     //     museumId: id,
    //     // })
    //     console.log(id)
    // }
    
    render() {
        const { museum } = this.state;
        return (
            <React.Fragment>
            {museum ? (
            <article>
               {/* <h1>Ticket voor: {museum.name}</h1> */}
               {console.log(museum.id)}
               <form className="input__box" onSubmit={this.handleFormSubmit.bind(this)}>
                    <input className="input" value={this.state.name} type="tekst" placeholder="name" name="name" onChange={this.handleChange.bind(this)}/>
                    <input className="input" value={this.state.firstname} type="tekst" placeholder="firstname" name="firstname" onChange={this.handleChange.bind(this)}/>
                    <input className="input" value={this.state.validationCode} type="text" placeholder="validationCode" name="validationCode" onChange={this.handleChange.bind(this)}/>
                    <input className="input" value={this.state.amount} type="number" placeholder="amount" name="amount" onChange={this.handleChange.bind(this)}/>
                    <input  className="order-btn" type="submit" value="Submit" />
                </form>
            </article>
            ): '<p>LOADING</p>'}
            </React.Fragment>
            
        )
    }
}

export default (OrderTicketDetailPage);