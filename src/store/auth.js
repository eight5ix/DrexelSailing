import firebase from '@/firebase';

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
  // Login With Google
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async logout() {
    await firebase.auth().signOut();
  },
  async loginWithPassword ({commit}, { email, password }){
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // {
  //     user => {
  //           const newUser = {
  //             id: user.uid,
  //           }
  //           commit('setUser', newUser)
  //         }
  //       )
  //   }
  // },

}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
