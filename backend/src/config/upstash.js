import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit"; // note lowercase "Ratelimit"
import dotenv from "dotenv";

dotenv.config();

const redis = Redis.fromEnv();

// create a rate limiter (5 requests per 10 seconds)
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default ratelimit;
