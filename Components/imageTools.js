    //Object mapping Categories to images urls

    const categoryToImage = {
        'Textbook': '/testimage1.jpeg',
        'Furniture': '/testimage2.jpeg',
        'Appliances': '/testimage3.jpeg',
        'Clothing': '/testimage4.jpeg',
        'Service': '/testimage5.jpeg',
        'Carpool': '/testimage1.jpeg',
    };

    //use categoryToImage to get link to image
    function getImageUrl(category) {
        const defaultImageUrl = '/CCLogoDerp.png';
        return categoryImageMap[category] || defaultImageUrl;
    };


    module.exports = { getImageUrl }