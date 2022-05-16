const express = require("express")
const axios = require("axios")
const hredis = require("./helper/redis")

const app = express()
const baseurl = `https://jsonplaceholder.typicode.com/`

var rclient = hredis.client
rclient.on("error", function(error) {
  console.error(error);
});


const APP_PORT = 5000

function getPostById(req, res){
  var postid = req.params.postid
  // https://jsonplaceholder.typicode.com/posts
  console.log("get data from jsonplaceholder.typicode")
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    .then(response => {
      var jstring = JSON.stringify(response.data)
      rclient.setex(`posts:${postid}`, 3600,jstring, (err, reply) => {
        if(err) throw err
        console.log("reply", reply)
        res.send(jstring)
      })
    })
    .catch(e => {
      res.status(500)
    })
    
}

app.get("/posts/:postid", hredis.cacheUrl, getPostById)

app.listen(APP_PORT, () => {
  console.log(`belajar redis berjalan di port ${APP_PORT}`)
})
