import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();

export default firebase;
