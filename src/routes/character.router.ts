import { Request, Response, Router } from "express";
import { generateText } from "../services/generation.service";
const router = Router();

router.get("/:id", (req: Request, res: Response) => {
  const characterId = req.params.id;
  res.json({ message: `Character endpoint for ID: ${characterId}` });
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const data = await generateText(
      "Say hello from Mistral, and give me your version",
    );
    res.json({ message: "Character endpoint", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.all("/{*splat}", (_req: Request, res: Response) => {
  res.json({ message: "Route not available" });
});

export default router;
