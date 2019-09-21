import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";
import { Add } from "@material-ui/icons";
import { Fab, Box, Typography, TextField } from "@material-ui/core";

class AddList extends Component {
  state = {
    name: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = e => {
    e.preventDefault();  
    if (this.state.name.length !== 0) {
      var newItem = {
        item: this.state.name
      };
      this.props.addItem(newItem);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Typography
          variant="h5"
          color="inherit"
          style={this.props.styles.ListTitle}
        >
          Add Item
        </Typography>
        <Box component="span" style={this.props.styles.InputForm}>
          <TextField
            id="addItem"
            name="name"
            type="text"
            variant="standard"
            onChange={this.onChange}
            style={{marginRight:"20px",
          marginBottom:"20px"}}
          ></TextField>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            type="submit"
            onClick={this.handleOnClick}
            style={{marginLeft:"20px"}}
          >
            <Add />
            Add Item
          </Fab>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  itemObject: state.itemObject
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddList);
