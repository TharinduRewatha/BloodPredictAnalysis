const express = require("express")
const cors = require("cors")
const mongooseMorgan = require("mongoose-morgan")
const db = require("./app/models")
const app = express()
app.use(cors())
app.use(express.json())

app.use(mongooseMorgan({
    connectionString: db.url,
}))


db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database Sucessfully!")
        //initial()
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err)
        process.exit()
    })

require("./app/routes/blood.routes")(app)


app.get("/", (req, res) => {
    res.json("Welcome to Blood analysis-Server")
})
const PORT = process.env.PORT || 8096
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})