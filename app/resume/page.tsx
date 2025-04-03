import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SectionTitle from "@/components/section-title";
import TimelineItem from "@/components/timeline-item";
import SkillBar from "@/components/skill-bar";
import TechnicalSkills from "@/components/skillls";

export default function Resume() {
  return (
    <>
      <Header />
      <Navigation />

      <div className="glass-card rounded-lg p-6 mb-6 border-primary/30 shadow-lg">
        <SectionTitle title="Resume" />

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Education
          </h3>

          <TimelineItem
            title="Graduation"
            subtitle="Computer Science"
            period="2019 — 2023"
          >
            <p>
              I am currently pursuing my Bachelor's degree in Computer Science
              at Dr. Bhimrao Ambedkar University, Agra. This rigorous academic
              program has equipped me with a solid foundation in computer
              science concepts, programming languages, and software development
              methodologies. I am gaining valuable hands-on experience through
              practical projects and coursework, preparing me for a successful
              career in this dynamic field of technology.
            </p>
          </TimelineItem>

          <TimelineItem
            title="Secondary Education"
            subtitle="PCM (Physics, Chemistry, Mathematics)"
            period="2017 — 2019"
          >
            <p>
              I completed my secondary education in the PCM (Physics, Chemistry,
              Mathematics) stream from the Uttar Pradesh Board. This educational
              background provided me with a solid understanding of scientific
              principles and mathematical concepts, laying the groundwork for my
              academic journey in the field of Computer Science.
            </p>
          </TimelineItem>

          <TimelineItem
            title="Higher Education"
            subtitle="Computer Science"
            period="2015 — 2017"
          >
            <p>
              I obtained my high school diploma from SKJ Inter College, located
              in Agra, Uttar Pradesh. During this period, I developed a strong
              academic foundation and acquired essential skills that paved the
              way for my educational pursuits in Computer Science.
            </p>
          </TimelineItem>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Experience
          </h3>

          <TimelineItem
            title="Freelance MERN Developer"
            subtitle="Self-Employed"
            period="2021 — Present"
          >
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Developed custom websites for various clients, focusing on
                responsive design and user experience.
              </li>
              <li>
                Collaborated with clients to gather requirements and deliver
                tailored web solutions.
              </li>
              <li>
                Improved website performance on time and SEO through best
                practices in web development.
              </li>
              <li>
                Implemented secure authentication systems using JWT and bcrypt.
              </li>
              <li>
                Managed version control and project collaboration using Git and
                GitHub.
              </li>
            </ul>
          </TimelineItem>
        </div>

        <div>
          <TechnicalSkills></TechnicalSkills>
        </div>
      </div>
    </>
  );
}
