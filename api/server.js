import express from 'express';

export function start() {
    const app = express();

    app.get('/', (req, res) => {
        res.send('suh dude!');
    });


    app.get('/something/:id', (req, res) => {
        const id = req.params.id;
        res.send(`provided ID: ${id}`);
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`[API] listening on port ${port}`);
    });
}
