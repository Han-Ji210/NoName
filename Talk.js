document.addEventListener('DOMContentLoaded', function() {
    const smishingExamples = {
     'contact1': { name: '은행 사칭 경고', image: 'smishing1.jpg', messages: [
         {text: "고객님의 계좌가 동결되었습니다. 아래 링크를 클릭하여 확인해 주세요.", from: "sender"},
         {text: "긴급 공지: 카드가 임의로 사용되었습니다. 확인 바랍니다.", from: "sender"}
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
    const optionsContainer = document.getElementById('options-container');

    const options = [
        '선택지 1',
        '선택지 2',
        '선택지 3',
        '선택지 4'
    ];

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => handleOptionClick(option));
        optionsContainer.appendChild(button);
    });
});

function handleOptionClick(option) {
    console.log(`선택한 옵션: ${option}`);
    // 선택한 옵션에 따라 동작을 정의하세요.
}
