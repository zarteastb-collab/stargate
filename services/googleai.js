---START services/googleai.js CONTENT---
// services/googleai.js

import { GoogleGenerativeAI } = { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export default genAI;
---END services/googleai.js CONTENT---