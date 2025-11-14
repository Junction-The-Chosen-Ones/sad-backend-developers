import bodyParser from "body-parser";
import cors from "cors";
import Express, { Request, Response } from "express";
import fs from "fs";
import helmet from "helmet";
import path from "path";
import swaggerUi from "swagger-ui-express";
import routerV1 from "./routes/router";

const app = Express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerDocumentPath = path.join(__dirname, "swagger.json");
const swaggerDocument = JSON.parse(
  fs.readFileSync(swaggerDocumentPath, "utf8")
);

app.use("/api/v1", routerV1);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});

app.all("/{*splat}", (_req: Request, res: Response) => {
  res.json({ message: "Route not available" });
});

export default app;
