import {isUserLoggedIn} from './check-auth';

describe('Utils: returns if user is logged in true/false', () => {
  describe('Function: isUserLoggedIn', () => {
    it('should return true if status is AUTH', () => {
      expect(isUserLoggedIn('AUTH')).toStrictEqual(true);
    });

    it('should return false if status is UNKNOWN, NO_AUTH, everything else', () => {
      expect(isUserLoggedIn('UNKNOWN')).toStrictEqual(false);
      expect(isUserLoggedIn('NO_AUTH')).toStrictEqual(false);
      expect(isUserLoggedIn('blablabla')).toStrictEqual(false);
    });
  });
});
