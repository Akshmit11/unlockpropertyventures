"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import { CreateUserParams, UpdateUserParams } from "@/types";
import Property from "../database/models/property.model";
import JVProperty from "../database/models/jvproperty.model";
import Payment from "../database/models/payment.model";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("User update failed");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find the user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Unlink relationships in parallel
    await Promise.all([
      // Remove references from the 'Property' collection
      Property.updateMany(
        { owner: userToDelete._id },
        { $unset: { owner: 1 } }
      ),

      // Remove references from the 'JVProperty' collection
      JVProperty.updateMany(
        { owner: userToDelete._id },
        { $unset: { owner: 1 } }
      ),

      // Remove references from the 'Payment' collection
      Payment.updateMany({ user: userToDelete._id }, { $unset: { user: 1 } }),
    ]);

    // Delete the user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);

    // Revalidate the path (for Next.js ISR)
    revalidatePath("/");

    // Return deleted user info
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user and unlink relationships.");
  }
}
