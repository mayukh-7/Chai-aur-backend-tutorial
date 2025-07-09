import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });

// This is a bad practice
// app.use(express.static('dist'))


app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is Third joke'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is Fourth joke'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is Fifth joke'
        },

    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});