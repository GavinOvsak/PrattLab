
//_ = require('lodash');

pl.clear();
pl.clf();

mat1 = [[1, 2],[3, 4]];
mat2 = [[1, 2],[5, 6]];
vector = [1, 5, 6, 10, 30, -10];

product = mat1.mult(mat2);
console.log(product);

array3 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log(array3.min());
console.log(array3.max());
console.log(vector.mean());

console.log(array3.cropX(0, 1).cropY(0, 1));

// pl.plot(mat1[0], mat1[1], 'k-',
// 	mat2[0], mat2[1], 'k-');

// line1 = pl.line(mat1[0], mat1[1]);
// line2 = pl.line(mat2[0], mat2[1]);

// line1.legend('');

// pl.plot(line1, line2);

t = pl.array(0,0.1,10);
y = t.map(function(x) {
	return 2 * x * x;
});

pl.plot(t, y);



//console.log(pl.array(0,0.1,1.2));

