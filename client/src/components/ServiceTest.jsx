import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    }}>
  <Card style={{height:'400px', 
    width:'33%', 
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'}}>
    <CardHeader
      title="Transmission Diagnosis & Services"
      titleStyle={{fontSize:'20px', fontWeight: 'bold'}}
      // subtitle="Subtitle"
    />
    <CardMedia
      overlay={<CardTitle title="More Info"  />}
    >
      <img src="https://i.imgur.com/jheAn5Z.jpg" alt="" />
    </CardMedia>
  </Card>
  <Card style={{height:'400px', 
    width:'33%', 
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'}}>
    <CardHeader
      title="Transmission Rebuilds"
      titleStyle={{fontSize:'20px', fontWeight: 'bold'}}
      // subtitle="Subtitle"
    />
    <CardMedia
      overlay={<CardTitle title="More Info" />}
    >
      <img src="https://i.imgur.com/jheAn5Z.jpg" alt="" />
    </CardMedia>
  </Card>
  <Card style={{height:'400px', 
    width:'33%', 
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'}}>
    <CardHeader
      title="Transmission Replacements"
      titleStyle={{fontSize:'20px', fontWeight: 'bold'}}
      // subtitle="Subtitle"
    />
    <CardMedia
      overlay={<CardTitle title="More Info"  />}
    >
      <img src="https://i.imgur.com/jheAn5Z.jpg" alt="" />
    </CardMedia>
  </Card>
  </div>
);

export default CardExampleWithAvatar;