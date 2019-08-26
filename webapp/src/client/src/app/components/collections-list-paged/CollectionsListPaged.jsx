/*
Import external libraries
*/
import React, { Component } from 'react';
import classNames from 'classnames';

/*
Styling
*/
import './CollectionsListPaged.scss'

class CollectionsListsPaged extends Component {

    readCollection(museumId){
        window.location.href=`/musea/${museumId}`
    }

    render() {
        const { collections } = this.props;

        return (
            <React.Fragment>
                {collections && collections.map( (collection, index) => (
                    <article key={ collection.id }>           
                        <div className="card">
                            <div className="card__content">
                            <img src={ collection.image } className="card__image" alt="collection" />
                            <div className="card__btn">
                                <h2 className="card__title">{ collection.title }</h2>
                                <p className="card__text card__long">{collection.body}</p>
                                <p className="card__text">{collection.artistName}</p>
                                <button className="order-btn" onClick={(ev) => this.readCollection(collection.museumId)}>Bekijk Museum</button>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                ))}
            </React.Fragment>
        );
    }
}

export default (CollectionsListsPaged);