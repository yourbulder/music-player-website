// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
  apiKey:            "AIzaSyAVygTKsZgHwskxySGdabPCGjwk-36nE-o",
  authDomain:        "twinmac-ff.firebaseapp.com",
  databaseURL:       "https://twinmac-ff-default-rtdb.firebaseio.com",
  projectId:         "twinmac-ff",
  storageBucket:     "twinmac-ff.firebasestorage.app",
  messagingSenderId: "28100460093",
  appId:             "1:28100460093:web:f167e196772e5010b1f454",
  measurementId:     "G-NWKE52MPBY"
};

const app = initializeApp(firebaseConfig);

export const auth      = getAuth(app);
export const db        = getFirestore(app);
export const storage   = getStorage(app);
