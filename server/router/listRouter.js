const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ToDoSchema = new Schema({
    detail: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    },
    dateStamp: {
        type: String
    },
})

//  model set up & declaring collection name
const ToDoItems = mongoose.model('ToDoItems', ToDoSchema);

// GET
router.get('/', (req, res) => {

    // Searches database for all items
    ToDoItems.find({}).then((foundItems) => {
        // Sends all items
        res.send(foundItems);
    }).catch((error) => {
        console.log('error in GET', error);
        res.sendStatus('500');
    })
}) // End Get


// POST new item to list
router.post('/', (req, res) => {

    // Assigns client data to a variable
    let fromClient = req.body;
    // Adds Date and Time Stamp
    let dateCurrentStamp = String(new Date().toLocaleString());
    fromClient.dateStamp = dateCurrentStamp;
    // Applies Schema before sending
    let toDoToAdd = new ToDoItems(fromClient)

    // Saves data to the server
    toDoToAdd.save().then(() => {
        console.log('new item saved', toDoToAdd);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Post', error);
        res.sendStatus(500);
    })
}) //end Post

//  Remove selected item from the list
router.delete('/delete/:id', (req, res) => {
    console.log('delete with id:', req.params.id);

    ToDoItems.findByIdAndRemove(req.params.id).then((response) => {
        console.log('object', req.params.id, 'removed from database');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Delete on server', error);
        res.sendStatus(500);
    })

})

// //  Modify status
router.put('/changeStatus/:id', (req, res) => {
    console.log('in changeStatus PUT', req.params.id);

    // search database by id for the item
    // modify the status
    ToDoItems.findOne({_id: req.params.id}).then((foundItem) => {
        console.log(foundItem);
        foundItem.status = !foundItem.status;

        foundItem.save().then((response) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
            
        })
        
    })
})

module.exports = router;