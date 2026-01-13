import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 91315 95022"],
    subtext: "Quick response for urgent queries",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["info.varindasolutions@gmail.com"],
    subtext: "We usually reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Our Store",
    details: ["Barmer, Rajasthan – 344024", "District HQ: Barmer"],
    subtext: "Easily accessible location",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon–Sat: 8:00 AM – 7:00 PM", "Sunday: 9:00 AM – 2:00 PM"],
    subtext: "Open most days",
  },
];

const Contact = () => {
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
              Contact Varinda Solutions
            </span>

            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Let’s Talk About
              <br className="hidden md:block" />
              <span className="text-primary">Your Farming Needs</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Whether you’re looking for quality agricultural inputs, expert
              guidance, or product availability, our team is always ready to
              help you make confident farming decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative bg-background border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <div className="space-y-1 mb-3">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + CONTEXT */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-5">
                Our Location
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Find Our Store Easily
              </h2>
              <p className="text-muted-foreground text-lg">
                Located in the heart of Barmer’s agricultural market, our store
                is easy to reach and well-connected.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57488.7378974322!2d71.36011405556799!3d25.769040200622783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39443aa1e66fbcbf%3A0x846d4779e8aa9869!2sBarmer%2C%20Rajasthan%20344001!5e0!3m2!1sen!2sin!4v1768233381179!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Varinda Solutions Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-background border border-border rounded-2xl p-10 shadow-sm">
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
              We’re Always Happy to Help
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              From product selection to farming advice, our experienced team is
              here to support you. Reach out anytime — your success matters to
              us.
            </p>

            <div className="inline-flex flex-col items-center gap-2">
              <span className="text-muted-foreground">
                For urgent assistance, call us directly
              </span>
              <span className="font-heading font-bold text-3xl text-primary">
                +91 91315 95022
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
