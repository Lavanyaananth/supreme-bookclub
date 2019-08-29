import Rebase from "re-base";
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDROyY4Xq6fffdfxe8-x2FPO1fBuhNp51Q",
    authDomain: "bookclub-trade.firebaseapp.com",
    databaseURL: "https://bookclub-trade.firebaseio.com"
    
});

const base = Rebase.createClass(firebaseApp.database());
console.log(base);
// This is a named export
export { firebaseApp };

// this is a default export
export default base;