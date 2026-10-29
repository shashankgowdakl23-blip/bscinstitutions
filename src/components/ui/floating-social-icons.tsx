import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1AUCgdTUNN/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bsc_institutions?igsh=YmwxNmY1eGc4eXM3",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@b.s.c_trading_centre?si=Ek4XFCcSBrYalRet",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bsc-institutions/",
    icon: Linkedin,
  },
];

const FloatingSocialIcons = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name} page`}
          className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-border/40 flex items-center justify-center text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-primary hover:text-white hover:border-primary"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
