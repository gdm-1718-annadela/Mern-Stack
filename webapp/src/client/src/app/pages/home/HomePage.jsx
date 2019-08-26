/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';
import './Page.scss';

class HomePage extends Component {
    render = () => {
        return(
            <React.Fragment>
                <h1 data-glitch="Adventure Point" class="title glitch">ADVENTURE POINT</h1>
                <p className="museum__gegevens">Blessed are the curious,
                    for they shall have
                    adventures</p>
                <div class="image"></div>
            </React.Fragment>
        )
    }
}

export default (HomePage);