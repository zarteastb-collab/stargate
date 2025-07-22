// routes/api.js

import { Router } from 'express';
import genAI from '../services/googleai.js';

const router = Router();

// Endpoint to check if a user is logged in
router.get('/get-user', (req, res) => {
  if (req.user) res.json({ user: req.user });
  else res.json({ user: null });
});

// Other API routes like /chat would go here
// ...

export default router;
