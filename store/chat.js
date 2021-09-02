import firebase from "~/plugins/firebase";

const db = firebase.firestore();
const chatRef = db.collection("chat");

export const state = () => ({
  chat: []
});

export const actions = {
  post(context, comment) {
    if (comment) {
      chatRef.add({
        message: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  },
  snapshot(context) {
    const chatMes = [];
    const doneId = [];
    chatRef.onSnapshot(snapshot => {
      // console.log(snapshot)
      snapshot.docChanges().forEach(change => {
        if (!doneId.includes(change.doc.id)) {
          console.log(change.doc.id);
          chatMes.push(change.doc.data().message);
          console.log(chatMes);
          doneId.push(change.doc.id);
        }else{
          return
        }
        // chatMes.push(change.doc.data().message)
        // console.log(chatMes)
      });
    });
  }
};
