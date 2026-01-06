// определение элементов и определение обработчиков

const formTag=document.forms.INFO;

const devsField=formTag.elements.devs;
devsField.addEventListener('focusout',checkDevs,false);

const sitenameField=formTag.elements.sitename;
sitenameField.addEventListener('focusout',checkSitename,false);

const urlpathField=formTag.elements.urlpath;
urlpathField.addEventListener('focusout',checkUrlpath,false);

const datetimeField=formTag.elements.datetime;
datetimeField.addEventListener('focusout',checkDatetime,false);

const amountpeopleField=formTag.elements.amountpeople;
amountpeopleField.addEventListener('focusout',checkAmountpeople,false);

const emailuserField=formTag.elements.emailuser;
emailuserField.addEventListener('focusout',checkEmailuser,false);

const catalogField=formTag.elements.catalog;
catalogField.addEventListener('click',checkCatalog,false);

const publishField=formTag.elements.Publish;
for (const radio of publishField) {
  radio.addEventListener('change', checkPublish);
}

const checkboxesField=formTag.elements.checkboxes;
checkboxesField.addEventListener('change',checkcheckboxes,false);

const articleField=formTag.elements.article;
articleField.addEventListener('focusout',checkarticle,false);

formTag.addEventListener('submit',submitForm,false);


// Объявление функций

function showError(error,errorMessage){
    error.textContent = errorMessage;
    error.style.color="red"
}

function checkDevs(){
const value=devsField.value;
let error = document.querySelector('.Error1')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
    showError(error,errorMessage)
    return false;
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
    showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkSitename(){
const value=sitenameField.value;
let error = document.querySelector('.Error2')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkUrlpath(){
const value=urlpathField.value;
let error = document.querySelector('.Error3')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value.length>30){
    let errorMessage ="Поле не может больше 30 символов"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkDatetime(){
const value=datetimeField.value;
let error = document.querySelector('.Error4')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value.length>10){
    let errorMessage ="Поле не может больше 10 символов"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkAmountpeople(){
const value=amountpeopleField.value;
let error = document.querySelector('.Error5')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value.length>10){
    let errorMessage ="Поле не может больше 10 символов"
showError(error,errorMessage)
    return false;
}
else if (isNaN(value)){
    let errorMessage ="Поле не может быть текстом"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkEmailuser(){
const value=emailuserField.value;
let error = document.querySelector('.Error6')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value.length>55){
    let errorMessage ="Поле не может быть больше 55 символов"
showError(error,errorMessage)
    return false;
}
else if (!value.includes("@")||(!value.endsWith(".com")&&!value.endsWith(".by")&&!value.endsWith(".ru"))){
    let errorMessage ="Поле не содержит '@' или не заканчивается на  '.com','.ru','.by'"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkCatalog(){
const value=catalogField.value;
let error = document.querySelector('.Error7')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value==3){
    let errorMessage ="Опция 'Бытовая техника' не валидное значение"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkPublish(){
const value=publishField.value;
let error = document.querySelector('.Error8')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value==3){
    let errorMessage ="Опция 'VIP' не валидное значение"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkcheckboxes(){
const value=checkboxesField.value;
let error = document.querySelector('.Error9')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (checkboxesField.checked==false){
    let errorMessage ="Чекбокс не может быть пустым"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

function checkarticle(){
const value=articleField.value;
let error = document.querySelector('.Error10')
if(value===""){
    let errorMessage ="Поле не может быть пустым"
showError(error,errorMessage)
    return false;
}
else if (value.length>100){
    let errorMessage ="Поле не может содержать более 100 символов"
showError(error,errorMessage)
    return false;
}
else{
    error.textContent = "";
    error.style.color=""
    return true;
}
}

// объявление сабмит формы

function submitForm(event){

    let count =0;

    if(!checkarticle()){
        articleField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkcheckboxes()){
        checkboxesField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkPublish()){
        publishField[0].focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkCatalog()){
        catalogField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkEmailuser()){
        emailuserField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkAmountpeople()){
        amountpeopleField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkDatetime()){
        datetimeField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkUrlpath()){
        urlpathField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkSitename()){
        sitenameField.focus()
        // event.preventDefault()
        ++count;
    }

    if(!checkDevs()){
        devsField.focus()
        // event.preventDefault()
        ++count;
    }

    if(count>0){
      event.preventDefault()  
    }
    
}