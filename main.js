let collection=[];
document.addEventListener('DOMContentLoaded',()=>{
   document.querySelector('#userButton').addEventListener('click',()=>{
    APILogic.getData(document.querySelector('#inputUser').value);
  });
});
class APILogic{
  static getData(userName){
    let url=`https://api.twitch.tv/helix/streams?user_login=${userName}`;
const config={
    method:'GET',
    headers:{'Client-ID': '50o012g5mqw744u2gun9larsd3cj05'}
}
fetch(url,config)
.then(r =>{
 if(r.ok){
   return r.json();
 }
}).then(data=>{
     console.log(data);
     collection.push(userName);
     console.log(collection);
})
  }
}
