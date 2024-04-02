import express from 'express';
import {
    createExample,
    getAllExamples,
    getExampleById,
    updateExampleById,
    deleteExampleById
} from '../controllers/exampleController';

const router = express.Router();

router.post('/', createExample);
router.get('/', getAllExamples);
router.get('/:id', getExampleById);
router.put('/:id', updateExampleById);
router.delete('/:id', deleteExampleById);

export default router;