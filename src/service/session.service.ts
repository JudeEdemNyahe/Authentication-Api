import { FilterQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
}

export async function findSession(query: FilterQuery<SessionDocument>) {
  return await SessionModel.find(query).lean();
}
