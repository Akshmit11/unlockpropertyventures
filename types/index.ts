// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export interface ListingType {
  id: number;
  title: string;
  acres: number;
  type: "Residential" | "Commercial" | "Mixed Use";
  imageUrl: string;
}

export interface SuccessStoryType {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface PricingTierType {
  name: string;
  price: number;
  features: string[];
}

export interface LandDetails {
  _id: string;
  address: string;
  city: string;
  country: string;
  size: number;
  price: number;
  images: string[];
  videos: string[];
  googleMapsLink: string;
  status: "active" | "sold" | "pending";
  contactCount: number;
  dateUploaded: Date;
  phoneNumber: string;
  owner: { _id: string; username: string, firstName: string, lastName: string, email: string, photo: string };
}

export interface SuggestedProperty {
  id: string;
  title: string;
  image: string;
  price: string;
}

// create user params
export type CreateUserParams = {
  clerkId: string;
  email: string;
  photo: string;
  firstName: string;
  lastName: string;
  username: string;
}

// update user params
export type UpdateUserParams = {
  firstName: string
  lastName: string
  username: string
  photo: string
}