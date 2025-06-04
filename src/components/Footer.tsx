import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                className="w-12 h-12"
                src="../../public/logo.png"
                alt="Logo"
              />

              <span className="font-bold text-xl">TuitionSheba</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting students with qualified tutors across Bangladesh.
              Quality education made accessible.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/tutors"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Find Tutors
              </Link>
              <Link
                to="/categories"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Subjects
              </Link>
              <Link
                to="/hub"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Tutor Hub
              </Link>
              <Link
                to="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <div className="space-y-2">
              <Link
                to="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Mathematics
              </Link>
              <Link
                to="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Science
              </Link>
              <Link
                to="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                English
              </Link>
              <Link
                to="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Language Learning
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@tuitionsheba.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly items-center border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TuitionSheba. All rights reserved.
          </p>
          <p className="text-right text-muted-foreground">Develop & Design by: <a target="_blank" className="text-blue-600 underline" href="http://mdtanvirahamedshanto.vercel.app">Shanto</a></p>
        </div>
      </div>
    </footer>
  );
}
