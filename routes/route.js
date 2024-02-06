import {Router} from 'express';
import { postfunction ,getbyidfunction,getfunction,updatefunction,deletefunction} from '../controller/controller.js';
const router = Router();

router.post('/',postfunction);
router.get('/',getfunction);
router.get('/name',getbyidfunction);
router.patch('/:id',updatefunction);
router.delete('/:id',deletefunction);



export default router;