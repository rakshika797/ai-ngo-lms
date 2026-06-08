import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster />
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}