import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAZC4IzcwsFuJ1LgmICse_Clg-dD5i8P6U',
	authDomain: 'instacarro-b5f77.firebaseapp.com',
	databaseURL: 'https://instacarro-b5f77.firebaseio.com',
	projectId: 'instacarro-b5f77',
	storageBucket: 'instacarro-b5f77.appspot.com',
	messagingSenderId: '687491596235'
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
