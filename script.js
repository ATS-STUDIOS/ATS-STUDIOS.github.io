document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;
    let file = document.getElementById('fileUpload').files[0];

    // Add your logic to upload the file and retrieve the image URL
    // ...

    // Send the note data to the server
    fetch('https://your-server-url.com/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            text: text,
            imageUrl: imageUrl // The image URL should be set here
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Update the interface with the new note
        // ...
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
// Replace with your own Firebase credentials
const firebaseConfig = {
 apiKey: "AIzaSyApylREU-u-KLdQrG1zLLYookouavGGbds",
 authDomain: "data-store-57408.firebaseapp.com",
 projectId: "data-store-57408",
 storageBucket: "data-store-57408.appspot.com",
 messagingSenderId: "942897480389",
 appId: "1:942897480389:web:905684288077f1dd5d66ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access the Firestore database
const db = firebase.firestore();
const usersCollection = db.collection('users');

// Function to save data
function saveData() {
 const inputField = document.getElementById('inputField');
 const userData = { name: inputField.value };
  
 usersCollection.add(userData)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      inputField.value = '';
      fetchData();
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}

// Function to fetch and display data
function fetchData() {
 usersCollection.get().then((querySnapshot) => {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const dataItem = document.createElement('p');
      dataItem.textContent = `${doc.id} => ${doc.data().name}`;
      dataContainer.appendChild(dataItem);
    });
 });
}

// Attach event listener to the button
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveData);

// Fetch data initially
fetchData();
