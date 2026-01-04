const formTag=document.forms.INFO;

const devsField=formTag.elements.devs;
devsField.addEventListener('focusout',checkDevsField,false);

const sitenameField=formTag.elements.sitename;
sitenameField.addEventListener('focusout',checkSitenameField,false);

const urlpathField=formTag.elements.urlpath;
urlpathField.addEventListener('focusout',checkUrlpathField,false);

const datetimeField=formTag.elements.datetime;
datetimeField.addEventListener('focusout',checkDatetimeField,false);

const amountpeopleField=formTag.elements.amountpeople;
amountpeopleField.addEventListener('focusout',checkAmountpeopleField,false);

const emailuserField=formTag.elements.emailuser;
emailuserField.addEventListener('focusout',checkEmailuserField,false);

const catalogField=formTag.elements.catalog;
catalogField.addEventListener('focusout',checkCatalogField,false);

const publishField=formTag.elements.Publish;
for (const radio of publishField) {
  radio.addEventListener('change', checkPublishField);
}

const checkboxesField=formTag.elements.checkboxes;
checkboxesField.addEventListener('change',checkcheckboxesField,false);

const articleField=formTag.elements.article;
articleField.addEventListener('focusout',checkarticleField,false);



function checkDevsField(){
const value=devsField.value;
let error = document.querySelector('.Error1')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    devsField.focus()
    devsField.blur()
    return true;
    // event.preventDefault()
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
    error.textContent = errorMessage;
    error.style.color="red"
    devsField.focus()
    devsField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkSitenameField(event){
const value=sitenameField.value;
let error = document.querySelector('.Error2')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    sitenameField.focus()
    sitenameField.blur()
    return true;
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
    error.textContent = errorMessage;
    error.style.color="red"
    sitenameField.focus()
    sitenameField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkUrlpathField(event){
const value=urlpathField.value;
let error = document.querySelector('.Error3')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    urlpathField.focus()
    urlpathField.blur()
    return true
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
    error.textContent = errorMessage;
    error.style.color="red"
    urlpathField.focus()
    urlpathField.blur()
    return true
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkDatetimeField(event){
const value=datetimeField.value;
let error = document.querySelector('.Error4')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    datetimeField.focus()
    datetimeField.blur()
    return true;
}
else if (value.length>10){
    let errorMessage ="Поле не может больше 10 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
    datetimeField.focus()
    datetimeField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkAmountpeopleField(event){
const value=amountpeopleField.value;
let error = document.querySelector('.Error5')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    amountpeopleField.focus()
    amountpeopleField.blur()
    return true;
}
else if (value.length>10){
    let errorMessage ="Поле не может больше 10 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
    amountpeopleField.focus()
    amountpeopleField.blur()
    return true;
}
else if (isNaN(value)){
    let errorMessage ="Поле не может быть текстом"
    error.textContent = errorMessage;
    error.style.color="red" 
    amountpeopleField.focus()
    amountpeopleField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkEmailuserField(event){
const value=emailuserField.value;
let error = document.querySelector('.Error6')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    emailuserField.focus()
    emailuserField.blur()
    return true;
}
else if (value.length>55){
    let errorMessage ="Поле не может быть больше 55 символов"
    error.textContent = errorMessage;
    error.style.color="red" 
        emailuserField.focus()
    emailuserField.blur()
    return true;
}
else if (!value.includes("@")||(!value.endsWith(".com")&&!value.endsWith(".by")&&!value.endsWith(".ru"))){
    let errorMessage ="Поле не содержит '@' или не заканчивается на  '.com','.ru','.by'"
    error.textContent = errorMessage;
    error.style.color="red" 
        emailuserField.focus()
    emailuserField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkCatalogField(event){
const value=catalogField.value;
let error = document.querySelector('.Error7')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    catalogField.focus()
    catalogField.blur()
    return true;
}
else if (value==3){
    let errorMessage ="Опция 'Бытовая техника' не валидное значение"
    error.textContent = errorMessage;
    error.style.color="red" 
    catalogField.focus()
    catalogField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkPublishField(event){
const value=publishField.value;
let error = document.querySelector('.Error8')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    publishField.focus()
    publishField.blur()
    return true;
}
else if (value==3){
    let errorMessage ="Опция 'VIP' не валидное значение"
    error.textContent = errorMessage;
    error.style.color="red" 
    publishField.focus()
    publishField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkcheckboxesField(event){
const value=checkboxesField.value;
let error = document.querySelector('.Error9')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    checkboxesField.focus()
    checkboxesField.blur()
    return true;
}
else if (checkboxesField.checked==false){
    let errorMessage ="Чекбокс не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red" 
    checkboxesField.focus()
    checkboxesField.blur()
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}

function checkarticleField(event){
const value=articleField.value;
let error = document.querySelector('.Error10')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    error.textContent = errorMessage;
    error.style.color="red"
    return true;
}
else if (value.length>100){
    let errorMessage ="Поле не может содержать более 100 символов"
    error.textContent = errorMessage;
    error.style.color="red"
    return true;
}
else{
    error.textContent = "";
    error.style.color=""
    return false;
}
}


formTag.addEventListener('submit',submitForm,false);

function submitForm(event){
const formTag=document.forms.INFO;

checkarticleField(event)
checkcheckboxesField(event)
checkPublishField(event)
checkCatalogField(event)
checkEmailuserField(event)
checkAmountpeopleField(event)
checkDatetimeField(event)
checkUrlpathField(event)
checkSitenameField(event)
checkDevsField(event)



}

