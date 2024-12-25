import express, { application } from 'express';
import { setStatus } from '../functions';
import { config } from '..';
const app = express();
app.use(express.json());

type StatusBody = {
    application: string,
    status: string,
}

app.post('/rpc/setstatus', async (req, res) => {
    const body = req.body as StatusBody;
    console.log(`[API] ${body.application} is setting Revolt status to ${body.status}.`)
    res.send({status: "ok"});

    await setStatus(body.status);
})

app.delete('/rpc/status', async (req, res) => {
    console.log(`[API] Revolt status is being reset.`);
    res.send({status: "ok"});

    await setStatus(config.preStatus);
})

export default app;