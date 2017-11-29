// file extension '.es6' is the hint to sprockets that in fact
// it needs to run this file through the babel transpiler.
// One of the nice things about working with ES6 is that you start to explcitly
// define what your dependencies are for different classes in you application.

let message = 'Hello!';

let sayHello = () => {
    alert(message)
}
