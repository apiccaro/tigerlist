// Deleted a lot of old methods that arent in use anymore. At the moment this file just maps categories to default images and helps avoid some edge cases

//Object mapping categories to images urls
    const categoryToImage = {
        'Textbook': 'default_textbook.jpeg',
        'Furniture': 'default_furniture.jpeg',
        'Appliances': 'default_applicances.jpeg',
        'Clothing': 'default_clothing.jpeg',
        'Service': 'default_service.jpeg',
        'Carpool': 'default_carpool.jpeg',
        'Other': 'default_service.jpeg',
    };

    function getGoodImage(imageName,category){
        if (imageName == "" || imageName==null){
            return +getCategoryImage(category)
        }
        else{
            return "/"+imageName
        }
    }
    

    //uses categoryToImage to get link to a default image
    function getCategoryImage(category) {
        const defaultImageUrl = 'CCLogoDerp.png';
        return "/"+categoryToImage[category] || "/"+defaultImageUrl;
    };

    module.exports = { getCategoryImage, getGoodImage}