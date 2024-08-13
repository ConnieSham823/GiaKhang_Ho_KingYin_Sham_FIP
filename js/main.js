document.addEventListener('DOMContentLoaded', () => {
    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxCloseButton = document.getElementById('lightbox-close');
    const pdtLightbox = document.getElementById('pdt-lightbox');
    const pdtLightboxCloseButton = document.getElementById('pdt-lightbox-close');
    
    // Popover Content
    const popoverTexts = {
        'mango-icon': 'A tropical fruit with a sweet, juicy flavor.',
        'lychee-icon': 'A small, round fruit with a delicate, floral taste.',
        'peach-icon': 'A juicy fruit with a fuzzy skin and sweet flesh.',
        'pearl-icon': 'Chewy tapioca balls used in bubble tea.',
        'coco-icon': 'A chewy, slightly sweet jelly made from coconut.',
        'glass-icon': 'A translucent jelly often used in desserts.'
    };

    function showLightbox(lightboxElement) {
        if (lightboxElement) {
            lightboxElement.classList.add('show');
        }
    }

    function closeLightbox(lightboxElement) {
        if (lightboxElement) {
            lightboxElement.classList.remove('show');
        }
    }

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

    // Lightbox for Enjoy Now
    if (lightboxCloseButton) {
        lightboxCloseButton.addEventListener('click', () => closeLightbox(lightbox));
    }

    if (pdtLightboxCloseButton) {
        pdtLightboxCloseButton.addEventListener('click', () => closeLightbox(pdtLightbox));
    }

    // Lightbox for Bubble O
    const bubbleOElement = document.getElementById('bubble-O');
    if (bubbleOElement) {
        bubbleOElement.addEventListener('click', () => showLightbox(lightbox));
    } else {
        console.warn('Element with ID "bubble-O" not found.');
    }

    document.querySelectorAll('.enjoy-promotion').forEach(element => {
        element.addEventListener('click', () => showLightbox(pdtLightbox));
    });

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
});
