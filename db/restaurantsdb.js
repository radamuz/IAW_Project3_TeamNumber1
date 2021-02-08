db.restaurants.insertOne({
    name: 'Hostelería Dromedarios',
    forks: '5',
    img: 'img/dromedario-rest.jpg',
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
    comments: [
        {
            author: 'Matías Prats',
            comment: 'Gran restaurante, mejores kebabs',
            stars: 5,
            date: Date()
        }
    ]
  })

  db.restaurants.insertMany([
    {
        name: 'La Casa del Goloso',
        forks: '4',
        img: 'img/goloso.jpg',
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
        comments: [
            {
                author: 'Susana Grisón',
                comment: 'El mejor restaurante para comidas poco saludables',
                stars: 5,
                date: Date()
            }
        ]
      },
      {
        name: 'La Pescaderia',
        forks: '5',
        img: 'img/pescado.jpg',
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
        comments: [
            {
                author: 'Monolo Lama',
                comment: 'El gourmet del pescado está aquí',
                stars: 5,
                date: Date()
            }
        ]
      },
      {
        name: 'El Paraíso de los Carnívoros',
        forks: '5',
        img: 'img/carne.jpg',
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
        comments: [
            {
                author: 'Ricardo Castella',
                comment: 'Si te gusta la carne, es el mejor restaurante de carne de la ciudad',
                stars: 5,
                date: Date()
            }
        ]
      },
      {
        name: 'Desayunos Saludables',
        forks: '3',
        img: 'img/saludables.jpg',
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
        comments: [
            {
                author: 'Juan Manuel',
                comment: 'El mejor restaurante para desayuna, con buenas vistas',
                stars: 3,
                date: Date()
            }
        ]
      }
      
      
  ])