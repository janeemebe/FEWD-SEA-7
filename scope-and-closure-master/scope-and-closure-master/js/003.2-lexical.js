// Example modified from
// You Don't Know JS: Scope & Closure

function foo(a) {

    var b = a * 2;

    function bar(c) {
        // shadow the variable a here
        var a = 10;
        console.log( a, b, c );
        // reassign the variable b here
        b = 77;
    }

    bar(b * 3);
    console.log(a, b);
}

foo( 2 );