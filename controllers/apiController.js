var Bhakts = require('../models/bhakts');
var bodyparser = require('body-parser');

module.exports= (app) => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}));


    //Get all Bhakts of a particular user
    app.get('/api/bhakts',(req,res)=>{

        Bhakts.find({},(err,results)=>{
            if(err) throw err;
            console.log("found all the bhakts");
            res.send(results);
        });
    });

    app.get('/api/bhakts/:bhaktId',(req,res)=>{

        Bhakts.find({_id : req.params.bhaktId},(err,results)=>{
            if(err) throw err;
            console.log("found the Bhakt for the id", results);
            res.send(results);

        });


    });

    // Get a paticular todo by id
    // app.get('/api/todo/:id',(req,res)=>{
    //     Bhakts.findById({_id:req.params.id},(err,result)=>{
    //         if(err) throw err;
    //         res.send(result);
    //     });
    // });

    //Post a new todo or update an existing one
    app.post('/api/bhakts',(req,res)=>{

        if(req.body.id){

            Bhakts.findByIdAndUpdate(req.body.id,{

                fullname: req.body.fullname,
                contact: req.body.contact,
                email:req.body.email
            },(err,result)=>{
                if(err) throw err;
                res.send(result);
            });

        }
        else{
            var newBhakt= Bhakts({
                fullname: req.body.fullname,
                contact: req.body.contact,
                email:req.body.email

            });

            newBhakt.save((err,result)=>{
                if(err) throw err;
                res.send(result);
            });
        }
    });


    // Delete a paticular todo by id
    app.delete('/api/bhakts',(req,res)=>{
        Bhakts.findByIdAndRemove(req.body.id,(err,result)=>{
            if(err) throw err;
            res.send(result);
        });
    });


}
