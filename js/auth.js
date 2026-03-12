// js/auth.js
import { auth, db } from './firebase-config.js';
import { 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Listen for auth changes and get role
export function initAuth(onUserChange) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        
        let role = "listener"; // default if not found
        
        if (userSnap.exists()) {
          role = userSnap.data().role || "listener";
        }
        
        onUserChange({
          loggedIn: true,
          user: user,
          role: role
        });
      } catch (err) {
        console.error("Error reading role:", err);
        onUserChange({ loggedIn: true, user, role: "listener" });
      }
    } else {
      onUserChange({ loggedIn: false, user: null, role: null });
    }
  });
}

// Save role during signup (called from login.html)
export async function saveUserRole(uid, role) {
  try {
    await setDoc(doc(db, "users", uid), {
      role: role,
      createdAt: new Date().toISOString()
    }, { merge: true });
    console.log("Role saved:", role);
  } catch (err) {
    console.error("Error saving role:", err);
  }
}

// Logout
export function logout() {
  signOut(auth).then(() => {
    window.location.href = 'login.html';
  }).catch((err) => {
    console.error("Logout error:", err);
  });
}
