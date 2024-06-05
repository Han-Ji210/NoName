function getRandomMessageIndex(messages) {
    return Math.floor(Math.random() * messages.length);
}

function loadLastMessages() {
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(contactLink => {
        const contactId = contactLink.dataset.contactId;
        const contact = dataset[contactId];
        const lastMessageElement = contactLink.querySelector('.last-message');

        if (contact.selectedMessageIndex === null) {
            contact.selectedMessageIndex = getRandomMessageIndex(contact.text);
        }

        const lastMessage = contact.text[contact.selectedMessageIndex];
        lastMessageElement.textContent = lastMessage;
    });
}

window.onload = loadLastMessages;