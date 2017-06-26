# RESTFull API Framework (Node + Express + JWT + MongoDB)

This is a very simeple framework to create REST APIs using Node.js with Express. 
I have used `jsonwebtoken` npm package for authrization and `MongoClient` npm package for MongoDb Connection. Both are used as middlewire.  

```
npm install
node app.js
```
First Step, Need to validate the client
```
curl -XPOST -H "Content-Type: application/json" 'http://localhost:3000/api/v1/validate' -d '{"username":"admin","password":"admin"}''
```
You should get back something like :
```
{
"id":1,
"username":"admin",
"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDg3NjM3OTg0LCJleHAiOjE0ODc2NDE1ODR9.1jMwROveQeR64baJOPdZV4SdpmKKVRvgPg0wJX9sHnI"
}
```
Now, when you want to load http://localhost:3000/api/v1 and you send there `Authorization` header with jwt token from the previous response, you should be successful :
```
curl -XGET -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDg3NjM3OTg0LCJleHAiOjE0ODc2NDE1ODR9.1jMwROveQeR64baJOPdZV4SdpmKKVRvgPg0wJX9sHnI' 'http://localhost:3000/api/v1'
```

Right Now, I haven't set any view engine(No Public folder, no Css, no bootstrap). 


# ToDo
1. View Engine
2. Analytics
