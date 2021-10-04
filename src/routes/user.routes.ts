import { Router } from 'express';
// import { check } from 'express-validator';
import { 
  createUser, 
  getUsers, 
  getUserById,
  getUserBySlug,
  deleteUserById,
  updateUserById
} from '../controllers/user.controller';
import { validarADMIN } from '../middlewares/validar-admin';
import { validarJWT } from '../middlewares/validar-jwt';


import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.post(
  '/',
  [
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('lastname','El apellido es obligatorio').not().isEmpty(),
    check('password','El password debe tener al menos 6 caracteres').not().isEmpty().isLength({min: 6}),
    check('email','El email es obligatorio').not().isEmpty().isEmail(),
    check('birthday', 'El cumpleaños es obligatorio y debe ser una fecha válida').not().isEmpty().toDate(),
    check('phone', 'El teléfono debe ser un número válido ejemplo (+51944825449)').not().custom((value, { req }) => {
      // eslint-disable-next-line no-useless-escape
      const exp = /^\+519([0-9]{8})$/; 
      if(!exp.test(value)){
        return true;
      } else{
        return false;
      }
    }),
    validarCampos
  ],
  createUser
);

router.get(
  '/',
  [
    validarJWT,
    //validarADMIN
  ],
  getUsers
);

router.get(
  '/:id',
  [
    validarJWT,
    validarADMIN
  ],
  getUserById
);

router.put(
  '/:id',
  [
    validarJWT,
    //validarADMIN
  ],
  updateUserById
);

router.get(
  '/slug/:slug',
  [
    //validarJWT,
    //validarADMIN
  ],
  getUserBySlug
);

router.delete(
  '/id',
  [
    //validarJWT,
    //validarADMIN
  ],
  deleteUserById
);

export default router;
