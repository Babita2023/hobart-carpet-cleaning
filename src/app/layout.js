import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Premium Carpet Cleaning Hobart",
  description: "Professional and affordable carpet cleaning services in Hobart.",
   icons: {
    icon: '/images/Hobart1.png', // this sets favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
         <Toaster />
        <Footer />
      </body>
    </html>
  );
}