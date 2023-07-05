import express from "express";
import { router } from "./src/shared/routes";

const app = express();
app.use(express.json());

app.use(router);

app.listen(8080, () => {
    console.log("App started on port 8080");
});