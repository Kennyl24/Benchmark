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
import Phone from '@material-ui/icons/Phone';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Assignment from '@material-ui/icons/Assignment';

import { SocialIcon } from 'react-social-icons';

import LocationCity from '@material-ui/icons/LocationCity';


const styles = {
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
    zIndex:'99999999999',
  },
};

class ConnectTab extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleClickCalander = (e) => {
    window.open('https://calendly.com/teamhensley','_blank');
    // window.location.href="https://calendly.com/teamhensley"
  };
  handleClickPhone = (e) => {
    window.location.href = "tel:(707) 254-8891";
  };
  handleClickAddress = (e) => {
    window.open("https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453", '_blank');
    // window.location.href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453"
  };
  handleClickEmail = (e) => {
    window.location.href = "mailto:teamhensley@benchmark.us";
  };
  handleClickYelp = (e) => {
    window.open('https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa','_blank');
    // window.location.href="https://calendly.com/teamhensley"
  };
  handleClickFacebook = (e) => {
    window.open('https://www.facebook.com/hildahensleynapa','_blank');
    // window.location.href="https://calendly.com/teamhensley"
  };
  handleClickYoutube = (e) => {
    window.open('https://youtube.com','_blank');
    // window.location.href="https://calendly.com/teamhensley"
  };
  handleClickApply = (e) => {
    window.open('https://hildahensley.floify.com/apply?noheaderfooter#tab_a','_blank');
    // window.location.href="https://calendly.com/teamhensley"
  };
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
        <ListItem 
        onTouchTap={this.handleClickEmail}
        onClick={this.handleClickEmail}
        button key={1}>
          <ListItemIcon>{<MailIcon/>}</ListItemIcon>
        <ListItemText primary={'teamhensley@benchmark.us'} />
        </ListItem>
        <ListItem 
        onTouchTap={this.handleClickPhone}
        onClick={this.handleClickPhone}
        button key={2}>
          <ListItemIcon>{<Phone/>}</ListItemIcon>
        <ListItemText primary={'(707) 254-8891 '} />
        </ListItem>
        <ListItem 
          onTouchTap={this.handleClickAddress}
          onClick={this.handleClickAddress}
        button key={3}>
          <ListItemIcon>{<LocationCity/>}</ListItemIcon>
        <ListItemText primary={'4123 Solano Ave, Napa, CA 94558 '} />
        </ListItem>
        <ListItem
        key={5}
        onTouchTap={this.handleClickCalander}
        onClick={this.handleClickCalander}
        button >
          <ListItemIcon>{<CalendarToday/>}</ListItemIcon>
        <ListItemText primary={'Schedule a call'} />
        </ListItem>
        <ListItem
        key={5}
        onTouchTap={this.handleClickApply}
        onClick={this.handleClickApply}
        button >
          <ListItemIcon>{<Assignment/>}</ListItemIcon>
        <ListItemText primary={'Apply Now'} />
        </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem 
        onTouchTap={this.handleClickFacebook}
        onClick={this.handleClickFacebook}
        button key={4}>
          <ListItemIcon>{<SocialIcon  style={{height:'25px', width:'25px'}} url="https://www.facebook.com/hildahensleynapa/" network="facebook" />}</ListItemIcon>
        <ListItemText primary={'Facebook'} />
        </ListItem>
        <ListItem 
        onTouchTap={this.handleClickYoutube}
        onClick={this.handleClickYoutube}
        button key={6}>
          <ListItemIcon>{<SocialIcon style={{height:'25px', width:'25px'}}url="http://youtube.com" network="youtube" />}</ListItemIcon>
        <ListItemText primary={'YouTube'} />
        </ListItem>
        <ListItem button key={7}
        onTouchTap={this.handleClickYelp}
        onClick={this.handleClickYelp}>
          <ListItemIcon>{<SocialIcon  style={{height:'25px', width:'25px'}} url="https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa" network="yelp" />}</ListItemIcon>
        <ListItemText primary={'Yelp'} />
        </ListItem>
        </List>
      </div>
    );

    return (
      <div style={{position:'fixed', right:'0px', top:'40%', zIndex:'999'}}>
        <Button onClick={this.toggleDrawer('right', true)} style={{color:'white', backgroundColor:'#242f6e', minWidth:'0px', maxWidth:'44px'}}>
        
        C<br/>o<br/>n<br/>n<br/>e<br/>c<br/>t</Button>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

ConnectTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectTab);