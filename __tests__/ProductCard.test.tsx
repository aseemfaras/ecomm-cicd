import { render, screen } from '@testing-library/react'
import ProductCard from '../app/components/ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    name: 'Test Product',
    price: 99.99,
    description: 'A test product description'
  }

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />)
    
    expect(screen.getByTestId('product-name')).toHaveTextContent(mockProduct.name)
    expect(screen.getByTestId('product-description')).toHaveTextContent(mockProduct.description)
    expect(screen.getByTestId('product-price')).toHaveTextContent('$99.99')
  })
}) 