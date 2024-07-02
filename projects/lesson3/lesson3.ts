
let myarr: (string|number)[] = ['Hoang', 69];
myarr.push('Handsome');
console.log(myarr);

let pro: {
    name: string,
    age: number,
    address: string,
    phone: number,
    identity: string,
    lucky: number,
    floor: number,
    salary: number
}= {
    name: 'Hoang',
    age: 21,
    address: 'hhh',
    phone: 11111222,
    identity: 'handsome',
    lucky: 80,
    floor: 4,
    salary: 4000
};

// pro.home = 'Hanoi'

console.log(pro.age)

enum API_STATUS {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

let a1 = API_STATUS.FULFILLED
let a2 = API_STATUS.REJECTED

console.log("a1 = ", a1, " a2 = ", a2);

