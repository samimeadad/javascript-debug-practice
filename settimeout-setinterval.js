/* setTimeout( () => {
    console.log( 2 );
}, 1000 );
setTimeout( () => {
    console.log( 3 );
}, 1000 );
setTimeout( () => {
    console.log( 1 );
}, 1000 );
console.log( 4 );
console.log( 5 );
console.log( 6 ); */

setInterval( () => {
    const time = new Date();
    document.getElementById( 'time' ).innerHTML = time;
}, 1000 );