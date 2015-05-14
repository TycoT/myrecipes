

var array = [1,2,3,4];

console.log(sum1(array));
console.log(sum2(array));
console.log(sum3(array, 0, 0));

function sum1(arr){

    var ans = 0;
    for(var i = 0; i < arr.length; i++){
        ans += arr[i];
    }
    
    return ans;
}

function sum2(arr){
    var ans = 0;
    var i = 0;
    while(i < arr.length){
     ans += arr[i];
     i++;   
    }
    
    return ans;
}

function sum3(array, index, val){
    var ans = val;
    var i = index;
    var arr = array;
    
    if(i < arr.length){
        ans += arr[i]
        i++;
        return sum3(arr,i,ans);
    }
    
    return ans;
}