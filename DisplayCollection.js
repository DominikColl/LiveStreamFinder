class Display{
    static displayColection(collection){
        //collection is array of users
        //target blank to that the link opens in new tab
        let html=``;
        collection.forEach(user => {
        html+=`<li><span><a href="${Logic.createURL(user.name)}"target="_blank">${user.name}</a></span> ${user.viewCount}<div>${user.live}</div></li>`;
            
        });
        document.querySelector('#insertList').innerHTML=html;
    }
    static displayGames(games){

    }
}