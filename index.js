// function fibonacci(num)  {
//     let a = 1;
//         b = 1;
//       for (let i = 3 ; i <= num ; i++){
//         [a,b] = [b,a + b];
//     }
//     return b; 
// }

// console.log(fibonacci(8));  

let k= +prompt( 'Введите читсло ?' );

function fibonacci(k) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= k; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log( fibonacci( k ) );