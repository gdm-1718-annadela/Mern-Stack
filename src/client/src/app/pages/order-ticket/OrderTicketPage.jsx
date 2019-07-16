/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

class OrderTicketPage extends Component {
    render() {
        // const { posts } = this.state;
        return (
            <React.Fragment>
                <h1 className="hidden">Bestel Ticket</h1>
                {/* <form class="form">
                    <label>Museum</label>
                    <select>
                        <option>Museum</option>
                        <option>Museum</option>
                        <option>Museum</option>
                        <option>Museum</option>
                    </select>

                    <label>Company</label>
                    <input type="text" placeholder="naam van company"></input>

                    <label>Soort route museum</label>
                    <select>
                        <option>Voorgeselecteerde route</option>
                        <option>Eigen selectie route</option>
                    </select>

                    <button type="submit">Bestel ticket</button>
                </form> */}
                <form action="post">
                    <input type="tekst" placeholder="name"/>
                    <input type="tekst" placeholder="location"/>
                    <input type="number" placeholder="latitude"/>
                    <input type="number" placeholder="long"/>
                    <input type="tekst" placeholder='src'/>
                    <button type="submit">Post musea</button>
                </form>
            </React.Fragment>
        )
    }
}

export default (OrderTicketPage);