import OrderTicketPage from './OrderTicketPage';
import React, {Component} from 'react';
import {Formik} from 'formik';
import Paper from '@material-ui/core/Paper'

class Order extends Component {
  state = {
    musea: [],
    post: { name: "", location:"" , lat:"", long: "", image:"", museumId: "", },
  }

  componentWillMount(){
    this.loadMuseum();
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