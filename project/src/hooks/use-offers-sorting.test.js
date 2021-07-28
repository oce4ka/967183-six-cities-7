import {renderHook, act} from '@testing-library/react-hooks';
import useOffersSorting from './use-offers-sorting';

let offers = null;
describe('Hook: useOffersSorting', () => {
  beforeAll(() => {
    offers = [
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": "Amsterdam"
        },
        "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
        "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
        "host": {
          "avatarUrl": "img/1.png",
          "id": 3,
          "isPro": true,
          "name": "Angelina"
        },
        "id": 1,
        "images": ["img/1.png", "img/2.png"],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": "img/1.png",
        "price": 120,
        "rating": 4.8,
        "title": "Beautiful & luxurious studio at great location",
        "type": "apartment"
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": "Amsterdam"
        },
        "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
        "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
        "host": {
          "avatarUrl": "img/1.png",
          "id": 3,
          "isPro": true,
          "name": "Angelina"
        },
        "id": 2,
        "images": ["img/1.png", "img/2.png"],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": "img/1.png",
        "price": 120,
        "rating": 4.8,
        "title": "Beautiful & luxurious studio at great location",
        "type": "apartment"
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": "Amsterdam"
        },
        "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
        "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
        "host": {
          "avatarUrl": "img/1.png",
          "id": 3,
          "isPro": true,
          "name": "Angelina"
        },
        "id": 3,
        "images": ["img/1.png", "img/2.png"],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": "img/1.png",
        "price": 120,
        "rating": 4.8,
        "title": "Beautiful & luxurious studio at great location",
        "type": "apartment"
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": "Paris"
        },
        "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
        "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
        "host": {
          "avatarUrl": "img/1.png",
          "id": 3,
          "isPro": true,
          "name": "Angelina"
        },
        "id": 4,
        "images": ["img/1.png", "img/2.png"],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": "img/1.png",
        "price": 120,
        "rating": 4.8,
        "title": "Beautiful & luxurious studio at great location",
        "type": "apartment"
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": "Paris"
        },
        "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
        "goods": ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
        "host": {
          "avatarUrl": "img/1.png",
          "id": 3,
          "isPro": true,
          "name": "Angelina"
        },
        "id": 5,
        "images": ["img/1.png", "img/2.png"],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": "img/1.png",
        "price": 120,
        "rating": 4.8,
        "title": "Beautiful & luxurious studio at great location",
        "type": "apartment"
      },
    ];
  });

  it('should return array with 3 elements', () => {
    const {result} = renderHook(() =>
      useOffersSorting(offers),
    );

    const [{offersArraySorted, sortingPayload, changeSortingPayload}] = result.current;

    expect(result.current).toHaveLength(1);
    expect(offersArraySorted).toBeInstanceOf(Array);
    expect(typeof sortingPayload).toBe('string')
    expect(changeSortingPayload).toBeInstanceOf(Function);
  });
});
