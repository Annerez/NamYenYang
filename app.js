import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCmMz2W--JMKOgdw9cs-QPHNmgXoNgPyXc",
    authDomain: "namyenyang.firebaseapp.com",
    databaseURL: "https://namyenyang-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "namyenyang",
    storageBucket: "namyenyang.appspot.com",
    messagingSenderId: "129495402048",
    appId: "1:129495402048:web:a9a3a6be282e5b8e74c1a5",
    measurementId: "G-V3VEQ86CV1"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const refs = {
temp: ref(db, 'Namyenyang/Temp'),
yeng: ref(db, 'Namyenyang/Yeng'),
};

for (const key in refs) {
onValue(refs[key], (snapshot) => {
const data = snapshot.val();
const element = document.getElementById(key);
element.innerHTML = data;
});
}

function formatData(data, unit) {
return data + ' ' + unit;
}

for (const key in refs) {
onValue(refs[key], (snapshot) => {
const data = snapshot.val();
const element = document.getElementById(key);
let unit = '';
if (key === 'temp') {
  unit = '°C';
} 
element.innerHTML = formatData(data, unit);
});
}
