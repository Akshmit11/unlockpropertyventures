import { Schema, Document, model, models } from "mongoose";

// Joint Venture (JV) Property Interface
export interface IJVProperty extends Document {
  _id: string;
  propertyType: "Residential Land/Plot" | "Commercial Land" | "Industrial Land" | "Warehouse/Godown" | "Farm House" | "Agricultural Land" | "Industrial Building" | "Industrial Shed";
  address: string;
  city: string;
  country: string;
  size: number;
  price: number;
  images: string[];             // Array of image URLs
  videos: string[];             // Array of video URLs
  googleMapsLink: string;
  status: "active" | "sold";    // Status of property
  phoneNumber: string;
  owner: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// JV Property Schema
const JVPropertySchema: Schema<IJVProperty> = new Schema({
  propertyType: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  size: { type: Number, required: true },   // Size in acres or sq.ft
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  videos: { type: [String], default: [] },
  googleMapsLink: { type: String, required: true },
  status: { type: String, default: "active" },
  phoneNumber: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const JVProperty = models?.JVProperty || model('JVProperty', JVPropertySchema);
export default JVProperty;
