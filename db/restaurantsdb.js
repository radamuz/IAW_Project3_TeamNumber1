db.restaurant.insertOne({
    name: 'Hostelería Dromedarios',
    forks: '5',
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