export interface ArticleSection {
  type: 'paragraph' | 'heading' | 'bullets' | 'note'
  content: string | string[]
}

export interface Article {
  slug: string
  categorySlug: string
  title: string
  excerpt: string
  content: ArticleSection[]
  relatedSlugs: string[]
  isPinned: boolean
  updatedAt: string
}

export const articles: Article[] = [
  // --- ORDERS ---
  {
    slug: 'how-to-track-my-order',
    categorySlug: 'orders',
    title: 'How to track my order',
    excerpt: 'Step-by-step guide to tracking your Luvwish order.',
    content: [
      {
        type: 'paragraph',
        content: 'We know you\'re excited to receive your Luvwish care package! Tracking your order is simple and can be done right from your email or our website.'
      },
      {
        type: 'heading',
        content: 'Steps to Track Your Order'
      },
      {
        type: 'bullets',
        content: [
          'Check your email for the shipment confirmation. This email contains your unique tracking link.',
          'Click the tracking link to see the real-time status of your delivery.',
          'If you cannot find the email, you can log into your Luvwish account and view your order history.',
          'Please allow 24-48 hours for the tracking information to update after your order has shipped.'
        ]
      },
      {
        type: 'note',
        content: 'Most orders are delivered within 4–7 business days depending on your location.'
      }
    ],
    relatedSlugs: ['can-i-change-my-shipping-address', 'my-order-is-delayed'],
    isPinned: true,
    updatedAt: 'April 2025'
  },
  {
    slug: 'can-i-cancel-my-order',
    categorySlug: 'orders',
    title: 'Can I cancel my order?',
    excerpt: 'Find out how and when you can cancel an order before it ships.',
    content: [
      {
        type: 'paragraph',
        content: 'We understand that plans change. You can cancel your Luvwish order within 2 hours of placing it.'
      },
      {
        type: 'bullets',
        content: [
          'Go to your account dashboard and find the recent order.',
          'Click the "Cancel Order" button if it is available.',
          'If the 2-hour window has passed, your order is likely already being processed by our warehouse heroes and cannot be canceled.'
        ]
      },
      {
        type: 'note',
        content: 'If your order was already shipped, you can initiate a return once you receive it.'
      }
    ],
    relatedSlugs: ['when-will-i-get-my-refund', 'how-to-track-my-order'],
    isPinned: false,
    updatedAt: 'March 2025'
  },
  {
    slug: 'can-i-modify-items-in-my-order',
    categorySlug: 'orders',
    title: 'Can I modify the items in my order?',
    excerpt: 'Learn if you can add or remove products after placing your order.',
    content: [
      {
        type: 'paragraph',
        content: 'Currently, we cannot modify the contents of an order once it has been placed. Our system processes orders very quickly to ensure you get your care package as fast as possible.'
      },
      {
        type: 'paragraph',
        content: 'If you need additional items, we recommend placing a new order. If you accidentally ordered the wrong item, please cancel your current order (within the 2-hour window) and place a new one.'
      }
    ],
    relatedSlugs: ['can-i-cancel-my-order', 'when-will-i-get-my-refund'],
    isPinned: false,
    updatedAt: 'February 2025'
  },
  {
    slug: 'missing-items',
    categorySlug: 'orders',
    title: 'An item is missing from my order',
    excerpt: 'What to do if your package isn\'t complete.',
    content: [
      {
        type: 'paragraph',
        content: 'We are so sorry if your order arrived incomplete! We pack every box with utmost care, but mistakes can happen.'
      },
      {
        type: 'bullets',
        content: [
          'First, please check your packing slip to ensure the item wasn\'t shipped separately.',
          'If the item is truly missing, please contact our support team immediately with your order number.'
        ]
      },
      {
        type: 'note',
        content: 'Rest assured, we will ship the missing product to you as soon as possible at no extra cost.'
      }
    ],
    relatedSlugs: ['wrong-item-received', 'my-order-is-delayed'],
    isPinned: false,
    updatedAt: 'March 2025'
  },
  {
    slug: 'wrong-item-received',
    categorySlug: 'orders',
    title: 'I received the wrong item',
    excerpt: 'Steps to take if we sent you the wrong product.',
    content: [
      {
        type: 'paragraph',
        content: 'We apologize for the mix-up! If you received the wrong item in your Luvwish box, please reach out to our care team via the Contact Support form.'
      },
      {
        type: 'paragraph',
        content: 'Please provide a photo of the incorrect item along with your order number. We will arrange a replacement right away.'
      }
    ],
    relatedSlugs: ['missing-items', 'how-to-return-a-product'],
    isPinned: false,
    updatedAt: 'April 2025'
  },

  // --- SHIPPING & DELIVERY ---
  {
    slug: 'my-order-is-delayed',
    categorySlug: 'shipping-delivery',
    title: 'My order is delayed',
    excerpt: 'What to do if your package is taking longer than expected.',
    content: [
      {
        type: 'paragraph',
        content: 'We completely understand how important it is to have your essentials on time. While we strive to meet our 4–7 day delivery window, sometimes unforeseen circumstances like weather or high courier volumes can cause delays.'
      },
      {
        type: 'bullets',
        content: [
          'Check your tracking link for any status updates from the courier.',
          'If there has been no movement for over 48 hours, please reach out to our support team.',
          'We will coordinate with the courier partner on your behalf to get your package moving.'
        ]
      },
      {
        type: 'note',
        content: 'We truly appreciate your patience and will keep you updated every step of the way.'
      }
    ],
    relatedSlugs: ['how-to-track-my-order'],
    isPinned: true,
    updatedAt: 'April 2025'
  },
  {
    slug: 'can-i-change-my-shipping-address',
    categorySlug: 'shipping-delivery',
    title: 'Can I change my shipping address?',
    excerpt: 'How to update your delivery details before your order ships.',
    content: [
      {
        type: 'paragraph',
        content: 'If you realize you have entered the wrong address, please contact us immediately! We can only update your shipping address if your order has not yet been processed by our warehouse (typically within 2 hours of placing the order).'
      },
      {
        type: 'note',
        content: 'Once an order has shipped, we are unable to change the delivery address.'
      }
    ],
    relatedSlugs: ['can-i-cancel-my-order'],
    isPinned: false,
    updatedAt: 'January 2025'
  },
  {
    slug: 'do-you-offer-international-shipping',
    categorySlug: 'shipping-delivery',
    title: 'Do you offer international shipping?',
    excerpt: 'Information on where Luvwish delivers outside of India.',
    content: [
      {
        type: 'paragraph',
        content: 'At this time, Luvwish only ships within India. We are working hard to expand our reach so that we can bring our comfortable period care products to women everywhere.'
      },
      {
        type: 'paragraph',
        content: 'Sign up for our newsletter to be the first to know when we start shipping internationally!'
      }
    ],
    relatedSlugs: [],
    isPinned: false,
    updatedAt: 'February 2025'
  },
  {
    slug: 'what-are-your-shipping-charges',
    categorySlug: 'shipping-delivery',
    title: 'What are your shipping charges?',
    excerpt: 'Learn about our flat rates and free shipping threshold.',
    content: [
      {
        type: 'paragraph',
        content: 'We believe in keeping things simple and transparent.'
      },
      {
        type: 'bullets',
        content: [
          'Standard Shipping: ₹50 on all orders below ₹499.',
          'Free Shipping: Enjoy complimentary shipping on all orders above ₹499!'
        ]
      }
    ],
    relatedSlugs: ['my-order-is-delayed'],
    isPinned: false,
    updatedAt: 'April 2025'
  },

  // --- RETURNS & REFUNDS ---
  {
    slug: 'when-will-i-get-my-refund',
    categorySlug: 'returns-refunds',
    title: 'When will I get my refund?',
    excerpt: 'Timeline for receiving your refund after a cancellation or return.',
    content: [
      {
        type: 'paragraph',
        content: 'We aim to process refunds as quickly as possible. Once your refund is initiated, the processing time depends on your original payment method.'
      },
      {
        type: 'heading',
        content: 'Standard Timelines'
      },
      {
        type: 'bullets',
        content: [
          'UPI/Wallets: Usually takes 3–5 business days.',
          'Credit/Debit Cards: Can take 5–7 business days to reflect on your statement.',
          'Net Banking: May take up to 7–10 business days depending on your bank.'
        ]
      },
      {
        type: 'note',
        content: 'If you have not received your refund within these timelines, please check with your bank or contact our support team.'
      }
    ],
    relatedSlugs: ['how-to-return-a-product', 'can-i-cancel-my-order'],
    isPinned: true,
    updatedAt: 'April 2025'
  },
  {
    slug: 'how-to-return-a-product',
    categorySlug: 'returns-refunds',
    title: 'How to return a product',
    excerpt: 'Guide to generating a return request for eligible items.',
    content: [
      {
        type: 'paragraph',
        content: 'Because our products are hygiene-sensitive, we only accept returns for items that are completely sealed and unopened, or if you received a damaged product.'
      },
      {
        type: 'bullets',
        content: [
          'Submit a return request via the Contact Support form within 7 days of delivery.',
          'Include your order ID and a photo of the product.',
          'Once approved, we will arrange a reverse pickup from your address.',
          'Ensure the product is packed securely in its original packaging.'
        ]
      }
    ],
    relatedSlugs: ['when-will-i-get-my-refund', 'wrong-item-received'],
    isPinned: false,
    updatedAt: 'March 2025'
  },
  {
    slug: 'return-policy',
    categorySlug: 'returns-refunds',
    title: 'What is your return policy?',
    excerpt: 'Details on which products are eligible for return.',
    content: [
      {
        type: 'paragraph',
        content: 'Your health and safety are our top priority. Due to the intimate nature of menstrual care products, we cannot accept returns on opened sanitary pads, panty liners, or cramp relief patches.'
      },
      {
        type: 'paragraph',
        content: 'Unopened boxes in their original condition and sealed packaging can be returned within 7 days of delivery. If you ever receive a damaged or defective product, please reach out to us immediately for a free replacement.'
      }
    ],
    relatedSlugs: ['how-to-return-a-product'],
    isPinned: false,
    updatedAt: 'February 2025'
  },
  {
    slug: 'i-received-a-damaged-product',
    categorySlug: 'returns-refunds',
    title: 'I received a damaged product',
    excerpt: 'Steps to get a replacement for damaged deliveries.',
    content: [
      {
        type: 'paragraph',
        content: 'We are truly sorry if your Luvwish package arrived in less than perfect condition! Sometimes transit can be rough, but we will make it right.'
      },
      {
        type: 'bullets',
        content: [
          'Please take clear photos of the damaged items and the outer shipping box.',
          'Submit these photos via our Contact Support form along with your order number.',
          'We will dispatch a fresh replacement within 24 hours of verifying your claim.'
        ]
      }
    ],
    relatedSlugs: ['return-policy', 'missing-items'],
    isPinned: false,
    updatedAt: 'April 2025'
  },

  // --- PAYMENTS ---
  {
    slug: 'payment-failed',
    categorySlug: 'payments',
    title: 'My payment failed but money was deducted',
    excerpt: 'What to do when your transaction errors out but the amount is debited.',
    content: [
      {
        type: 'paragraph',
        content: 'Don\'t worry! Payment gateways sometimes experience temporary glitches. If your money was deducted but the order wasn\'t confirmed, the amount is safe.'
      },
      {
        type: 'bullets',
        content: [
          'The gateway will automatically refund the drop transaction to your original payment method.',
          'This auto-reversal usually takes 48–72 hours.',
          'If you still wish to purchase, please place a new order using the same or a different payment method.'
        ]
      },
      {
        type: 'note',
        content: 'If the amount does not reflect in your account after 72 hours, please reach out to our support team and we will assist you.'
      }
    ],
    relatedSlugs: ['what-payment-methods-do-you-accept'],
    isPinned: true,
    updatedAt: 'April 2025'
  },
  {
    slug: 'what-payment-methods-do-you-accept',
    categorySlug: 'payments',
    title: 'What payment methods do you accept?',
    excerpt: 'List of all accepted payment options on Luvwish.',
    content: [
      {
        type: 'paragraph',
        content: 'We accept a wide variety of secure payment methods to make your checkout experience seamless.'
      },
      {
        type: 'bullets',
        content: [
          'UPI (Google Pay, PhonePe, Paytm, Amazon Pay)',
          'Credit and Debit Cards (Visa, MasterCard, RuPay, etc.)',
          'Net Banking for all major banks',
          'Select mobile wallets'
        ]
      }
    ],
    relatedSlugs: ['do-you-offer-cash-on-delivery'],
    isPinned: false,
    updatedAt: 'January 2025'
  },
  {
    slug: 'do-you-offer-cash-on-delivery',
    categorySlug: 'payments',
    title: 'Do you offer Cash on Delivery (COD)?',
    excerpt: 'Information regarding COD availability.',
    content: [
      {
        type: 'paragraph',
        content: 'Yes, we do offer Cash on Delivery across most pin codes in India! A nominal convenience fee of ₹40 applies to all COD orders to cover courier handling charges.'
      },
      {
        type: 'paragraph',
        content: 'To verify if your location is eligible for COD, simply enter your pin code on the checkout page.'
      }
    ],
    relatedSlugs: ['what-payment-methods-do-you-accept'],
    isPinned: false,
    updatedAt: 'March 2025'
  },
  {
    slug: 'how-to-apply-a-discount-code',
    categorySlug: 'payments',
    title: 'How do I apply a discount code?',
    excerpt: 'Guide on where and how to use promo codes.',
    content: [
      {
        type: 'paragraph',
        content: 'Got a promo code? Awesome! Applying it is easy.'
      },
      {
        type: 'bullets',
        content: [
          'Add your desired products to the cart and click "Checkout".',
          'On the checkout page, look for the "Discount code or gift card" field.',
          'Enter your code exactly as it appears and click "Apply".',
          'Your total will automatically update to reflect the new price!'
        ]
      },
      {
        type: 'note',
        content: 'Only one discount code can be used per order.'
      }
    ],
    relatedSlugs: [],
    isPinned: false,
    updatedAt: 'February 2025'
  },

  // --- PRODUCT QUERIES ---
  {
    slug: 'are-luvwish-pads-chemical-free',
    categorySlug: 'product-queries',
    title: 'Are Luvwish pads chemical-free?',
    excerpt: 'Details on the materials and safety of our sanitary pads.',
    content: [
      {
        type: 'paragraph',
        content: 'Yes! At Luvwish, your comfort and health are our absolute priorities. Our pads are made with an ultra-soft, 100% organic cotton top sheet.'
      },
      {
        type: 'bullets',
        content: [
          'No harmful chemicals, turning out toxins out of the equation.',
          'No synthetic fragrances or artificial dyes that can cause irritation.',
          'A breathable backing to keep you fresh and dry all day.'
        ]
      },
      {
        type: 'note',
        content: 'Our products are dermatologically tested to be safe and gentle on sensitive skin.'
      }
    ],
    relatedSlugs: ['what-sizes-of-pads-are-available', 'are-your-products-eco-friendly'],
    isPinned: true,
    updatedAt: 'April 2025'
  },
  {
    slug: 'what-sizes-of-pads-are-available',
    categorySlug: 'product-queries',
    title: 'What sizes of pads are available?',
    excerpt: 'Guide to our pad sizes and absorbency levels.',
    content: [
      {
        type: 'paragraph',
        content: 'We offer a range of sizes to suit different flows and preferences:'
      },
      {
        type: 'heading',
        content: 'Available Sizes:'
      },
      {
        type: 'bullets',
        content: [
          'Heavy Flow (XXL - 320mm): A longer, wider back pad perfect for night use or heavy days.',
          'Regular Flow (XL - 280mm): Our everyday comfort pad that still provides excellent coverage.',
          'Panty Liners (155mm): Great for spotting, light days, or daily freshness.'
        ]
      }
    ],
    relatedSlugs: ['are-luvwish-pads-chemical-free'],
    isPinned: false,
    updatedAt: 'March 2025'
  },
  {
    slug: 'how-do-cramp-relief-patches-work',
    categorySlug: 'product-queries',
    title: 'How do the Cramp Relief patches work?',
    excerpt: 'Instructions and benefits of our natural heat relief patches.',
    content: [
      {
        type: 'paragraph',
        content: 'Our Cramp Relief Patches are designed to provide soothing, natural warmth to ease period pain. They work by emitting continuous, relaxing heat when exposed to air.'
      },
      {
        type: 'heading',
        content: 'How to use:'
      },
      {
        type: 'bullets',
        content: [
          'Tear open the pouch to activate the patch.',
          'Peel off the adhesive backing.',
          'Stick the patch onto your underwear over the area where you feel cramps (abdomen or lower back).',
          'Enjoy up to 8 hours of soothing, natural heat!'
        ]
      },
      {
        type: 'note',
        content: 'Please remember: Never apply the patch directly to your skin, always attach it to your undergarments to prevent burns.'
      }
    ],
    relatedSlugs: ['are-luvwish-pads-chemical-free'],
    isPinned: false,
    updatedAt: 'April 2025'
  },
  {
    slug: 'are-your-products-eco-friendly',
    categorySlug: 'product-queries',
    title: 'Are your products eco-friendly?',
    excerpt: 'Information on Luvwish\'s commitment to sustainability.',
    content: [
      {
        type: 'paragraph',
        content: 'We care deeply about our planet. Our outer packaging is made from recycled materials, and our pads use a significant proportion of biodegradable plant-based materials.'
      },
      {
        type: 'paragraph',
        content: 'While making a fully biodegradable pad that doesn\'t leak is extremely challenging, we are continuously researching better, greener technologies to reduce our environmental footprint while maintaining the highest standard of leak protection.'
      }
    ],
    relatedSlugs: ['are-luvwish-pads-chemical-free'],
    isPinned: false,
    updatedAt: 'January 2025'
  }
]
