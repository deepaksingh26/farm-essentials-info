import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";

/* Images */
import seedsImage from "@/assets/products/seeds.jpg";
import seedsImage2 from "../assets/products/fodder_seed.png";
import seedsImage1 from "../assets/products/field_corp_Seed.png";

import fertilizersImage from "@/assets/products/fertilizers.jpg";
import fertilizersImage1 from "../assets/products/Organic_fertilizr.png";
import fertilizersImage2 from "../assets/products/DAP&URIA.png";

import pesticidesImage from "@/assets/products/pesticides.jpg";
import pesticidesImage1 from "../assets/products/fungicides.png";
import pesticidesImage2 from "../assets/products/herbisides.png";

import cropNutritionImage from "@/assets/products/crop-nutrition.jpg";
import corpnutritionImage1 from "../assets/products/crop-nutrition1.png";
import corpnutritionImage2 from "../assets/products/crop-nutrition2.png";

import farmToolsImage from "@/assets/products/farm-tools.jpg";
import farmtoolsImage1 from "../assets/products/farmtools1.png";
import farmtoolsImage2 from "../assets/products/farmtools2.png";

const productCategories = [
  {
    id: "seeds",
    title: "Seeds",
    description: "Certified seeds for better germination and higher yield",
    products: [
      {
        image: seedsImage,
        name: "Hybrid Vegetable Seeds",
        description:
          "High-performance hybrid seeds with strong disease resistance",
      },
      {
        image: seedsImage1,
        name: "Field Crop Seeds",
        description:
          "Certified seeds for cotton, soybean, wheat, and groundnut",
      },
      {
        image: seedsImage2,
        name: "Fodder Seeds",
        description:
          "High-quality fodder and grass seeds for livestock nutrition",
      },
    ],
  },
  {
    id: "fertilizers",
    title: "Fertilizers",
    description: "Balanced nutrients for healthy soil and crops",
    products: [
      {
        image: fertilizersImage,
        name: "NPK Fertilizers",
        description:
          "Balanced formulations for different crop requirements",
      },
      {
        image: fertilizersImage1,
        name: "Organic Fertilizers",
        description:
          "Vermicompost, neem cake, and bio-fertilizers",
      },
      {
        image: fertilizersImage2,
        name: "DAP & Urea",
        description:
          "Essential nitrogen and phosphorus fertilizers",
      },
    ],
  },
  {
    id: "pesticides",
    title: "Pesticides",
    description: "Crop protection against pests and diseases",
    products: [
      {
        image: pesticidesImage,
        name: "Insecticides",
        description:
          "Protection from caterpillars, borers, and sucking pests",
      },
      {
        image: pesticidesImage1,
        name: "Fungicides",
        description:
          "Preventive and curative fungal disease control",
      },
      {
        image: pesticidesImage2,
        name: "Herbicides",
        description:
          "Effective weed management solutions",
      },
    ],
  },
  {
    id: "crop-nutrition",
    title: "Crop Nutrition",
    description: "Micronutrients for stronger plant growth",
    products: [
      {
        image: cropNutritionImage,
        name: "Micronutrient Mixtures",
        description:
          "Zinc, iron, boron, and multi-micronutrient blends",
      },
      {
        image: corpnutritionImage1,
        name: "Foliar Sprays",
        description:
          "Water-soluble nutrients for foliar application",
      },
      {
        image: corpnutritionImage2,
        name: "Bio-Stimulants",
        description:
          "Amino acids and seaweed extracts for crop vigor",
      },
    ],
  },
  {
    id: "farm-tools",
    title: "Farm Tools",
    description: "Reliable tools for daily farming operations",
    products: [
      {
        image: farmToolsImage,
        name: "Hand Tools",
        description:
          "Strong, durable tools for manual farm work",
      },
      {
        image: farmtoolsImage1,
        name: "Spraying Equipment",
        description:
          "Manual and battery-operated sprayers",
      },
      {
        image: farmtoolsImage2,
        name: "Irrigation Supplies",
        description:
          "Drip irrigation and water management tools",
      },
    ],
  },
];

const Products = () => {
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
            <span className="inline-block px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-6">
              Our Product Range
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6">
              Complete Agricultural
              <span className="block text-primary">Input Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Trusted seeds, fertilizers, pesticides, crop nutrition, and
              farming tools — sourced only from authorized and reliable brands.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY QUICK NAV */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {productCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-accent transition"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SECTIONS */}
      {productCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${
            index % 2 === 1 ? "bg-muted" : "bg-background"
          }`}
        >
          <div className="container-custom">
            <SectionHeader
              title={category.title}
              description={category.description}
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {category.products.map((product, i) => (
                <ProductCard
                  key={i}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* TRUST STRIP */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["18+", "Years Experience"],
              ["10k+", "Farmers Served"],
              ["25+", "Trusted Brands"],
              ["100%", "Genuine Products"],
            ].map(([value, label], i) => (
              <div key={i}>
                <div className="text-3xl font-heading font-bold text-foreground">
                  {value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-background border border-border rounded-2xl p-10 shadow-sm">
            <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-4">
              Looking for a Specific Product?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              We stock products from leading brands like{" "}
              <strong className="text-foreground">
                Syngenta, Bayer, UPL, Tata Rallis, IFFCO
              </strong>{" "}
              and many more. Contact us to check availability or get expert
              recommendations.
            </p>
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Note:</strong> Availability
              may vary by season and stock.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
