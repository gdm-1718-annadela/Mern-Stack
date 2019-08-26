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

    render() {
        const { collections } = this.props;

        return (
            <React.Fragment>
                {collections && collections.map( (collection, index) => (
                    <article key={ collection.id }>           
                        <div className="card">
                            <div className="card__content">
                                <h2 className="card__title">{ collection.title }</h2>
                                <img src={ collection.image } className="card__image" alt="collection" />
                            </div>
                        </div>
                    </article>
                ))}
            </React.Fragment>
        );
    }
}

export default (CollectionsListsPaged);