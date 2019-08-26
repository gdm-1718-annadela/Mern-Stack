/*
Import external libraries
*/
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from 'yup';
import { EditorState } from 'draft-js';

/*
Material UI
*/
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

/*
Custom Form
*/
import Form from "./Form";

/*
Validation
*/
const validationSchema = Yup.object(
{
    name: Yup.string("Enter your name").required("Name is required").min(4).max(128),
    firstname: Yup.string("Enter your firstname").required("firstname is required").min(4).max(128),
    validationCode: Yup.string("Enter a random validation code").required("validation code is required").min(5),
    amount: Yup.number("Enter the amount of your tickets").required("amount is required"),
    museumId: Yup.string("Select a museum").required("museum is required"),
    
});

/*
Styling
*/
const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   
 }
});

class OrderForm extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    state = {
        musea: [],
        order:{ name: "", firstname: "", validationCode: "", amount: "", museumId: "",},
    };

    componentWillMount(){
        this.loadMuseum();

        if(this.props.orderId) {
            this.loadOrder(this.props.orderId);
        }
    }

    loadMuseum = async () => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/musea', options);
            console.log(response);
            const responseJson = await response.json();
            if (responseJson) {
                this.setState(prevState => ({ 
                    ...prevState, 
                    musea: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    loadOrder = async (orderId) => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/order/${orderId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
                this.setState(prevState => ({ 
                    ...prevState, 
                    order: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    submit = (values, actions) => {
        const { orderId } = this.props;

        if (orderId) {  
            this.updateOrder(orderId, values);
        } else {
            console.log('musea is aan het opslaan')
            this.saveOrder(values);
        }
        
    }

    saveOrder = async (orderData) => {
        console.log('yey');
        console.log(orderData);
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/order', options);
            console.log(response);

            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    updateOrder = async (orderId, orderData) => {
        console.log(orderData);
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/musea/${orderId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { classes } = this.props;
        const { order:values } = this.state;

        console.log(values);

        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        <Formik
                            render={props => <Form {...props} musea={this.state.musea} />}
                            initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => this.submit(values, actions)}
                            enableReinitialize={true}
                        />
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(OrderForm);