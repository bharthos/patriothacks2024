// script.js
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // You can replace this alert with actual search functionality
    } else {
        alert('Please enter a search term');
    }
});
// Assuming you have an input field with id 'searchBox' and a form or button triggering the search
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting

    let query = document.getElementById('searchBox').value.toLowerCase();
    let arrayKeywords = ['array', 'arrays', 'array topic', 'array data structure']; // Add related keywords

    if (arrayKeywords.some(keyword => query.includes(keyword))) {
        window.location.href = 'arrays.html'; // Redirect to arrays page
    } else {
        // Proceed with normal search logic if not array-related
    }
});
