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

const COLLECTIONACTIONSENUM = Enum('DELETE', 'SOFTDELETE', 'SOFTUNDELETE');

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

class CollectionsTable extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    collections: null,
    collectionId: null,
    collectionAction: null,
    dialogOpen: false,
    dialogTitle: '',
    dialogMessage: ''
  };

  

  handleDialogOpen = (collectionId, collectionAction) => {
    let title = '';
    let message = '';

    switch(collectionAction) {
      case COLLECTIONACTIONSENUM.DELETE:
        title = 'Delete from the database?';
        message= `Do you wish permenantly delete the collection with id ${collectionId}?`;
        break;
      case COLLECTIONACTIONSENUM.SOFTDELETE:
        title = 'Soft-delete from the database?';
        message= `Do you wish to soft-delete the collection with id ${collectionId}?`;
        break;
      case COLLECTIONACTIONSENUM.SOFTUNDELETE:
        title = 'Soft-undelete from the database?';
        message= `Do you wish to soft-undelete the collection with id ${collectionId}?`;
        break;
    }

    this.setState({
      collectionId: collectionId,
      collectionAction: collectionAction,
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

    switch(this.state.collectionAction) {
      case COLLECTIONACTIONSENUM.DELETE:
        url = `/api/v1/collections/${this.state.collectionId}`;
        options = {
          method: 'DELETE'
        }
        break;
      case COLLECTIONACTIONSENUM.SOFTDELETE:
        url = `/api/v1/posts/${this.state.collectionId}?mode=softdelete`;
        options = {
          method: 'DELETE'
        }
        break;
      case COLLECTIONACTIONSENUM.SOFTUNDELETE:
        url = `/api/v1/posts/${this.state.collectionId}?mode=softundelete`;
        options = {
          method: 'DELETE'
        }
        break;
    }

    fetch(url, options)
      .then(res => res.json())
      .then(results => {
        if(results.mode && results.mode === 'delete') {
          this.loadCollections();
        } else {
          const collection = results.collection;
          const i = this.state.collections.findIndex((obj, index, array) => {
            // return obj._id === collection._id;
          });
          const collections = this.state.collections;
          collections[i] = collection;
  
          this.setState(prevState => ({
            ...prevState,
            collections: collections
          }));
        }
        }
      );

    this.handleDialogClose();
  }

  componentWillMount() {
    this.loadCollections();
  }

  loadCollections = () => {
    fetch('/api/v1/collections')
      .then( response => response.json())
      .then( item => this.setState({ collections: item })); 
  }

  render() {
    const { classes } = this.props;
    const { collections } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
                <TableCell>Artis Name</TableCell>
                <TableCell>Museum</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {collections && collections.map( (collection, index) => (
                <TableRow key={collection.id}>
                  <TableCell>{collection.title}</TableCell>
                  <TableCell>{collection.body}</TableCell>
                  <TableCell>{collection.artistName}</TableCell>
                  <TableCell>{collection.museumId}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link} to={ `/admin/collections/${collection.id}/edit`}>
                      <IconCreate />
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(collection.id, (collection.deleted_at)?COLLECTIONACTIONSENUM.SOFTUNDELETE:COLLECTIONACTIONSENUM.SOFTDELETE)} style={{ opacity: ((collection.deleted_at)?0.3:1) }}>
                      <IconDelete/>
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(collection.id, COLLECTIONACTIONSENUM.DELETE)}>
                      <IconDeleteForever />
                    </IconButton>
                  </TableCell>
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

export default withStyles(styles)(CollectionsTable);
