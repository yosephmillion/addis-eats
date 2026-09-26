import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),

  phone: z.string().trim().min(9, "Please enter a valid phone number."),

  city: z.string().trim().min(2, "Please enter your city."),

  address: z.string().trim().min(5, "Please enter your delivery address."),

  deliveryNote: z.string().optional(),

  paymentMethod: z.enum(["telebirr", "cbebirr", "chapa", "mpesa"], {
    message: "Please select a payment method.",
  }),
});
