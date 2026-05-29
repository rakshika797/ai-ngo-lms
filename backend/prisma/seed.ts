import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Admin User
  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@gmail.com",
      password: "hashedpassword",
      role: Role.ADMIN,
    },
  });

  // NGO User
  const ngoUser = await prisma.user.create({
    data: {
      name: "NGO Manager",
      email: "ngo@gmail.com",
      password: "hashedpassword",
      role: Role.NGO,

      ngo: {
        create: {
          organizationName: "Helping Hands NGO",
          city: "Bhopal",
          focusArea: "Education",
        },
      },
    },
  });

  // Volunteer User
  const volunteerUser = await prisma.user.create({
    data: {
      name: "Volunteer User",
      email: "volunteer@gmail.com",
      password: "hashedpassword",
      role: Role.VOLUNTEER,
    },
  });

  // Student User
  const studentUser = await prisma.user.create({
    data: {
      name: "Student User",
      email: "student@gmail.com",
      password: "hashedpassword",
      role: Role.STUDENT,
    },
  });

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });