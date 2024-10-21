import localFont from "next/font/local";
import "./globals.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
export const metadata = {
  title: "Furniro",
  description: "",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
         <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
