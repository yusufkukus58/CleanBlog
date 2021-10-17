const express = require('express');
const app = express();
const blog = {
    id:1,
    title:"Blog Title",
    description:"Blog Description"

}
app.get('/', (req,res)=>{
    res.send(blog);

})
const port =5000;
app.listen(port , ()=>{
    console.log(`Sunucu ${port} başlatıldı `)
})