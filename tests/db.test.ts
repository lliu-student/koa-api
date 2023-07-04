import { PrismaClient } from '@prisma/client';

describe('db set', () => {
  const prisma = new PrismaClient();

  async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.user.create({
    //   data: {
    //     name: "Alice",
    //     email: "alice@prisma.io",
    //     posts: {
    //       create: { title: "Hello World" },
    //     },
    //     profile: {
    //       create: { bio: "I like turtles" },
    //     },
    //   },
    // });
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    console.log(allUsers);
    const post = await prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    });
    console.log(post);
    return post;
  }

  it('should sum two numbers', async () => {
    expect(await main()).toStrictEqual([]);
  });
});
