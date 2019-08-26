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
    title: Yup.string("Enter a title of the collection").required("Title is required").min(2).max(128),
    body: Yup.string("Enter a text about the collection").required("Body is required").min(20).max(1024),
    artistName: Yup.string("mention the artist").required("Artist name is required").min(4),
    image: Yup.string("Get a link to a immage source").required("image is required").min(4),
    museumId: Yup.string("Select a museum").required(true),
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

class CollectionForm extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
    
    state = {
        musea: [],
        collection: { title: "", body: "", artistName: "", image: "", museumId: "", },
    };

    componentWillMount() {
        this.loadMusea();
        
        if (this.props.collectionId) {            
            this.loadCollection(this.props.collectionId);
        }
    }

    loadMusea = async () => {
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

    loadCollection = async (collectionId) => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/collections/${collectionId}`, options);
            const responseJson = await response.json();
            if (responseJson) {
                this.setState(prevState => ({ 
                    ...prevState, 
                    collection: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    submit = (values, actions) => {
        const { collectionId } = this.props;

        if (collectionId) {  
            this.updateCollection(collectionId, values);          
        } else {
            this.saveCollection(values);
        }
        
    }

    saveCollection = async (collectionData) => {
        console.log('yey');
        console.log(collectionData)
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(collectionData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/collections', options);
            const responseJson = await response.json();
            if (responseJson) {
                console.log(responseJson);
            }
        } catch(error) {
            console.log(error);
        }
    }

    updateCollection = async (collectionId, collectionData) => {
        console.log(collectionData)
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(collectionData),
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch(`/api/v1/collections/${collectionId}`, options);
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
        const { collection:values } = this.state;

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

export default withStyles(styles)(CollectionForm);