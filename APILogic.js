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
       if(data.data[0]){
         user=new User(userName,true,data.data[0].viewer_count);
    }else{
         user=new User(userName,false,0);
    }
    console.log(user);
       collection.push(user);
       //all local storage
       if(localStorage.getItem('collection')){
       localStorage.removeItem('collection');
       }
       localStorage.setItem('collection',JSON.stringify(collection))
       Display.displayColection(collection);
       document.querySelectorAll('li div').forEach(e=>{
        Logic.cssLiveFt(e);
       })
  })
    }
    //gets top games being streamed right now
    static getTopGamesData(){
        let url=`https://api.twitch.tv/helix/games/top`;
        const config={
            method:'GET',
            headers:{'Client-ID': '50o012g5mqw744u2gun9larsd3cj05'}
        }
        fetch(url,config)
        .then(r =>{
         if(r.ok){
           //gives top games being streamed
           return r.json()
         }
        }).then(e=>{
          console.log(e)
        })
    }
  }