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
import './MuseumDetail.scss'

class MuseumDetail extends Component {

    state = {
        collection: null,
    };

    componentWillMount() {
        this.loadCollection();
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

    locateCollection(collectionId){
        window.location.href=`/collections/${collectionId}`
    }

    render() {
        const { data: museum } = this.props;
        const { collections } = this.state;   

        return (
            <React.Fragment>
                {museum ? (
                    <article key={ museum.id } className={classNames("museum--large")}>
                        <h1 className="museum__title">{ museum.name }</h1>
                        <div className="museum__gegevens">{ museum.location }</div>
                        <div className="collections__box">
                        { collections && collections.map( (collection, index) => (
                            collection.museumId === museum.id?<div class="collection__box">
                            <p>{collection.name}</p><img className="collection_image" src={collection.image} alt="collectie" onClick={(ev) => this.locateCollection(collection.id)}></img>
                            </div>:null
                        ))}
                        </div>
                    </article>
                    
                    
                    

                    
                ) : '<p>LOADING</p>'}
            </React.Fragment>
        );
    }
}

export default (MuseumDetail);