import express from 'express';
import { getLivros, getLivro, postLivro, patchLivro, deletaLivro } from '../Controllers/livroController.js';
const router = express.Router();


router.post('/', postLivro);
router.get('/', getLivros);
router.get('/:id', getLivro);
router.delete('/:id', deletaLivro)
router.patch('/:id',patchLivro);


export default router;


