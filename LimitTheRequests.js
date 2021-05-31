import rateLimit from "express-rate-limit";

const rateLimtr = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 101,
    message: 'You have surpassed the 101 requests in the 24 hour time frame limit',
    header: true,
});

app.use("/api", rateLimtr);