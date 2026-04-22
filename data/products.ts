export interface Product {
  id: string
  name: string
  price: string
  originalPrice: string
  rating: number
  badge?: string
  image: string
  shopifyUrl: string
}

// TODO: Replace shopifyUrl and image values with real Shopify links & CDN image URLs
export const products: Product[] = [
  {
    id: 'cotton-xl-pads',
    name: '100% cotton xl sanitary pads | chemical-free, rash-free',
    price: 'Rs. 299.00',
    originalPrice: 'Rs. 499.00',
    rating: 4.7,
    image: 'https://picsum.photos/seed/cotton-pads/400/400',
    shopifyUrl: 'https://luvwish.in/products/cotton-xl-sanitary-pads',
  },
  {
    id: 'cramp-relief',
    name: 'cramp relief essential | 3-in-1 comfort pack',
    price: 'Rs. 499.00',
    originalPrice: 'Rs. 799.00',
    rating: 4.6,
    image: 'https://picsum.photos/seed/cramp-relief/400/400',
    shopifyUrl: 'https://luvwish.in/products/cramp-relief-essential',
  },
  {
    id: 'panty-liners',
    name: 'daily panty liners | ultra-thin & breathable',
    price: 'Rs. 149.00',
    originalPrice: 'Rs. 249.00',
    rating: 4.5,
    image: 'https://picsum.photos/seed/panty-liners/400/400',
    shopifyUrl: 'https://luvwish.in/products/daily-panty-liners',
  },
  {
    id: 'night-pads',
    name: 'night guard xxl pads | 320mm leak-proof protection',
    price: 'Rs. 219.00',
    originalPrice: 'Rs. 349.00',
    rating: 4.8,
    image: 'https://picsum.photos/seed/night-pads/400/400',
    shopifyUrl: 'https://luvwish.in/products/night-guard-xxl-pads',
  },
  {
    id: 'period-care-kit',
    name: 'period care kit | everything you need, one box',
    price: 'Rs. 599.00',
    originalPrice: 'Rs. 999.00',
    rating: 4.9,
    image: 'https://picsum.photos/seed/care-kit/400/400',
    shopifyUrl: 'https://luvwish.in/products/period-care-kit',
  },
  {
    id: 'dark-circles-serum',
    name: 'dark circles serum | visible results in 7 days',
    price: 'Rs. 349.00',
    originalPrice: 'Rs. 549.00',
    rating: 4.4,
    image: 'https://picsum.photos/seed/serum/400/400',
    shopifyUrl: 'https://luvwish.in/products/dark-circles-serum',
  },
]
