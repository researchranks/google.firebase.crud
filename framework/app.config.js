define( function(){
    App.prototype.config = function(){

    var firebase_config = {
            apiKey: "AIzaSyDv_7OBolNgHafXT1k2vCXQDNwW2fCHgy0",
            authDomain: "dashboard-859d7.firebaseapp.com",
            databaseURL: "https://dashboard-859d7.firebaseio.com",
            storageBucket: ""
    };

     try{
            console.log( firebase.initializeApp(firebase_config) );
            App.prototype.util.status.firebase = true;
            App.prototype.util.online();
        }
        catch(error){
            App.prototype.util.status.firebase = error.message;
            App.prototype.util.online();
        }


    };

});
