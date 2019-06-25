class Logic{
    static cssLiveFt(e){
      if(e.textContent=='true'){
        e.style.backgroundColor='#85bb65';
      }
    }
    //links working
    //creates link to users live stream
    static createURL(username){
      return `https://www.twitch.tv/${username}`;
    }
  }