import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAVK3VUhSeMZHz_5Goy1GLFfoz9kfKRNE8",
  authDomain: "react-firebase-fun.firebaseapp.com",
  databaseURL: "https://react-firebase-fun.firebaseio.com",
  projectId: "react-firebase-fun",
  storageBucket: "",
  messagingSenderId: "790555634231",
};

class Firebase {
	constructor(){
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);

  

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
  jobs = uid => this.db.ref(`/user-jobs/${uid}/jobs`);
}

export default Firebase;