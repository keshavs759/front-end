let submitBtn = document.querySelector('button');
let form = document.querySelector('form');
let name = document.querySelector("#name")
let address = document.querySelector("#address")
let movies = document.querySelector("#movies")
let like = document.querySelector("#like")
let hate = document.querySelector("#hate")

form.addEventListener("submit", e=>{
    console.warn(name.value)
    console.warn(address.value)
    console.warn(movies.value)
    console.warn(like.chec)
    console.warn(hate.value)


    e.preventDefault();
})