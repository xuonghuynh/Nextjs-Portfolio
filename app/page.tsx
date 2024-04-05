import Header from "@/components/header/header";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 w-full">
              <div className="absolute top-4 right-10"><ModeToggle /></div>
              <Header />
            </div>
        </div>
    );
}
