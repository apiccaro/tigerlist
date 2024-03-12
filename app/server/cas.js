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
    return false; // return false to indicate authentication failure
  }
  else {
 
        try {
                // extract user information
                var { principal, ticket } = req;
 
                if(principal.attributes!=undefined) {
                        userEmail = principal.attributes.email;
                        console.log('USER\'S EMAIL: '+userEmail );
                        return true;
                }
         }
         catch (error) {
                 console.log('principal undefined for this particular request')
         }
 
  }
  return true; // return true to indicate successful authentication
};



const askUserEmail = async () => {
  console.log('using askUserEmail in server/cas.js');
  var email = principal.attributes.email;

  try{
    if (email!==undefined){
      console.log('Email: ',email)
      return email;
    }
    else{
      console.log('Something went wrong with principal.attributes.email ')
      console.log('Email: ',email)
  }}
  catch (error) {
    console.log('Error using principal.attributes.email - ',error)
  } 
  return null;
};
 
module.exports = {casHandler,userEmail,askUserEmail}; // export the casHandler function to make available for server.js
 