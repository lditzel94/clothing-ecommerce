import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCyf7VQkCcw5GpNQsE4rA78ZYijGDiPRnU',
  authDomain: 'clothing-ecommerce-db-5ebff.firebaseapp.com',
  projectId: 'clothing-ecommerce-db-5ebff',
  storageBucket: 'clothing-ecommerce-db-5ebff.appspot.com',
  messagingSenderId: '152185032871',
  appId: '1:152185032871:web:34f2b4b9fbc9cb3801cb82',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
