import { Request, Response, Router } from "express";
const router = Router();

router.get("/:id", (req: Request, res: Response) => {
  const characterId = req.params.id;
  res.json({ message: `Character endpoint for ID: ${characterId}` });
});

router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Character endpoint" });
});

router.all("/{*splat}", (_req: Request, res: Response) => {
  res.json({ message: "Route not available" });
});

export default router;
