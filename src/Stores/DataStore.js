var AppDispatcher = require('../Dispatchers/DataDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../Constants/DataConstants');
var assign = require('object-assign');
// Facebook style store creation.
var DataStore = assign({}, EventEmitter.prototype, {

    // public methods used by Controller-View to operate on data
    getAll: function() {
        return {
            title: "Flux React Boilerplate",
            tagline: "Flux React Now!",
            welcomeMessage: "Welcome to your new flux app!"
        };
    },
    // Allow Controller-View to register itself with store
    addChangeListener: function(callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback);
    },
    // triggers change listener above, firing controller-view callback
    emitChange: function() {
        this.emit(Constants.CHANGE_EVENT);
    },



    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        console.log(payload);

        switch(action.type) {

           case Constants.ActionTypes.SOME_ACTION:
                // do something to DataStore.property
                DataStore.emitChange();
                break;
            // add more cases for other actionTypes...
        }

    })

});

module.exports = DataStore;
