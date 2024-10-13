// Example data for search suggestions
const suggestionsData = [
    "Arrays in JavaScript",
    "Sorting Algorithms",
    "DSA - Dynamic Programming",
    "HTML Basics",
    "CSS Flexbox",
    "Binary Search Trees",
    "Bubble Sort",
    "Merge Sort",
    "Quick Sort",
];

// Function to show suggestions
function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (value) {
        // Filter and show matching suggestions
        const filteredSuggestions = suggestionsData.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.onclick = () => {
                document.getElementById('search-input').value = suggestion;
                suggestionsBox.style.display = 'none'; // Hide suggestions on click
            };
            suggestionsBox.appendChild(li);
        });

        // Display suggestions box if there are suggestions
        if (filteredSuggestions.length > 0) {
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none'; // Hide suggestions if input is empty
    }
}
