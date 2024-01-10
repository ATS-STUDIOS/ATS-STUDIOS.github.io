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