import express from 'express';
import { status } from '../controllers/complementaryController';

const router = express.Router();

router.get('/', status);

export default router;