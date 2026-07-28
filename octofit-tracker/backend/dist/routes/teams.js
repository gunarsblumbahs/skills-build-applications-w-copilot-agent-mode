"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = __importDefault(require("../models/Team"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const teams = await Team_1.default.find({});
    res.json({ message: 'Teams resource', items: teams });
});
router.post('/', async (req, res) => {
    const team = await Team_1.default.create(req.body);
    res.status(201).json({ message: 'Team created', payload: team });
});
exports.default = router;
