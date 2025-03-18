interface ProductCardProps {
  name: string;
  price: number;
  description: string;
}

export default function ProductCard({ name, price, description }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm" data-testid="product-card">
      <h2 className="text-xl font-semibold" data-testid="product-name">{name}</h2>
      <p className="text-gray-600" data-testid="product-description">{description}</p>
      <p className="text-lg font-bold mt-2" data-testid="product-price">${price.toFixed(2)}</p>
    </div>
  )
} 