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
      //path to viewcount
      //console.log(data.data[0].viewer_count);
       if(data.data[0]){
         user=new User(userName,true,data.data[0].viewer_count);
    }else{
         user=new User(userName,false,0);
    }
    console.log(user);
       collection.push(user);
       if(localStorage.getItem('collection')){
       localStorage.removeItem('collection');
       }
       localStorage.setItem('collection',JSON.stringify(collection))
      // console.log(collection);
       //functon that displays collection of users
       
       Display.displayColection(collection);
       document.querySelectorAll('li div').forEach(e=>{
        Logic.cssLiveFt(e);
       })
  })
    }
  }