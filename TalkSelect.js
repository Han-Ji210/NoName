function getRandomMessageIndex(textArrayLength) {
    return Math.floor(Math.random() * textArrayLength);
}

function loadLastMessages() {
    const contactLinks = document.querySelectorAll('.contact-link');
    // let messageIndexParams = '';

    contactLinks.forEach((contactLink, index) => {
        const contactId = contactLink.dataset.contactId;
        const contact = dataset[contactId];
        const lastMessageElement = contactLink.querySelector('.last-message');

        const selectedMessageIndex = getRandomMessageIndex(contact.text.length);
        console.log(`Contact ID: ${contactId}, Selected Message Index: ${selectedMessageIndex}`);
        const lastMessage = contact.text[selectedMessageIndex];
        lastMessageElement.textContent = lastMessage;

        // messageIndexParams += selectedMessageIndex.toString().padStart(2, '0');
        
        const originalHref = contactLink.getAttribute('href');
        const newHref = `${originalHref}&messageIndex=${selectedMessageIndex}`;
        contactLink.setAttribute('href', newHref);
    });

    // console.log(`MessageIndexParams: ${messageIndexParams}`);
}


window.onload = loadLastMessages;
