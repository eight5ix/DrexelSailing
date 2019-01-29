import firebase from '@/firebase';
import db from '@/db'

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
};

const actions = {
  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    db.collection('users').doc(setUser.id).set(setUser);
    commit('setUser', setUser);
  // async logout() {
  //   await firebase.auth().signOut();
  // },
}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
