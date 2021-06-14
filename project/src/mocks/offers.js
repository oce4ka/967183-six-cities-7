const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers =
  [
    {
      'bedrooms': 3,
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10,
        },
        'name': 'Amsterdam',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 1,
      'images': ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg?', 'img/apartment-03.jpg?', 'img/apartment-01.jpg?'],
      'is_favorite': false,
      'is_premium': true,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/1.png',
      'price': 120,
      'rating': 4.5,
      'title': 'Beautiful & luxurious studio at great location',
      'type': 'Private room',
    },
    {
      'bedrooms': 2,
      'city': {
        'location': {
          'latitude': 50.370216,
          'longitude': 8.895168,
          'zoom': 10,
        },
        'name': 'Brussels',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 2,
      'images': ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg?', 'img/apartment-03.jpg?', 'img/apartment-01.jpg?'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/1.png',
      'price': 80,
      'rating': 4.8,
      'title': 'Wood and stone place',
      'type': 'Apartment',
    },
    {
      'bedrooms': 1,
      'city': {
        'location': {
          'latitude': 47.370216,
          'longitude': 10.895168,
          'zoom': 10,
        },
        'name': 'Paris',
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
      'host': {
        'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
        'id': 3,
        'is_pro': true,
        'name': 'Angelina',
      },
      'id': 3,
      'images': ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg?', 'img/apartment-03.jpg?', 'img/apartment-01.jpg?'],
      'is_favorite': false,
      'is_premium': false,
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8,
      },
      'max_adults': 4,
      'preview_image': 'img/1.png',
      'price': 132,
      'rating': 3.8,
      'title': 'Canal View Prinsengracht',
      'type': 'Apartment',
    },
  ];

export default offers;
