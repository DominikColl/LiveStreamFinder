class Display{
    static displayColection(collection){
        //collection is array of users
        let html=``;
        collection.forEach(user => {
        html+=`<li><span><a href="${Logic.createURL(user.name)}">${user.name}</a></span> ${user.viewCount}<div>${user.live}</div></li>`;
            
        });
        document.querySelector('ul').innerHTML=html;
    }
}