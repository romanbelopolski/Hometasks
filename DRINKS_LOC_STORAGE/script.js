function ObjStorageFunc(storageItems){
    this.storageItems = storageItems

        if (!localStorage.getItem(this.storageItems)) {
        localStorage.setItem(this.storageItems, JSON.stringify({}));
    }



    this.addValue=function(key,value){
        let storage = JSON.parse(localStorage.getItem(this.storageItems));
        storage[key] = value;
        localStorage.setItem(this.storageItems, JSON.stringify(storage));
    };

    this.getValue=function(key){
    let storage = JSON.parse(localStorage.getItem(this.storageItems));
    return storage[key]
    };

    this.deleteValue=function(key){
        let storage = JSON.parse(localStorage.getItem(this.storageItems));
        if(key in storage){
            delete storage[key]
            localStorage.setItem(this.storageItems, JSON.stringify(storage));
            return true

        }else{return false}
    }
    this.getKeys=function(){
    let storage = JSON.parse(localStorage.getItem(this.storageItems));
     return  Object.keys(storage);
    };
}



const drinkStorage = new ObjStorageFunc("drinks")
const dishesStorage = new ObjStorageFunc("dishes")


function setValue() {
  let drinkname,alcohol,receipt;
  drinkname = prompt("Введите название напитка");
  if(drinkname !==null && drinkname !==""){
  alcohol = confirm("ОК - если напиток алкогольный,Отмена - если напиток не алкогольный");
  do { receipt = prompt("Введите рецепт напитка")
  } while(receipt==null || receipt=="");

  drinkStorage.addValue(drinkname,{alcohol,receipt});
}
  
}

function readValue(){
   let listValue = drinkStorage.getKeys();
   if(listValue.length==0){
    return alert("Напитков нет")
   }
   else{return alert(listValue)}
}

function getValue(){
    let key = prompt("Введите название напитка")
    if (key !==null&& key!==''){
    let descriptionDrink = drinkStorage.getValue(key);
    let alc;
    if (descriptionDrink.alcohol){
        alc = "алкогольный"
    }
    else{
        alc = 'не алкогольный'
    }
    let text = 
`напиток: ${key}
алкогольный: ${alc}
рецепт приготовления: ${descriptionDrink.receipt}`
    return alert(text)}
}

function delValue(){
    let key;
    key = prompt("Введите название напитка");

    if(key!==null && key !==''){
    let messageValue = drinkStorage.deleteValue(key);
    if(messageValue){
        return alert("Напиток удален")
    }
    else{
        return alert("такого напитка нету в системе")
    }
}
}



function setValueDish() {
  let dishname,receipt;
  dishname = prompt("Введите название блюда");
  if (dishname !== null && dishname !== "") {
    do {
      receipt = prompt("Введите рецепт блюда");
    } while (receipt == null || receipt == "");
    dishesStorage.addValue(dishname, { receipt });
  }
}


function readValueDish(){
   let listValue = dishesStorage.getKeys();
   if(listValue.length==0){
    return alert("Блюд нет")
   }
   else{return alert(listValue)}
}

function getValueDish(){
    let key = prompt("Введите название блюда")
    if (key !==null&& key!==''){
    let descriptionDishes = dishesStorage.getValue(key);

 
    let text = 
`Блюдо: ${key}
рецепт приготовления: ${descriptionDishes.receipt}`
    return alert(text)}
}

function delValueDish(){
    let key;
    key = prompt("Введите название блюда");

    if(key!==null && key !==''){
    let messageValue = dishesStorage.deleteValue(key);
    if(messageValue){
        return alert("Блюдо удалено")
    }
    else{
        return alert("такого блюда нету в системе")
    }
}
}