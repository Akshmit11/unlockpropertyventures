import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LandDetails } from "@/types";
import { ContactForm } from "./ContactForm";

interface ContactInfoProps {
  landDetails: LandDetails;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ landDetails }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="flex items-center mb-4">
        <Avatar className="h-16 w-16 mr-4">
          <AvatarImage
            src={landDetails.owner.photo}
            alt={landDetails.owner.firstName}
          />
          <AvatarFallback>
            {landDetails.owner.firstName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{landDetails.owner.firstName}</p>
          <p className="text-sm text-muted-foreground">Property Owner</p>
        </div>
      </div>
      <p className="text-2xl font-bold mb-4">
        {landDetails.price.toLocaleString("hi-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })}
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mb-4">Contact Owner</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Intereseted in this property?</DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
