import { initializeApp } from 'firebase/app';
import { getAuth,  GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "movie-react-26fbf.firebaseapp.com",
  projectId: "movie-react-26fbf",
  storageBucket: "movie-react-26fbf.appspot.com",
  messagingSenderId: "258904494009",
  appId: "1:258904494009:web:1dedf400a54e8a5175b068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export { auth };