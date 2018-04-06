var Todos = require('../models/bhakts');

module.exports=(app)=>
{
    app.get('/api/setup',(req,res)=>{

        var starterBhakts = [


            {
                fullname: 'Debjit',
                contact: 1234567890,
                email: 'debjit@debjit.com',
            }
            ,
            {
                fullname: 'Abhinava',
                contact: 0987654321,
                email: 'reltronx@gmail.com',
            }
            ,
            {
                fullname: 'Kush',
                contact: 0987612345,
                email: 'kush@kush.com',
            }
        ];

        Todos.create(starterBhakts,(err,result)=>{
            if(err) throw err;
            console.log("seed data fed to mongodb");
            res.send(result);
        });
    });
}