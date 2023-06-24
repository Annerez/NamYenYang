import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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

function formatData(data, unit) {
return data + ' ' + unit;
}


const checkButton = document.getElementById('check');
const showButton = document.getElementById('show');
const hot = document.getElementById('yeng').innerHTML;
const body = document.getElementById('body');

checkButton.addEventListener('click', function() {
    if (hot == "Yes") {
        body.classList.toggle('bg-sky-400');
    }
    if (hot == "No") {
        body.classList.toggle('bg-red-400');
    }
  checkButton.classList.toggle('hidden');
  showButton.classList.toggle('hidden');
});
