
let myLeads=[];

const inputButton=document.getElementById('input-btn');
const inputEl=document.getElementById('input-el');
const ulEl=document.getElementById('ul-el');

let leadsFromLocalStorage=JSON.parse(localstorage.getItem('myLeads'));

inputButton.addEventListener("click",function(){
    console.log('in Event Listener');
     myLeads.push(inputEl.value);
     inputEl.value="";

     localStorage.setItem("myLeads",JSON.stringify(myLeads));
     renderLeads();

});
function renderLeads(){
    let listItems="";
for(let leads of myLeads){
    
    listItems+=`
    <li> 
    <a target='_blank' href='"${leads}"'>"${leads}"
    </a> 
    </li>`;
    
}
ulEl.innerHTML=listItems;

}