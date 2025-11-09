const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Example Cloud Function: API Health Check
exports.healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).send("✅ visuEats API is healthy and running!");
});

// Example Firestore Trigger: Log user creation
exports.logUserCreation = functions.auth.user().onCreate((user) => {
  console.log(`New user created: ${user.email}`);
});
