class ObjStorageClass{
    
    constructor(){
    this.objStorage ={}}



    addValue(key,value){
        this.objStorage[key]=value;
    };

    getValue(key){
       return this.objStorage[key]
    };

    eleteValue=function(key){
        if(key in this.objStorage){
            delete this.objStorage[key]
            return true

        }else{return false}
    }


    getKeys(){
     return  Object.keys(this.objStorage);
    };
}



const drinkStorage = new ObjStorageClass()


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
