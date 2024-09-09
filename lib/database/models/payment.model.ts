import { Document, Schema, model, models } from "mongoose";

export interface IPayment extends Document {
  _id: string;
  user: { _id: string; username: string };
  razorpayId: string;
  razorpayOrderId: string;
  amount: number;
  plan: "basic" | "pro" | "none";
  createdAt: Date;
  endAt: Date;
}

const PaymentSchema: Schema<IPayment> = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  razorpayId: { type: String, required: true },
  razorpayOrderId: { type: String, required: true },
  amount: { type: Number, required: true },
  plan: { type: String, default: "none" },
  createdAt: { type: Date, default: Date.now },
  endAt: { type: Date, default: Date.now },
});

const Payment = models?.Payment || model("Payment", PaymentSchema);

export default Payment;
