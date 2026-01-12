import { Sprout, Droplets, Calendar, Bug, BookOpen, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Sprout,
    title: "Crop Advisory",
    description:
      "Expert guidance on crop selection, variety recommendations, and cultivation practices suited to your soil and climate conditions. Our experienced team helps you make informed decisions for better yields.",
  },
  {
    icon: Droplets,
    title: "Soil Health Guidance",
    description:
      "Understanding your soil is crucial for successful farming. We provide guidance on soil testing, interpreting results, and recommending appropriate fertilizers and amendments for optimal soil health.",
  },
  {
    icon: Calendar,
    title: "Seasonal Farming Tips",
    description:
      "Stay updated with season-specific recommendations for planting, irrigation, fertilization, and harvesting. We share practical tips based on current weather patterns and crop stages.",
  },
  {
    icon: Bug,
    title: "Pest & Disease Information",
    description:
      "Learn to identify common pests and diseases affecting your crops. We provide information on symptoms, prevention measures, and recommended management practices for healthier crops.",
  },
  {
    icon: BookOpen,
    title: "Product Usage Guidance",
    description:
      "Proper application is key to product effectiveness. We explain correct dosages, mixing procedures, application timing, and safety precautions for all our agricultural inputs.",
  },
  {
    icon: Users,
    title: "Farmer Community Support",
    description:
      "Connect with fellow farmers and learn from shared experiences. We facilitate knowledge exchange and keep you informed about new products, techniques, and government schemes.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Supporting Farmers Every Step
            </h1>
            <p className="text-muted-foreground text-lg">
              Beyond quality products, we provide valuable guidance and information to help farmers make better decisions and achieve successful harvests.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="How We Help You"
            description="Our team of agricultural experts is here to guide you"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Information Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                Free Guidance
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Expert Advice at Your Fingertips
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our experienced team is always available to answer your questions and provide practical solutions for your farming challenges. Whether you're dealing with pest issues, nutrient deficiencies, or crop planning, we're here to help.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Visit our shop to discuss your farming needs with our experts, or give us a call for quick advice. We believe that informed farmers are successful farmers.
              </p>
            </div>
            <div className="card-elevated rounded-xl p-8">
              <h3 className="font-heading font-semibold text-xl mb-6">
                What You Can Ask Us About
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </span>
                  <span className="text-muted-foreground">Which variety is best for my land and season?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </span>
                  <span className="text-muted-foreground">How to identify and manage pests or diseases?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </span>
                  <span className="text-muted-foreground">What fertilizers should I apply and when?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </span>
                  <span className="text-muted-foreground">How to improve soil health naturally?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </span>
                  <span className="text-muted-foreground">What are the latest farming techniques and products?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
