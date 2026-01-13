import { Target, Heart, Eye, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  {
    icon: Heart,
    title: "Trust",
    description:
      "We build long-term relationships with farmers through honesty, reliability, and genuine agricultural inputs.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication about product quality, correct usage, and realistic expectations — no false promises.",
  },
  {
    icon: Target,
    title: "Service Commitment",
    description:
      "We go beyond selling products by providing expert guidance and practical solutions for real farming challenges.",
  },
];

const achievements = [
  "Serving 10,000+ farmers across the region",
  "Authorized dealer for 20+ leading agri brands",
  "18+ years of trusted service",
  "Experienced crop advisory support",
  "Strict quality-checked products only",
  "Strong post-sale farmer support",
];

const About = () => {
  return (
    <Layout>
      {/* HERO / STORY */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-muted via-background to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="relative container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-6">
                About Vrinda Solutions
              </span>

              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                A Trusted Partner for
                <br className="hidden md:block" />
                <span className="text-primary">Indian Farmers</span>
              </h1>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Vrinda Solutions is a trusted agricultural input supplier
                serving farmers since 2005. What began as a small local shop
                has grown into a reliable resource center for modern and
                traditional farming needs.
              </p>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We deeply understand the challenges faced by farmers and are
                committed to delivering genuine seeds, fertilizers, pesticides,
                and farm tools at fair and honest prices.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Backed by experienced agricultural professionals, we provide
                practical, field-tested advice to help farmers make confident
                decisions for healthier crops and better yields.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <img
                src={aboutImage}
                alt="Agricultural experts advising farmers"
                className="rounded-3xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-6">
              Our Mission
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Empowering Farmers Through Quality & Knowledge
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to ensure farmers have access to authentic,
              high-quality agricultural inputs along with expert guidance.
              We aim to support sustainable farming practices, improved crop
              productivity, and long-term farmer prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            badge="Our Core Values"
            title="What Guides Everything We Do"
            description="Principles that define our commitment to farmers"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 text-center border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-4">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="18+ Years of Farmer Trust"
            description="A proven record of quality, service, and reliability"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-accent"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
