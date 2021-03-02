const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'steak', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"

const newTacoOBJ = (tacoOBJ, id) => {
  let newTaco= {...tacoOBJ, name: "changed", id: id}
  console.log(newTaco)
}
newTacoOBJ(taco2,4)



// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)

const htmlTacos = (tacoOBJ) => {
  const {name, id} = tacoOBJ
  return`
    <>
    <p> ${id}: ${name}</p>
    </>
  `
}
console.log(htmlTacos(taco))



// write a function that takes an tacoOBJ and return formatted price with
// .00 

const tacoPrice = (tacoOBJ) => {
  const { name, price } = tacoOBJ
  return(`{${name} taco: ${price}.00}`)
}
console.log(tacoPrice(taco2))



// create a new array where all of the prices is formatted with .00

const pricesArr = tacos.map(taco => {
  return (`${taco.price}`)
})
console.log(pricesArr)



// write a function that takes an array and logs each item in the array
// hint forEach

tacos.forEach(taco => console.log(taco)); // This logs out each object in object form.



// use the find method to return the object with id:1

const findOB = tacos.find( (taco) => {
  if(taco.id === 1){
    return(`${taco.name}`)
  } 
})
console.log(findOB)     // returns whole object with id:1



// return a new array with all prices greater than 19

let filterTaco = tacos.filter((t) => t.price > 19)
let priceyTacos = filterTaco.map((taco) => {
  return(`${taco.name}`)
})
console.log(filterTaco)      // This indeed returns an array of objects that cost less than 19



// return a new array with a 'about' key where it is a combo of
// name price and about

newTaco
                        



///CRUD
// don't change tacos array or change objects
// can hard code data (Don't need to get it from the users)
// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 









// bonus use reduce to return the sum of prices in tacos array
// bonus do in rails
// bonus create you own