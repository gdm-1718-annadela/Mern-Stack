/*
Import external libraries
*/
import React, { Component } from 'react';
import classNames from 'classnames';

/*
Styling
*/
import './MuseaListPaged.scss'

class MuseaListsPaged extends Component {
    readTicketsHandler = (ev, id) => {
        ev.preventDefault();
        if (typeof this.props.onReadTickets === 'function') {
            this.props.onReadTickets(id);
        }
    }
    readMoreHandler = (ev, id) => {
        ev.preventDefault();
        if (typeof this.props.onReadMore === 'function') {
            this.props.onReadMore(id);
        }
    }

    render() {
        const { musea, pagination } = this.props;

        return (
            <React.Fragment>
                {musea && musea.map( (museum, index) => (      
                    <div className="card">
                        <div className="card__content">
                            <img src={ museum.image } className="card__image" alt="museum" />
                            <div className="card__btn">
                                <h2 className="card__title">{ museum.name }</h2>
                                <div className="card__btns">
                                <button className="order-btn" onClick={(ev) => this.readTicketsHandler(ev, museum.id)}>Bestel Tickets</button>
                                
                                <button className="order-btn" onClick={(ev) => this.readMoreHandler(ev, museum.id)}>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default (MuseaListsPaged);