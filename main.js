
document.addEventListener('DOMContentLoaded',()=>{
  //let t=localStorage.getItem('collection')
  if(localStorage.getItem('collection')){
    let t=localStorage.getItem('collection')
    JSON.parse(t).forEach(e => {
      APILogic.getData(e.name);
    });
  console.log(t);
  
}
   document.querySelector('#userButton').addEventListener('click',()=>{
    APILogic.getData(document.querySelector('#inputUser').value);
  });
  let r=document.querySelector('#delete');
  r.addEventListener('click',Logic.deleteLocalStorageEvent)
});


