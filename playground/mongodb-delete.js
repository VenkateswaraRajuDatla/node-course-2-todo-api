const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err)
  {
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');

  db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    console.log(result);
  });

  db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    console.log(result);
  });

  db.collection('Todos').findOneAndDelete({_id:new ObjectID("5b29b9b4e01274cfb9572cfc")}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
