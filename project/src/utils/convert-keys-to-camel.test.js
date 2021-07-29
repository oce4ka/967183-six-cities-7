import convertKeysToCamel from './convert-keys-to-camel';

describe('Utils: convert keys of data received to Camel Case', () => {
  const mockObject = {
    'is_favorite': false,
    'is_premium': false,
  };
  const mockArray = [
    {
      'is_favorite': false,
      'is_premium': false,
    },
    {
      'is_favorite': false,
      'is_premium': false,
    },
  ];

  const mockObjectCamelCase = {
    'isFavorite': false,
    'isPremium': false,
  };
  const mockArrayCamelCase = [
    {
      'isFavorite': false,
      'isPremium': false,
    },
    {
      'isFavorite': false,
      'isPremium': false,
    },
  ];

  describe('Function: convertKeysToCamel', () => {
    it('should return Object in Camel Case', () => {
      expect(convertKeysToCamel(mockObject)).toStrictEqual(mockObjectCamelCase);
    });

    it('should return Array in Camel Case', () => {
      expect(convertKeysToCamel(mockArray)).toStrictEqual(mockArrayCamelCase);
    });
  });
});
