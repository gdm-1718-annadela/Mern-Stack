/*
Import external libraries
*/
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import classNames from 'classnames';
import Api from '../../services';

/*
Styling
*/
import './OrderDetail.scss'

class OrderDetail extends Component {

    state = {
        collection: null,
    };

    componentWillMount() {
        this.loadCollection();
    }

    loadCollection = () => {
        Api.findAllCollections()
            .then((data) => {
                console.log(data)
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
        const { data: order } = this.props;
        const { collections } = this.state;   

        return (
            <React.Fragment>
                {order ? (
                    <article key={ order.id } className={classNames("museum--large")}>
                        <h1 className="museum__title">{ order.name }</h1>
                        <div className="museum__synopsis">{ order.firstname }</div>
                        <div className="museum__synopsis">{ order.validationCode }</div>
                        { collections && collections.map( (collection, index) => (
                            collection.museumId === order.museumId?<div>{collection.title}</div>:null
                        ))}
                    </article>
                    
                    
                    

                    
                ) : '<p>LOADING</p>'}
            </React.Fragment>
        );
    }
}

export default (OrderDetail);