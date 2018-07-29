// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAPsG8Fw9kN0uvqBHFB5tDeeGvTVzTilDE",
    authDomain: "oshop-d352e.firebaseapp.com",
    databaseURL: "https://oshop-d352e.firebaseio.com",
    projectId: "oshop-d352e",
    storageBucket: "",
    messagingSenderId: "679359948016"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 * 
 * 
<script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPsG8Fw9kN0uvqBHFB5tDeeGvTVzTilDE",
    authDomain: "oshop-d352e.firebaseapp.com",
    databaseURL: "https://oshop-d352e.firebaseio.com",
    projectId: "oshop-d352e",
    storageBucket: "",
    messagingSenderId: "679359948016"
  };
  firebase.initializeApp(config);
</script>
 * 
 * 
 * 
 * 
 * 
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
