




//   // DOM Elements
//       const loginForm = document.getElementById('loginForm');
//       const studentID = document.getElementById('studentID');
//       const password = document.getElementById('password');
//       const studentIDError = document.getElementById('studentIDError');
//       const passwordError = document.getElementById('passwordError');
//       const formatError = document.getElementById('formatError');
//       const errorMessage = document.getElementById('errorMessage');
//       const successMessage = document.getElementById('successMessage');
//       const passwordToggle = document.getElementById('passwordToggle');
//       const passwordIcon = document.getElementById('passwordIcon');
//       const quoteText = document.getElementById('quoteText');
//       const quoteRefresh = document.getElementById('quoteRefresh');
      
//       // Quotes Array
//       const quotes = [
//         { text: "ناقص عقل گناہ کے وقت محافظت نہیں کر سکتی۔ بو علی سینا", lang: "urdu" },
//         { text: "Knowledge is power. - Francis Bacon", lang: "english" }
//       ];
      
//       // Toggle Password Visibility
//       passwordToggle.addEventListener('click', () => {
//         if (password.type === 'password') {
//           password.type = 'text';
//           passwordIcon.classList.remove('fa-eye');
//           passwordIcon.classList.add('fa-eye-slash');
//         } else {
//           password.type = 'password';
//           passwordIcon.classList.remove('fa-eye-slash');
//           passwordIcon.classList.add('fa-eye');
//         }
//       });
      
//       loginForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         studentIDError.style.display = 'none';
//         passwordError.style.display = 'none';
//         formatError.style.display = 'none';
//         errorMessage.style.display = 'none';
//         successMessage.style.display = 'none';
//         let isValid = true;
//         if (!studentID.value.trim()) {
//           studentIDError.style.display = 'block';
//           isValid = false;
//         } else {
//           const idRegex = /^bc\d{9}$/i;
//           if (!idRegex.test(studentID.value.trim())) {
//             formatError.style.display = 'block';
//             isValid = false;
//           }
//         }
//         if (!password.value.trim()) {
//           passwordError.style.display = 'block';
//           isValid = false;
//         }
//         if (isValid) {
//           try {
//             const response = await fetch('/api/register', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                 studentID: studentID.value.trim(),
//                 password: password.value.trim(),
//               }),
//             });
//             const data = await response.json();
//             if (response.ok) {
//               successMessage.style.display = 'block';
//               document.getElementById('successText').textContent = data.message;
//               loginForm.reset();
//             } else {
//               errorMessage.style.display = 'block';
//               document.getElementById('errorText').textContent = data.message;
//             }
//           } catch (error) {
//             errorMessage.style.display = 'block';
//             document.getElementById('errorText').textContent = 'Failed to connect to server';
//           }
//         }
//       });

//       // Close Messages
//       function closeError() {
//         errorMessage.style.display = 'none';
//       }
//       function closeSuccess() {
//         successMessage.style.display = 'none';
//       }

//       // Refresh Quote
//       quoteRefresh.addEventListener('click', () => {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//         const newQuote = quotes[randomIndex];
//         quoteText.textContent = newQuote.text;
//         if (newQuote.lang === 'urdu') {
//           quoteText.classList.add('urdu');
//           quoteText.classList.remove('english');
//         } else {
//           quoteText.classList.remove('urdu');
//           quoteText.classList.add('english');
//         }
//       });













// // DOM Elements
// const loginForm = document.getElementById('loginForm');
// // ... (other DOM elements remain the same)

// // Toggle Password Visibility
// passwordToggle.addEventListener('click', () => {
//   // ... (unchanged)
// });

// // Form Submission
// loginForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   studentIDError.style.display = 'none';
//   passwordError.style.display = 'none';
//   formatError.style.display = 'none';
//   errorMessage.style.display = 'none';
//   successMessage.style.display = 'none';
//   let isValid = true;

