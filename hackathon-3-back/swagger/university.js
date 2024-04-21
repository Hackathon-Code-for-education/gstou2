/**
 * @swagger
 * tags:
 *   name: University
 *   description: Операции, связанные с управлением университетами
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     University:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор университета
 *         name:
 *           type: string
 *           description: Название университета
 *         image:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив ссылок на изображения университета
 *         email:
 *           type: string
 *           description: Электронная почта университета
 *         siteUrl:
 *           type: string
 *           description: Ссылка на сайт университета
 *         address:
 *           type: string
 *           description: Адрес университета
 *         news:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив идентификаторов новостей университета
 *         institute:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив идентификаторов институтов университета
 *         dormitory:
 *           type: string
 *           description: Идентификатор общежития университета
 *         docsImg:
 *           type: string
 *           description: Ссылка на документы университета
 *         selectionCommittee:
 *           type: object
 *           properties:
 *             mail:
 *               type: string
 *               description: Почта приемной комиссии университета
 *             phone:
 *               type: string
 *               description: Телефон приемной комиссии университета
 *           description: Контактные данные приемной комиссии университета
 *         reviews:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив идентификаторов отзывов университета
 *         users:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: Идентификатор пользователя
 *               comment:
 *                 type: string
 *                 description: Комментарий пользователя
 *               time:
 *                 type: string
 *                 description: Время комментария
 *           description: Массив комментариев пользователей к университету
 *         access:
 *           type: array
 *           items:
 *             type: string
 *           description: Массив идентификаторов пользователей, имеющих доступ к университету
 *         admin:
 *           type: string
 *           description: Идентификатор администратора университета
 */

/**
 * @swagger
 * /university/{id}:
 *   post:
 *     summary: Создать новый университет
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор администратора университета
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       200:
 *         description: Университет успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/{id}:
 *   get:
 *     summary: Получить информацию об университете
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор университета
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Информация об университете успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university:
 *   get:
 *     summary: Получить информацию о всех университетах
 *     tags: [University]
 *     responses:
 *       200:
 *         description: Информация о всех университетах успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/{id}:
 *   patch:
 *     summary: Обновить информацию о университете
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор университета
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       200:
 *         description: Информация о университете успешно обновлена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       404:
 *         description: Университет не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/{id}:
 *   delete:
 *     summary: Удалить университет
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор университета
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Университет успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/addComment/{id}:
 *   patch:
 *     summary: Добавить комментарий к университету
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор университета
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               comment:
 *                 type: string
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: Комментарий успешно добавлен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/addUser/{id}:
 *   patch:
 *     summary: Добавить пользователя к университету
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор университета
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Пользователь успешно добавлен к университету
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/deleteUser/{id}:
 *   patch:
 *     summary: Удалить пользователя из университета
 *     tags: [University]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор университета
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Пользователь успешно удален из университета
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
