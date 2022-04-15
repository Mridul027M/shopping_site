const app=require('./index')


const port=7000||process.env.PORT;
<<<<<<< HEAD
=======
app.use(admin)
app.use('/public',express.static("./public"));

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });

>>>>>>> 8ecf4d07013636421fca1fc45b1a1f70832d09ca
app.listen(port,()=>{
    console.log(`port started at ${port}`)
})
