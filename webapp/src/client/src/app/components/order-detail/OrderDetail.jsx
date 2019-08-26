/*
Import external libraries
*/
import React, { Component } from 'react';
import Parser from 'html-react-parser';
import classNames from 'classnames';
import Api from '../../services';
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import Chip from '@material-ui/core/Chip';


/*
Styling
*/
import './OrderDetail.scss'

class OrderDetail extends Component {

    state = {
        collection: null,
    };

    componentWillMount() {
        this.loadCollection();
    }

    loadCollection = () => {
        Api.findAllCollections()
            .then((data) => {
                console.log(data)
                this.setState(prevState => ({
                    ...prevState,
                    collections: data,
                    }),
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getCollection (){
        console.log()
    }

    

    render() {
        const { data: order } = this.props;
        const { collections } = this.state;   
        console.log(collections)

        return (
            <FormControl>
            <InputLabel htmlFor="select-multiple">Name</InputLabel>
            <Select
              multiple
              value="collection"
              onChange={this.getCollection}
              input={<Input id="select-multiple" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
              </div>)}
            >
              {collections.map(collection => (
                <MenuItem key={collection.id} value={collection.name}>
                  {collection.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
     
        );
    }
}

export default (OrderDetail);