import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCMNY3P05hubP73tRJtof6iJfvbZ0Ma2nU',
  authDomain: 'fir-learn-140bd.firebaseapp.com',
  projectId: 'fir-learn-140bd',
  storageBucket: 'fir-learn-140bd.appspot.com',
  messagingSenderId: '649456381954',
  appId: '1:649456381954:web:2e81c44dd1e791ef14f71b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
