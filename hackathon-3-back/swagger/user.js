/**
 * @swagger
 * tags:
 *   name: User
 *   description: Операции, связанные с управлением пользователями
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор пользователя
 *         name:
 *           type: string
 *           description: Имя пользователя
 *         nikname:
 *           type: string
 *           description: Никнейм пользователя
 *         login:
 *           type: string
 *           description: Логин пользователя
 *         password:
 *           type: string
 *           description: Хэш пароля пользователя
 *         role:
 *           type: string
 *           description: Роль пользователя
 *         photo:
 *           type: string
 *           description: Ссылка на фотографию пользователя
 *         instituteId:
 *           type: string
 *           description: Идентификатор института пользователя
 *         raiting:
 *           type: number
 *           description: Рейтинг пользователя
 *         showName:
 *           type: boolean
 *           description: Флаг отображения имени пользователя
 *         passport:
 *           type: string
 *           description: Паспортные данные пользователя
 *         myMessage:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив сообщений пользователя
 *         favorite:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив избранных институтов пользователя
 *       required:
 *         - login
 *         - password
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Регистрация нового пользователя
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Новый пользователь успешно зарегистрирован
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Вход под существующим пользователем
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - login
 *               - password
 *     responses:
 *       200:
 *         description: Пользователь успешно вошел в систему
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT токен для аутентификации
 *                 login:
 *                   type: string
 *                   description: Идентификатор пользователя
 *       401:
 *         description: Неверный логин или пароль
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Получить одного пользователя
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Возвращает одного пользователя
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
