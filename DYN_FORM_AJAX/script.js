
    function testLoadData(url,callback) {
        $.ajax(url,
            { type:'GET', dataType:'json', success:callback, error:errorHandler }
        );
    }

    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

    testLoadData("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json",function(data1){

        createForm(data1);

        emptyDiv();

        testLoadData("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json",function(data2){
            createForm(data2)
        }
    )
    }
)


      
function emptyDiv(){
   const empDiv= document.createElement("div") 
   empDiv.style.height = "200px"
   document.body.append(empDiv);
}

function createForm(text){
let arr = text;
const forma = document.createElement("form")
forma.method= "POST";
forma.action= "TestForm.php"
document.body.append(forma);
const createTable = document.createElement("table")
createTable.className="Table";
forma.append(createTable)
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