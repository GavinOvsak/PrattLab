
//_ = require('lodash');

//clear();
//clf();

array1 = [[1, 2],[3, 4]];
array2 = [[1, 2],[3, 4]];

product = array1.mult(array2);

vector = [1, 5, 6, 10, 30, -10];

//console.log(array2.mult(5))

pl.plot(array1[0], array1[1]);

//pl.plot(pl.line(array1[0], array1[0]));

console.log(square(vector));
console.log(square2(vector));


function square(a) {
	return a.mult(a);
}

//or

function square2(a) {
	return a.map(function(x){
		return x * x;
	})
}


array3 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

// console.log(array3.min());
// console.log(array3.max());
// console.log(vector.mean());
//console.log(array3.cropX(0, 1).cropY(0, 1));

// console.log(pl.array(0, 0.3, 2));
// console.log(pl.array(1, 0.3, 2));
// console.log(pl.array(1, 2.4));
// console.log(pl.linspace(2, 100, 4));

//inspect points on plot
//inversion
//linear regression
//interp1
//mesh
//conv2
