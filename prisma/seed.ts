import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Spring Charity Classic',
        location: 'Pebble Beach, California',
        date: '2026-04-15',
        goal: 50000,
        raised: 24000,
        charity: 'Children Health Foundation',
        userId: 'seed-user-id',
        donationCount: 45
      }
    }),
    prisma.event.create({
      data: {
        title: 'Hope Invitational',
        location: 'Augusta National, Georgia',
        date: '2026-05-20',
        goal: 35000,
        raised: 18500,
        charity: 'Clean Water Trust',
        userId: 'seed-user-id',
        donationCount: 32
      }
    }),
    prisma.event.create({
      data: {
        title: 'Birdies for Change',
        location: 'TPC Sawgrass, Florida',
        date: '2026-06-10',
        goal: 40000,
        raised: 31200,
        charity: 'Junior Sports Fund',
        userId: 'seed-user-id',
        donationCount: 28
      }
    })
  ]);

  console.log('✅ Seeded events:', events.map(e => e.title));
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
