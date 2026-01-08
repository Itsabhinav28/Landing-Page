import { Globe, Mail, Twitter, Linkedin, Github, Accessibility } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-semibold">AccessWay</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              AI-powered navigation and smart assistance for people with disabilities — indoors and outdoors.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#solution" className="hover:text-white transition-colors">Solution</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@accessway.xyz" className="hover:text-white transition-colors">hello@accessway.xyz</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href="https://accessway.xyz" className="hover:text-white transition-colors">accessway.xyz</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 AccessWay. Built for Microsoft Imagine Cup.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Accessibility className="w-4 h-4 text-primary" />
              <span>AI for Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
