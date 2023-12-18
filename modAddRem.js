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
function addMods(){

    console.log("WELCOME TO TIGERLIST\n");
    console.log("=========================")
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