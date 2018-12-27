import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  fullList: {
    width: 'auto',
    height:'50%', 
    // marginTop:'15%'
  },
};

class MenuDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;


    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Home', 'About', 'Blog', 'Vlog', 'Reviews', 'Contact', 'Apply Now'].map((text, index) => (
            <ListItem button key={text} style={{textAlign:'center'}}>
            <Divider />
              <ListItemText primary={text} />
              
            </ListItem>
            
          ))}
        </List>
        <Divider />

      </div>
    );

    return (
      <div style={{
        position:'fixed', 
        top:'20%'
      }} >
        <SwipeableDrawer
          anchor="top"
          open={true}
          onClose={this.toggleDrawer('top', false)}
          onOpen={this.toggleDrawer('top', true)}
          PaperProps={{
            zIndex:'999999999999'
          }}
          ModalProps={{
            zIndex:'999999999999'
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);