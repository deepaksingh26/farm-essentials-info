import {
  Sprout,
  Droplets,
  Calendar,
  Bug,
  BookOpen,
  Users,
} from "lucide-react";

import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Sprout,
    title: "Crop Advisory",
    description:
      "Personalized guidance on crop selection, variety choice, and cultivation practices based on your soil, climate, and season for consistently better yields.",
  },
  {
    icon: Droplets,
    title: "Soil Health Guidance",
    description:
      "Expert support in soil testing, nutrient analysis, and long-term soil improvement strategies to maintain fertility and productivity.",
  },
  {
    icon: Calendar,
    title: "Seasonal Farming Tips",
    description:
      "Timely recommendations for planting, irrigation, fertilization, and harvesting aligned with crop stages and local weather conditions.",
  },
  {
    icon: Bug,
    title: "Pest & Disease Management",
    description:
      "Accurate identification of pests and diseases with preventive and corrective measures to protect crops and reduce losses.",
  },
  {
    icon: BookOpen,
    title: "Product Usage Guidance",
    description:
      "Clear instructions on dosage, application methods, timing, and safety to ensure maximum effectiveness of agricultural inputs.",
  },
  {
    icon: Users,
    title: "Farmer Community Support",
    description:
      "Knowledge sharing, updates on new technologies, and awareness of government schemes through a strong local farming network.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-muted via-background to-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="relative container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-6">
              Trusted Farmer Support
            </span>

            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Services That Help Farmers
              <br className="hidden md:block" />
              <span className="text-primary">Grow With Confidence</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We go beyond selling products. Our mission is to empower farmers
              with expert knowledge, practical solutions, and continuous support
              for sustainable and profitable farming.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Experience", value: "15+" },
              { label: "Farmers Guided", value: "10,000+" },
              { label: "Crop Solutions", value: "100+" },
              { label: "Trusted Brands", value: "25+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl bg-muted p-6 hover:bg-accent transition-colors"
              >
                <div className="text-3xl font-heading font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="How We Support You"
            description="Practical, experience-driven services designed for real farming challenges"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION PANEL */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-6">
                Free Expert Consultation
              </span>

              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Real Advice. Real Experience.
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Farming decisions can be complex. Our experts are here to guide
                you with honest, field-tested advice — whether it’s choosing the
                right crop variety, improving soil health, or managing pests.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Visit us for in-person consultation or call us anytime for
                practical guidance you can trust.
              </p>
            </div>

            <div className="relative bg-background rounded-2xl p-10 shadow-md border border-border">
              <h3 className="font-heading font-semibold text-xl mb-6">
                Farmers Commonly Ask Us
              </h3>

              <ul className="space-y-4">
                {[
                  "Which crop variety suits my land and season?",
                  "How can I control pests without damaging crops?",
                  "What nutrients does my soil currently need?",
                  "How can I increase yield sustainably?",
                  "Which new farming practices are worth adopting?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </span>
                    <span className="text-muted-foreground">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
