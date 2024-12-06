import express from "express";
import { agregarProveedor, obtenerProveedores, actualizarProveedor, eliminarProveedor } from "../controllers/provider.controller.js";
import { authRequired } from "../middlewares/ValidateToken.js"; // Si necesitas protección de rutas
import { validateProvider } from "../middlewares/ValidateProvider.js"; // Middleware para validar los datos del proveedor

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Providers
 *   description: API for managing providers
 */

/**
 * @swagger
 * /api/v1/providers:
 *   post:
 *     summary: Add a new provider
 *     tags: [Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Provider's name
 *               email:
 *                 type: string
 *                 description: Provider's email
 *     responses:
 *       200:
 *         description: Provider added successfully
 *       400:
 *         description: Invalid input
 */
router.post("", authRequired, validateProvider, agregarProveedor); // Crear proveedor con validación y autenticación

/**
 * @swagger
 * /api/v1/providers:
 *   get:
 *     summary: Get all providers
 *     tags: [Providers]
 *     responses:
 *       200:
 *         description: List of providers
 *       401:
 *         description: Unauthorized
 */
router.get("", authRequired, obtenerProveedores); // Leer todos los proveedores con autenticación

/**
 * @swagger
 * /api/v1/providers/{id}:
 *   put:
 *     summary: Update a provider
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Provider ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Provider's name
 *               email:
 *                 type: string
 *                 description: Provider's email
 *     responses:
 *       200:
 *         description: Provider updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Provider not found
 */
router.put("/:id", authRequired, validateProvider, actualizarProveedor); // Actualizar proveedor con validación y autenticación

/**
 * @swagger
 * /api/v1/providers/{id}:
 *   delete:
 *     summary: Delete a provider
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Provider ID
 *     responses:
 *       200:
 *         description: Provider deleted successfully
 *       404:
 *         description: Provider not found
 */
router.delete("/:id", authRequired, eliminarProveedor); // Eliminar proveedor con autenticación

export default router;