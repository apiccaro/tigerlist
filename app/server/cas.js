// script from GitHub repo: https://github.com/produck/cas-client/blob/master/README.md 
 
const http = require('http');
const httpCasClient = require('http-cas-client'); //import the cas module from above repo 
var userEmail = 'empty'
 
const handler = httpCasClient({ // creating a handler with my specific configurations 
  casServerUrlPrefix: 'https://cas.coloradocollege.edu/cas',
  serverName: 'http://tigerlist.coloradocollege.edu'
});
 
 
const casHandler = async (req, res) => {
  var data = await handler(req, res)
  console.log('REQUEST: '+data);
  if (!data) {
    console.log('No data found');

  //make a return object that tells server.js what it needs to know, and provides api methods with the user email they need

    var casResult = {
      verified: false, // return false to indicate authentication failure
      user: "roccy@coloradocollege.edu"
    }

    return casResult;
  }
  else {
 
        try {
                // extract user information
                var { principal, ticket } = req;
 
                if(principal.attributes!=undefined) {
                        userEmail = principal.attributes.email;
                        console.log('USER\'S EMAIL: '+userEmail );

                          //make a return object that tells server.js what it needs to know, and provides api methods with the user email they need
                        var casResult = {
                          verified: true, // return true to indicate successful authentication
                          user: userEmail
                        }
                                            
                        return casResult; 
                }
         }
         catch (error) {
                 console.log('principal undefined for this particular request')
         }
 
  }

  //make a return object that tells server.js what it needs to know, and provides api methods with the user email they need
  var casResult = {
    verified: true, // return true to indicate successful authentication
    user: userEmail
  }
  return casResult; 
};


//Jay made this. Experiment didn't work. 
const askUserEmail = async () => {
  console.log('using askUserEmail in server/cas.js');
  try{
    // var email = principal.attributes.email;

    var email = userEmail

    if (email=='empty'){
      console.log("Looks like there was no saved email here in cas.js")
    }
    else if (email!==undefined){
      console.log('Email: ',email)
      return email;
    }
    else{
      console.log('Something went wrong when requesting user email in cas.js')
      console.log('Email: ',email)
  }}
  catch (error) {
    console.log('Error using principal.attributes.email - ',error)
  } 
  return "roccy@coloradocollege.edu";
};
 
module.exports = {casHandler,userEmail,askUserEmail}; // export the casHandler function to make available for server.js
 