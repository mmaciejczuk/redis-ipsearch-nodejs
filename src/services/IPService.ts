import axios from "axios";
import { redisService } from "./RedisService";

class IPService {
  async setIpInfo(ip: string): Promise<any> {
    const cachedData = await redisService.get(ip);
    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await axios.get(`http://ipwho.is/${ip}`);
      const ipData = response.data;
      await redisService.set(ip, ipData);

      return ipData;
    } catch (error) {
      console.error("Error fetching IP data:", error);
      throw error;
    }
  }

  async getIpInfo(ip: string): Promise<any> {
    const cachedData = await redisService.get(ip);
    if (cachedData) {
      return cachedData;
    }
  else
    return new Error("Error fetching IP data from cache");
  }

  async removeIp(ip: string): Promise<void> {
    await redisService.del(ip);
  }
}

export const ipService = new IPService();
