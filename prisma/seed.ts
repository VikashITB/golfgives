import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Spring Charity Classic',
        location: 'Pebble Beach, California',
        startsAt: new Date('2026-04-15'),
        goalAmount: 50000,
        raised: 24000,
        userId: 'seed-user-id'
      }
    }),
    prisma.event.create({
      data: {
        title: 'Hope Invitational',
        location: 'Augusta National, Georgia',
        startsAt: new Date('2026-05-20'),
        goalAmount: 35000,
        raised: 18500,
        userId: 'seed-user-id'
      }
    }),
    prisma.event.create({
      data: {
        title: 'Birdies for Change',
        location: 'TPC Sawgrass, Florida',
        startsAt: new Date('2026-06-10'),
        goalAmount: 40000,
        raised: 31200,
        userId: 'seed-user-id'
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
