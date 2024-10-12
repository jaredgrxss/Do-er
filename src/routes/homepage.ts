import express from 'express';
import { loadHomepage } from '../service/homepage';
const router = express.Router();

// home page
router.get('/', loadHomepage);

export default router;