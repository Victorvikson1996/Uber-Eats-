import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDqcSFydbnwJOucDEGgO68ewA1tIS-yd4M",
    authDomain: "ubereats-react-native-5449f.firebaseapp.com",
    projectId: "ubereats-react-native-5449f",
    storageBucket: "ubereats-react-native-5449f.appspot.com",
    messagingSenderId: "651336098337",
    appId: "1:651336098337:web:47554053a0e8986bfe7960",
    measurementId: "G-F6FNR553BF"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


export default firebase;