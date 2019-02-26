import React from 'react';
import { Link } from 'react-router-dom';
import Vlog from './Vlog.jsx';
import SocialMediaBar from 'react-social-media-bar';

const VlogMap = props => (
  <div >
  <div className="vlog-container">
      {props.videos.length > 0 ? props.videos.map((video, key) => <Vlog video={video} key={key} />) : null}
  </div>
</div>
);

export default VlogMap;