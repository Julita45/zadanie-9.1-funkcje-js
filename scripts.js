function getTriangleArea(a, h) {
	if (a && h > 0) {
		return a * h / 2;
	} else {
		return 'Incorrect data';
	}
} 

var triangle1Area = getTriangleArea(0, 15);
console.log(getTriangleArea(0, 15));

var triangle2Area = getTriangleArea(5, 4);
console.log(getTriangleArea(5, 4));

var triangle3Area = getTriangleArea(7, 20);
console.log(getTriangleArea(7, 20));