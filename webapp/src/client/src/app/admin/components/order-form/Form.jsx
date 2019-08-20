/*
Import external libraries
*/
import React, { Component } from "react";
import PropTypes from 'prop-types';

/*
Material UI
*/
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

import RichEditor from "../rich-editor";

const styles = {
  selectCategories: {
      minWidth: 240
  }
};

class Form extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    change = (name, e) => {
        e.persist();
        this.props.handleChange(e);
        this.props.setFieldTouched(name, true, false);
    };

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
          <form
              onSubmit={(e) => {
                this.props.handleSubmit(e);
              }}
              method="POST"
          >
              <TextField
                id="name"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                label="name"
                value={name}
                onChange={this.change.bind(null, "name")}
                fullWidth
        
              />
              <TextField
                id="firstname"
                name="firstname"
                helperText={touched.firstname ? errors.firstname : ""}
                error={touched.firstname && Boolean(errors.firstname)}
                label="firstname"
                fullWidth
                multiline
                rows="4"
                value={firstname}
                onChange={this.change.bind(null, "firstname")}
        
              />
        
              <TextField
                id="validationCode"
                name="validationCode"
                helperText={touched.validationCode ? errors.validationCode : ""}
                error={touched.validationCode && Boolean(errors.validationCode)}
                label="validation Code"
                fullWidth
                multiline
                rows="10"
                value={validationCode}
                onChange={this.change.bind(null, "validationCode")}
        
              />

              <TextField
                id="amount"
                name="amount"
                helperText={touched.amount ? errors.amount : ""}
                error={touched.amount && Boolean(errors.amount)}
                label="amount"
                fullWidth
                multiline
                rows="10"
                value={amount}
                onChange={this.change.bind(null, "amount")}
        
              />

              <FormControl>
                <InputLabel htmlFor="museumId">Museum</InputLabel>
                <Select
                  className={classes.selectCategories}
                  value={museumId}
                  onChange={this.change.bind(null, "museum")}
                  inputProps={{
                    name: 'museumId',
                    id: 'museumId',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* {console.log(musea)} */}
                  {musea && musea.map((museum, index) => (
                    
                    <MenuItem key={museum.id} value={museum.id}>{museum.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
              >
                Submit
              </Button>
          </form>
        );
    }
}

export default withStyles(styles)(Form);