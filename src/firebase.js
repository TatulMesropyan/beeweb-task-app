import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCl0PPJDa_8NZkfU4ctiZt-Zfus-KKbmTw',
  authDomain: 'beeweb-task-8ba4b.firebaseapp.com',
  projectId: 'beeweb-task-8ba4b',
  storageBucket: 'beeweb-task-8ba4b.appspot.com',
  messagingSenderId: '256069404879',
  appId: '1:256069404879:web:1d619bdc0349853f464fba',
  databaseURL: 'https://beeweb-task-8ba4b-default-rtdb.europe-west1.firebasedatabase.app'
};
export const db = getDatabase(initializeApp(firebaseConfig));
