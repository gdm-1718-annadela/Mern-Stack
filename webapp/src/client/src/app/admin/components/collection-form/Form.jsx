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
            values: { title, body, artistName, museumId, },
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
                id="title"
                name="title"
                helperText={touched.title ? errors.title : ""}
                error={touched.title && Boolean(errors.title)}
                label="Title"
                value={title}
                onChange={this.change.bind(null, "title")}
                fullWidth
        
              />

              <TextField
                id="body"
                name="body"
                helperText={touched.body ? errors.body : ""}
                error={touched.body && Boolean(errors.body)}
                label="Body"
                fullWidth
                multiline
                rows="10"
                value={body}
                onChange={this.change.bind(null, "body")}
              />

              <TextField
                id="artistName"
                name="artistName"
                helperText={touched.artistName ? errors.artistName : ""}
                error={touched.artistName && Boolean(errors.artistName)}
                label="Artist Name"
                fullWidth
                multiline
                rows="4"
                value={artistName}
                onChange={this.change.bind(null, "artistName")}
        
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
                  }}e
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
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