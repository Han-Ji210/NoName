// URL에서 파라미터 값을 얻는 함수
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 대화 내용을 로드하는 함수
function loadMessages(contactId) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = ''; // 기존 내용을 클리어

    // 예시 데이터, 실제 애플리케이션에서는 서버로부터 데이터를 불러와야 합니다.
    const messages = {
        "contact1": [
            "안녕, 어떻게 지내?",
            "오늘 저녁에 어때?"
        ],
        "contact2": [
            "프로젝트 준비됐어?",
            "내일 회의에서 만나자"
        ]
        // 다른 대화 상대의 메시지들...
    };

    // 선택된 대화 상대의 메시지 로드
    const selectedMessages = messages[contactId];
    if (selectedMessages) {
        selectedMessages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = message;
            messageContainer.appendChild(messageDiv);
        });
    } else {
        // 대화 상대가 유효하지 않을 때의 처리
        messageContainer.textContent = "선택된 대화 상대의 메시지를 불러올 수 없습니다.";
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    const contactId = getQueryParam('contactId');
    if (contactId) {
        loadMessages(contactId);
    } else {
        // URL 파라미터에 contactId가 없을 때의 처리
        document.getElementById('message-container').textContent = "대화 상대가 지정되지 않았습니다.";
    }
});
