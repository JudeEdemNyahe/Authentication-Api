import { DocumentDefinition } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email: email, password: password });
  if (!user) {
    return false; //
  }

  const isvalid = await user.comparePassword(password);

  if (!isvalid) return false; //

  return omit(user.toJSON(), "password");
}
