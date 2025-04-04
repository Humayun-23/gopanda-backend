import prisma from "../../prisma/prisma-client";;
import { SignupUser } from "../utils/types";

export const storeUser = async (userData: SignupUser) => {
  try {
    const user = await prisma.user.create({
      data: userData,
      omit: {
        password: true
      }
    });
    return user;
  } catch (error) {
    const errorMsg =
      error instanceof Error
        ? `Error in storing user to db: ${error.message}`
        : `unknown error`;
    throw new Error(errorMsg);
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        name: true,
        username: true,
        state: true,
        country: true,
        role: true,
      },
    });
    return users;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error while retrieving users";
    throw new Error(`Error while retrieving users ${errorMessage}`);
  }
};
