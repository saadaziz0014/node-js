const rect = require('./reactangle');

function solver(l,b){
    console.log(`Solution for the value of l = ${l} and b = ${b}`);
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("Error: ",err.message);
        }
        else{
            console.log(`Area = ${rectangle.area()} and Perimeter = ${rectangle.perimeter()}`);
        }
    });
}

solver(5,1);
solver(0,2);
solver(3,-8);


