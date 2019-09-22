import React, { Component } from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  IconButton,
  Fab,
  Box
} from "@material-ui/core";
import { Delete, Add } from "@material-ui/icons";
import uuid from "uuid";
import { getItems, deleteItem } from "../action/itemAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddList from "./AddList";

const styles = {
  ListTitle: {
    margin: "10px",
    marginTop: "10px"
  },
  FromAppBar: {
    marginTop: "80px"
  },
  ItemFont: {
    fontSize: "18px",
    paddingLeft: "30px"
  },
  TextFieldmargin: {
    marginTop: "0px",
    width: "300px",
    marginLeft: "20px",
    marginRight: "10px"
  },
  InputForm: {
    marginTop: "10px",
    marginLeft: "20px",
    marginRight: "10px"
  },
  containerMargin: {
    marginBottom: "50px"
  },
  Font: {
    fontSize: "22px",
    FontWeight: "regular"
  }
};

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleOnDelete = id => {
    this.props.deleteItem(id);
  };

  // viewer = () => {
  //   const { loading } = this.props.itemObject;
  //   if (loading) {
  //     return (
  //       <React.Fragment>
  //         <Box style={{ margin: "auto", textAlign: "center" }}>
  //           <CircularProgress size={40} />
  //         </Box>
  //       </React.Fragment>
  //     );
  //   } else {
  //     const { items } = this.props.itemObject;

  //     if (items.length === 0) {
  //       return (
  //         <Box
  //           fontWeight="regular"
  //           style={{ margin: "auto", textAlign: "center" }}
  //         >
  //           <Typography style={styles.Font}>Add Item !!!</Typography>
  //         </Box>
  //       );
  //     } else {
  //       return (
  //         <Paper>
  //           {items.map(maping => (
  //             <List key={maping._id}>
  //               <ListItem button divider>
  //                 <ListItemText>
  //                   <Typography style={styles.ItemFont}>
  //                     {maping.item}
  //                   </Typography>
  //                 </ListItemText>
  //                 <IconButton
  //                   aria-label="delete"
  //                   onClick={this.handleOnDelete.bind(this, maping._id)}
  //                 >
  //                   <Delete color="error" fontSize="inherit" />
  //                 </IconButton>
  //               </ListItem>
  //             </List>
  //           ))}
  //         </Paper>
  //       );
  //     }
  //   }
  // };

  render() {
    const { items } = this.props.itemObject;
    return (
      <React.Fragment>
        <Container maxWidth="md" style={styles.FromAppBar}>
          <AddList styles={styles} />
          <Typography variant="h5" color="inherit" style={styles.ListTitle}>
            List
          </Typography>
          <Container maxWidth="md" style={styles.containerMargin}>
            <Paper>
              {items.map(maping => (
                <List key={maping.id}>
                  <ListItem button divider>
                    <ListItemText>
                      <Typography style={styles.ItemFont}>
                        {maping.item}
                      </Typography>
                    </ListItemText>
                    <IconButton
                      aria-label="delete"
                      onClick={this.handleOnDelete.bind(this, maping.id)}
                    >
                      <Delete color="error" fontSize="inherit" />
                    </IconButton>
                  </ListItem>
                </List>
              ))}
            </Paper>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  itemObject: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemObject: state.itemObject
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
