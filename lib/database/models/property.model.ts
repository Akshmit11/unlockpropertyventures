import { Schema, Document, model, models } from "mongoose";
import { IContact } from "./contact.model";

//  Property Interface
export interface IProperty extends Document {
  _id: string;
  propertyFor: "sale" | "rent";        // Sale or Rent
  propertyType: string;                        // Property type (e.g., Flat, Villa, Office, etc.)
  address: string;
  city: string;
  country: string;
  size: number;                        // Area of the property (sq. ft / acre)
  sizeUnit: "sq. ft" | "acre";
  bedrooms?: number;                   // Number of bedrooms (optional for non-residential)
  bathrooms?: number;                  // Number of bathrooms (optional for non-residential)
  furnishedStatus?: "furnished" | "semi-furnished" | "unfurnished";  // Furnishing status (for residential)
  price: number;                       // Price of the property
  bookingAmount?: number;              // Optional booking/token amount
  images: string[];                    // Array of image URLs
  videos: string[];                    // Array of video URLs
  googleMapsLink: string;              // Google Maps location
  status: "active" | "sold";
  contactCount: number,  // Tracks free contact access
  hasPaidForContacts: boolean, // Tracks if user has paid for unlimited contacts
  contacts: IContact[],  // Array of ContactForm references
  phoneNumber: string;
  isFeatured: boolean;                 // Whether property is featured
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

//  Property Schema
const PropertySchema: Schema<IProperty> = new Schema({
  propertyFor: { type: String, enum: ["sale", "rent"], required: true },
  propertyType: { 
    type: String, 
    enum: [
      "Flat/Apartment", "Residential House", "Villa", "Builder Floor Apartment",
      "Penthouse", "Studio Apartment", "Commercial Office Space", 
      "Office in IT Park/SEZ", "Commercial Shop", "Commercial Showroom",
      "Commercial Land", "Warehouse/Godown", "Industrial Land", 
      "Industrial Building", "Industrial Shed", "Farm House"
    ], 
    required: true 
  },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  size: { type: Number, required: true },  // Area in sq.ft or acres
  sizeUnit: { type: String, enum: ["sq. ft", "acre"], required: true },
  bedrooms: { type: Number },              // Optional for non-residential
  bathrooms: { type: Number },             // Optional for non-residential
  furnishedStatus: { 
    type: String, 
    enum: ["furnished", "semi-furnished", "unfurnished"], 
    default: "unfurnished" 
  },
  price: { type: Number, required: true },
  bookingAmount: { type: Number },         // Optional
  images: { type: [String], required: true },
  videos: { type: [String] },
  googleMapsLink: { type: String, required: true },
  status: { type: String, enum: ["active", "sold"], default: "active" },
  contactCount: { type: Number, default: 0 },  // Tracks free contact access
  hasPaidForContacts: { type: Boolean, default: false }, // Tracks if user has paid for unlimited contacts
  contacts: [{ type: Schema.Types.ObjectId, ref: "Contact" }],  // Array of ContactForm references
  phoneNumber: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Property = models?.Property || model('Property', PropertySchema);
export default Property;
