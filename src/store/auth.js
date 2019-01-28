
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
  async login({_, commit}) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const profile = await firebase.auth().signInWithPopup(provider);
    commit('setUser', {
      id: profile.uid,
      name: profile.displayName,
      image: profile.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()

    })
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
