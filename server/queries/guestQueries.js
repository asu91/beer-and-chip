var Guest = require('../models/models').Guest;

module.exports = {
  getAll: function(eventID, callback) {
	  Guest
	    .findAll({
	  	  where: {EventId: eventID}
	    })
	    .then(function(guests) {
	  	  callback(guests);
	    });
  },

  addOne: function(eventID, guest, callback) {
	  guest.EventId = eventID;
    Guest
	    .create(guest)
	    .then(function(newGuest) {
	    	callback(newGuest);
	    });
  },

  addAll: function(eventID, guests, callback) {
    for (var i=0; i < guests.length; i++) {
    	guests[i].EventId = eventID;
    }

    Guest
	    .bulkCreate(guests)
	    .then(function(newGuests) {
	  	  callback(newGuests);
	    });
  }
};