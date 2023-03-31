const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.getToken = functions.https.onCall(async (data, context) => {
  return admin
      .auth()
      .createCustomToken(data.uid)
      .then((customToken) => {
        return customToken;
      })
      .catch((error) => {
        return null;
      });
});
