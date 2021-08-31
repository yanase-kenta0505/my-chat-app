import firebase from "~/plugins/firebase";

export const state = () => ({
  loginUserName: "unnown"
});

export const actions = {
  stateChange(context, router) {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.displayName);
        const userName = user.displayName;
        context.commit("loginUserName", userName);
      } else {
        router.push("login");
      }
      unsubscribe();
    });
  }
};

export const mutations = {
  loginUserName(state, userName) {
      state.loginUserName = userName
  }
};
