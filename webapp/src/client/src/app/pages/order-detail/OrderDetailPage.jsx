/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import OrderDetail from '../../components/order-detail'

class OrderDetailPage extends Component {
    state = {
        order: null,
    };


    componentWillMount() {
        this.loadOrder(this.props.match.params.id);
    }

    loadOrder = (id) => {
        Api.findOneOrder(id)
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    order: data
                }));
            })
            .catch((error) => {

            });
    }

    render() {
        const { order } = this.state;
        return (
            <React.Fragment>
                 <OrderDetail data={order} />
            </React.Fragment>
        )
    }
}

export default (OrderDetailPage);