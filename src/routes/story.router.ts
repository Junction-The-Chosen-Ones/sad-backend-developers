import { Request, Response, Router } from "express";
const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Story endpoint" });
});

router.all("/{*splat}", (_req: Request, res: Response) => {
  res.json({ message: "Route not available" });
});

export default router;
