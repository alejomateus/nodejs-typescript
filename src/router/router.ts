import { Router, Request, Response} from 'express';
const router = Router();
router.get('/heroes',(req: Request, res: Response)=>{
    res.json({
        ok: true,
        message:'All is good'
    })
});
router.get('/heroes/:id',(req: Request, res: Response)=>{
    const id = req.params.id;
    res.json({
        ok: true,
        message:'All is good',
        id
    })
});
export default router;