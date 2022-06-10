document.addEventListener('DOMContentLoaded', function() {

const tabs = [
    { tab: document.querySelector('#horloge-tab'), content: document.getElementById('#horloge') },
    { tab: document.querySelector('#chrono-tab'), content: document.getElementById('#chronometre') },
    { tab: document.querySelector('#minuteur-tab'), content: document.getElementById('#minuteur') },
    { tab: document.querySelector('#reveil-tab'), content: document.getElementById('#reveil') }
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