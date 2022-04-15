const app=require('./index')


const port=7000||process.env.PORT;
app.listen(port,()=>{
    console.log(`port started at ${port}`)
})
