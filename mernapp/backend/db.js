// const mongoose = require('mongose');
// const { use } = require('react');
// const mongoURI = 'mongodb+srv://gofood:mern123@cluster0.unfgxf.mongodb.net/GoFood?retryWrites=true&w=majority'
// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI,{useNewURIParser: true },async(err, results)=>{
//         if(err) console.log("---",err)
//             else{
//         console.log("connected");    
//         const fetched_data = await mongoose.connection.db.collection("Food");
//         fetcheddata.find({}).toArray( function(err,data){
//             if (err) console.log(err);
//             else console.log(data)
//         })
//             }
//     });
// }

// module.exports = mongoDB;



const mongoose = require('mongose');
// const { use } = require('react');
const mongoURI = 'mongodb+srv://gofood:mern123@cluster0.unfgxf.mongodb.net/GoFood?retryWrites=true&w=majority'
const mongoDB = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");    
    });
}

module.exports = mongoDB;