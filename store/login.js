import firebase from "~/plugins/firebase"

export const actions = {
    login(context,router){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((res)=>{
            router.push("/")
        })
    }
}