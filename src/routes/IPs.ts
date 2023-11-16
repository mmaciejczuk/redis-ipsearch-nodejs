import express from "express";
import { setIp, findIp, deleteIp } from "../controllers/IPController";
export default (router: express.Router) => {
  router.post("/:ip", setIp);
  router.get("/:ip", findIp);
  router.delete("/:ip", deleteIp);
};
