import { Schema, Document, model, models } from "mongoose";
import { IProperty } from "./property.model";
import { IJVProperty } from "./jvproperty.model";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
  properties: IProperty[];
  jvProperties: IJVProperty[];
  planType: "none" | "basic" | "premium";
  subscriptionExpiry?: Date | null;
  totalPropertiesPosted: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  clerkId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  properties: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
  jvProperties: [{ type: Schema.Types.ObjectId, ref: 'JVProperty' }],
  planType: { type: String, default: "none" },
  subscriptionExpiry: { type: Date, default: null },
  totalPropertiesPosted: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema)

export default User;