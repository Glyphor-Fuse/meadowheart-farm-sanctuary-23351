import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-3xl font-display">Meadowheart</h3>
          <p className="text-foreground/60 text-sm leading-relaxed">
            A sanctuary for animals and a haven for humans. Dedicated to education, conservation, and connection since 1985.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-primary">Explore</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-foreground transition-colors">Our Animals</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Map & Grounds</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Daily Schedule</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Private Events</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Volunteer</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6 text-primary">Visit Us</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>1234 Whispering Willows Ln,<br />Green Valley, CA 90210</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>hello@meadowheart.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 text-primary">Farm News</h4>
          <p className="text-xs text-foreground/50 mb-4">
            Join our mailing list for baby animal announcements and seasonal event updates.
          </p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-background/10 border-border/10 rounded px-4 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-primary/90 text-foreground text-sm font-bold py-2 rounded transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border/10 text-center text-xs text-foreground/30">
        © {new Date().getFullYear()} Meadowheart Farm & Sanctuary. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
