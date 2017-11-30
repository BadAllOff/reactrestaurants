// file extension '.es6' is the hint to sprockets that in fact
// it needs to run this file through the babel transpiler.
// One of the nice things about working with ES6 is that you start to explcitly
// define what your dependencies are for different classes in you application.

//Now we don't have global vars

// now when Actions is the class, we can't reference to it as a function
// we need an Instance of that class
//
// let commentActions = new Actions();

import CommentStore from 'stores/comment_store';
import Actions from 'actions';

window.Store = new CommentStore();
window.Actions = Actions;
