const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {User}=require('./../server/models/user');

var id='5b2b037c30ab619849aceb40';
/*
if(!ObjectID.isValid(id))
{
  console.log('Id is not valid');
}

 Todo.find({
  _id:id
}).then((todos)=>{
  console.log('todos',todos);
});

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
  return console.log('Not found');
  }
  console.log('todo',todo);
}).catch(e)=>console.log(e);
*/
User.findById(id).then((user)=>{
  if(!user)
  {
    console.log('User not found');
  }
  console.log('User',user);
},(e)=>{
  console.log(e);
});
