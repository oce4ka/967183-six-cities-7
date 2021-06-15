import convertKeysToCamel from '../utils/convert-keys-to-camel.js';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews =
  [
    {
      'comment': 'A huge castle full of ghosts.',
      'date': '2019-05-08T14:13:56.569Z',
      'id': 1,
      'rating': 3.2,
      'user': {
        'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
        'id': 4,
        'is_pro': false,
        'name': 'Mary',
      },
    },
    {
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'date': '2019-10-12T14:13:56.569Z',
      'id': 2,
      'rating': 4.9,
      'user': {
        'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
        'id': 4,
        'is_pro': false,
        'name': 'Max',
      },
    },
    {
      'comment': 'Did you see the rabbit?',
      'date': '2019-05-08T14:13:56.569Z',
      'id': 3,
      'rating': 4.5,
      'user': {
        'avatar_url': `${AVATAR_URL}?rnd=${Math.random()}`,
        'id': 4,
        'is_pro': false,
        'name': 'Alice',
      },
    },
  ];

export default convertKeysToCamel(reviews);
