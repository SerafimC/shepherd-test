// Shepherd.init("shp_a459a971ff264526729aad6efce9f2027cab86ce8e12ba5d9de08b5958e7c5a0");

// Shepherd.js tour setup
const tour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'shepherd-theme-arrows',
        scrollTo: { behavior: 'smooth', block: 'center' }
    }
});

tour.addStep({
    id: 'username',
    text: 'Enter your desired username here.',
    attachTo: {
        element: '#username',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'email',
    text: 'Enter your email address here.',
    attachTo: {
        element: '#email',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'password',
    text: 'Enter your password here.',
    attachTo: {
        element: '#password',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back
        },
        {
            text: 'Finish',
            action: tour.complete
        }
    ]
});

// Start the tour when the page is loaded
window.addEventListener('load', () => {
    tour.start();
});
