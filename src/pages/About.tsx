import { Target, Heart, Eye, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  {
    icon: Heart,
    title: "Trust",
    description:
      "Building lasting relationships with farmers through honest dealings and genuine products",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication about product quality, usage, and what to expect from our inputs",
  },
  {
    icon: Target,
    title: "Service",
    description:
      "Going beyond sales to provide guidance, support, and solutions for farming challenges",
  },
];

const achievements = [
  "Serving 10,000+ farmers across the region",
  "Authorized dealer for 20+ leading brands",
  "18+ years of trusted service",
  "Expert crop advisory support",
  "Quality-tested products only",
  "Strong after-sales support",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                Who We Are
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                KrishiMart is a trusted agricultural input supplier serving farmers in Maharashtra since 2005. What started as a small shop has grown into a comprehensive resource center for all farming needs.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We understand the challenges faced by local farmers and are committed to providing them with genuine, high-quality seeds, fertilizers, pesticides, and farm equipment at fair prices.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team includes experienced agricultural experts who provide personalized guidance to help farmers make informed decisions about their crops.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={aboutImage}
                alt="Agricultural experts advising farmers"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Empowering Farmers with Quality Inputs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To provide authentic, high-quality agricultural inputs to local farmers, enabling them to achieve better yields, sustainable farming practices, and improved livelihoods. We believe that every farmer deserves access to genuine products and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            description="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-elevated rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
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

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Achievements"
            title="18+ Years of Serving Farmers"
            description="A track record of trust, quality, and farmer satisfaction"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-accent"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
