import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  Calendar,
  Users,
  Book,
  Globe,
  Lightbulb,
  Award,
  GraduationCap,
  Newspaper,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import ScrollingBanner from "@/components/scrolling-banner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEEE GU Chapter",
  description: "IEEE Galgotias University Student Chapter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Analytics/>
      <SpeedInsights/>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ContextMenu>
            <ContextMenuTrigger>
              <Navbar />
              <main className="bg-white">{children}</main>
              <ScrollingBanner />
              <Footer />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64 bg-gradient-to-br from-[#f0f8ff] to-[#e6f3ff] text-[#005580] rounded-lg shadow-lg">
              <ContextMenuSub>
                <ContextMenuSubTrigger className="hover:bg-[#d9ecff] transition-colors flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Societies
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48 bg-gradient-to-br from-[#f0f8ff] to-[#e6f3ff] text-[#005580] rounded-md shadow-lg">
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Women in Engineering
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Industry Applications Society
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Computer Society
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Computational Intelligence Society
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Education Society
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Upcoming Events
              </ContextMenuItem>
              <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Networking
              </ContextMenuItem>
              <ContextMenuSeparator className="bg-[#b3d9ff]" />
              <ContextMenuSub>
                <ContextMenuSubTrigger className="hover:bg-[#d9ecff] transition-colors flex items-center">
                  <Book className="mr-2 h-4 w-4" />
                  Research Areas
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48 bg-gradient-to-br from-[#f0f8ff] to-[#e6f3ff] text-[#005580] rounded-md shadow-lg">
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Artificial Intelligence
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Quantum Computing
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Cybersecurity
                  </ContextMenuItem>
                  <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors">
                    Robotics
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                Global Initiatives
              </ContextMenuItem>
              <ContextMenuSeparator className="bg-[#b3d9ff]" />
              <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center">
                <Lightbulb className="mr-2 h-4 w-4" />
                Innovation Challenges
              </ContextMenuItem>
                
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center">
                
                  <Award className="mr-2 h-4 w-4" />
                  <Link href="/awards">
                  Awards & Recognition
                  </Link>
                </ContextMenuItem>
                
              <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                Educational Resources
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
            {/* Extended Floating Action Button for Blog */}
            <Link href="/blog">
            <div className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 z-50">
              <Newspaper className="h-5 w-5" />
              <span className="font-medium">Blog</span>
            </div>
          </Link>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}