var keyMirror = require('react/lib/keyMirror');

module.exports = {

    CHANGE_EVENT: 'change',

    ActionTypes: keyMirror({
        SOME_ACTION: null
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};