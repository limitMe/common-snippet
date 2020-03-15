// `let` has block scope, making js closure more like swift closure.
// before es6, js closure gets massy with function scope, especially within loops

// ----- compare two definitions of a function -----
function old_style_func() {
    // dynamic context, can be bound to a new context with bind()
    // arguments could be captured using arguments
    // hoisting
}

// temporal dead zone 临时死区
// cannot be redefined
// inherits its context from the surrounding scope
// cannot be used as a constructor
// arguments can't be captured unless you update the parameter list
const sexy_style_func = () => 'return value'
// ----- end compare two definitions of a function -----