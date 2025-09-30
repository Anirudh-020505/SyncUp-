
import { Router, type Request, type Response } from "express";
import { client } from "../stream-client.ts";

const router = Router();

router.post("/createUser", async (req: Request, res: Response) => {
  try {
    const { username, name, image } = req.body;

    if (!username || !name) {
      return res
        .status(400)
        .json({ message: "username and name are required" });
    }

    // Upsert user (create or update)
    await client.upsertUsers([
      {
        id: username,
        role: "user",
        name,
        image: image || `https://ui-avatars.com/api/?name=${name}`,
      },
    ]);

    // Generate token with 24h expiry
    const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
    const token = client.createToken(username, expiry);

    return res.status(200).json({ token, username, name });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Error creating user" });
  }
});

export default router;
