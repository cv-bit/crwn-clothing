// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_w8XNnYQdWvSQsI9SHJwkeykUVff6rM8",
    authDomain: "crwn-clothing-db-928f8.firebaseapp.com",
    projectId: "crwn-clothing-db-928f8",
    storageBucket: "crwn-clothing-db-928f8.appspot.com",
    messagingSenderId: "366881717704",
    appId: "1:366881717704:web:b47aa16ea03e98d4e2d4fd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});


const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () =>
signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
userAuth,
additionalInformation = {}
) => {
if (!userAuth) return;

const userDocRef = doc(db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef);

if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
    await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
    });
    } catch (error) {
    console.log('error creating the user', error.message);
    }
}

return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
if (!email || !password) return;

return await createUserWithEmailAndPassword(auth, email, password);
};