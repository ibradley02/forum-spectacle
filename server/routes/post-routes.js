var Posts = require('../models/post')
var router = require('express').Router()


router.get('/api/posts', (req, res, next)=>{
    Posts.find({})
        .then(posts =>{
            res.send(posts)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/api/posts/:id', (req, res, next)=>{
    Posts.findById(req.params.id)
        .populate('comments')
        .then(post=>{
            res.send(post)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/posts', (req, res, next)=>{
    req.body.userId = req.session.uid
    Posts.create(req.body)
        .then(post => {
            let response = {
                data: post,
                message: 'Successfully created Post!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


router.put('/api/posts/:id', (req, res, next)=>{
    var action = 'Update Post'
    Posts.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(data)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})


router.delete('/api/posts/:id', (req, res, next)=>{
    Posts.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send({message: 'So much for that post'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


module.exports = router