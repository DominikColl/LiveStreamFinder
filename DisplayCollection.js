class Display{
    static displayColection(collection){
        //collection is array of users
        let html=``;
        collection.forEach(user => {
            html+=`<li>${user.name} ${user.live}</li>`;
        });
        document.querySelector('ul').innerHTML=html;
    }
}