import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  fullList: {
    width: 'auto',
    height:'50%',
    zIndex: '999999' 
    // marginTop:'15%'
  },
};

class MenuDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    showMenu: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  showMenu = () => {
    console.log('yipee')
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <List>
        
          {['Home', 'About', 'Blog', 'Vlog', 'Reviews', 'Contact', 'Apply Now'].map((text, index) => (
            
            <ListItem button key={text} style={{fontFamily: 'Graphik Web,Helvetica,sans-serif!important', textAlign:'center', borderBottom: '1px solid rgba(242, 241, 239, 1)'}}
            onClick={()=> {
            if (text === 'Apply Now'){
              window.open(
                'https://napa.benchmark.us/apply/',
                '_blank' // <- This is what makes it open in a new window.
              );
             } else {
              window.location.href=`/${text}`
            }
            }
            }
            >
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
            
          ))}
          <ListItem button key={22} style={{textAlign:'center'}}
        onClick={this.showMenu}
          >
          <ListItemText primary={'Close'.toUpperCase()} />
          </ListItem>
          {/* <ListItem button key={10} style={{textAlign:'center'}}
            onClick={()=> 
            window.location.href='https://napa.benchmark.us/apply/'
            }
          >
          <ListItemText primary={'Apply Now'} />
          </ListItem>
          <ListItem button key={22} style={{textAlign:'center'}}
        onClick={this.showMenu}
          >
          <ListItemText primary={'Close'} />
          </ListItem> */}
        </List>

      </div>
    );

    return (
      <div style={{marginTop:'10%'}}>
      <IconButton onClick={this.showMenu}color="inherit" aria-label="Menu">
      <MenuIcon/>
      </IconButton>
        <Drawer
          anchor="top"
          open={this.state.showMenu}
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
          // style={{position:'fixed', top:'100px'}}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);