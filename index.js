import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://taskmanager-72c53-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)  // Inicializamos la app con nuestra BD firebase
const database = getDatabase(app)   // Recuperamos la referencia a la BD
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldElement = document.getElementById("input-field")
const addButtonElement = document.getElementById("add-button")
const shoppingListElement = document.getElementById("shopping-list")

onValue(shoppingListInDB, function(snapshot) {
    
    if(snapshot.exists()){

        let itemsArray = Object.entries(snapshot.val())

        clearShoppingListElement()
    
        for(let i = 0; i < itemsArray.length; i++){
            appendItemToShoppingListElement(itemsArray[i])
            //console.log(itemsArray[i])
        }
    }else{
        shoppingListElement.innerHTML = "No hay nada que mostrar... todavía"
    }
    
})

document.getElementById('input-field').addEventListener('keydown', function(e) {
    let inputValue = inputFieldElement.value
    
    if (e.key === 'Enter') {  // Si se presiona Enter...
        if(inputValue != ""){
            push(shoppingListInDB, inputValue)
        }else{
            console.log("InputBox vacío. Elemento no agregado!")
        }
    
      clearInputFieldElement()
    }
  });

addButtonElement.addEventListener("click", function(){
    let inputValue = inputFieldElement.value

    if(inputValue != ""){
        push(shoppingListInDB, inputValue)
    }else{
        console.log("InputBox vacío. Elemento no agregado!")
    }

    clearInputFieldElement()

    //console.log(`${inputValue} agregado a la BD`)
    //appendItemToShoppingListElement(inputValue)
})

function clearInputFieldElement(){
    inputFieldElement.value = ""
}

function appendItemToShoppingListElement(item){
    //shoppingListElement.innerHTML += `<li>${itemValue}</li>`
    let itemID = item[0]
    let itemValue = item[1]

    let newElement = document.createElement("li")

    newElement.textContent = itemValue
    newElement.addEventListener("click", function(){
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
    shoppingListElement.append(newElement)

}

function clearShoppingListElement(){
    shoppingListElement.innerHTML = ""
}

function deleteItemFromShoppingList(ID){
    console.log(ID)
}
