import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";
const seedAdmin = async () => {
  const admin = await prisma.user.findUnique({
    where: {
      email: "admin@gmail.com",
    },
  });
  if (admin) return;

  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    const result = await prisma.$transaction(async (transactionClient) => {
      const { password, ...userData } = await transactionClient.user.create({
        data: {
          password: hashedPassword,
          name: "admin",
          email: "admin@gmail.com",
          phoneNumber: "1234567890",
          role: "ADMIN",
          bloodType: "A+",
          location: "Dhaka",
        },
      });

      const userProfileData = await transactionClient.userProfile.create({
        data: {
          age: 20,
          bio: "This is admin bio",
          lastDonationDate: "",
          userId: userData.id,
          photo: "https://i.ibb.co/vL3tCrR/doctor-image1.png",
        },
      });

      return userData;
    });
  } catch (error) {
    console.log(error);
  }
};
seedAdmin();
