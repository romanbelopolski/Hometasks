const formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'dropdown',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];






function createForm(text){
let arr = text;
const forma = document.createElement("form")
createForma.method= "POST";
createForma.action= "TestForm.php"
document.body.append(createForma);
const createTable = document.createElement("table")
createTable.className="Table";
createForma.append(createTable)
const createTbody = document.createElement("tbody")
createTable.append(createTbody)

per(arr)

function createTd(text,createdTr){
let label = text;
const createTd = document.createElement("td");
createTd.textContent = label;
createdTr.append(createTd);
}
function createTr(){
    const createdTr = document.createElement("tr")
    createTbody.append(createdTr);
    return createdTr;
}

function per(arr){

   let tr = arr;
   for(let i =0;i<tr.length;i++){
    let createdTr=createTr(); 
    createTd(tr[i].label,createdTr)
    const createTd2 = document.createElement("td");
    createdTr.append(createTd2);

   if(tr[i].kind =='longtext'){
    const createInput = document.createElement("input");
    createInput.name = tr[i].name
    createInput.style.width = "453px"
    createTd2.append(createInput);
   }
   else if(tr[i].kind =='number'){

    const createInput = document.createElement("input");
    createInput.name = tr[i].name
    createInput.style.width = "80px"
    createTd2.append(createInput);
   }
    else if(tr[i].kind =='shorttext'){

    const createInput = document.createElement("input");
    createInput.name = tr[i].name
    createInput.style.width = "200px"
    createTd2.append(createInput);
   }
    else if(tr[i].kind =='dropdown'){
    const createDD=document.createElement("select")
    createTd2.append(createDD);
    for(let a=0;a<tr[i].variants.length;a++){
    const createOp=document.createElement("option")
    createOp.value= tr[i].variants[a].value;
    createOp.textContent = tr[i].variants[a].text;
    createDD.append(createOp)
}
   }
    else if(tr[i].kind =='radio'){
    for(let a=0;a<tr[i].variants.length;a++){
    const createInput=document.createElement("input")
    createInput.value= tr[i].variants[a].value;
    createInput.name = tr[i].name
    createInput.type = "radio"
    createTd2.append(createInput)
    const createSp=document.createElement("span")
    createSp.textContent = tr[i].variants[a].text;
    createTd2.append(createSp)
}
   }
    else if(tr[i].kind =='check'){
    const createInput = document.createElement("input");
    createInput.name = tr[i].name
    createInput.type = "checkbox"
    createTd2.append(createInput);
   }
    else if(tr[i].kind =='memo'){
    const createTa = document.createElement("textarea");
    createTa.name = tr[i].name
    createTa.style.width = "608px"
    createTa.style.height = "50px"
    createTd2.append(createTa);
   }
    else if(tr[i].kind =='submit'){
    const createInput=document.createElement("input")
    createInput.type="submit"
    createInput.value=tr[i].caption
    createTd2.append(createInput)
   }
   }
}
}
createForm(formDef1)
createForm(formDef2)
