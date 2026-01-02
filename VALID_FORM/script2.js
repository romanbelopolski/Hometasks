const formTag=document.forms.INFO;
formTag.addEventListener('focusout',validateField,false);
formTag.addEventListener('change',validateField2,false);
formTag.addEventListener('submit',submitForm,false);


function checkTextField(el,error,value){
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}

function checkDateField(el,error,value){
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value.length>10){
    let errorMessage ="Поле не может больше 10 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}

function checkNumberField(el,error,value){
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value.length>10){
    let errorMessage ="Поле не может больше 10 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else if (isNaN(value)){
    let errorMessage ="Поле не может быть текстом"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}
function checkEmailField(el,error,value){
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value.length>55){
    let errorMessage ="Поле не может быть больше 55 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else if (!value.includes("@")||!value.endsWith(".com")||!value.endsWith(".by")||!value.endsWith(".ru")){
    let errorMessage ="Поле не содержит '@' или не заканчивается на  '.com','.ru','.by'"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}

function checkCatalogField(el,error,value){
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value==3){
    let errorMessage ="Опция 'Бытовая техника' не валидное значение"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}


function checkRadioField(el,error,value){
    error = document.querySelector('.Error8')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value==3){
    let errorMessage ="Опция 'VIP' не валидное значение"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}

function checkCheckboxField(el,error,value){
    error = document.querySelector('.Error9')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (el.checked==false){
    let errorMessage ="Чекбокс не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}

function checkArticleField(el,error,value){
    error = document.querySelector('.Error10')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
}
else if (value.length>100){
    let errorMessage ="Поле не может содержать более 100 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
}
else{
    error.textContent = "";
    error.style.color=""
}
}




function validateField(event){
const el = event.target;
let error = event.target.nextElementSibling;
const value=el.value;
console.log(el.name)
console.log(el.type)
console.log(el.checked)
console.log(el.value)

if(el.name=="devs"||el.name=="sitename"||el.name=="sitename"||el.name=="urlpath"){
    checkTextField(el,error,value)
}
else if(el.name=="datetime"){
    checkDateField(el,error,value)
}
else if(el.name=="amountpeople"){
    checkNumberField(el,error,value)
}
else if(el.name=="emailuser"){
    checkEmailField(el,error,value)
}
else if(el.name=="catalog"){
    checkCatalogField(el,error,value)
}
else if(el.name=="Publish"){
    checkRadioField(el,error,value)
}
else if(el.name=="checkboxes"){
    checkCheckboxField(el,error,value)
}
else if(el.name=="article"){
    checkArticleField(el,error,value)
}
}

function validateField2(event){
const el = event.target;
let error = event.target.nextElementSibling;
const value=el.value;
console.log(el.name)
console.log(el.type)
console.log(el.checked)
console.log(el.value)


if(el.name=="catalog"){
    checkCatalogField(el,error,value)
}
else if(el.name=="Publish"){
    checkRadioField(el,error,value)
}
}

// function submitForm(event){
// const formTag=document.forms.INFO;

// const devsField=formTag.elements.devs;
// const devsValue=devsField.value;
// console.log(devsField,"  ",devsValue)
// checkTextField(devsField,devsValue)


// const sitenameField=formTag.elements.sitename;
// const sitenameValue=sitenameField.value;
// checkTextField(sitenameField,error,sitenameValue)

// const urlpathField=formTag.elements.urlpath;
// const urlpathValue=urlpathField.value;
// checkTextField(urlpathField,error,urlpathValue)

// const datetimeField=formTag.elements.datetime;
// const datetimeValue=datetimeField.value;
// checkDateField(datetimeField,error,datetimeValue)

// const amountpeopleField=formTag.elements.amountpeople;
// const amountpeopleValue=amountpeopleField.value;


// const emailuserField=formTag.elements.emailuser;
// const emailuserValue=emailuserField.value;


// const catalogField=formTag.elements.catalog;
// const catalogValue=catalogField.value;


// const PublishField=formTag.elements.Publish;
// const PublishValue=PublishField.value;


// const checkboxesField=formTag.elements.checkboxes;
// const checkboxesValue=checkboxesField.checked;


// const articleField=formTag.elements.article;
// const articleValue=articleField.value;


// }