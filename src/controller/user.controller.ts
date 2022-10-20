import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    //const user=await //call create user service
    const user = await createUser(req.body);
    return user;
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
