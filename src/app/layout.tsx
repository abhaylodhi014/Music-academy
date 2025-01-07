
import Navbar from "@/components/Navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="inter.className" >
        <div className="relativ w-full flex item-center justify-center"></div>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
