/*
Import extenal libraries
*/
import React, { Component } from 'react';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";



/*
Import internal libraries
*/
import Api from '../../services';
import PostsList from '../../components/posts-list';

class OrderTicketPage extends Component {

    static propTypes ={
        classes: PropTypes.object.isRequired,
    }

    state = {
      collection: null,
    };

    change = (name, e) => {
        e.persist();
        this.props.handleChange(e);
        this.props.setFieldTouched(name, true, false);
    }

    render() {
        const {
            values: { name, firstname, validationCode, amount, museumId },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            musea,
            classes
        } = this.props;
        console.log(musea);


        return (
            <form className="input__box"
              onSubmit={(e) => {
                this.props.handleSubmit(e);
              }}
              method="POST"
          >
                <TextField
                id="name"
                className="input"
                name="name"
                label="name"
                value={name}
                onChange={this.change.bind(null, "name")}
                
        
              />
              <TextField
                id="firstname"
                name="firstname"
                label="firstname"
                className="input"
                value={firstname}
                onChange={this.change.bind(null, "firstname")}
        
              />
        
              <TextField
                id="validationCode"
                name="validationCode"
                label="validation Code"
                className="input"
                value={validationCode}
                onChange={this.change.bind(null, "validationCode")}
        
              />

              <TextField
                className="input"
                id="amount"
                name="amount"
                label="amount"
                value={amount}
                onChange={this.change.bind(null, "amount")}
        
              />

              <FormControl>
                <InputLabel htmlFor="museumId">Museum</InputLabel>
                <Select
                  className="input"
                  value={museumId}
                  onChange={this.change.bind(null, "museum")}
                  inputProps={{
                    name: 'museumId',
                    id: 'museumId',
                  }}
                >
                  {musea && musea.map((museum, index) => (
                    <MenuItem key={museum.id} value={museum.id}>{museum.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
              className="input"
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
                >
                Submit
              </Button>
                </form>

        )
    }
}

export default (OrderTicketPage);