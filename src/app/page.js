
import ProjectsList from "./_components/ProjectsList";
import Footer2 from "./_components/Footer2";
import Hero2 from "./_components/Hero2";
import Contacts from "./_components/Contacts";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Hero2 />

        <ProjectsList />

        <Contacts />

        <div className="mt-auto">
          <Footer2 />
        </div>
      </div>
    </>
  );
}
