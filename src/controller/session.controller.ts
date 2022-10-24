import { Request, Response } from "express";
import { createSession, findSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";
export const createUserSessionHandler = async (req: Request, res: Response) => {
  //validate the user's password

  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  //create a session

  const session = await createSession(user._id, req.get("user-agent") || "");
  //create an access token

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } //15min
  );
  //create a refresh token

  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenTtl") } //15min
  );

  return res.send({ accessToken, refreshToken });

  //return access& refreshtokens
};

export const getUserSessionHandler = async (req: Request, res: Response) => {
  const userId = res.locals.user._id;

  const session = await findSession({ user: userId, valid: true });

  return res.send(session);
};
