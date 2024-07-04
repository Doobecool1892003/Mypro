let users = [
    {name:'Hoang', age: 18, salary: 1400},
    {name:'Huy',   age: 21, salary: 1500},
    {name:'Hoa',   age: 19, salary: 1600},
    {name:'Hoang', age: 30, salary: 10000},
];

let count = 0;

for(var i = 0; i < users.length; i++){
    if(users[i].salary > 0) {
        count += users[i].salary;
    }
}

console.log(count);