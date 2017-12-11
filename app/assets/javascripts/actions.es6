// Actions Section - eventually it will be in the separate file

// Actions - It's just a basic Object
// var Actions = new _.extend({}, {
import AppDispatcher from 'app_dispatcher'
import Constants from 'constants'
import Api from 'api';

class Actions {

    constructor(restaurantId) {
        this.restaurantId = restaurantId
    }

    setComments(params) {
        AppDispatcher.dispatch({
            actionType: Constants.SET_COMMENTS,
            comments: params
        });
    }

    upvoteComment(comment) {
        Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then( resp => {
            return resp;
        }).then( comment => {
            AppDispatcher.dispatch({
                actionType: Constants.UPVOTE_COMMENTS,
                comment: comment
            });
        });
    }

    downvoteComment(comment) {
        Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/downvote`).then( resp => {
            return resp;
        }).then( comment => {
            AppDispatcher.dispatch({
                actionType: Constants.DOWNVOTE_COMMENTS,
                comment: comment
            });
        });
    }

    // Static method calls are made directly on the class and
    // are not callable on instances of the class.
    // Static methods are often used to create utility functions.
    addComment(params) {
        Api.post(`/restaurants/${this.restaurantId}/comments`, {
            comment: params
        }).then( resp => {
            return resp;
        }).then( comment => {
            AppDispatcher.dispatch({
                actionType: Constants.ADD_COMMENT,
                comment: params
            });
        });
    }
}
export default Actions;