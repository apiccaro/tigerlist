//Annika made this block 4, not sure if it will work when called here.
//It doesn't seem to be referenced anywhere anymore (imported to page.mjs but its 2 lines and never gets referenced))

/** Adds moderator status for user with given email
 * 
 * @param {string} userEmail - key to indicate correct user row
 */
const readline = require('readline');
  const addMod = async (userEmail) => {
    const response = await fetch("http://localhost:3000/api/makeModUser",{
      method:"PUT",
      body : JSON.stringify(
      userEmail
      )
      },
      );
    await response;
  };
  
  /** Removes moderator status for user with given email

   * @param {string} userEmail - key to indicate correct user row
   */
  const removeMod = async (userEmail) => {
    const response = await fetch("http://localhost:3000/api/deleteModUser",{
      method:"DELETE",
      body : JSON.stringify(
      userEmail
      )
      },
      );
    await response;
  };

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Prompts user to add or remove a moderator. 
 * User logic is a bit unintuitive, should redo prompts and use separate methods if we implement this again.
 */
function addMods(){
    console.log("=========================")
    console.log("Using TigerList Moderation Script\n");
    rl.question("Add or remove a moderator? (Y/N)\n", (answer) => {
        rl.question("Add moderator? (Y/N)\n", (answer) => {
        if (answer.toUpperCase() === "Y") {
            rl.question("What is their CC email?\n", async (ccEmail) => {
               if((/\S+@coloradocollege+\.edu+/).test(ccEmail))
               {
                await addMod(ccEmail)
                console.log("added "+ccEmail);
               }
               else
               {
                console.log("not a CC email, try again later")
               }
                   
                
                rl.close();
            });
        } else {
          console.log("Remove a moderator./n")
          rl.question("What is the CC email of the user you want to remove?\n", async (ccEmail) => {
            if((/\S+@coloradocollege+\.edu+/).test(ccEmail))
            {
             await removeMod(ccEmail)
             console.log("removed "+ccEmail);
            }
            else
            {
             console.log("not a CC email, try again later")
            }
                
             
             rl.close();
         });
        }
      });
      
    });
  

}
module.exports=addMods;