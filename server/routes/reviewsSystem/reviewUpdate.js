const express = require('express')
const router = express.Router()
const ReviewModel = require('../../model/reviewsModel')



router.put('/:id', async (req,res)=> {
    try {
        const { id } = req.params
        const update = req.body
        await ReviewModel.updateReview(id, update)
        res.json ({msg: 'Review update successfully'})
    } catch (err) {
        res.status(400).json ({ err: err})
    }
})


module.exports = router