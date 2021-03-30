importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyC2_nldZbtHdlCzTxd7MJElUPqqeIux6_Q",
    authDomain: "oauth-client-1602512905874.firebaseapp.com",
    projectId: "oauth-client-1602512905874",
    storageBucket: "oauth-client-1602512905874.appspot.com",
    messagingSenderId: "641314615471",
    appId: "1:641314615471:web:ad4e2c3356797c76f1645a",
    measurementId: "G-T6XDEXQLPX"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();