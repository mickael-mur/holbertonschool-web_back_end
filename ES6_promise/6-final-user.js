import uploadPhoto from './5-photo-reject.js';
import signUpUser from './4-user-promise.js';


export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
  .then((results) => {
    return results.map((result) => {
      if (result.status === 'rejected') {
        return {
          status: result.status,
          value: result.reason,
        };
      }
      return {
        status: result.status,
        value: result.value,
      };
    });
  });
}
