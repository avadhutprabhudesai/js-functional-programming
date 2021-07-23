import { getLanguageOf } from '.';

describe('Testing Either Monad', () => {
  const userWithoutAddress = {
    id: 1,
    name: 'John',
    title: 'Engineer',
  };
  const userWithAddress = Object.assign({}, userWithoutAddress, {
    address: {
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
    },
  });
  const loggedOutUser = null;
  it('should return Marathi as a first language of the user', () => {
    expect(getLanguageOf(userWithAddress)).toEqual('Marathi');
  });
  it('should return No language found for the user without address field', () => {
    expect(getLanguageOf(userWithoutAddress)).toEqual('No language found');
  });
  it('should return No language found for the loggedOutUser', () => {
    expect(getLanguageOf(loggedOutUser)).toEqual('No language found');
  });
});
