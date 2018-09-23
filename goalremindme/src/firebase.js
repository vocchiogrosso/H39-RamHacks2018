import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDPpR07OWFv40YxoFxvO8XwxaiRqAzXc-I",
    authDomain: "goalcoach-b7a35.firebaseapp.com",
    databaseURL: "https://goalcoach-b7a35.firebaseio.com",
    projectId: "goalcoach-b7a35",
    storageBucket: "",
    messagingSenderId: "1086826144474"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');