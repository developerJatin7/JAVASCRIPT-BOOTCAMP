// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//         const imageUrl = data.message;
//         const imgElement = document.createElement('img');
//         imgElement.src = imageUrl;
//         document.body.appendChild(imgElement);
//     })
//     .catch(error => console.error('Error fetching dog image:', error));

async function fetchDogImage() {
    try {
        const requests = [1, 2, 3].map(() =>
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
        );

        const data = await Promise.all(requests);

        data
            .map(item => item.message)
            .map(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'Random dog image';
                imgElement.style.width = '200px';
                imgElement.style.margin = '8px';
                document.body.appendChild(imgElement);
                return imgElement;
            });
    } catch (error) {
        console.log('Error fetching dog image:', error);
    }
}
fetchDogImage();