//   if (!studentID.value.trim()) {
//     studentIDError.style.display = 'block';
//     isValid = false;
//   } else {
//     const idRegex = /^bc\d{9}$/i;
//     if (!idRegex.test(studentID.value.trim())) {
//       formatError.style.display = 'block';
//       isValid = false;
//     }
//   }
//   if (!password.value.trim()) {
//     passwordError.style.display = 'block';
//     isValid = false;
//   }
//   if (isValid) {
//     try {
//       const response = await fetch('/api/login', { // Changed to /api/login
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           studentID: studentID.value.trim(),
//           password: password.value.trim(),
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         successMessage.style.display = 'block';
//         document.getElementById('successText').textContent = data.message;
//         loginForm.reset();
//       } else {
//         errorMessage.style.display = 'block';
//         document.getElementById('errorText').textContent = data.message;
//       }
//     } catch (error) {
//       errorMessage.style.display = 'block';
//       document.getElementById('errorText').textContent = 'Failed to connect to server';
//     }
//   }
// });

// // Close Messages
// function closeError() {
//   errorMessage.style.display = 'none';
// }
// function closeSuccess() {
//   successMessage.style.display = 'none';
// }

// // Refresh Quote
// quoteRefresh.addEventListener('click', () => {
//   // ... (unchanged)
// });



// DOM Elements
const loginForm = document.getElementById('loginForm');
const studentID = document.getElementById('studentID');
const password = document.getElementById('password');
const studentIDError = document.getElementById('studentIDError');
const passwordError = document.getElementById('passwordError');
const formatError = document.getElementById('formatError');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const passwordToggle = document.getElementById('passwordToggle');
const passwordIcon = document.getElementById('passwordIcon');
const quoteText = document.getElementById('quoteText');
const quoteRefresh = document.getElementById('quoteRefresh');

// Quotes Array
const quotes = [
  { text: "ناقص عقل گناہ کے وقت محافظت نہیں کر سکتی۔ بو علی سینا", lang: "urdu" },
  { text: "Knowledge is power. - Francis Bacon", lang: "english" }
];

// Toggle Password Visibility
passwordToggle.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    password.type = 'password';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
});

// Form Submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  studentIDError.style.display = 'none';
  passwordError.style.display = 'none';
  formatError.style.display = 'none';
  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';
  let isValid = true;

  if (!studentID.value.trim()) {
    studentIDError.style.display = 'block';
    isValid = false;
  } else {
    const idRegex = /^bc\d{9}$/i;
    if (!idRegex.test(studentID.value.trim())) {
      formatError.style.display = 'block';
      isValid = false;
    }
  }
  if (!password.value.trim()) {
    passwordError.style.display = 'block';
    isValid = false;
  }
  if (isValid) {
    try {
      console.log('Sending login request:', { studentID: studentID.value.trim() }); // Debug log
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentID: studentID.value.trim(),
          password: password.value.trim(),
        }),
      });
      const data = await response.json();
      console.log('Response:', data); // Debug log
      if (response.ok) {
        successMessage.style.display = 'block';
        document.getElementById('successText').textContent = data.message;
        loginForm.reset();
      } else {
        errorMessage.style.display = 'block';
        document.getElementById('errorText').textContent = data.message;
      }
    } catch (error) {
      console.error('Fetch error:', error); // Debug log
      errorMessage.style.display = 'block';
      document.getElementById('errorText').textContent = 'Failed to connect to server: ' + error.message;
    }
  }
});

// Close Messages
function closeError() {
  errorMessage.style.display = 'none';
}
function closeSuccess() {
  successMessage.style.display = 'none';
}

// Refresh Quote
quoteRefresh.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const newQuote = quotes[randomIndex];
  quoteText.textContent = newQuote.text;
  if (newQuote.lang === 'urdu') {
    quoteText.classList.add('urdu');
    quoteText.classList.remove('english');
  } else {
    quoteText.classList.remove('urdu');
    quoteText.classList.add('english');
  }
});