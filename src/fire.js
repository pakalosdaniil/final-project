import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVz36Ig49vuLvih2lautKL3CIKELOGlbM",
  authDomain: "final-project-barber.firebaseapp.com",
  projectId: "final-project-barber",
  storageBucket: "final-project-barber.appspot.com",
  messagingSenderId: "249855560229",
  appId: "1:249855560229:web:efaf6fe4431f6e11b44dcc",
};

export default fire.initializeApp(firebaseConfig);
