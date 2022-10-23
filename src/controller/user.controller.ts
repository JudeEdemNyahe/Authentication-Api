import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { omit } from "lodash";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/user.schema";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    //const user=await //call create user service
    const user = await createUser(req.body);
    return res.send(user); //removes password field from response
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
