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
            values: { name, location, lat, long, image },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            categories,
            classes
        } = this.props;

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
                id="location"
                name="location"
                helperText={touched.location ? errors.location : ""}
                error={touched.location && Boolean(errors.location)}
                label="location"
                fullWidth
                multiline
                rows="4"
                value={location}
                onChange={this.change.bind(null, "location")}
        
              />
        
              <TextField
                id="lat"
                name="lat"
                helperText={touched.lat ? errors.lat : ""}
                error={touched.lat && Boolean(errors.lat)}
                label="lat"
                fullWidth
                multiline
                rows="10"
                value={lat}
                onChange={this.change.bind(null, "lat")}
        
              />

              <TextField
                id="long"
                name="long"
                helperText={touched.long ? errors.long : ""}
                error={touched.long && Boolean(errors.long)}
                label="long"
                fullWidth
                multiline
                rows="10"
                value={long}
                onChange={this.change.bind(null, "long")}
        
              />

              <TextField
                id="image"
                name="image"
                helperText={touched.image ? errors.image : ""}
                error={touched.image && Boolean(errors.image)}
                label="image"
                fullWidth
                multiline
                rows="10"
                value={image}
                onChange={this.change.bind(null, "image")}
        
              />

        
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