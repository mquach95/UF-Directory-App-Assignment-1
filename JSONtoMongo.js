'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
var fs = require('fs');
var listingData;
fs.readFile('listings.json','utf8', function(error, data) {
    if (error)
        throw error;
    listingData = JSON.parse(data).entries;
    
    for(var i = 0;i<listingData.length;i++) {
        var buildingData = new Listing(listingData[i]);
        buildingData.save(function(err) {
            if(error)
                throw error;
        });
    }
    
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */