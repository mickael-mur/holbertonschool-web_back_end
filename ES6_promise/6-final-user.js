import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
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
