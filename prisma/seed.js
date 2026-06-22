const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'Fresh Microgreens', slug: 'fresh-microgreens' },
    { name: 'Microgreens Powder', slug: 'microgreens-powder' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  const products = [
    {
      name: 'Broccoli Microgreens',
      slug: 'broccoli-microgreens',
      description: 'Crunchy and nutrient-rich broccoli microgreens for salads and smoothies.',
      category: 'Fresh Microgreens',
      price: 99,
      inventory: 48,
      images: ['https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80'],
      benefits: ['Supports immunity and digestion', 'Rich in antioxidants'],
      nutrition: ['Vitamin C', 'Vitamin K', 'Folate'],
      usage: ['Blend into smoothies', 'Add to sandwiches'],
      rating: 4.9,
      reviewsCount: 218,
    },
    {
      name: 'Wheatgrass Powder',
      slug: 'wheatgrass-powder',
      description: 'A nutrient-dense powder made from premium wheatgrass microgreens.',
      category: 'Microgreens Powder',
      price: 299,
      inventory: 24,
      images: ['https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80'],
      benefits: ['Supports energy naturally', 'Rich in chlorophyll'],
      nutrition: ['Chlorophyll', 'Iron', 'Vitamin A'],
      usage: ['Blend with juice', 'Add to shakes'],
      rating: 4.7,
      reviewsCount: 143,
    },
  ];

  for (const product of products) {
    const category = await prisma.category.findUnique({ where: { name: product.category } });

    if (!category) continue;

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        categoryId: category.id,
      },
    });
  }

  const posts = [
    {
      title: 'Top 5 ways to add microgreens to your daily meals',
      slug: 'top-5-ways-add-microgreens',
      content: 'Learn how to use microgreens in breakfasts, lunches, and dinners.',
      excerpt: 'Simple ways to add fresh nutrition to your meals.',
      category: 'Health Benefits',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      published: true,
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
