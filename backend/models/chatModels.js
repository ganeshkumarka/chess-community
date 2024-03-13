const mongoose = require('mongoose');

const chatModel =  mongoose.Schema(
    {
        chatName: { type: String, required: true },
        isGroupChat:{type:Boolean,default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",

        },
    ],
    latestMessages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users,"
    },
    }
    ,{
        timestamps:true,
    }
);

const chat = mongoose.model("Chat",chatModel);

module.exports = Chat;

