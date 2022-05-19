/*
Rules
1 HTTP triggers - send a response at the end
2Background triggers return a promise
*/
import * as functions from  'firebase-functions'
import * as admin from  'firebase-admin'

export const hello = functions.https.onRequest( async (req,res) => {

    try {
        const snapshot = await admin.firestore().doc('path').get()
        const data = snapshot.data()
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})

//Fireabse trigger

 export const trigger = functions.firestore.document("doc")
 .onUpdate(change => {
     // change has two parameters before and after
     const after = change.after.data()
     const payload = {
         //set object
     }
         //FCM firebase cloud messaging, no dejan registro despues que se ejecutan, FCM va a loggear el error y ya
    return admin.messaging().sendToTopic("db ref", payload)
 })