function repeat(fn, n){
    console.log(fn,n);
    for(let i = 0; i <= n; i++){
        fn();
    }
}
repeat(hello, 5);
repeat(goodbye, 5);

function hello(){   
    console.log('Hello World');
}
function goodbye(){
    console.log('Goodbye World');
}
