import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])  // Appel
    .then((photo, user) => {
      console.log([body, firstName, lastName])
      // résultats est un tableau : [photo, user]
    })
    .catch(() => {
      console.log('Signup system offline')
    });
}
