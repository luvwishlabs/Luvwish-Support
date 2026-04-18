import { ShoppingBag, Truck, RefreshCw, CreditCard, Sparkles, LucideIcon } from 'lucide-react'

export interface Category {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  articleCount: number
}

export const categories: Category[] = [
  {
    slug: 'orders',
    title: 'Orders',
    description: 'Track, modify, or cancel your Luvwish orders.',
    icon: ShoppingBag,
    articleCount: 5,
  },
  {
    slug: 'shipping-delivery',
    title: 'Shipping & Delivery',
    description: 'Delivery timelines, tracking links, and delay support.',
    icon: Truck,
    articleCount: 4,
  },
  {
    slug: 'returns-refunds',
    title: 'Returns & Refunds',
    description: 'How to return a product and check your refund status.',
    icon: RefreshCw,
    articleCount: 4,
  },
  {
    slug: 'payments',
    title: 'Payments',
    description: 'Payment failures, methods accepted, and billing queries.',
    icon: CreditCard,
    articleCount: 4,
  },
  {
    slug: 'product-queries',
    title: 'Product Queries',
    description: 'Ingredients, usage instructions, and suitability questions.',
    icon: Sparkles,
    articleCount: 4,
  },
]
