const express = require('express')

const app = express()

const PORT = process.env.PORT || '3001'

app.listen('3001', function(){
  console.log('i am running!');
})