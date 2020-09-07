import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
    console.log('Seeding...');
    await prisma.$connect();

    // prisma.user.aggregate({
    //     max: { countComments: true },
    //     min: { countComments: true },
    // });

    // const data = await prisma.user.findMany({});

    const data = await prisma.user.aggregate({
        where: { id: '1' },
        avg: { countComments: true },
        sum: { countComments: true },
    });
    console.log('data', data);

    // await prisma.user.findMany({ where: { NOT: { id: '1' } } });
    // await prisma.user.findOne({ where: { id: '1' } });

    // await prisma.user.create({
    //     data: {
    //         email: 'nonphenomenal@pelobatoid.net',
    //         name: 'name',
    //         password: 'a',
    //     },
    // });

    // await prisma.user.findMany({
    //     where: {
    //         // comments: { some: { articleId: { in: ['1'] } } },
    //         // name: { equals: '1' },
    //     },
    // });

    await // Users
    // const ivan = await prisma.user.create({
    //     data: {
    //         name: 'Ivan',
    //         email: 'ivan@mail.com',
    //     },
    // });

    await prisma.$disconnect();
})();
