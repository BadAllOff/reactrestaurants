// Actions Section - eventually it will be in the separate file

// Actions - It's just a basic Object
// var Actions = new _.extend({}, {
import AppDispatcher from 'app_dispatcher'
import Constants from 'constants'

class Actions {
    // Static method calls are made directly on the class and
    // are not callable on instances of the class.
    // Static methods are often used to create utility functions.
    static addComment(params) {
        AppDispatcher.dispatch({
            actionType: Constants.ADD_COMMENT,
            comment: params
        });
    }
}
export default Actions;