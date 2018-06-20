const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err)
  {
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');


  db.collection('Todos').findOneAndUpdate(
    {_id:new ObjectID("5b29a515e01274cfb95729a8")
  },{
    $set:{
      completed:true
    }
  },{
    returnOrginal:false
  }).then((result)=>{
    console.log(result);
  });
  //db.close();
});
