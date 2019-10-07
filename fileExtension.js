function getFileExtension3(filename){
	return filename.slice((filename.lastIndexOf(".")-1>>>0)+2);
}
console.log(getFileExtension3(''));
console.log(getFileExtension3('filename'));
console.log(getFileExtension3('filename.txt'));
console.log(getFileExtension3('hiddenfile'));
console.log(getFileExtension3('filename.with.many.points.ext'));