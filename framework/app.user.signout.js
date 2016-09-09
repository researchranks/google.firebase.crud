define(function(){
    App.prototype.user.signout = function(){

      var previous_user;
      var current_user = function(){
        try{
           App.prototype.user.status = 'Logged In';
          return firebase.auth().currentUser;

        }catch(error){
          var previous_user = null;
          App.prototype.user.status = 'Signed Out';
          console.log( error );
          return false;
        }
      };

      if( typeof(current_user()) === 'object' ){
          App.prototype.element.get('app-error-message').textContent = 'none';
          previous_user = current_user();
      }else{
         current_user = 'n/a';
   }



       firebase.auth().signOut().then(
           function(success){

                 //this.update.user.email();

                 if (typeof success != 'undefined' || current_user() === false){
                   return console.log('Signed Out Of Account');
                 }

                 try{
                 if( previous_user.email !== null ){

                   debug_previous_user = previous_user;

                   App.prototype.user.status = 'Signed Out';

                   App.prototype.element.get('app-last-user').textContent = previous_user.email;


                   App.prototype.element.get('app-current-user').textContent = 'none';

                   App.prototype.element.get('app-user-data').textContent = 'none';
                   App.prototype.element.get('app-user-data').innerHTML = '';

                     App.prototype.element.get('app-current-status').textContent = 'signed out of ' + previous_user.email;
                        return console.log(
                          'Signed Out Of '+
                          previous_user.email);

               }
            }catch(error){}

            App.prototype.user.status = 'Signed Out';


            App.prototype.element.get('app-current-user').textContent = 'Signed Out';

                        App.prototype.element.get('app-user-data').textContent = 'Signed Out';
                        App.prototype.element.get('app-last-user').textContent = 'Signed Out';
                        App.prototype.element.get('app-current-status').textContent = 'Signed Out';

                    },
           function(error){

                       console.log( '----------' );
                       console.log( error.code );
                       console.log( '----------' );
                       console.log( error.message );

                        return console.error('Sign Out Error', error);

                }
         );
};

        return App.prototype.user.signout;

});
