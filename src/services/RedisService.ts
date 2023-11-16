//import { createClient, RedisClientType } from "redis";
import { Redis } from "ioredis";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

class RedisService {
  private client: Redis;

  constructor() {
    this.client = new Redis(
      "redis://default:3e76d480e76c4756a78542cbc7eaae29@us1-wired-ray-39225.upstash.io:39225",
    );
  }

  async set(key: string, value: any) {
    await this.client.set(key, JSON.stringify(value));
  }

  async get(key: string): Promise<any | null> {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }
}

export const redisService = new RedisService();
