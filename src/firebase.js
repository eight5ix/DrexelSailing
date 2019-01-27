import firebase from 'firebase';


var config = {
  apiKey: 'AIzaSyD29y8_8lxj1awMe29sd_0pREGSc2UslHs',
  authDomain: 'drexelsailingteam.firebaseapp.com',
  databaseURL: 'https://drexelsailingteam.firebaseio.com',
  projectId: 'drexelsailingteam',
  storageBucket: 'drexelsailingteam.appspot.com',
  messagingSenderId: '942368209247'
};
firebase.initializeApp(config);

export default firebase;
