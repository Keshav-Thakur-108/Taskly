import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCzmyZU58Bex8DOKTTe9fsfeNDcComJb44",
    authDomain: "taskly-6ec78.firebaseapp.com",
    projectId: "taskly-6ec78",
    storageBucket: "taskly-6ec78.appspot.com",
    messagingSenderId: "199883151329",
    appId: "1:199883151329:web:967d18f0592e172ddbe4a0"
})

export {firebaseConfig as firebase}