import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/health', (req: Request, res: Response) => {
    res.send({ status: 200, message: "server is healthy"});
});

export default router;