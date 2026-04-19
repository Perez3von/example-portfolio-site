import HeroSection from "./components/sections/HeroSection";
import BackgroundSection from "./components/sections/BackgroundSection";
import ToolkitSection from "./components/sections/ToolkitSection";
import CompletedProjectsSection from "./components/sections/CompletedProjectsSection";
import WorkInProgressSection from "./components/sections/WorkInProgressSection";

export default function Page() {
  return (
    <main className="min-h-screen mesh-gradient-bg">
      <HeroSection />
      <BackgroundSection />
      <ToolkitSection />
      <CompletedProjectsSection />
      <WorkInProgressSection />
    </main>
  );
}