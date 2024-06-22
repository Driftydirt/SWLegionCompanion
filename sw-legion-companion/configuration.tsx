import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaqUD84Xnjv2oRteeFlNP48KDOf4R7cMI",
  authDomain: "star-wars-legion-companion.firebaseapp.com",
  projectId: "star-wars-legion-companion",
  storageBucket: "star-wars-legion-companion.appspot.com",
  messagingSenderId: "834688133829",
  appId: "1:834688133829:web:5806146d534cec07285eac",
  measurementId: "G-2S88L7PN6N",
};

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
