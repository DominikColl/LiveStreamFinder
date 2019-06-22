class Display{
    static displayColection(collection){
        //collection is array of users
        let html=``;
        collection.forEach(user => {
        html+=`<li><span>${user.name}</span> ${user.viewCount}<div>${user.live}</div></li>`;
            
        });
        document.querySelector('ul').innerHTML=html;
    }
}