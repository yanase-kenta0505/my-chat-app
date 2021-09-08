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
            router.push("/login");
            user.delete().then(() => {
              console.log('delete')
            });
          });
      }
      unsubscribe();
    });
  }
};
