fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.message;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.body.appendChild(imgElement);
    })
    .catch(error => console.error('Error fetching dog image:', error));
    