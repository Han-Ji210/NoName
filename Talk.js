document.addEventListener('DOMContentLoaded', function() {
 
 function getContactId() {
     const urlParams = new URLSearchParams(window.location.search);
     return urlParams.get('contactId');
 }

 const contactId = getContactId();
 if (contactId && smishingExamples[contactId]) {
     const example = smishingExamples[contactId];
     document.getElementById('contact-name').textContent = example.name;
     document.getElementById('contact-image').src = example.image;

     const messageContainer = document.getElementById('message-container');
     example.messages.forEach(msg => {
         const messageElement = document.createElement('div');
         messageElement.classList.add('message');
         messageElement.textContent = msg.text;
         messageContainer.appendChild(messageElement);
     });

     messageContainer.style.height = "auto";
 } else {
     console.log('해당하는 contactId가 존재하지 않습니다.');
 }
});



document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.querySelector('.input-box');
    const optionsPlaceholder = document.querySelector('.options-placeholder');
    
    inputBox.addEventListener('click', function() {
        if (!optionsPlaceholder.querySelector('.options')) {
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            
            
            optionsPlaceholder.appendChild(optionsDiv);
        }
    });
});