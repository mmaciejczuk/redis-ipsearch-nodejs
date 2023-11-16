import express from "express";
import ips from "./IPs";

const router = express.Router();

export default (): express.Router => {
  ips(router);

  return router;
};
