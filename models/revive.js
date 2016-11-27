var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviveSchema = new Schema({
    reviveShowName: {
        type: String,
        required: true
    },
    reviveTitle: {
        type: String,
        required: true
    },
    reviveCategory: {
        type: String
    },
    reviveGoal: {
        type: Number
    },
    revivePhoto: {
        type: String
    },
    reviveVideo: {
        type: String
    },
    reviveStory: {
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


module.exports = mongoose.model('Revive', reviveSchema);
