import AboutSection from "@/app/(Home)/_components/AboutSection";
import ContactSection from "@/app/(Home)/_components/ContactSection";
import { ModeToggle } from "@/app/(Home)/_components/ThemeToggle";
import Header from "@/app/(Home)/_components/Header";
import SkillSection from "@/app/(Home)/_components/SkillSection";

export default function Home() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 w-full">
              <div className="absolute top-4 right-10"><ModeToggle /></div>
              <Header />
              <ContactSection />
              <AboutSection />
              <SkillSection />
            </div>
        </div>
    );
}
