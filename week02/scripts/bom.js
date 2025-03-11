// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Corrected ID

// Add event listener for the Add Chapter button
button.addEventListener('click', function () {
    // Get input value and trim whitespace
    const chapter = input.value.trim();

    // Check if the input is empty
    if (chapter !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = chapter;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Add class for styling

        // Append delete button to list item
        li.append(deleteButton);
        // Append list item to unordered list
        list.append(li);

        // Add event listener to delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the list item
            input.focus(); // Refocus input field
        });

        // Clear the input field and refocus
        input.value = '';
    } else {
        alert('Please enter a valid chapter name!'); // Notify user if input is empty
    }

    // Ensure input remains focused
    input.focus();
});
