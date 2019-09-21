import React, { Component } from 'react';
import { Toolbar, Typography ,AppBar, Container} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                    <AppBar  color="primary" >    
                        <Container maxWidth="md">
                            <Toolbar variant="regular">
                                <ShoppingCart fontSize="large"/>
                                <Typography variant="h5" color="inherit" style={{marginLeft:"20px"}} >
                                    Shopping List
                                </Typography>
                            </Toolbar>
                        </Container>
                    </AppBar>
            </React.Fragment>
        )
    }
}
