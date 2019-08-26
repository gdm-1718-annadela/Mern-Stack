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
    state = {
        order: null,
        collections: [],
    };

    componentWillMount() {
        this.loadOrder(this.props.match.params.id);
        this.loadCollection();

    }

    loadOrder = (id) => {
        Api.findOneOrder(id)
            .then((data) => {
                console.log(data)
                this.setState(prevState => ({
                    ...prevState,
                    order: data
                }));
            })
            .catch((error) => {

            });
    }

    loadCollection = () => {
        Api.findAllCollections()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    collections: data,
                    }),
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    
    render() {
        const { collections } = this.state;
        const order = this.state;
        console.log(order)

        return (
            <article>
            <h1>Test</h1>
            {collections && collections.map( (collection, index) => (
                console.log('test' + collection.museumId)
                // collection.museumId === order.museumId?<div>{collection.title}</div>:null
            ))}
            </article>
        )
    }
}

export default (OrderTicketDetailPage);