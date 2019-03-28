import React from 'react';
import { Link } from 'react-router-dom';
import VaVideos from './VaVideos.jsx';
import SocialMediaBar from 'react-social-media-bar';

const VaMap = props => (
  <div >
  <div className="va-container">
      {props.videos.length > 0 ? props.videos.map((video, key) => <VaVideos video={video} key={key} />) : null}
  </div>
</div>
);

export default VaMap;