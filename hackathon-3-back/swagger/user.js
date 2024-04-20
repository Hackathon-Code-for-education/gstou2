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
 *       required:
 *         - login
 *         - password
 *       properties:
 *         login:
 *           type: string
 *           description: Логин пользователя
 *         password:
 *           type: string
 *           description: Пароль пользователя
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
 *       400:
 *         description: Неверный запрос
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
 *             $ref: '#/components/schemas/User'
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
