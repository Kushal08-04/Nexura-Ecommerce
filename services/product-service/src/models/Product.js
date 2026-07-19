const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    slug:{
        type:String,
        unique:true
    },

    description:{
        type:String,
        required:true
    },

    shortDescription:{
        type:String,
        default:""
    },

    brand:{
        type:String,
        default:"Nexura"
    },

    category:{
        type:String,
        required:true
    },

    subCategory:{
        type:String,
        default:""
    },

    price:{
        type:Number,
        required:true
    },

    discount:{
        type:Number,
        default:0
    },

    finalPrice:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        default:0
    },

    sku:{
        type:String
    },

    thumbnail:{
        type:String,
        required:true
    },

    images:[
        {
            type:String
        }
    ],

    rating:{
        type:Number,
        default:0
    },

    totalReviews:{
        type:Number,
        default:0
    },

    featured:{
        type:Boolean,
        default:false
    },

    newArrival:{
        type:Boolean,
        default:false
    },

    dealOfTheDay:{
        type:Boolean,
        default:false
    },

    bestSeller:{
        type:Boolean,
        default:false
    },

    tags:[
        {
            type:String
        }
    ],

    isActive:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});

productSchema.index({
    name:"text",
    description:"text",
    tags:"text"
});

productSchema.index({
    category:1
});

productSchema.index({
    featured:1
});

module.exports=mongoose.model("Product",productSchema);