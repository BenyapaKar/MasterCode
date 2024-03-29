import express from 'express';
import { create, list, get, put, remove } from '../controller/postController.js';

let router = express.Router();
// import verifyJWT from '../middleware/verifyJWT.js';

//router.use(verifyJWT);

router.post('/', create);
router.get('/', list);
router.get('/:id', get);
router.put('/:id', put);
router.delete('/:id', remove);

export default router;
