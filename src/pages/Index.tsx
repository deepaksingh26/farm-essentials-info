import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import heroImage from "@/assets/hero-farmland.jpg";
import seedsImage from "@/assets/products/seeds.jpg";
import fertilizersImage from "@/assets/products/fertilizers.jpg";
import pesticidesImage from "@/assets/products/pesticides.jpg";

const highlights = [
  {
    icon: Shield,
    title: "100% Genuine Products",
    description: "We only stock authentic, certified inputs from trusted brands",
  },
  {
    icon: Award,
    title: "18+ Years Experience",
    description: "Serving farmers with quality products since 2005",
  },
  {
    icon: Users,
    title: "10,000+ Happy Farmers",
    description: "Building trust with our farming community every day",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Well-stocked inventory to meet your farming needs",
  },
];

const featuredProducts = [
  {
    image: seedsImage,
    name: "Quality Seeds",
    description: "High-yield, disease-resistant seeds for all major crops",
  },
  {
    image: fertilizersImage,
    name: "Fertilizers",
    description: "Organic and chemical fertilizers for optimal soil health",
  },
  {
    image: pesticidesImage,
    name: "Crop Protection",
    description: "Effective pesticides and fungicides for healthy crops",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20">
              Trusted by Farmers Since 2005
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
              Trusted Agriculture Input Supplier
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Genuine Seeds, Fertilizers & Crop Protection You Can Trust
            </p>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl">
              We are committed to providing authentic, high-quality agricultural inputs to help farmers achieve better yields and sustainable farming success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
              >
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="font-semibold px-8"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            badge="Why Choose Us"
            title="Your Trusted Partner in Agriculture"
            description="We understand the needs of local farmers and provide reliable, genuine products with expert guidance"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elevated rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Products"
            title="Quality Inputs for Better Yields"
            description="Browse our comprehensive range of agricultural products"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group card-elevated rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="font-semibold px-8">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Grow Better Crops?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Visit our shop or contact us today. We're here to help you with all your agricultural input needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
