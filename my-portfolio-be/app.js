const express = require('express');
const app = express();

const Middleware = require("./middleware/middleware");

const cors = require("cors");

const { NotFoundError } = require("./errors/expressErrors");

const contactRoutes = require("./routes/contact");
const projectsRoutes = require("./routes/projects");
const usersRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use(Middleware.authenticateJWT);

app.use("/contact", contactRoutes);
app.use("/projects", projectsRoutes);
app.use("/users", usersRoutes);

app.use(function (req, res, next) {
    return next(new NotFoundError());
});

/* Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;