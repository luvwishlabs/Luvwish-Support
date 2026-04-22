import { ShoppingBag, Truck, RefreshCw, CreditCard, Sparkles, LucideIcon } from 'lucide-react'

export interface Category {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  articleCount: number
  image: string
  bgColor: string
  tagColor: string
  circleColor: string
}

export const categories: Category[] = [
  {
    slug: 'orders',
    title: 'Orders',
    description: 'Track, modify, or cancel your Luvwish orders.',
    icon: ShoppingBag,
    articleCount: 5,
    image: 'https://picsum.photos/seed/luvwish-orders/600/320',
    bgColor: 'bg-teal-100',
    tagColor: 'bg-teal-100 text-teal-700',
    circleColor: 'bg-teal-500',
  },
  {
    slug: 'shipping-delivery',
    title: 'Shipping & Delivery',
    description: 'Delivery timelines, tracking links, and delay support.',
    icon: Truck,
    articleCount: 4,
    image: 'https://picsum.photos/seed/luvwish-shipping/600/320',
    bgColor: 'bg-sky-100',
    tagColor: 'bg-sky-100 text-sky-700',
    circleColor: 'bg-sky-500',
  },
  {
    slug: 'returns-refunds',
    title: 'Returns & Refunds',
    description: 'How to return a product and check your refund status.',
    icon: RefreshCw,
    articleCount: 4,
    image: 'https://picsum.photos/seed/luvwish-returns/600/320',
    bgColor: 'bg-amber-100',
    tagColor: 'bg-amber-100 text-amber-700',
    circleColor: 'bg-amber-500',
  },
  {
    slug: 'payments',
    title: 'Payments',
    description: 'Payment failures, methods accepted, and billing queries.',
    icon: CreditCard,
    articleCount: 4,
    image: 'https://picsum.photos/seed/luvwish-payments/600/320',
    bgColor: 'bg-emerald-100',
    tagColor: 'bg-emerald-100 text-emerald-700',
    circleColor: 'bg-emerald-500',
  },
  {
    slug: 'product-queries',
    title: 'Product Queries',
    description: 'Ingredients, usage instructions, and suitability questions.',
    icon: Sparkles,
    articleCount: 4,
    image: 'https://picsum.photos/seed/luvwish-product/600/320',
    bgColor: 'bg-rose-100',
    tagColor: 'bg-rose-100 text-rose-700',
    circleColor: 'bg-rose-500',
  },
]
