import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text 3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-left">
              Hello! My name is Tomiwa Jinadu, and I love building software that
              solves real-world problems and lives beautifully on the web. My
              interest in development began during my early college days when I
              started experimenting with mobile UI layouts and small web
              projects — figuring out how to bring ideas to life with code
              sparked a deep curiosity in me.
            </p>

            <p className="text-muted-foreground text-left">
              Fast-forward to today, I’ve had the opportunity to intern as a
              Software Engineer at Bemelo Health, contribute to mobile app
              projects in Flutter, and build backend systems using Node.js and
              Firebase. I’ve also worked on multithreaded Rust systems and
              data-driven apps like a housing price predictor using Python.
            </p>

            <p className="text-muted-foreground text-left">
              My current focus is growing as a full-stack developer and crafting
              clean, scalable solutions that are both functional and
              user-centered. I’m passionate about learning, shipping great code,
              and contributing to engineering teams that value impact and
              innovation. I’m currently seeking an internship or entry-level
              software engineering role where I can continue to grow, learn from
              experienced developers, and contribute to meaningful projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Development
                  </h4>
                  <p>
                    I develop full-stack applications using technologies like
                    React, Node.js, Firebase, and Python. I focus on building
                    efficient, scalable, and secure software solutions that
                    align with user needs and modern engineering practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p>
                    I create user-friendly interfaces that are both functional
                    and visually engaging. My design approach emphasizes
                    accessibility, consistency, and smooth user flows.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Experience</h4>
                  <p>
                    As a Software Engineering Intern at Bemelo Health, I worked
                    on Flutter-based mobile applications, integrated Firebase
                    for authentication and data handling, and collaborated with
                    cross-functional teams to deliver production-ready features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
