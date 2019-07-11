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
    name: Yup.string("Enter a musea name").required("Name is required").min(10).max(128),
    location: Yup.string("Enter a location").required("Location is required").min(10).max(1024),
    lat: Yup.number("Enter a latitude").required("latitude is required").min(5),
    long: Yup.number("Select a longitude").required("longitude is required").min(5),
    image: Yup.string("place the image link").required(false),

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

class MuseumForm extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    state = {
        museum:{ name: "", location: "", lat: "", long: "", image: "", },
    };

    loadMuseum = async (museumId) => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/musea/${museumId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
                this.setState(prevState => ({ 
                    ...prevState, 
                    museum: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    submit = (values, actions) => {
        const { museumId } = this.props;

        if (museumId) {  
            this.updateMuseum(museumId, values);
        } else {
            this.saveMuseum(values);
        }
        
    }

    saveMuseum = async (museumData) => {
        console.log('yey');
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(museumData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/musea', options);
            console.log(response.json());
            console.log(museumData);

            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    updateMuseum = async (museumId, museumData) => {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(museumData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/musea/${museumId}`, options);
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
        const { museum:values } = this.state;

        console.log(values);

        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        <Formik
                            render={props => <Form {...props} categories={this.state.categories} />}
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

export default withStyles(styles)(MuseumForm);