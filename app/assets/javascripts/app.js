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
    //
    var action = payload.actionType;
    switch(action) {
        //case of our action names
        case Constants.ADD_COMMENT:
            Store.addComment(payload.comment);
            break;
        default:
        // NO_OP
    }
});