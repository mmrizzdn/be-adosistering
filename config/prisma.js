const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
	const users = await prisma.users.findMany();
	console.log(users);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
