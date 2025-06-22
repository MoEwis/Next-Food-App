import { z } from "zod";

//  Schema
export const checkoutSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is too short"),
  zip: z.string().min(4, "Zip code must be at least 4 digits"),
  city: z.string().min(2, "City is required"),
});
