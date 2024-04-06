

//Object mapping categories to images urls
    const categoryToImage = {
        'Textbook': '/default_textbook.jpeg',
        'Furniture': '/default_furniture.jpeg',
        'Appliances': '/default_applicances.jpeg',
        'Clothing': '/default_clothing.jpeg',
        'Service': '/default_service.jpeg',
        'Carpool': '/default_carpool.jpeg',
    };

    const nullUrl = '/empty100x100.png'
    const customMap = {
        167:['custom167.jpeg',nullUrl,nullUrl,nullUrl,nullUrl,nullUrl],
        168:['custom168a.jpeg','custom168b.jpeg',nullUrl,nullUrl,nullUrl,nullUrl]
    }

    function customImageArray(id,category){
        //return either a custom array, or an array with one image determined by getCategoryImage
        return customMap[id] || [getCategoryImage(category),nullUrl,nullUrl,nullUrl,nullUrl,nullUrl];
    
    }

    

    //uses categoryToImage to get link to a default image
    function getCategoryImage(category) {
        //console.log("category:",category)
        const defaultImageUrl = '/CCLogoDerp.png';
        return categoryToImage[category] || defaultImageUrl;
    };

    //returns a given image url if a corresponding image exists, or null if not found
    function getImageFile(filename){
        //Check public for file matching given filename

        var file;
        try {   // Check if file exists
            var directory = './../public'
            //printDirContents(directory)

            fs.statSync(directory+filePath);
            file = filename;
        } catch (error) {   // Catch if file doesn't exist
            console.log("Didn't find the file we were looking for: ",filePath)
            file = null;
        }

        return file
    }

    function printDirContents(path) {
        fs.readdir(path, (err, files) => {
          if (err) {
            console.error('Error reading directory contents:', err);
            return;
          }
      
          // Print all files in the directory
          console.log("Contents of "+path+":")
          files.forEach((file) => {
            console.log(file);
          });
        });
    }

    

    //Uses getImageFile to return a valid filename, replacing with the category default if an image does not exist
    function getImageFileDefault(filename,category){
        var filepath = getImageFile(filename)
        if (filepath == null){
            return getCategoryImage(category)
        }
        return filepath
    }


    module.exports = { getCategoryImage, customImageArray}