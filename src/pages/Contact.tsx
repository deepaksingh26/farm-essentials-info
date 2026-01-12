import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 91315 95022"],
    subtext: "Call us for product inquiries",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info.krishimart@gmail.com"],
    subtext: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["New Town AB Block", "Kolkata, West Bengal"],
    subtext: "Visit our shop",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 9:00 AM - 2:00 PM"],
    subtext: "We're open most days",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about our products or need farming advice? We're here to help. Visit our shop or reach out through phone or email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="card-elevated rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1 mb-2">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Find Our Shop
              </h2>
              <p className="text-muted-foreground">
                Located in the heart of the agriculture market, easily accessible from all areas
              </p>
            </div>
            <div className="card-elevated rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58964.77803301498!2d88.41570895!3d22.5958055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sNew%20Town%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1704900000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KrishiMart Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
              We're Here to Help
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Whether you need product information, farming advice, or want to check availability, don't hesitate to reach out. Our team is always ready to assist you.
            </p>
            <div className="card-elevated rounded-xl p-6 inline-block">
              <p className="text-muted-foreground mb-2">For urgent queries, call us directly:</p>
              <p className="font-heading font-bold text-2xl text-primary">
                +91 91315 95022
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
