import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';

const motorcycleController = new MotorcycleController();

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Motorcycle:
 *       type: object
 *       required:
 *         - _id
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - category
 *         - engineCapacity
 *       properties:
 *         _id:
 *           type: string
 *           description: Identificador da moto
 *         model:
 *           type: string
 *           description: Marca e/ou modelo da moto
 *         year:
 *           type: integer
 *           description: Ano de fabricação da moto
 *         color:
 *           type: string
 *           description: Cor principal da moto
 *         status:
 *           type: boolean
 *           description: Status que define se um veículo pode ou não ser comprado
 *         buyValue:
 *           type: integer
 *           description: Valor de compra da moto
 *         category:
 *           type: string
 *           description: Categoria da moto
 *         engineCapacity:
 *           type: integer
 *           description: A capacidade do motor
 *       example:
 *         _id: 635d80bc09d0e6be0373da62
 *         model: Yamaha MT-09
 *         year: 2018
 *         color: blue
 *         status: true
 *         buyValue: 45990
 *         category: Street
 *         engineCapacity: 890
 *     NewMotorcycle:
 *       type: object
 *       required:
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - category
 *         - engineCapacity
 *       properties:
 *         model:
 *           type: string
 *           description: Marca e/ou modelo da moto
 *         year:
 *           type: integer
 *           description: Ano de fabricação da moto
 *         color:
 *           type: string
 *           description: Cor principal da moto
 *         status:
 *           type: boolean
 *           description: Status que define se um veículo pode ou não ser comprado
 *         buyValue:
 *           type: integer
 *           description: Valor de compra da moto
 *         category:
 *           type: string
 *           description: Categoria da moto
 *         engineCapacity:
 *           type: integer
 *           description: A capacidade do motor
 *       example:
 *         model: Yamaha MT-09
 *         year: 2018
 *         color: blue
 *         status: true
 *         buyValue: 45990
 *         category: Street
 *         engineCapacity: 890
 */

/**
 * @swagger
 * tags:
 *   name: Motorcycles
 *   description: API de gerenciamento das motos
 */

/**
 * @swagger
 * /motorcycles:
 *   get:
 *     summary: Retorna lista com todas as motos
 *     tags: [Motorcycles]
 *     responses:
 *       200:
 *         description: Lista de motos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Motorcycle'
 *   post:
 *     summary: Cria uma nova moto
 *     tags: [Motorcycles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewMotorcycle'
 *     responses:
 *       201:
 *         description: Moto criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Motorcycle'
 *       400:
 *         description: Nova moto inválida
 */
router.route('/motorcycles')
  .post((req, res) => motorcycleController.create(req, res))
  .get((req, res) => motorcycleController.read(req, res));

/**
 * @swagger
 * /motorcycles/{id}:
 *   get:
 *     summary: Retorna moto por id
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador da moto
 *     responses:
 *       200:
 *         description: Moto encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Motorcycle'
 *       404:
 *         description: Moto não encontrada
 *       400:
 *         description: Id da moto inválido
 *   put:
 *     summary: Atualiza moto por id
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador da moto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewMotorcycle'
 *     responses:
 *       200:
 *         description: Moto atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Motorcycle'
 *       404:
 *         description: Moto não encontrada
 *       400:
 *         description: Id ou nova moto inválido
 *   delete:
 *     summary: Remove moto por id
 *     tags: [Motorcycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador da moto
 *     responses:
 *       204:
 *         description: Moto removida com sucesso
 *       404:
 *         description: Moto não encontrada
 *       400:
 *         description: Id da moto inválido
 */
router.route('/motorcycles/:id')
  .get((req, res) => motorcycleController.readOne(req, res))
  .put((req, res) => motorcycleController.update(req, res))
  .delete((req, res) => motorcycleController.delete(req, res));

export default router;