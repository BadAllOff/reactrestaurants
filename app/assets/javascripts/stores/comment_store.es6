// Store responsible to inform the universe of components
// that there is in fact a change.
// It removed from react components and lives in this Store concept
// Thats why we have addChangeListener, removeChangeListener methods.
// Components will add\remove themselves ass listeners to the Store
// Likewise, the Store needs a method for emitting those changes
// to everybody that cares - emitChange

// var Store = new _.extend({}, EventEmitter.prototype, {
import AppDispatcher from '../app_dispatcher'
import Constants from '../constants'

class CommentStore extends EventEmitter {
    constructor() {
        super();
        this._comments = [];

        // This is where we "marry" the actions, that our app can perform
        // with the date, that is going to be changed
        // AppDispatcher.register(function (payload) {
        AppDispatcher.register((payload) => {
            // payload unwrapped, and we got our actionType, which like is our header
            switch(payload.actionType) {
                //case of our action names
                case Constants.ADD_COMMENT:
                    // comment part of the payload, gets passed to the store as a comment
                    // commentsStore.addComment(payload.comment);
                    // this - refers to outer class structure
                    this.addComment(payload.comment);
                    // emitChange - will tell the world that in fact there is
                    // a change in the Store
                    // This emitChange, will emit the CHANGE_EVENT
                    // and by doing so, the changeListeners are going to fire
                    // whatever callbacks they have.
                    // commentsStore.emitChange();
                    this.emitChange();
                    break;
                default:
                // NO_OP
            }
        });
    }

    addComment (comment) {
        this._comments[comment.id] = comment;
        console.log(this._comments);
    }

    comments () {
        return this._comments;
    }

    // Event emmiter - central point of messaging
    addChangeListener (callback) {
        this.on(Constants.CHANGE_EVENT, callback)
    }

    removeChangeListener (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback)
    }

    emitChange () {
        this.emit(Constants.CHANGE_EVENT);
    }
}

export default CommentStore;