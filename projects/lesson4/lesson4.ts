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
