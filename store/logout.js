import firebase from "~/plugins/firebase";

export const actions = {
  logout(context, router) {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log('signout')
            user.delete().then(() => {
              router.push("/login");
            });
          });
      }
      unsubscribe();
    });
  }
};
