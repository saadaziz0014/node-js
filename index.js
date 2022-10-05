const rect = {
    area: (x,y) => (x * y),
    perimeter: (x,y) => (2*(x + y))
}

function solver(l,b){
    console.log(`Area for length ${l} and breadth ${b} is : ${rect.area(l,b)} and Perimeter is : ${rect.perimeter(l,b)} `);
}

solver(5,1);