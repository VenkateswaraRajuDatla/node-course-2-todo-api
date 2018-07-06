const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');

var data={
  id:10
};

var token=jwt.sign(data,'123abc');
console.log('token ',token);

var decoded=jwt.verify(token,'123abc');
console.log('decoded ',decoded);
/* var message="Token is for user 3";
var hash=SHA256(message).toString();

console.log(`Mesaage is ${message}`);
console.log(`Hash is ${hash}`);

var data={
  id:4
};

var token={
  data,
  hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
};
//token.data.id=5;
//token.hash=SHA256(JSON.stringify(data)).toString();

var resulthash=SHA256(JSON.stringify(token.data)+ 'somesecret').toString();
if(token.hash==resulthash)
{
  console.log(`Data not changed`);
}
else {
  console.log('Data changed');
}
*/
