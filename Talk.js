document.addEventListener('DOMContentLoaded', function() {
    function getContactId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('contactId');
    }

    function getMessageIndex() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('messageIndex')); // 문자열을 정수로 변환
    }

    const contactId = getContactId();
    const messageIndex = getMessageIndex(); // messageIndex를 가져옴
    if (contactId && dataset[contactId]) {
        const contact = dataset[contactId];
        document.getElementById('contact-name').textContent = contact.name;
        document.getElementById('contact-image').src = contact.image;
    /*
    if (messageIndex !== null && !isNaN(messageIndex) && messageIndex >= 0 && messageIndex < contact.text.length) {
        const selectedMessageIndex = messageIndex;
    } else if (contact.selectedMessageIndex === null || isNaN(contact.selectedMessageIndex) || contact.selectedMessageIndex < 0 || contact.selectedMessageIndex >= contact.text.length) {
        contact.selectedMessageIndex = Math.floor(Math.random() * contact.text.length);
    }
    console.log()
    */
        const messageContainer = document.getElementById('message-container');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = contact.text[messageIndex];
        messageContainer.appendChild(messageElement);

        messageContainer.style.height = "auto";
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
            const optionsPlaceholder = document.querySelector('.options-placeholder');
            optionsPlaceholder.innerHTML = ''; 
            options.forEach(option => {
                const optionDiv = document.createElement('div'); 
                optionDiv.classList.add('option'); 
                const optionLink = document.createElement('a'); 

                optionLink.href = '#'; 
                
                optionLink.textContent = option; 
                optionDiv.appendChild(optionLink); 
                optionsPlaceholder.appendChild(optionDiv);
            });
        }
    }
    
    
});
