import {Router} from 'express';
const router = Router();

import * as cardController  from "../controllers/card.controller";

router.get('/',cardController.getCards);
router.post('/',cardController.createCard);
router.delete('/:cardId',cardController.deleteCard);
export default router;