import {
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './config.js';

const state = {
    user: {},
    token: '',
    robots: [],
};

export const login = async (email, passwd) => {
    const provider = new GoogleAuthProvider();
    const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        passwd
    );
    console.log(userCredentials);
    state.user.userName = userCredentials.user.displayName;
    state.user.email = userCredentials.user.email;
    state.user.uid = userCredentials.user.uid;
    state.token = await userCredentials.user.getIdToken();
};

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(auth, provider);
    console.log(userCredentials);
    state.user.userName = userCredentials.user.displayName;
    state.user.email = userCredentials.user.email;
};

export const logout = () => {
    signOut(auth);
    state.user = {};
};

// type User = {
//     name: string
// }
// users: Array<User> = [{}, {}, {}]

// ColUsers: {[key : string]: User} // Mapped Types

// colUsers: ColUsers = {uno: {}, dos: {}, tres: {}}

// Object.keys(colUsers)
// Object.entries()
// Object.values(colUsers)
