import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'VA Loans',
    width: '33.3%',
    descripition:''
  },
  {
    url: 'https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'First Time Home Buyers',
    width: '33.3%',
    descripition:''
  },
  {
    url: 'https://images.pexels.com/photos/8556/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Refinancing',
    width: '33.4%',
    descripition:''
  },
  {
    url: 'https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Conventional Loans',
    width: '33.3%',
    descripition:''
  },
  {
    url: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'FHA Loans',
    width: '33.3%',
    descripition:''
  },
  {
    url: 'https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'And More!',
    width: '33.4%',
    descripition:''
  },
];

function ButtonBases(props) {
  const { classes } = props;

  return (
    <div style={{marginTop:'60px'}}>
    <h3 className="homepage-header" style={{cursor: 'pointer', color:'#787878', margin:'0', paddingBottom:'1.5%'}}
    onClick={()=> window.location.href = "/about"}
    >WHY THE HILDA HENSLEY TEAM?</h3>
      <p style={{fontFamily: 'plexeina-regular,Helvetica,sans-serif', marginLeft:'20%', marginRight:'20%',color: 'black', fontSize: '18px', lineHeight:'1.6', textAlign:'center'}}>
      We are a team of home financial experts that are all ready to provide clear options and advice to help you with any of your home purchase needs. 
      Below are some of the mortgages we deal with on a daily basis. 
      {/* Want to buy your Napa Valley dream home? Let your team of Home Financial Experts provide clear options and advice to help you make your dream home a reality!  */}
      {/* <Link to={{ pathname: '/Contact' }}className="bottomnav-links"> <span style={{fontFamily: 'plexeina-regular,Helvetica,sans-serif', cursor:'pointer', padding:'0px 0% 0% 0%', color: 'white', fontSize: '16px', maxWidth: '400px', textDecoration:'underline', color:'black'}}>
      Speak with a Mortgage Expert Today!
        </span></Link> */}
        </p>
    <div className={classes.root}>
      {images.map((image, index) => (
        // <Link to={{ pathname: `/info/${image.title.split(' ').join('-')}`, state: { key: index}}} style={{height:'100%', width:image.width, minWidth: '350px',}}>
        <ButtonBase
          onClick={()=> 
            {
            window.confirm('Would you like to learn more?') ? window.location.href = "/contact" : null
          }
        }
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        // </Link>
      ))}
    </div>
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);