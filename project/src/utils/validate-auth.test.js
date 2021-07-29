import {validateAuth} from './validate-auth';

describe('Business Logic: convert keys of data received to Camel Case', () => {

  const mockValidData = {
    email: 'asdasd@adsasd.asd',
    password: 'sdfsdfs',
  };
  const mockInvalidData = {
    password: 'sdfsdfs',
  };
  const mockInvalidEmail = {
    email: 'asdasdadsasd.asd',
    password: 'sdfsdfs',
  };
  const mockInvalidPassword = {
    email: 'asdasdadsasd.asd',
    password: '     ',
  };

  describe('Function: validateAuth', () => {
    it('should return true when data is valid', () => {
      expect(validateAuth(mockValidData)).toStrictEqual(true);
    });

    it('should return false when email is not valid', () => {
      expect(validateAuth(mockInvalidEmail)).toStrictEqual(false);
    });

    it('should return false when password is not valid', () => {
      expect(validateAuth(mockInvalidPassword)).toStrictEqual(false);
    });

    it('should return false when data is not complete', () => {
      expect(validateAuth(mockInvalidData)).toStrictEqual(false);
    });
  });
});
