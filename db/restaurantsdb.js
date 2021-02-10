db.restaurants.insertMany([{
        name: 'Hostelería Dromedarios',
        forks: '5',
        img: 'img/dromedario-rest.jpg',
        phone: '658452399',
        price: '€€€',
        foods: ['ensalada cesar', 'spaguetis carbonara', 'pescaíto frito', 'kebab', 'tostadas'],
        services: ['baños', 'bolos'],
        category: 'hostelry',
        address: {
            type: 'PostalAddress',
            addressLocality: 'Palma de Mallorca',
            addressRegion: 'Islas Baleres',
            postalCode: 7004,
            streetAddress: "Carrer Francesc Alzamora, 198, Baixos Esquerra"
        },
        comments: [{
            author: 'Matías Prats',
            comment: 'Gran restaurante, mejores kebabs',
            stars: 5,
            date: Date()
        },
        {
            author: 'David Broncano',
            comment: 'Me flipan los Kebabs estos moros son la ostia',
            stars: 4,
            date: 'Fri Feb 05 2021 23:30:26 GMT+0000 (UTC)'
        }
    ]
    },
    {
        name: 'La Casa del Goloso',
        forks: '4',
        img: 'img/goloso.jpg',
        phone: '658411355',
        price: '€€',
        foods: ['Creppes', 'Gofres', 'Tartas', 'Donetes', 'tostadas'],
        services: ['baños'],
        category: 'hostelry',
        address: {
            type: 'PostalAddress',
            addressLocality: 'Palma de Mallorca',
            addressRegion: 'Islas Baleres',
            postalCode: 07014,
            streetAddress: "Carrer de Caracas, 6A, 07007 Palma, Illes Balears"
        },
        comments: [{
            author: 'Susana Grisón',
            comment: 'El mejor restaurante para comidas poco saludables',
            stars: 5,
            date: Date()
        },
        {
            author: 'Lucía La Piedra',
            comment: 'El mejor restaurante para comidas poco saludables',
            stars: 2,
            date: 'Fri Feb 05 2021 23:30:26 GMT+0000 (UTC)'
        }
    ]
    },
    {
        name: 'La Pescaderia',
        forks: '5',
        img: 'img/pescado.jpg',
        phone: '123456789',
        price: '€€€€€',
        foods: ['Salmón', 'Cap Roig', 'Cabiar', 'Dorada', 'Bacalao'],
        services: ['baños', 'Salón para descansar'],
        category: 'hostelry',
        address: {
            type: 'PostalAddress',
            addressLocality: 'Palma de Mallorca',
            addressRegion: 'Islas Baleres',
            postalCode: 07016,
            streetAddress: "Andrea Doria, 6A, 07016 Palma, Illes Balears"
        },
        comments: [{
            author: 'Monolo Lama',
            comment: 'El gourmet del pescado está aquí',
            stars: 5,
            date: Date()
        },
        {
            author: 'Paco Tomás',
            comment: 'La comida es buena, pero el servicio puede mejorar...',
            stars: 2,
            date: 'Fri Feb 05 2021 23:30:26 GMT+0000 (UTC)'
        }
    ]
    },
    {
        name: 'El Paraíso de los Carnívoros',
        forks: '5',
        img: 'img/carne.jpg',
        phone: '987654321',
        price: '€€€€',
        foods: ['Ternera', 'Carne de vaca', 'Vacuno', 'Pollo'],
        services: ['baños'],
        category: 'hostelry',
        address: {
            type: 'PostalAddress',
            addressLocality: 'Palma de Mallorca',
            addressRegion: 'Islas Baleres',
            postalCode: 07016,
            streetAddress: "Andrea Doria, 6A, 07016 Palma, Illes Balears"
        },
        comments: [{
            author: 'Ricardo Castella',
            comment: 'Si te gusta la carne, es el mejor restaurante de carne de la ciudad',
            stars: 5,
            date: Date()
        },
        {
            author: 'Jorge Ponce',
            comment: 'Es decente....',
            stars: 3,
            date: Date()
        }
    ]
    },
    {
        name: 'Desayunos Saludables',
        forks: '3',
        img: 'img/saludables.jpg',
        phone: '111111111',
        price: '€€',
        foods: ['Tostadas', 'Cafés', 'Batidos', 'Infusiones'],
        services: ['baños'],
        category: 'hostelry',
        address: {
            type: 'PostalAddress',
            addressLocality: 'Palma de Mallorca',
            addressRegion: 'Islas Baleres',
            postalCode: '07018',
            streetAddress: "Juan Miró, 6A, 07016 Palma, Illes Balears"
        },
        comments: [{
            author: 'Juan Manuel',
            comment: 'El mejor restaurante para desayuna, con buenas vistas',
            stars: 3,
            date: Date()
        },
        {
            author: 'Jaume Lopez',
            comment: 'Sitio agradable y familiar',
            stars: 4,
            date: Date()
        }
    ]
    }
])