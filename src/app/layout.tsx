import "./globals.css";
import ClientShell from "../components/ClientShell";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Local Guide Platform",
  description: "Connect with local guides",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the entire app with AuthProvider */}
        <AuthProvider>
          {/* ClientShell handles Navbar, Footer, Toasts */}
          <ClientShell>
            <main className="min-h-[70vh]">{children}</main>
          </ClientShell>
        </AuthProvider>
      </body>
    </html>
  );
}
