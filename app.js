const express = require('express')
const EventEmitter = require('events')//used to handel events
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";
const app = express()//started new application
const event = new EventEmitter()
const job = require('./job')
event.on('eventCalled', (id, response) => {
    //on used to add a callback function thats going to be executed when the event is triggered
    console.log("OPEN")
    const data = job.getJob(id)
    response.send(data)
    if (!data) {
        logger.error("Close");
    }
})
app.get('/job/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    event.emit('eventCalled', id, res)//emit used to trigger event
})
app.get('/', (req, res) => {
    res.send("hello")
})
app.listen(8004, () => {
    console.log("server started....... .")
})