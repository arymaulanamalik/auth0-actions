/**
* Handler that will be called during the execution of a SendPhoneMessage flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {SendPhoneMessageAPI} api - Methods and utilities to help change the behavior of sending a phone message.
*/
exports.onExecuteSendPhoneMessage = async (event, api) => {
    const accountSid = event.secrets.TWILIO_ACCOUNT_SID;
    const authToken = event.secrets.TWILIO_AUTH_TOKEN;
    const phoneNumber = event.secrets.TWILIO_ACCOUNT_NUMBER;
    const recipientNumber = event.message_options.recipient;
    const client = require('twilio')(accountSid, authToken);
  
    const whatsapp = "whatsapp:"
    const recipientWA = whatsapp.concat(recipientNumber)
    const fromPhoneNumberWA = whatsapp.concat("+6285894598335") //number from whatsapp sender.
  
    var recipientWASpaceRemover = recipientWA.replace(/ /g, '');
  
    console.log(recipientWA, recipientWASpaceRemover)
    console.log(fromPhoneNumberWA)
    console.log(event.message_options.text)
  
    if (event.message_options.message_type === "sms") {
      //send to whatsapp
      //if status after check is failed or undelivered
      //sent to sms
  
      client.messages
        .create({
           from: fromPhoneNumberWA,
           body: event.message_options.text,
           to: recipientWASpaceRemover
         }, function(err, message) {
          if (err) {
              console.log('Text failed because: '+err.message);
          } else {
              console.log('Text sent! Message SID: '+message.sid, message.status, message.dateUpdated, message.errorMessage, message.errorCode);
  
            //sleep for while, until message sent or failed
            setTimeout(function() {
                var today1 = new Date();
                console.log("running after waiting 500 ms", today1)
                client.messages(message.sid)
                .fetch()
                .then( function (gMessage) {
                    console.log("status",gMessage.status)
                    if (gMessage.status === "failed" || gMessage === "undelivered") {
                        console.log("message not sent \n", gMessage)
                        client.messages
                          .create({
                            body: event.message_options.text,
                            from: phoneNumber,
                            to: recipientNumber,
                          })
                          .then(function () {
                            console.log(null, {});
                          })
                          .catch(function (err) {
                            console.log(err);
                          });
                    } else {
                        console.log("message sent yaml \n", gMessage)
                    }
                });
            }, 500);
              
          }
      });
    } else {
      client.messages
        .create({
          body: event.message_options.text,
          from: phoneNumber,
          to: recipientNumber,
        })
        .then(function () {
          console.log(null, {});
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  
  };
  