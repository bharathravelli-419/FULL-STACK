console.log(this)
let car ={
      Name:"C class",
      manufacturer:"mercedes",
    print1: function (a) {
        console.log(this)  
        console.log("car function " +a+ this.Name +" "+car.manufacturer)
      }
}
console.log(typeof car)
car.print1(' bharath ravelli ')
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(car.hasOwnProperty('Name'))