function countWords() {
    // Get the text from the textarea
    const text = document.getElementById("inputText").value;

    // Split the text into words based on spaces or new lines
    const words = text.trim().split(/\s+/);

    // Calculate the word count
    const wordCount = words.filter(word => word.length > 0).length;

    // Display the word count
    document.getElementById("wordCount").textContent = `Word Count: ${wordCount}`;
}
