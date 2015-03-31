var Dispatcher = require('flux').Dispatcher;
var Constants = require('../Constants/DataConstants');
var assign = require('object-assign');

var DataDispatcher = assign(new Dispatcher(), {

    handleServerAction: function(action) {
        var payload = {
            source: Constants.ActionSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction: function(action) {
        var payload = {
            source: Constants.ActionSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }

});

module.exports = DataDispatcher;