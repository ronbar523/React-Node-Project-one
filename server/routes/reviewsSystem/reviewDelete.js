const express = require('express')
const router = express.Router()
const reviewModel = require('../../model/reviewsModel')





router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params
        await reviewModel.deleteReviewById(id)
        res.json({ msg: 'Review deleted successfully'})
    } catch (err) {
        res.status(400).json ({ err: err})
    }
})








module.exports = router