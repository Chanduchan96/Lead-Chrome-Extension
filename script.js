
let myLeads=[];

const inputButton=document.getElementById('input-btn');
const inputEl=document.getElementById('input-el');
const ulEl=document.getElementById('ul-el');
const deleteButton=document.getElementById('delete-btn');
const tabButton=document.getElementById('tab-btn');
const leadsFromLocalStorage=JSON.parse(localStorage.getItem('myLeads'));

//checking for localstorage to check for truthy or falsy
if(leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

//used to put values in the DOM
function render(leads){
    let listItems="";
for(let lead of leads){
    
    listItems+=`
    <li> 
    <a target='_blank' href='"${lead}"'>"${lead}"
    </a> 
    </li>`;
    
}
ulEl.innerHTML=listItems;//as best practice DOM items should be outside the loop

}


//listn clicks in tab button
tabButton.addEventListener('click',function(){
    //to talk to chrome API use the following
    //chrome.tab is an chrome API used to talk to existing tab data
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads',JSON.stringify(myLeads));
        render(myLeads);
    });
  


});
//function save button clivk
inputButton.addEventListener("click",function(){
   
     myLeads.push(inputEl.value);
     inputEl.value="";

     localStorage.setItem("myLeads",JSON.stringify(myLeads));
     render(myLeads);

});

//function on delte button click
deleteButton.addEventListener("dblclick",function(){
        localStorage.clear();
        myLeads=[];
        render(myLeads);//to clear the DOM since myLEads array is set to null

});