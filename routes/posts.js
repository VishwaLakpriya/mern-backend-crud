const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//save posts

router.post('/post/save',async (req,res)=>{
    const newPost = new Posts(req.body);
    try {
        const response = await newPost.save()
        res.status(201).json({
            message: 'Post saved successfully!',
            data: response,
          });
    } catch (error) {
        res.status(400).json({
            error: error
          });
    }
})


    //get post
    router.get('/post', async(req,res)=>{
        try {
            const posts = await Posts.find();
            res.status(200).json(posts)

        } catch (error) {
            res.status(400).json({
                error: error
        });
    }

    //get One post
    router.get('/post/:id', async(req,res)=>{
        const userId = req.params.id
        console.log("~ req.params:", req.params)
        console.log("~ req.params:", req.params.id)
        try {
            const posts = await Posts.findById(userId);
            res.status(200).json(posts)
        } catch (error) {
            res.status(400).json({
                error: error
        })
    }
    })
    // newPost.save().then(
    //     () => {
    //       res.status(201).json({
    //         message: 'Post saved successfully!'
    //       });
    //     }
    //   ).catch(
    //     (error) => {
    //       res.status(400).json({
    //         error: error
    //       });
    //     }
    //   );
      
});

module.exports = router;