var Constants = {
    CHANGE_EVENT: 'change',
    ADD_COMMENT: 'comments.add'
}

// Store responsible to inform the universe of components
// that there is in fact a change.
// It removed from react components and lives in this Store concept
// Thats why we have addChangeListener, removeChangeListener methods.
// Components will add\remove themselves ass listeners to the Store
// Likewise, the Store needs a method for emitting those changes
// to everybody that cares - emitChange

var Store = new _.extend({}, EventEmitter.prototype, {
    _comments: [],

    addComment: function(comment) {
        this._comments[comment.id] = comment;
    },

    comments: function () {
        return this._comments;
    },

    // Event emmiter - central point of messaging

    addChangeListener: function (callback) {
        this.on(Constants.CHANGE_EVENT, callback)
    },
    
    removeChangeListener: function (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback)
    },
    
    emitChange: function () {
        this.emit(Constants.CHANGE_EVENT);
    }
});


// In Flux application there should be only one central dispatcher(controller)
var AppDispatcher = new Flux.Dispatcher();

// This is where we "marry" the actions, that our app can perform
// with the date, that is going to be changed
AppDispatcher.register(function (payload) {
    // payload unwrapped, and we got our actionType, which like is our header
    var action = payload.actionType;
    switch(action) {
        //case of our action names
        case Constants.ADD_COMMENT:
            // comment part of the payload, gets passed to the store as a comment
            Store.addComment(payload.comment);
            // emitChange - will tell the world that in fact there is
            // a change in the Store
            // This emitChange, will emit the CHANGE_EVENT
            // and by doing so, the changeListeners are going to fire
            // whatever callbacks they have.
            Store.emitChange();
            break;
        default:
        // NO_OP
    }
});

// Actions Section - eventually it will be in the separate file

// Actions - It's just a basic Object
var Actions = new _.extend({}, {
    // this object has a function addComment, which expects some params
    addComment: function (params) {
        // addComment function divided into to sections
        AppDispatcher.dispatch({
            //actionType - which is going to be relied upon over
            // in 'payload.actionType' in AppDispatcher
            // as a way of sending different messages to the store
            actionType: Constants.ADD_COMMENT,
            // params - get passed in as a comment
            comment: params
        });
        // And the whole thing will be send as a 'payload'
    }
});