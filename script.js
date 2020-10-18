function displayNumbers(){
  num1 = document.getElementById("num1").value
  num2 = document.getElementById("num2").value
  document.getElementById("forDisplay").innerHTML = "Your chosen numbers are "+num1+" and "+num2
}
function isFactor(num, factor){

	if(num % factor == 0) return true
	else return false

}
// testing isFactor
//console.log("Isfactor for 10 and 3 returns "+isFactor(10,3))
//console.log("Isfactor for 10 and 5 returns "+isFactor(10,5))
function showArray(array){
	document.getElementById("forDisplay").innerHTML = array.join(' ')
}
//testing showArray
//var cars = ["Saab","Volvo","BMW"];
//var morecars = ["sAudi","Lambo","Subaru"];
//showArray(morecars)

function addArray(array){
	return sum = array.reduce(function(a, b){
        return a + b;
    }, 0);	
}
//testing addArray
//var nums = [1,2,3,4,5]
//console.log(addArray(nums))
function getFactors(num){

	var arr = []
	const root = Math.sqrt(num)

	for(index = 1; index < num; index++){
		if(isFactor(num,index)){
			arr.push(index)
		}
	}
	return arr
}

console.log("Hey")
function amicableNums(){
	console.log("Hey")
  num1 = document.getElementById("num1").value
  num2 = document.getElementById("num2").value

  console.log(addArray(getFactors(num1)))
  if((addArray(getFactors(num1)) == num2) && (addArray(getFactors(num2)) == num1)){
  	document.getElementById("forDisplay").innerHTML = 
  					"The numbers "+num1+" and "+num2+" are amicable!"
  }
  else{
  	document.getElementById("forDisplay").innerHTML = 
  					"Unfortunately, the numbers "+num1+" and "+num2+
  					" aren't amicable."
  }
}
console.log("Hey")
document.getElementById("displaynums").addEventListener("click", amicableNums);
console.log("Hey")