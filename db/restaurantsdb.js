db.users.insertMany([{
        _id: ObjectId('6023c7d41b1dbb94a6cf6eb7'),
        googleId: '112623209788304607675',
        admin: true,
        displayName: 'Raul Adamuz Cano',
        firstName: 'Raul',
        lastName: 'Adamuz Cano',
        image: 'https://lh3.googleusercontent.com/a-/AOh14Gg0sqaxJa8u6B3ulGATrR5nYkKBtK9vbNS_XdEF=s96-c',
        linkedIn: 'https://www.linkedin.com/in/raul-adamuz/',
        createdAt: ISODate('2021-02-10T11:47:32.058Z'),
        __v: 0
    },
    {
        _id: ObjectId('60269ae67d66ab1f2f4ec27f'),
        googleId: '112370529522259360058',
        admin: true,
        displayName: 'Jordi Ramon Alvarez Rebassa',
        firstName: 'Jordi Ramon',
        lastName: 'Alvarez Rebassa',
        image: 'https://lh3.googleusercontent.com/a-/AOh14Gio31n6ZunRG-UvMJ1KrQy2h4KCy0jhPna8krqv=s96-c',
        linkedIn: 'https://www.linkedin.com/in/jordi-alvarez-rebassa/',
        createdAt: ISODate('2021-02-12T15:12:38.429Z'),
        __v: 0
    }, {
        _id: ObjectId('60269b2b7d66ab1f2f4ec280'),
        googleId: '107178880345439495307',
        admin: true,
        displayName: 'Carlos Aguilar Illas',
        firstName: 'Carlos',
        lastName: 'Aguilar Illas',
        image: 'https://lh3.googleusercontent.com/a-/AOh14GgPv1M3TaD_AQDTjo0qI0iZPAdnhmmPz6niEWUJ=s96-c',
        linkedIn: 'https://www.linkedin.com/in/carlos-aguilar-illas/',
        createdAt: ISODate('2021-02-12T15:13:47.720Z'),
        __v: 0
    }
])

db.restaurants.insertMany([{
        name: 'Hostelería Dromedarios',
        forks: 5,
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
            postalCode: '7004',
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
        forks: 4,
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
            postalCode: '07014',
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
        forks: 5,
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
            postalCode: '07016',
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
        forks: 5,
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
            postalCode: '07016',
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
        forks: 3,
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