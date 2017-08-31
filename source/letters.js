'use strict';

const deleteAllRepeated = (x, n, s) => s.indexOf(x) === s.lastIndexOf(x);

const deleteAllExceptFirst = (x, n, s) => s.indexOf(x) === n;

const deleteAllExceptLast = (x, n, s) => s.lastIndexOf(x) === n;

const funcMap = new Map([
	[undefined, deleteAllRepeated],
	[true, deleteAllExceptFirst],
	[false, deleteAllExceptLast],
]);

const letters = (str, deleteExceptFirst) => 
	str.split("").filter(funcMap.get(deleteExceptFirst)).join("");
