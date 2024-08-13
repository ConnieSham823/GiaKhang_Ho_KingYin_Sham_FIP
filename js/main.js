document.addEventListener('DOMContentLoaded', () => {
    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxCloseButton = document.getElementById('lightbox-close');
    const pdtLightbox = document.getElementById('pdt-lightbox');
    const pdtLightboxCloseButton = document.getElementById('pdt-lightbox-close');

    // Lightbox Texts
    const lightboxTexts = {
        'bubble-O': {
            title: 'Orbitz Secret',
            content: 'Discover our secret, and we hope you enjoy and have a happy time!',
            imageUrl: 'images/lightbox-800.png'
        },
        'promotion': {
            title: 'Enjoy Now',
            content: 'Grab this special offer and enjoy our latest promotion!',
            imageUrl: 'images/promotion-800.png'
        }
    };

    // Popover Content
    const popoverTexts = {
        'mango-icon': 'A tropical fruit with a sweet, juicy flavor.',
        'lychee-icon': 'A small, round fruit with a delicate, floral taste.',
        'peach-icon': 'A juicy fruit with a fuzzy skin and sweet flesh.',
        'pearl-icon': 'Chewy tapioca balls used in bubble tea.',
        'coco-icon': 'A chewy, slightly sweet jelly made from coconut.',
        'glass-icon': 'A translucent jelly often used in desserts.'
    };

    function showLightbox(lightboxElement, key) {
        if (lightboxElement) {
            lightboxElement.classList.add('show');
            const titleElement = lightboxElement.querySelector('h3');
            const contentElement = lightboxElement.querySelector('p');
            const imageElement = lightboxElement.querySelector('img');

            if (titleElement) {
                titleElement.textContent = lightboxTexts[key]?.title || 'Default Title';
                titleElement.classList.remove('hidden');
            }
            if (contentElement) {
                contentElement.textContent = lightboxTexts[key]?.content || 'Default Content';
                contentElement.classList.remove('hidden');
            }
            if (imageElement) {
                imageElement.src = lightboxTexts[key]?.imageUrl || 'default-image.png';
                imageElement.classList.remove('hidden');
            }
        }
    }

    function closeLightbox(lightboxElement) {
        if (lightboxElement) {
            lightboxElement.classList.remove('show');
        }
    }

    // Close Buttons
    if (lightboxCloseButton) {
        lightboxCloseButton.addEventListener('click', () => closeLightbox(lightbox));
    }

    if (pdtLightboxCloseButton) {
        pdtLightboxCloseButton.addEventListener('click', () => closeLightbox(pdtLightbox));
    }

    // Show Lightboxes
    const bubbleOElement = document.getElementById('bubble-O');
    if (bubbleOElement) {
        bubbleOElement.addEventListener('click', () => showLightbox(lightbox, 'bubble-O'));
    } else {
        console.warn('Element with ID "bubble-O" not found.');
    }

    document.querySelectorAll('.enjoy-promotion').forEach(element => {
        element.addEventListener('click', () => showLightbox(pdtLightbox, 'promotion'));
    });

    // Popover Functionality
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        const popoverText = icon.previousElementSibling;
        const iconId = icon.id;

        if (popoverTexts[iconId]) {
            icon.addEventListener('mouseover', () => showPopover(popoverText, popoverTexts[iconId]));
            icon.addEventListener('mouseout', () => hidePopover(popoverText));
        } else {
            console.warn(`No popover text defined for icon with ID "${iconId}".`);
        }
    });

    function showPopover(popoverTextElement, text) {
        if (popoverTextElement) {
            popoverTextElement.textContent = text;
            popoverTextElement.classList.remove('hidden');
        }
    }

    function hidePopover(popoverTextElement) {
        if (popoverTextElement) {
            popoverTextElement.classList.add('hidden');
        }
    }
});
