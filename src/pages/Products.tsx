import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
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
import farmToolsImage from "@/assets/products/farm-tools.jpg";
import farmtoolsImage1 from "../assets/products/farmtools1.png";
import farmtoolsImage2 from "../assets/products/farmtools2.png";
import corpnutritionImage1 from "../assets/products/crop-nutrition1.png";
import corpnutritionImage2 from "../assets/products/crop-nutrition2.png";

const productCategories = [
  {
    id: "seeds",
    title: "Seeds",
    description: "High-quality, certified seeds for optimal germination and yield",
    products: [
      {
        image: seedsImage,
        name: "Hybrid Vegetable Seeds",
        description:
          "Premium quality hybrid seeds for tomato, chilli, brinjal, okra, and other vegetables with high disease resistance",
      },
      {
        image: seedsImage1,
        name: "Field Crop Seeds",
        description:
          "Certified seeds for soybean, cotton, wheat, groundnut, and other major field crops",
      },
      {
        image: seedsImage2,
        name: "Fodder Seeds",
        description:
          "Quality fodder and grass seeds for livestock feed production",
      },
    ],
  },
  {
    id: "fertilizers",
    title: "Fertilizers",
    description: "Nutrient-rich fertilizers for healthy soil and robust plant growth",
    products: [
      {
        image: fertilizersImage,
        name: "NPK Fertilizers",
        description:
          "Balanced NPK formulations (10:26:26, 12:32:16, 19:19:19) for various crop requirements",
      },
      {
        image: fertilizersImage1,
        name: "Organic Fertilizers",
        description:
          "Vermicompost, neem cake, and bio-fertilizers for sustainable farming practices",
      },
      {
        image: fertilizersImage2,
        name: "DAP & Urea",
        description:
          "Essential nitrogen and phosphorus fertilizers from trusted brands",
      },
    ],
  },
  {
    id: "pesticides",
    title: "Pesticides",
    description: "Effective crop protection solutions for pest and disease management",
    products: [
      {
        image: pesticidesImage,
        name: "Insecticides",
        description:
          "Broad-spectrum insecticides for controlling sucking pests, caterpillars, and borers",
      },
      {
        image: pesticidesImage1,
        name: "Fungicides",
        description:
          "Preventive and curative fungicides for rust, blight, mildew, and other fungal diseases",
      },
      {
        image: pesticidesImage2,
        name: "Herbicides",
        description:
          "Pre and post-emergence weedicides for effective weed management in all crops",
      },
    ],
  },
  {
    id: "crop-nutrition",
    title: "Crop Nutrition",
    description: "Micronutrients and growth enhancers for maximum crop potential",
    products: [
      {
        image: cropNutritionImage,
        name: "Micronutrient Mixtures",
        description:
          "Zinc, boron, iron, and multi-micronutrient grades for deficiency correction",
      },
      {
        image: corpnutritionImage1,
        name: "Foliar Sprays",
        description:
          "Water-soluble fertilizers and growth promoters for foliar application",
      },
      {
        image: corpnutritionImage2,
        name: "Bio-Stimulants",
        description:
          "Amino acids, humic acid, and seaweed extracts for enhanced plant health",
      },
    ],
  },
  {
    id: "farm-tools",
    title: "Farm Tools",
    description: "Quality tools and equipment for everyday farming operations",
    products: [
      {
        image: farmToolsImage,
        name: "Hand Tools",
        description:
          "Durable sickles, spades, hoes, rakes, and weeding tools for manual operations",
      },
      {
        image: farmtoolsImage1,
        name: "Spraying Equipment",
        description:
          "Manual and battery-operated sprayers, nozzles, and spray accessories",
      },
      {
        image: farmtoolsImage2,
        name: "Irrigation Supplies",
        description:
          "Drip irrigation kits, pipes, sprinklers, and water management tools",
      },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Quality Agricultural Inputs
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse our comprehensive range of genuine seeds, fertilizers, pesticides, and farm supplies. All products are sourced from authorized dealers and leading brands.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${index % 2 === 1 ? "bg-muted" : ""}`}
        >
          <div className="container-custom">
            <SectionHeader
              title={category.title}
              description={category.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <ProductCard
                  key={productIndex}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Note Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
              Looking for a Specific Product?
            </h3>
            <p className="text-muted-foreground mb-4">
              We stock products from leading brands like Syngenta, Bayer, UPL, Tata Rallis, IFFCO, and many more. Visit our shop or call us to check availability for specific products.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Product availability may vary based on season and stock. Please contact us for current inventory.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
