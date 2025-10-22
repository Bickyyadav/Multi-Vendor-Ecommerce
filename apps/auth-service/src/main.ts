import express from 'express';
import cors from "cors"

const app = express();

app.use(cors({
    origin: ["https://localhost:3000"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
}))

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API' });
});
const port = process.env.PORT || 6001;

const server = app.listen(port, () => {
    console.log('====================================');
    console.log(`Auth is running at http://localhost:${port}/appi`);
    console.log('====================================');
})

server.on("error", (err) => {
    console.log("🚀 ~ err:", err)
})