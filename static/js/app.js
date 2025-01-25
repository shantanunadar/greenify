document.addEventListener('DOMContentLoaded', () => {
    // Handle button clicks on products.html
    const handleButtonClick = (event) => {
        console.log('Button clicked:', event.target);
        const option = event.target.getAttribute('data-option');
        if (option) {
            sessionStorage.setItem('selectedOption', option);
            window.location.href = 'category.html'; // Redirect to category.html
        } else {
            console.log('No data-option attribute found on button.');
        }
    };

    // Add event listeners to buttons in products.html
    const buttons = document.querySelectorAll('button[data-option]');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // Fetch and display data in category.html
    const option = sessionStorage.getItem('selectedOption');
    if (option) {
        fetchData(option);
    }
});

const fetchData = (option) => {
    console.log('Fetching data for option:', option);
    const url = `/api/get_data?option=${option}`;
    fetch(url)
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);
            displayProductData(data.products); // Adjusted to data.products
            displayEcoProductData(data.ecoproducts); // Adjusted to data.ecoproducts
        })
        .catch(error => console.error('Error:', error));
};

const displayProductData = (data) => {
    console.log('Displaying product data:', data);

    const maxFields = 4;
    let container = document.getElementById('data-display1');

    const photoContainer = document.querySelector('.photo'); // Select the div with class 'photo'
    
    if (photoContainer && data.image_url) { // Ensure the div and image_url exist
        // Clear any previous content in the photo div
        photoContainer.innerHTML = '';

        // Create an image element
        const img = document.createElement('img');
        img.src = data.image_url;
        img.classList.add('img-fluid', 'customimg'); // Add any necessary classes

        // Append the image to the photo div
        photoContainer.appendChild(img);
    } else {
        console.error('Photo container or image URL not found.');
    }
    
    if (container) {
        container.innerHTML = '';
        let dataFound = false;

                    // Create a new div for the description
                    const descriptionDiv = document.createElement('div');
                    descriptionDiv.id = 'DATA-DISPLAY';
                    descriptionDiv.classList.add('disadvantage-item');
                    
                    // Create a paragraph for the description content
                    const p = document.createElement('p');
                    p.textContent = data.description;
                    descriptionDiv.appendChild(p);
        
                    // Append the descriptionDiv to the container
                    container.appendChild(descriptionDiv);

        for (let i = 1; i <= maxFields; i++) {
            const fieldKey = `Disadvantage${i}`;
            console.log('Checking for field:', fieldKey);

            if (data && data[fieldKey]) {
                dataFound = true;
                console.log(`Field found: ${fieldKey}, value: ${data[fieldKey]}`);

                // Create a new div for each field
                const fieldDiv = document.createElement('div');
                fieldDiv.id = `data-display-${i}`;
                fieldDiv.classList.add('disadvantage-item');

                // Create a paragraph for the field content
                const p = document.createElement('p');
                p.textContent = data[fieldKey];
                fieldDiv.appendChild(p);

                // Append the fieldDiv to the container
                container.appendChild(fieldDiv);
            } else {
                console.log(`Field not found: ${fieldKey}`);
            }
        }

        // If no data was found for any fields, show a message
        if (!dataFound) {
            const noDataDiv = document.createElement('div');
            noDataDiv.textContent = 'No data found.';
            container.appendChild(noDataDiv);
        }
    } else {
        console.error('Product display container not found.');
    }
};

const displayEcoProductData = (data) => {
    console.log('Displaying product data:', data);

    const maxFields = 4;
    let container = document.getElementById('data-display2');

    const photoContainer = document.querySelector('.photo'); // Select the div with class 'photo'
    
    if (photoContainer && data.image_url) { // Ensure the div and image_url exist
        // Clear any previous content in the photo div
        photoContainer.innerHTML = '';

        // Create an image element
        const img = document.createElement('img');
        img.src = data.image_url;
        img.classList.add('img-fluid', 'customimg'); // Add any necessary classes

        // Append the image to the photo div
        photoContainer.appendChild(img);
    } else {
        console.error('Photo container or image URL not found.');
    }
    
    if (container) {
        container.innerHTML = '';
        let dataFound = false;

                    // Create a new div for the description
                    const descriptionDiv = document.createElement('div');
                    descriptionDiv.id = 'DATA-DISPLAY';
                    descriptionDiv.classList.add('disadvantage-item');
                    
                    // Create a paragraph for the description content
                    const p = document.createElement('p');
                    p.textContent = data.description;
                    descriptionDiv.appendChild(p);
        
                    // Append the descriptionDiv to the container
                    container.appendChild(descriptionDiv);

        for (let i = 1; i <= maxFields; i++) {
            const fieldKey = `Disadvantage${i}`;
            console.log('Checking for field:', fieldKey);

            if (data && data[fieldKey]) {
                dataFound = true;
                console.log(`Field found: ${fieldKey}, value: ${data[fieldKey]}`);

                // Create a new div for each field
                const fieldDiv = document.createElement('div');
                fieldDiv.id = `data-display-${i}`;
                fieldDiv.classList.add('disadvantage-item');

                // Create a paragraph for the field content
                const p = document.createElement('p');
                p.textContent = data[fieldKey];
                fieldDiv.appendChild(p);

                // Append the fieldDiv to the container
                container.appendChild(fieldDiv);
            } else {
                console.log(`Field not found: ${fieldKey}`);
            }
        }

        // If no data was found for any fields, show a message
        
    } 
};
