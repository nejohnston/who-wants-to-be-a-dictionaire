import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    projectId: `${process.env.PROJECT_ID}`,
    authDomain: `${process.env.AUTH_DOMAIN}`,
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.APP_ID}`
};

class Firebase {
    // constructor() {
	// 		console.log("api key: "+process.env.REACT_APP_API_KEY)
	// 		if (!firebase.apps.length) {
	// 			firebase.initializeApp(config);
	// 	 }else {
	// 			firebase.app(); // if already initialized, use that one
	// 	 }
	// 	firebase.auth()
    // }

	constructor() {
		firebase.initializeApp(config)
		this.auth = firebase.auth()
	}

  async login(email, password) {
		return await this.auth.signInWithEmailAndPassword(email, password)
	}
	
	async register(email, password) {
		return await this.auth.createUserWithEmailAndPassword(email, password);
	}
	
	logout() {
			return this.auth.signOut()
	}
}

export default new Firebase()