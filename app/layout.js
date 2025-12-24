import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });//here i am using my own font from google fonts

export const metadata = {
  title: "Spendora",
  description: "one stop solution for all your expenses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`Inter ${inter.className}`}>
        {/* Header */}
        <Header />
        <main className="min-h-screen"> {children} </main>
        {/* Footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2026 Spendora. All rights reserved 😀.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
