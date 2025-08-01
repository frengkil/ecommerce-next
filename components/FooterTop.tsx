import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: Props[] = [
  {
    title: "Visit Us",
    subtitle: "Kisaran, North Sumatra",
    icon: (
      <MapPin className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+62 821 6098 5991",
    icon: (
      <Phone className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00PM",
    icon: (
      <Clock className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "frengkiller@gmail.com",
    icon: (
      <Mail className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon}
      <div >
        <h3 className="font-semibold text-gray-900 group-hover:text-darkColor transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors">{subtitle}</p>
      </div>
    </div>
  );
};

export default FooterTop;
