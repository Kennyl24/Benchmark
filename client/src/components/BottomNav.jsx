import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Phone from 'material-ui/svg-icons/communication/phone';
import DeviceAddAlarm from 'material-ui/svg-icons/device/add-alarm';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  select(index){
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Paper zDepth={1} style={{height:'100px', verticalAlign:'middle'}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Mon-Fri: 8AM-5PM"
            icon={<DeviceAddAlarm/>}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="536 Soscol Avenue Napa, CA 94559"
            icon={<IconLocationOn/>}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="707-224-5898"
            icon={<Phone/>}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
        <br/>
        <footer>
        <small>&copy; Copyright 2018, Kenneth Laprelle</small>
        </footer>
      </Paper>
    );
  }
}

export default BottomNav;