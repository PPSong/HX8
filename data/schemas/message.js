var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
        from : { type: String, required: true },
        to : { type: String, required: true },
        content: { type: String, required: true },
        time: { type: Date, required: true },
        unread: {type: Boolean, required: true}
    });

module.exports = MessageSchema;