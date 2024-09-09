import { Schema, model, models } from "mongoose";

export interface IContact extends Document {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
}

const ContactSchema: Schema<IContact> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = models?.Contact || model("Contact", ContactSchema);
export default Contact;
