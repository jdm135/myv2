var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var launchSchema = new Schema({
    launchShowName: {
        type: String,
        required: true
    },
    launchGoal: {
        type: Number,
        required: true
    },
    launchTitle: {
        type: String,
        required: true
    },
    launchPhoto: {
        type: String
    },
    launchVideo: {
        type: String
    },
    launchStory: {
        type: String
    },
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String
    }
});

module.exports = mongoose.model('Launch', launchSchema);
