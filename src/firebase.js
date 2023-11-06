import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHhCQgksgScx5JonWm5ct-nG2FIA6z19Q",
    authDomain: "authentication-3a941.firebaseapp.com",
    databaseURL: "https://authentication-3a941-default-rtdb.firebaseio.com",
    projectId: "authentication-3a941",
    storageBucket: "authentication-3a941.appspot.com",
    messagingSenderId: "273382922740",
    appId: "1:273382922740:web:0b4e9b818d10516b9701a1",
    measurementId: "G-BVRFZ7F6WT"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;