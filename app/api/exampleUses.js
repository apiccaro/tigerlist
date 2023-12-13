//Examples on how to call all of these api functions
/**
 * Tells the DB to put a new listing in it
 * @param {*} listingDict 
 */
const makeListing = async (listingDict) => {
    const response = await fetch("http://localhost:3000/api/putListing",{
      method:"PUT",
      body : JSON.stringify({
      listing:(listingDict)
      })
      },
      );
    await response;
  };
/**
 * Tells the DB to delete the listing at the specific ID
 * @param {R} listingID 
 */
  const deleteListing = async (listingID) => {
    const response = await fetch("http://localhost:3000/api/deleteListing",{
      method:"DELETE",
      body : JSON.stringify({
      listingId:(listingID)
      })
      },
      );
    await response;
  };
  //if a moderator flags a post delete it
  const handleModeratorFlagged = (id) => {
    
    deleteListing(id);
  }
/**
 * Tells DB to update listing 
 * @param {*} listingDict 
 */
  const editListing = async (listingDict) => {
    const response = await fetch("http://localhost:3000/api/deleteListing",{
      method:"PUT",
      body : JSON.stringify({
      listing:(listingDict)
      })
      },
      );
    await response;
  };
  //If a post is flagged update it

  const handleFlagged = (data) => {
    const titleValue = data.title;
    const priceValue = data.price;
    const descriptionValue = data.description;
    const catValue = data.category;
    const condValue = data.condition;
    const locValue = data.location;
    const emailValue = data.email;
    const phoneValue = data.phonenumber;
    const imageValue = [previewImage,previewImage1,previewImage2,previewImage3,previewImage4];
    var dict = {
      title: titleValue,
      price: priceValue,
      description: descriptionValue,
      category: catValue,
      condition: condValue,
      location: locValue,
      email: emailValue,
      phoneValue: phoneValue,
      image: imageValue,
      active: "true",
      flagged: "true"
    }
    editListing(dict);
  }
/**
 * Tells DB to send it all of the listings
 * @returns all listings
 */
  const getAllListings = async () => {
    const response = await fetch("http://localhost:3000/api/getAllListings",{
      method:"GET",
      });
    const data = await response.json();
    return data;
  };
  //how to set a list of allListings to what the function returns
  var allListings=[]
  const getListings=async()=>{
    const response = await getAllListings()
    allListings=response;
  }
/**
 * Tells DB to send it all of the flagged listings
 * @returns all flagged listings
 */
  const getAllFlaggedListings = async () => {
    const response = await fetch("http://localhost:3000/api/getAllFlaggedListings",{
      method:"GET",
      });
    const data = await response.json();
    return data;
  };
  //how to set a list of allFlaggedListings to what the function returns
  var allFlaggedListings=[]
  const getFlaggedListings=async()=>{
    const response = await getAllFlaggedListings()
    allFlaggedListings=response;
  }
/**
 * Tells DB to send it all of the moderated users
 * @returns all moderated users
 */
  const getAllModeratedUsers = async () => {
    const response = await fetch("http://localhost:3000/api/getAllModeratedUsers",{
      method:"GET",
      });
    const data = await response.json();
    return data;
  };
  //how to set a list of allFlaggedListings to what the function returns
  var allModeratedUsers=[]
  const getModeratedUsers=async()=>{
    const response = await getAllModeratedUsers()
    allModeratedListings=response;
  }
/**
 * Tells a database to get a listing corresponding to an id
 * @returns a dict corresponding to a list
 * @param {string} id 
 */
  const getListing = async (id) => {
    const response = await fetch("http://localhost:3000/api/getListing",{
      method:"GET",
      });
    const data = await response.json();
    return data;
  };
  //how to set a dict corresponding to  list to the functions returned dict
  var listing={}
  const getOneListing=async()=>{
    const response = await getListing(id)
    listing=response;
  }
/**
 * Tells DB to return all listings associated with one email.
 * @param {string} email 
 * @returns list of dicts
 */
  const getUserListings = async (email) => {
    const response = await fetch("http://localhost:3000/api/getUserListings",{
      method:"GET",
      });
    const data = await response.json(email);
    return data;
  };
  //how to set a list of user listings 
  var userListings=[]
  const getOneUserListings=async()=>{
    const response = await getAllUserListings()
    userListings=response;
  }