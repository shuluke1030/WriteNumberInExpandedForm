function expandedForm(num) {
    let arr = Array.from(String(num), Number)
    let resultArr = [];
    let i = 0;
    while(i < arr.length){
        let num = arr[i] * Math.pow(10, arr.length - i - 1)
        i+=1
        if(num > 0){
           resultArr.push(num); 
        }
    }
    let result = resultArr.join(' + ');
    return result;
}
console.log(expandedForm(70304))