import { Request, Response, Router } from "express";
const router = Router();

import characterRouter from "./character.router";
import storyRouter from "./story.router";

router.use("/characters", characterRouter);
router.use("/story", storyRouter);

router.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Version 1 endpoint",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

router.all("/{*splat}", (_req: Request, res: Response) => {
  res.json({ message: "Version 1 route not available" });
});

export default router;
