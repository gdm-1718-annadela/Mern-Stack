/*
External libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Enum from "es6-enum";

/*
Material UI
*/
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconCreate from '@material-ui/icons/Create';
import IconDelete from '@material-ui/icons/Delete';
import IconDeleteForever from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';

const ORDERACTIONSENUM = Enum('DELETE', 'SOFTDELETE', 'SOFTUNDELETE');

/*
Styles
*/
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
  },
});

class OrderTable extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    order: null,
    orderId: null,
    orderAction: null,
    dialogOpen: false,
    dialogTitle: '',
    dialogMessage: ''
  };

  

  handleDialogOpen = (orderId, orderAction) => {
    let title = '';
    let message = '';

    switch(orderAction) {
      case ORDERACTIONSENUM.DELETE:
        title = 'Delete from the database?';
        message= `Do you wish permenantly delete the order with id ${orderId}?`;
        break;
      case ORDERACTIONSENUM.SOFTDELETE:
        title = 'Soft-delete from the database?';
        message= `Do you wish to soft-delete the order with id ${orderId}?`;
        break;
      case ORDERACTIONSENUM.SOFTUNDELETE:
        title = 'Soft-undelete from the database?';
        message= `Do you wish to soft-undelete the order with id ${orderId}?`;
        break;
    }

    this.setState({
      orderId: orderId,
      orderAction: orderAction,
      dialogOpen: true,
      dialogTitle: title,
      dialogMessage: message
    });
  };

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  handleDialogSubmit = () => {
    let url = '';
    let options = {};

    switch(this.state.orderAction) {
      case ORDERACTIONSENUM.DELETE:
        url = `/api/v1/order/${this.state.orderId}`;
        options = {
          method: 'DELETE'
        }
        break;
      case ORDERACTIONSENUM.SOFTDELETE:
        url = `/api/v1/order/${this.state.orderId}?mode=softdelete`;
        options = {
          method: 'DELETE'
        }
        break;
      case ORDERACTIONSENUM.SOFTUNDELETE:
        url = `/api/v1/order/${this.state.orderId}?mode=softundelete`;
        options = {
          method: 'DELETE'
        }
        break;
    }

    fetch(url, options)
      .then(res => res.json())
      .then(results => {
        if(results.mode && results.mode === 'delete') {
          this.loadOrder();
        } else {
          const order = results;
          const i = this.state.order.findIndex((obj, index, array) => {
            // console.log(order._id);
            // return obj._id === order._id;
          });
          const orders = this.state.orders;
          orders[i] = order;
  
          this.setState(prevState => ({
            ...prevState,
            orders: orders
          }));
        }
        }
      );

    this.handleDialogClose();
  }

  componentWillMount() {
    this.loadOrder();
  }

  loadOrder = () => {
    fetch('/api/v1/order')
      .then( response =>response.json())
      .then( item => this.setState({ orders: item })); 
  }
  
  render() {
    const { classes } = this.props;
    const { orders } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>ValidationCode</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Museum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders && orders.map( (order, index) => (
                <TableRow key={order.id}>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.firstname}</TableCell>
                  <TableCell>{order.validationCode}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.museum && order.museum.name}</TableCell>
                  {/* <TableCell>
                    <IconButton
                      component={Link} to={ `/admin/order/${order.id}/edit`}>
                      <IconCreate />
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(order.id, (order.deleted_at)?ORDERACTIONSENUM.SOFTUNDELETE:ORDERACTIONSENUM.SOFTDELETE)} style={{ opacity: ((order.deleted_at)?0.3:1) }}>
                      <IconDelete/>
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(order.id, ORDERACTIONSENUM.DELETE)}>
                      <IconDeleteForever />
                    </IconButton>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Dialog
          fullScreen={false}
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.state.dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.state.dialogMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialogClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleDialogSubmit()} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );  
  }
}

export default withStyles(styles)(OrderTable);
