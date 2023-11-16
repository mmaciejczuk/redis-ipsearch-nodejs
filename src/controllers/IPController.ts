import { Request, Response } from "express";
import * as IPService from "../services/IPService";

export async function setIp(req: Request, res: Response) {
  const ip = req.params.ip;
  try {
    const ipInfo = await IPService.ipService.setIpInfo(ip);
    res.send(`Cache for IP address ${ip} has been created.`);
  } catch (error) {
    console.error("Error in setIp:", error);
    res.status(500).json({ error: "Error setting IP informtion" });
  }
}

export async function findIp(req: Request, res: Response) {
  console.log("dupa")
  const ip = req.params.ip;
  try {
    const ipInfo = await IPService.ipService.getIpInfo(ip);
    console.log(ipInfo)
    res.send(ipInfo);
  } catch (error) {
    console.error("Error in findIp:", error);
    res.status(500).json({ error: "Error fetching IP informtion" });
  }
}

export async function deleteIp(req: Request, res: Response) {
  const ip = req.params.ip;
  try {
    await IPService.ipService.removeIp(ip);
    res.send(`IP address ${ip} has been removed from cache.`);
  } catch (error) {
    console.error("Error in deleteIp:", error);
    res.status(500).json({ error: "Error clearing cache for IP address" });
  }
}
