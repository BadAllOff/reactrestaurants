// Actions Section - eventually it will be in the separate file

// Actions - It's just a basic Object
// var Actions = new _.extend({}, {
import AppDispatcher from 'app_dispatcher'
import Constants from 'constants'
import Api from 'api';

class Actions {
    // Static method calls are made directly on the class and
    // are not callable on instances of the class.
    // Static methods are often used to create utility functions.
    static addComment(params) {
        Api.post('/restaurants/1/comments', {
            comment: params
        }).then( resp => {
            return resp.json();
        }).then( comment => {
            AppDispatcher.dispatch({
                actionType: Constants.ADD_COMMENT,
                comment: params
            });
        });
    }

    static setComments(params) {
        AppDispatcher.dispatch({
            actionType: Constants.SET_COMMENTS,
            comments: params
        });
    }
}
export default Actions;