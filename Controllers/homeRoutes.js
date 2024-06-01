const router = require('express').Router();
const {User,Post,Comment}=require('../models');

router.get('/', async (req,res) => {
try {
    const postData = await Post.findAll({
        include:[User]
    })
    const posts = postData.map(post => post.get({plain:true}))
    res.render ('homePage',{
        posts
    })
} catch (error) {
    res.status(500).json(error.message)
}
})

module.exports = router; 