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
        ]
    }
});