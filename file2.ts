




   //Задание 2
//Создать словарь собственных определений, используя Generic function. Внутри должно быть
//определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
//записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
//доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
//параметр различные типы данных для реализации.



window.onload=function(){

    let data: any=[];
    
 function set(value: any,key:any, description:any) {
     data.push({value,key,description});
 }
 function get(item:any){
     return item
 }
   
 
 
    console.log(data);
    console.log(get(data));
 
    let start:any=document.getElementById('start');
    start.addEventListener('click',function(){
        let getValue:any=document.getElementById('get_value');
        let getValue1=getValue.value;
        let getKey:any=document.getElementById('get_key');
        let getKey1=getKey.value;
        let getDescription:any=document.getElementById('get_description');
 let getDescription1=getDescription.value;
        if(getValue1.length!=""&&getKey1.length!=''&&getDescription1.length!=''){
 let item=set(getValue1,getKey1,getDescription1);
 console.log(getValue1);
 
 
 //////
 let i:number;

for(i=0;i<data.length;i++){
    let content:any=document.getElementById('content');
    let p:any=document.createElement("p");
 
content.appendChild(p).innerHTML='value'+data[i].value+"<br/>";

   let contentKey:any=document.getElementById('contentKey');
let pKey:any=document.createElement("p");

contentKey.appendChild(pKey).innerHTML='Key:'+data[i].key+"<br/>";
let contentDescription:any=document.getElementById('contentDescription');
let pDescription:any=document.createElement("p");

contentDescription.appendChild(pDescription).innerHTML='Description:'+data[i].value+"<br/>";

   }
 
        }
    })
 
    ////
  
  //  p.innerHTML=data+'</br>';
 
       
 
 }