interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard = ({ image, name, description }: ProductCardProps) => {
  return (
    <div className="group card-elevated rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
