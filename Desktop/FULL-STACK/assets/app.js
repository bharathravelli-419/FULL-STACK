var arr =[1,2,3,4,5]
arr.splice(1,1)
arr.unshift(6)
console.log(arr)
var new_arr =[]
new_arr = arr.filter((element,index)=>{
    if(element%2==0) return true
})

console.log(new_arr)