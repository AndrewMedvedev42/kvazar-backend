export{}
const User = require("../models/user.model")
const ImageModel = require("../models/image.model")

const getAllImages = async(req,res) => {
    try {
        const user = await User.find({})
        const images = []
        const publicUser = []
        user.filter(item=>{
            if (item.privateAccount !== true) {
                publicUser.push(item)
            }
           
        })
        publicUser.forEach(element => {
            element.imageList.forEach(item => {
                images.push(item)
            });
        });
        res.status(201).json({images})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//ADDS TASK INFO INTO DATA BASE
const addImage = async(req,res, next) => {
    try {
        function base64_encode(file) {
            return file.toString('base64');
        }
        const {userID:userID} = req.params
        const user = await User.findOne({_id:userID}, function(err, user){
            const imageModel = new ImageModel();
            imageModel.title = req.body.title
            imageModel.description = req.body.description
            imageModel.dateOfCreation = req.body.dateOfCreation
            imageModel.author.userId = user._id
            imageModel.author.firstName = user.firstName
            imageModel.author.lastName = user.lastName
            imageModel.author.userName = user.userName
            imageModel.image = `data:${req.files.file.mimetype};base64,${base64_encode(req.files.file.data)}`    

            console.log(imageModel.author);
            

            user.imageList.unshift(imageModel)
            user.save()
        })    
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//UPDATES TASK INFO IN DATA BASE
const updateImage = async(req,res) => {
    
    
}

//DELETES TASK FROM DATA BASE
const removeImage = async(req,res) => {
    try {
        const {user_id, image_id} = req.params
        const user = await User.findOne({_id:user_id}, function(err, user){
            const newImageList = []
            user.imageList.forEach(item=>{item._id != image_id && newImageList.push(item)})
            user.imageList = newImageList
            user.save()
        })
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//EXPORT OF CONTROLERS
module.exports = {
    getAllImages,
    addImage,
    updateImage,
    removeImage,
}