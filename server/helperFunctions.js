let getYelpByLocation = (req, res) => {
  let location = req.body.location;
  let options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=food&location=' + location + '&limit=25',
    headers: {
      Authorization: 'Bearer pUzhig8f0A_iFy4d8VdXDcDDYs0G4gCvHPZG6kZOCgoAQbIljf6dSiUnHVI0HIGM0dcwGIKAv6Ci0kgC3Lhywqa40-JuRtbwUszhcjisZxT7MOsSquqqpWbsJgdQWnYx',
    },
  };
  request(options, function(error, response, body) {
    if (error) {
      console.log('ERROR_ON_REQUESTING_YELPS');
    } 
    let businesses = JSON.parse(body);
    for (let i = 0; i < businesses.businesses.length; i++) {
      let currentYelp = new db.Yelp({
        image: `${businesses.businesses[i].image_url}`,
        name: `${businesses.businesses[i].name}`,
        reviewCount: `${businesses.businesses[i].review_count}`,
        location: `${businesses.businesses[i].location}`,
        rating: `${businesses.businesses[i].rating}`,
        url: `${businesses.businesses[i].url}`,
      });
      currentYelp.save(function(err, currentYelp) {
        if (err) {
          console.log('ERR SAVING YELP');
        } 
      });
    }
  });
  res.end();
};