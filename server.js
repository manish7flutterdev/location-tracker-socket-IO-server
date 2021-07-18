var express = require("express")
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.json())
var client =  {}


io.on("connection",(socket)=>{
  console.log("connected",socket.id)
  
        socket.on("signin",(id)=>{
         console.log(id)
         client[id]=socket
   // console.log(client)
                                })

        socket.on("message",(messy)=>{
          console.log("This is the message",messy)
          let reciever = messy.reciever
          if(client[reciever])
          {client[reciever].emit("message",messy)}
          else{
            console.log("No reciever")
          }
          })
})



app.route("/check").get((req,res)=>{
  return res.json("This is it")
})

server.listen(3000,"0.0.0.0",()=>{
    console.log("Server Started",3000)
})







