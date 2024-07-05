**Stations Doctor**

## Project Overview

This project aims to streamline the appointment scheduling process for patients and doctors.

## Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: SQLite (development), PostgreSQL (production)
* Testing: Jest, Supertest
* Others: TypeScript

## Bugs and Issues

### 1. Initial Setup Issues

**Issue:** Unable to initialize project with `npx create-react-app`.

**Resolution Attempt:** Tried reinstalling Node.js, clearing npm cache, and updating npm. The issue persisted until using alternative installation methods.

### 2. TypeScript Compilation Errors

**Issue:** TypeScript compilation errors due to mismatched types and undefined variables.

**Resolution Attempt:** Updated TypeScript configurations, reviewed typings, and used stricter type checking.

### 3. Database Integration

**Issue:** Integration of SQLite and PostgreSQL databases for development and production environments.

**Resolution Attempt:** Implemented different database connection strategies and environment-specific configurations.

### 4. Dependency Management

**Issue:** Dependency conflicts and outdated packages causing build failures.

**Resolution Attempt:** Regularly updated npm packages, pinned specific versions, and used npm audit for vulnerability management.

### 5. Git Repository and Branching

**Issue:** Challenges with Git repository management, including merge conflicts and branch management.

**Resolution Attempt:** Utilized Git commands for resolving conflicts (`git merge`), branching strategies (`git branch`), and proper repository setup (`git init`).

## Future Enhancements

* Implement additional features such as user authentication, email notifications, and an admin dashboard.
* Enhance UI/UX for better user interaction and accessibility.

## Unresolved Bugs and Issues

### 1. TypeScript Compilation Errors

**Issue:** `npx tsc` not compiling TypeScript files properly.

**Details:** Despite configuring TypeScript and updating dependencies, certain files fail to compile due to undefined variables and type mismatches.

### 2. Entity File Issues

**Issue:** Persistent issues with entity files (`Doctor.ts`, `Appointment.ts`) not reflecting database changes correctly.

**Details:** Modifications in entity definitions sometimes do not synchronize with the database schema, causing inconsistencies during runtime.

These unresolved issues are currently under investigation, and further updates and resolutions will be documented accordingly.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/PabloCGSilva/stations-doctor.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add necessary environment variables (database credentials, API keys, etc.).

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
