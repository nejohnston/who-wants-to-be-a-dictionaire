import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDtq4--6Jf4KJIfBhGn3lCDks2STZRLJKM",
    projectId: "dictionairegame",
    authDomain: "dictionairegame.firebaseapp.com",
    storageBucket: "dictionairegame.appspot.com",
    messagingSenderId: "1006112093490",
    appId: "1:1006112093490:web:3234e2ce2dc27f0a90932b"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config)
		this.auth = firebase.auth()
    }

    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(email, password) {
		return await this.auth.createUserWithEmailAndPassword(email, password);
	}

}

export default new Firebase()