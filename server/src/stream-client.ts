// import { StreamChat } from 'stream-chat';
// import 'dotenv/config'; // We add this here again as a failsafe

// const apiKey = process.env.STREAM_API_KEY;
// const apiSecret = process.env.STREAM_API_SECRET;

// // --- DEBUGGING BLOCK ---
// console.log('--- Initializing Stream Client ---');
// console.log('API Key Loaded:', apiKey);
// console.log('API Secret Loaded:', apiSecret);
// console.log('----------------------------------');
// // --- END DEBUGGING BLOCK ---

// // This check will give us a much better error message.
// if (!apiKey || !apiSecret) {
//   throw new Error('FATAL ERROR: Stream API Key or Secret is not defined in .env file!');
// }

// export const client = StreamChat.getInstance(apiKey, apiSecret);

// server/src/stream-client.ts
import { StreamClient } from "@stream-io/node-sdk";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY!;
const apiSecret = process.env.STREAM_API_SECRET!;

if (!apiKey || !apiSecret) {
  throw new Error("Missing Stream API credentials in .env");
}

export const client = new StreamClient(apiKey, apiSecret);
