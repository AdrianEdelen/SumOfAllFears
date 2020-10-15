document.getElementById("click").addEventListener("click", () => {
	let kNum = parseInt(document.getElementById("kNum").value);
	//let arrInp = parseInt(document.getElementById("arrInp").value);
	let arr = new Array;
	arr = [10, 15, 3, 7];
	if (checkNum(arr, kNum) === true) {
		document.getElementById("result").innerHTML = "your number (" + kNum +
			"), does have numbers in the array that equal it.";
	} else {
		document.getElementById("result").innerHTML = "your number (" + kNum +
			"), does not have numbers in the array that equal it.";
	}
})

//TODO
//get user inputs for 4 each numbers for our array input

//TODO
// option to randomize each of the inputs for the array. 

//TODO option for a randomized K number


function checkNum(arr, kNum) {
	let trueVal = -1
	for (let i = 0; i < arr.length; i++) {
		trueVal = arr.indexOf(kNum - arr[i]);
	}
	if (trueVal != -1) {
		return true;
	} else {
		return false;
	}
}

//function makeArr(arrInp) {
//	let arr = new Array;
//	for (let i = 0; i < arrInp; i++) {
//		arr.push(Math.random() * (11 - 1) + 1);
//	}
//	return arr;
//}