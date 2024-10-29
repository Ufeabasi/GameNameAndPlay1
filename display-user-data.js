  
'use strict';

// // Function to display user data
// function displayUserData(userData) {
//   const content = document.getElementById('user_name');

//   if (userData) {
//     content.innerHTML = `
//       <h1 class="text-2xl font-bold mb-4">User Data</h1>
//       <ul>
//         <li>ID: ${userData.id}</li>
//         <li>First Name: ${userData.first_name}</li>
//         <li>Last Name: ${userData.last_name || 'N/A'}</li>
//         <li>Username: ${userData.username || 'N/A'}</li>
//         <li>Language Code: ${userData.language_code}</li>
//         <li>Is Premium: ${userData.is_premium ? 'Yes' : 'No'}</li>
//       </ul>
//     `;
//   } else {
//     content.innerHTML = 'User data not available.';
//   }
// }

// // Initialize the app and fetch user data
// document.addEventListener('DOMContentLoaded', () => {
//   const WebApp = window.Telegram.WebApp;

//   // Retrieve user data from the WebApp SDK
//   if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
//     const userData = WebApp.initDataUnsafe.user;
//     displayUserData(userData.username);
//   } else {
//     console.error('User data is not available in WebApp.initDataUnsafe.');
//     document.getElementById('content').innerHTML = 'User data not found.';
//   }
// });