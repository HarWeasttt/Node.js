import {body} from 'express-validator'

export const loginValidation = [
    body('email','не верный формат почты').isEmail(),
    body('password','пароль должен быть минимум 5 символов').isLength({min: 5})
];

export const registerValidation = [
    body('email','не верный формат почты').isEmail(),
    body('password','пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('fullName','укажите имя').isLength({min: 3}),
    body('avatarUrl','неверная ссылка').optional().isURL()
];

export const postCreateValidation = [
    body('title','Enter title').isLength({min: 3}).isString(),
    body('text','Enter text').isLength({min: 10}).isString(),
    body('tags','invalid format tegs').optional().isString(),
    body('imageUrl','неверная ссылка').optional().isString()
];