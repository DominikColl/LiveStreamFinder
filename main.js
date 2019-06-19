let collection=[];
document.addEventListener('DOMContentLoaded',()=>{
   document.querySelector('#userButton').addEventListener('click',()=>{
    APILogic.getData(document.querySelector('#inputUser').value);
  });
});


