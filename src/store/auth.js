// import firebase from '@/firebase'
//
// const state = {
//   user: {},
//   isLoggedIn = false
// };
//
// const actions = {
//   async login({context}){
//     const provider = new firebase.auth.GoogleAuthProvider();
//     const result = await firebase.auth().signInWithPopup(provider);
//     console.log(result.user);
//   }
// }
//
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
// };
import firebase from '@/firebase';

const state = {
  user: {},
  isLoggedIn: false,
};

// const mutations = {
//   setUser(state, user) {
//     if (user) {
//       state.user = user;
//       state.isLoggedIn = true;
//     } else {
//       state.user = {};
//       state.isLoggedIn = false;
//     }
//   },
// };

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result.user);
  }
  // async logout() {
  //   await firebase.auth().signOut();
  // },
};

export default {
  namespaced: true,
  state,
  actions,
};
