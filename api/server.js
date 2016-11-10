import express from 'express';

export function start() {
    const app = express();

    app.get('/', (req, res) => {
        res.send('suh dude!');
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`[API] listening on port ${3000}`);
    });
}
