const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000
const URL = `http://localhost:${PORT}/graphql`
const schema = require("../schema/schema")

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}${process.env.MLAB_URL}`,{useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.json())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

app.listen(PORT, (err) =>{
    if(err){
        console.log("Something went wrong: " + err)
    }
    console.log(`Connected to port: ${PORT}, with endpoint: ${URL}`)
})