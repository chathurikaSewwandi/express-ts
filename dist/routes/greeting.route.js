"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingRoute = void 0;
const express_1 = require("express");
class GreetingRoute {
    static getInstance() {
        if (!GreetingRoute.instance) {
            GreetingRoute.instance = new GreetingRoute();
        }
        return GreetingRoute.instance;
    }
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get("/", (req, res) => {
            res.send("Hello world");
        });
        this.router.post("/", (req, res) => {
            const { name } = req.body;
            res.send(`Hello ${name}`);
        });
    }
}
exports.GreetingRoute = GreetingRoute;
