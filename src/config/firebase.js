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
    constructor() {
        firebase.initializeApp(config)
		this.auth = firebase.auth()
    }
		componentDidMount() {
			console.log(config.apiKey)
		};

    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	register(email, password) {
		this.auth.createUserWithEmailAndPassword(email, password).then(function() {
			let user = this.auth.currentUser;
			console.log(user);
			return user;
		}, function(error) {
			console.log(error.message);
			return error.message;
		});
	}

}

export default new Firebase()