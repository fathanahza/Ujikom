// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKbfSNAYdAo918cNUZJQqL2dd6auAZqlk",
  authDomain: "monitoring-iot-ujikom-576f0.firebaseapp.com",
  databaseURL: "https://monitoring-iot-ujikom-576f0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-iot-ujikom-576f0",
  storageBucket: "monitoring-iot-ujikom-576f0.firebasestorage.app",
  messagingSenderId: "452065271725",
  appId: "1:452065271725:web:931f9846e84c6a071a0b24",
  measurementId: "G-2Y44SR9LMN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
