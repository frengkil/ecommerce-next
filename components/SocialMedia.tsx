import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import Link from "next/link";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLinks = [
  {
    title: "Youtube",
    href: "https://youtube.com/telanlah",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/telanlah",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/frengkilimbong",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://facebook.com/limbsit",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://slack.com/telanlah",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5 ", className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link href={item.href} target="_blank" rel="noopenner noreferrer" className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect", iconClassName)}>
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
