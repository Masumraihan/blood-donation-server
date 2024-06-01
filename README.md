
# Blood Donation System Backend

## Description

The Blood Donation System backend is built using Node.js, Prisma, and PostgreSQL. It provides a robust API for managing blood donation processes, including user registration, login, and handling blood donation requests.

## Live URL

You can access the live backend API at: [Blood Donation Backend Live](https://github.com/Masumraihan/blood-donation-server)

## Features

- **User Registration and Authentication**: Securely register and log in users.
- **Blood Donation Requests**: Create, manage, and fulfill blood donation requests.
- **User Roles**: Admins can manage users and their roles.

## Technology Used

- **Backend**:
  - [Node.js](https://nodejs.org/): JavaScript runtime for building the server.
  - [Express](https://expressjs.com/): Web framework for Node.js.
  - [Prisma](https://www.prisma.io/): ORM for PostgreSQL database management.
  - [PostgreSQL](https://www.postgresql.org/): Relational database.

- **Other Libraries**:
  - [bcrypt](https://www.npmjs.com/package/bcrypt): Library for hashing passwords.
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Library for generating and verifying JSON Web Tokens (JWT).
  - [Zod](https://github.com/colinhacks/zod): TypeScript-first schema declaration and validation library.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine. You can download it [here](https://nodejs.org/).
- PostgreSQL database setup.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Masumraihan/blood-donation-server.git
   cd blood-donation-server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
   JWT_SECRET=<Your JWT Secret>
   ```

4. Run the Prisma migrations to set up the database:

   ```bash
   npx prisma migrate deploy
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- **Register as a Donor**: Sign up and complete your profile with necessary details.
- **Find Donors**: Use the search functionality to locate donors by blood type and location.
- **Send Donation Requests**: Request blood donations from suitable donors.
- **Manage Profile**: Update your information as needed through your profile page.
- **Admin Management**: Admins can manage users and their roles.

## Credentials

### Admin Credentials
- Email: admin@gmail.com
- Password: admin123

### Donor Credentials
- Email: donor10@gmail.com
- Password: 123456

## External Links

- [Frontend Repository](https://github.com/Masumraihan/blood-donation-client)
- [Frontend Live](https://blood-donation-client-rosy.vercel.app/)
- [Backend Repository](https://github.com/Masumraihan/blood-donation-server)
- [Backend Live](https://github.com/Masumraihan/blood-donation-server)
- [Postman Documentation](https://documenter.getpostman.com/view/24929762/2sA35HVznV)
- [Frontend Explanation Video](https://drive.google.com/file/d/1tGPCjEeODCuP8EEnt-tcRyV0YQ5jFuPN/view?usp=sharing)

## Contact

If you have any questions or feedback, please reach out at:

- **Email**: [mdmasumraihan1@gmail.com](mailto:mdmasumraihan1@gmail.com)
- **GitHub**: [Masumraihan](https://github.com/Masumraihan)
