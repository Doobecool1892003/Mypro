type Htype = number | string | object | boolean;

function addNumberOrString (a: Htype, b: Htype ){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log("check >>: ", addNumberOrString('Hoang dz', 'jss'));

let discount: number;
let itemCount = 11;

if(itemCount > 0  && itemCount <= 5) {
    discount = 5;
}else if(itemCount > 5 && itemCount <= 10) {
    discount = 10;
}else {
    discount = 15;
}

console.log(`You got ${discount}% discount.`);
