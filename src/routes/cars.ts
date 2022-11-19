import { Router } from 'express';
import CarController from '../controllers/Car';

const carController = new CarController();

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - _id
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - doorsQty
 *         - seatsQty
 *       properties:
 *         _id:
 *           type: string
 *           description: Identificador do carro
 *         model:
 *           type: string
 *           description: Marca e/ou modelo do carro
 *         year:
 *           type: integer
 *           description: Ano de fabricação do carro
 *         color:
 *           type: string
 *           description: Cor principal do carro
 *         status:
 *           type: boolean
 *           description: Status que define se um veículo pode ou não ser comprado
 *         buyValue:
 *           type: integer
 *           description: Valor de compra do carro
 *         doorsQty:
 *           type: integer
 *           description: Quantidade de portas do carro
 *         seatsQty:
 *           type: integer
 *           description: Quantidade de assentos do carro
 *       example:
 *         _id: 62eacce38ed467e904f030e0
 *         model: Ferrari Maranello
 *         year: 1963
 *         color: red
 *         status: true
 *         buyValue: 3500000
 *         doorsQty: 2
 *         seatsQty: 2
 *     NewCar:
 *       type: object
 *       required:
 *         - model
 *         - year
 *         - color
 *         - buyValue
 *         - doorsQty
 *         - seatsQty
 *       properties:
 *         model:
 *           type: string
 *           description: Marca e/ou modelo do carro
 *         year:
 *           type: integer
 *           description: Ano de fabricação do carro
 *         color:
 *           type: string
 *           description: Cor principal do carro
 *         status:
 *           type: boolean
 *           description: Status que define se um veículo pode ou não ser comprado
 *         buyValue:
 *           type: integer
 *           description: Valor de compra do carro
 *         doorsQty:
 *           type: integer
 *           description: Quantidade de portas do carro
 *         seatsQty:
 *           type: integer
 *           description: Quantidade de assentos do carro
 *       example:
 *         model: Ferrari Maranello
 *         year: 1963
 *         color: red
 *         status: true
 *         buyValue: 3500000
 *         doorsQty: 2
 *         seatsQty: 2
 */

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API de gerenciamento dos carros
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Retorna lista com todos os carros
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Lista de carros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *   post:
 *     summary: Cria um novo carro
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCar'
 *     responses:
 *       201:
 *         description: Carro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Novo carro inválido
 */
router.route('/cars')
  .post((req, res) => carController.create(req, res))
  .get((req, res) => carController.read(req, res));

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Retorna carro por id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador do carro
 *     responses:
 *       200:
 *         description: Carro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Carro não encontrado
 *       400:
 *         description: Id do carro inválido
 *   put:
 *     summary: Atualiza carro por id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador do carro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewCar'
 *     responses:
 *       200:
 *         description: Carro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Carro não encontrado
 *       400:
 *         description: Id ou novo carro inválido
 *   delete:
 *     summary: Remove carro por id
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador do carro
 *     responses:
 *       204:
 *         description: Carro removido com sucesso
 *       404:
 *         description: Carro não encontrado
 *       400:
 *         description: Id do carro inválido
 */
router.route('/cars/:id')
  .get((req, res) => carController.readOne(req, res))
  .put((req, res) => carController.update(req, res))
  .delete((req, res) => carController.delete(req, res));

export default router;