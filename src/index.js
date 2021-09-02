import './sass/main.scss';
import * as basicLightbox from 'basiclightbox'
import templateCard from './templates/card'

const getButton = document.querySelector('.btn');
getButton.addEventListener('click', onClick);

// const img = 'https://pixabay.com/ru/photos/%d0%ba%d0%be%d1%88%d0%ba%d0%b0-%d0%bd%d0%be%d1%81-%d0%b4%d0%b5%d1%82%d0%b0%d0%bb%d1%8c-%d0%bc%d0%be%d1%80%d0%b4%d0%b0-%d1%83%d1%81%d1%8b-%d0%bc%d0%b0%d0%ba%d1%80%d0%be%d1%81-5887341/';

function onClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`
        <h2>Hello</h2>
        <img class = "img" src="./images/kartinki_programmista.jpg" alt="" width="800" height="600">
    `);

    // const instance = basicLightbox.create(
    //     templateCard
    // );

    instance.show();
};

