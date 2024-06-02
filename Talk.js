document.addEventListener('DOMContentLoaded', function() {
    const smishingExamples = {
     'contact1': { name: '은행 사칭 경고', image: 'smishing1.jpg', messages: [
         {text: "고객님의 계좌가 동결되었습니다. 아래 링크를 클릭하여 확인해 주세요.", from: "sender"},
     ]},
     'contact2': { name: '택배 사칭 알림', image: 'smishing2.jpg', messages: [
         {text: "택배가 도착했습니다. 수령을 원하시면 링크를 클릭하세요.", from: "sender"},
         {text: "배송이 완료되었습니다. 배송 확인을 위해 링크를 클릭해주세요.", from: "sender"}
     ]},
 };

 
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
         messageElement.classList.add(msg.from === 'sender' ? 'message-sender' : 'message-receiver');
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
        // Check if options already exist
        if (!optionsPlaceholder.querySelector('.options')) {
            // Create a new div element to hold the options
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            
            // Options content with <a> tags
            optionsDiv.innerHTML = `
                <a href="#" class="option">Option 1</a>
                <a href="#" class="option">Option 2</a>
                <a href="#" class="option">Option 3</a>
            `;
            
            // Add the options right before the optionsPlaceholder
            optionsPlaceholder.appendChild(optionsDiv);
        }
    });
});
