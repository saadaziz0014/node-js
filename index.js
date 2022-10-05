const rect = require('./reactangle');

function solver(l,b){
    if(l <= 0 || b <= 0){
        console.log("Value for both l and b must be geater than zero");
    }
    else{
        console.log(`Area for length ${l} and breadth ${b} is : ${rect.area(l,b)} and Perimeter is : ${rect.perimeter(l,b)} `);
    }
}

solver(5,1);
solver(0,2);
solver(3,-8);


