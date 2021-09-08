import firebase from "~/plugins/firebase";

const db = firebase.firestore();
const chatRef = db.collection("chat");
const chatMes = [];

export const state = () => ({
  chat: ["a"]
});

export const getters = {
  chatData(state) {
    return state.chat;
  }
};

export const actions = {
  post(context, comment) {
    // dupulicate = false;
    if (comment) {
      chatRef.add({
        message: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  },

  // snapshot(context) {
  //   if (dupulicate === false) {
  //     chatRef.onSnapshot(snapshot => {
  //       console.log(snapshot);
  //       dupulicate = true;
  //     });
  //   }
  // }

  // snapshot(context) {
  //   chatRef.onSnapshot(snapshot => {
  //     if (dupulicate === false) {
  //       snapshot.docChanges().forEach(change => {
  //         console.log(change.doc.data());
  //       });
  //       dupulicate = true
  //     } else {
  //       console.log("return");
  //       return;
  //     }
  //   });
  // }

  snapshot(context) {
    chatRef.orderBy("timestamp", "asc").onSnapshot(snapshot => {
      // console.log(chatMes);
      snapshot.docChanges().forEach(change => {
        console.log(change.doc.data().timestamp);
        if (change.doc.data().timestamp === null) {
          console.log("return");
          return;
        } else {
          chatMes.push(change.doc.data().message);
          // console.log(chatMes);
          context.commit("getChatdata", chatMes);
        }
      });
    });
  }
};

export const mutations = {
  getChatdata(state, chatMes) {
    // state.chat = chatMes
    console.log(state.chat);
    console.log(chatMes);
    // state.chat.push(...chatMes)
  }
};
