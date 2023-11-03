import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQPvzfFbiiBh0XSVYj9OMP2qKadyXNNvI",
    authDomain: "quasar-todo-ef4c2.firebaseapp.com",
    projectId: "quasar-todo-ef4c2",
    storageBucket: "quasar-todo-ef4c2.appspot.com",
    messagingSenderId: "270145018117",
    appId: "1:270145018117:web:0f1d3433949cb16abf7f6c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};