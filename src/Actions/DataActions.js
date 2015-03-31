var AppDispatcher = require('../dispatchers/DataDispatcher');
var Constants = require('../constants/DataConstants');

/* Server based events */

module.exports = {

    // Create Actions Here:
    someAction: function(data) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.SOME_ACTION,
            data: data
        });
    }
};
