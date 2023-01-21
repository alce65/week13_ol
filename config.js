import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDC9eI_DKjf-ItjEZvwWZUAJtCSoy6UrJg',
    // apiKey: process.env.REACT_APP_API_KEY,
    // https://create-react-app.dev/docs/adding-custom-environment-variables/
    authDomain: 'robots-320e9.firebaseapp.com',
    projectId: 'robots-320e9',
    storageBucket: 'robots-320e9.appspot.com',
    messagingSenderId: '718241509777',
    appId: '1:718241509777:web:8e6099f79eb4dbb264aa30',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
