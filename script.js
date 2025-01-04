// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tweetUrlInput = document.getElementById('tweetUrl');
    const convertButton = document.getElementById('convertButton');
    const errorMessage = document.getElementById('errorMessage');
    const resultContainer = document.getElementById('resultContainer');
    const convertedUrlLink = document.getElementById('convertedUrl');

    const handleConvert = () => {
        // Reset UI
        errorMessage.classList.add('hidden');
        resultContainer.classList.add('hidden');
        
        const tweetUrl = tweetUrlInput.value;
        const match = tweetUrl.match(/status\/(\d+)/);

        if (match) {
            const tweetId = match[1];
            const notesUrl = `https://x.com/i/birdwatch/t/${tweetId}`;
            
            convertedUrlLink.href = notesUrl;
            convertedUrlLink.textContent = notesUrl;
            resultContainer.classList.remove('hidden');
        } else {
            errorMessage.textContent = 'נא להזין כתובת ציוץ תקינה המכילה "status/" ואחריו מזהה הציוץ.';
            errorMessage.classList.remove('hidden');
        }
    };

    // Event listeners
    convertButton.addEventListener('click', handleConvert);
    
    tweetUrlInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleConvert();
        }
    });

    // Clear error on input change
    tweetUrlInput.addEventListener('input', () => {
        errorMessage.classList.add('hidden');
    });
});