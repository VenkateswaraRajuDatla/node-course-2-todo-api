//const  MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err)
  {
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');

/*  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,result)=>{
    if(err)
    {
      return console.log('unable todo insert');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  */

  /* db.collection('Users').insertOne({
    Name:'Raju',
    Age: 21,
    Location: 'San Jose'
  },(err,result)=>{
    if(err)
    {
    return console.log('Unable to add Users collection');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  }) */
  db.close();
});
