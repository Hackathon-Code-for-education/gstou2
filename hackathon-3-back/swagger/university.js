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
 *         Image:
 *           type: array
 *           items:
 *             type: string
 *           description: Список URL изображений университета
 *         email:
 *           type: string
 *           description: Email университета
 *         siteUrl:
 *           type: string
 *           format: uri
 *           description: URL сайта университета
 *         news:
 *           type: array
 *           items:
 *             type: string
 *           description: Список идентификаторов новостей университета
 *         institute:
 *           type: array
 *           items:
 *             type: string
 *           description: Список идентификаторов институтов университета
 *         dormitory:
 *           type: string
 *           description: Идентификатор общежития университета
 *         docsImg:
 *           type: string
 *           description: URL изображения документов университета
 *         selectionCommittee:
 *           type: object
 *           properties:
 *             mail:
 *               type: string
 *               description: Email приемной комиссии университета
 *             phone:
 *               type: string
 *               description: Телефон приемной комиссии университета
 *       required:
 *         - name
 *         - email
 *         - siteUrl
 *         - selectionCommittee
 */

/**
 * @swagger
 * /university:
 *   post:
 *     summary: Создать новый университет
 *     tags: [University]
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
 * /university:
 *   get:
 *     summary: Получить список университетов
 *     tags: [University]
 *     responses:
 *       200:
 *         description: Возвращает список университетов
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
 *     summary: Обновить данные университета
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
 *         description: Данные университета успешно обновлены
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       404:
 *         description: Университет не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */
