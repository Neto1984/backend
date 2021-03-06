const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const url = process.env.MONGODB_URI

console.log('connectig to ', url)

mongoose.connect(url, {userNewUrlParser: true})

.then(result=>{
    console.log('connected to MongoDB')
})

.catch((error)=>{
    console.log('error connecting to MongoDB:', error.message )
})

const noteSchema = new mongoose.Schema({
    content: {
    type: String,
    required: true,
    minilength: 5
    },
date: Date,
important:Boolean,

})


noteSchema.set('toJSON',{
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v

    }
})
module.exports = mongoose.model('Note',noteSchema)