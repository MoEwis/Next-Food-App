import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const ContactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Number",
    content: "+1 (123) 456-0090",
    link: "tel:+11234560090",
    description: "Available 24/7 for your calls",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Address",
    content: "hello@example.com",
    link: "mailto:hello@example.com",
    description: "Send us your queries anytime",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    content: "123 Business Avenue",
    link: "https://maps.google.com/?q=123+Business+Avenue",
    description: "New York, NY 10001",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    content: "Mon - Sun: 9AM - 11PM",
    description: "Including holidays & weekends",
  },
];
