document.addEventListener('DOMContentLoaded', function() {

const tabs = [
    { tab: document.querySelector('#horloge-tab'), content: document.querySelector('#horloge') },
    { tab: document.querySelector('#chrono-tab'), content: document.querySelector('#chronometre') },
    { tab: document.querySelector('#minuteur-tab'), content: document.querySelector('#minuteur') },
    { tab: document.querySelector('#reveil-tab'), content: document.querySelector('#reveil') }
];

tabs.forEach((e) => {

    e.tab.addEventListener('click', function() {

        e.content.style.display = 'block';

        tabs.forEach((e) => {
            if (e.tab !== this) {
                e.content.style.display = 'none';
            }
        });
    });
});

});