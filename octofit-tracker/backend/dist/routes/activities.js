"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = __importDefault(require("../models/Activity"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const activities = await Activity_1.default.find({});
    res.json({ message: 'Activities resource', items: activities });
});
router.post('/', async (req, res) => {
    const activity = await Activity_1.default.create(req.body);
    res.status(201).json({ message: 'Activity logged', payload: activity });
});
exports.default = router;
