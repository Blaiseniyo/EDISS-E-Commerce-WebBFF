import dotenv from 'dotenv';

dotenv.config({ path: `.env` });

export const {
  FRONTEND_URL,
  NODE_ENV,
  APP_PORT,
  JWT_SECRET,
} = {...process.env } as { [key: string]: string };
