import React from "react";
import { motion } from "framer-motion";
import { MapPin, FileText, Ruler, UserIcon, Home, Globe } from "lucide-react";
import { LandDetails as LandDetailsType } from "@/types";

interface LandDetailsProps {
  landDetails: LandDetailsType;
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
};

export const LandDetails: React.FC<LandDetailsProps> = ({ landDetails }) => {
  const formattedDateUploaded = landDetails.dateUploaded.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="bg-white pb-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Details</h2>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <Home className="mr-3 h-5 w-5 text-gray-500 mt-1" />
          <div>
            <p className="font-medium text-gray-700">{landDetails.address}</p>
            <p className="text-sm text-gray-500">{landDetails.city}, {landDetails.country}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Ruler className="mr-3 h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Land Size: {landDetails.size} acres</span>
        </div>

        <div className="flex items-center">
          <Globe className="mr-3 h-5 w-5 text-gray-500" />
          <a
            href={landDetails.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Google Maps
          </a>
        </div>

        <div className="flex items-center">
          <MapPin className="mr-3 h-5 w-5 text-gray-500" />
          <p className="text-sm text-gray-500">
            Uploaded on: {formattedDateUploaded}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Property Statistics</h2>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <UserIcon className="mr-3 h-5 w-5 text-gray-500" />
          <span className="text-gray-700">
            {landDetails.contactCount} people have contacted this land owner
          </span>
        </div>

        <div className="flex items-center">
          <FileText className="mr-3 h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Status: {landDetails.status}</span>
        </div>
      </div>
    </motion.div>
  );
};
