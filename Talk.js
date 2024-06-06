document.addEventListener('DOMContentLoaded', function() {
    function getContactId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('contactId');
    }

    function getMessageIndex() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('messageIndex'));
    }

    const contactId = getContactId();
    const messageIndex = getMessageIndex();
    if (contactId && dataset[contactId]) {
        const contact = dataset[contactId];
        document.getElementById('contact-name').textContent = contact.name;
        
        if (messageIndex !== null && !isNaN(messageIndex) && messageIndex >= 0 && messageIndex < contact.text.length) {
            const messageContainer = document.getElementById('message-container');
            const messageElement = document.createElement('a');
            messageElement.classList.add('message');
            messageElement.textContent = contact.text[messageIndex];
            messageElement.href = 'LinkClick.html';
            messageContainer.appendChild(messageElement);

            messageContainer.style.height = "auto";
        } else {
            console.log('유효하지 않은 messageIndex입니다.');
        }
    } else {
        console.log('해당하는 contactId 또는 messageIndex가 존재하지 않습니다.');
    }

    const chatInputContainer = document.querySelector('.chat-input-container');
    chatInputContainer.addEventListener('click', function() {
        displayOptions();
    });

    function displayOptions() {
        const contactId = getContactId(); 
        if (contactId && dataset[contactId]) {
            const options = dataset[contactId].responses; 
            const adequacyLevels = dataset[contactId].adequacyLevel;
            const optionsPlaceholder = document.querySelector('.options-placeholder');
            optionsPlaceholder.innerHTML = ''; 
            options.forEach((option, index) => {
                const optionLink = document.createElement('a'); 
                optionLink.classList.add('option'); // div 대신 a 태그에 직접 클래스 추가
    
                optionLink.href = adequacyLevels[index] === 1 ? 'respond_1.html' : 'respond_0.html';
                
                optionLink.textContent = option; 
                optionsPlaceholder.appendChild(optionLink); // 직접 a 태그를 optionsPlaceholder에 추가
            });
        }
    }
    
});