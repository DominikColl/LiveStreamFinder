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
      let user="";
      // console.log(data.data[0].type);
       if(data.data[0]){
         user=new User(userName,true);
    }else{
         user=new User(userName,false);
    }
       collection.push(user);
       if(localStorage.getItem('collection')){
       localStorage.removeItem('collection');
       }
       localStorage.setItem('collection',JSON.stringify(collection))
      // console.log(collection);
       //functon that displays collection of users
       
       Display.displayColection(collection);
  })
    }
  }