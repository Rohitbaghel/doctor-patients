
const app=require('./index')
const connect = require('./Config/db')

app.listen(2345, async (req, res) => {
    await connect()
    console.log('Listening on port 2345')
})

