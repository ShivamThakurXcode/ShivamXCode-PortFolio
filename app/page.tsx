import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SectionTitle from "@/components/section-title";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import { Code, Palette, Smartphone, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header showContactInfo={true} />
      <Navigation />

      <div className="glass-card border  rounded-lg p-6 mb-6 border-primary/30 shadow-lg">
        <SectionTitle title="About Me" />

        <div className="space-y-4 text-foreground/90 mb-6">
          <p>
            I am Full Stack MERN Developer specializing in turning ideas into
            robust digital solutions. With expertise in JavaScript, React.js,
            Node.js, Express, CSS, and HTML, I excel in crafting sophisticated
            websites and cutting-edge tech products. My skills include creating
            intuitive user interfaces and integrating external services
            seamlessly for optimal functionality.
          </p>
          <p>
            As a tenacious and detail-oriented project manager, I oversee every
            project phase from conception to deployment with meticulous
            attention to detail. I have a proven track record of delivering
            scalable, high-performing, and reliable solutions that exceed client
            expectations. Let's collaborate to bring your vision to life,
            focusing on innovation, quality, and impactful outcomes.
          </p>
          <p className="font-medium text-primary">
            Your vision + My Proficiency = Scalable
          </p>
        </div>

        <SectionTitle title="What I'm Doing" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ServiceCard
            title="Web Development"
            description="Delivering professional-grade development for high-quality websites."
            icon={<Code size={24} />}
          />
          <ServiceCard
            title="UI Design"
            description="Creating designs of the highest quality and modern standards with a professional touch."
            icon={<Palette size={24} />}
          />
          <ServiceCard
            title="Android Applications"
            description="Expertly crafting professional-grade Android applications."
            icon={<Smartphone size={24} />}
          />
          <ServiceCard
            title="Freelance Service"
            description="Crafting high-quality web and app solutions across diverse categories with professional finesse."
            icon={<Briefcase size={24} />}
          />
        </div>

        <SectionTitle title="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TestimonialCard
            name="Anjali Chaudhary"
            testimonial="Shivam's MERN stack skills are exceptional. His contributions to our project were invaluable..."
            imageSrc="/placeholder.svg?height=40&width=40"
          />
          <TestimonialCard
            name="Rajesh Sharma"
            testimonial="Working with Shivam on our e-commerce platform was a breeze. His MERN expertise..."
            imageSrc="/placeholder.svg?height=40&width=40"
          />
        </div>
      </div>
    </>
  );
}
