const app = new Vue({
    el: '#app',
    data: {
        phone: '+1(305) 1234-5678',
        email: 'hello@example.com',
        businessAria: [
            {
                name: 'card_tecnology',
                image: './dist/img/gallery-3.jpg',
                title: 'Technology',
                text: `Focused on developing techology solutions adapted to out client's needs.`,
            },
            {
                name: 'card_transport',
                image: './dist/img/gallery-5.jpg',
                title: 'Transport',
                text: `We develop operational strategies to improve logical efficiency.`
            }
        ],
        diagramma: [
            {
                name: 'Leadership',
                descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                valore: 0
            },
            {
                name: 'Psychology',
                descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                valore: 0
            },
            {
                name: 'Flexibility',
                descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                valore: 1
            }

        ],
        partners: './dist/img/logo-',
        latests: [
            {
                title: 'Increasing creativity is possible for ereryone',
                image: './dist/img/news-1.jpg'
            },
            {
                title: 'Because market reserch is part of the business plan',
                image: './dist/img/news-2.jpg'
            },
            {
                title: 'Work from home is now a trend',
                image: './dist/img/news-3.jpg'
            },
        ]
    }
});