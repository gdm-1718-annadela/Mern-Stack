import OrderTicketPage from './OrderTicketPage';
import React, {Component} from 'react';
import {Formik} from 'formik';
import Paper from '@material-ui/core/Paper'
import * as Yup from 'yup';
import PropTypes from 'prop-types';




const validationSchema = Yup.object(
    {
        name: Yup.string("Enter your name").required("Name is required").min(4).max(128),
        firstname: Yup.string("Enter your firstname").required("firstname is required").min(4).max(128),
        validationCode: Yup.string("Enter a random validation code").required("validation code is required").min(5),
        amount: Yup.number("Enter the amount of your tickets").required("amount is required"),
        museumId: Yup.string("Select a museum").required("museum is required"),
        
    });

class Order extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
  state = {
    musea: [],
    order:{ name: "", firstname: "", validationCode: "", amount: "", museumId: "",},
  }

  componentWillMount(){
    this.loadMuseum();

    if(this.props.orderId) {
        this.loadOrder(this.props.orderId);
    }
  }

  loadMuseum = async () => {
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

loadOrder = async (orderId) => {
    try {
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };

        const response = await fetch(`/api/v1/order/${orderId}`, options);
        const responseJson = await response.json();
        if (responseJson) {
            this.setState(prevState => ({ 
                ...prevState, 
                order: responseJson 
            }));
        }
    } catch(error) {
        console.log(error);
    }
}

submit = (values, actions) => {
    const { orderId } = this.props;

    if (orderId) {  
        this.updateOrder(orderId, values);
    } else {
        console.log('musea is aan het opslaan')
        this.saveOrder(values);
    }
    
}

saveOrder = async (orderData) => {
    console.log('yey');
    console.log(orderData);
    try {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData),
            mode: 'cors',
            cache: 'default'
        };

        const response = await fetch('/api/v1/order', options);
        console.log(response);

        const responseJson = await response.json();
        if (responseJson) {
            console.log(responseJson);
            console.log(responseJson['id'])
            window.location.href=`/order/${responseJson['id']}`
        }
    } catch(error) {
        console.log(error);
    }
}

render () {
  const{ post:values } = this.state;
  return(
    <React.Fragment>
      <div>
          <Paper>
              <Formik
                  render={props => <OrderTicketPage {...props} musea={this.state.musea} />}
                  initialValues={values}
                  onSubmit={(values, actions) => this.submit(values, actions)}
                  enableReinitialize={true}
              />
          </Paper>
      </div>
  </React.Fragment>
  )
}
}

export default Order;