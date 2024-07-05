```markdown
# Stations Doctor

## Project Overview
Stations Doctor is a medical appointment scheduling system built with React.js for the frontend and Node.js with Express.js for the backend. It utilizes SQLite for development and PostgreSQL for production databases. This project aims to streamline the process of scheduling medical appointments between patients and doctors.

## Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: SQLite (for development), PostgreSQL (for production)
- **Testing**: Jest, Supertest
- **Others**: TypeScript

## Bugs and Issues

### 1. Initial Setup Issues
- **Issue**: Unable to initialize project with `npx create-react-app`.
- **Resolution Attempt**: Tried reinstalling Node.js, clearing npm cache, and updating npm. Issue persisted until using alternative installation methods.

### 2. TypeScript Compilation Errors
- **Issue**: TypeScript compilation errors due to mismatched types and undefined variables.
- **Resolution Attempt**: Updated TypeScript configurations, reviewed typings, and used stricter type checking.

### 3. Database Integration
- **Issue**: Integration of SQLite and PostgreSQL databases for development and production environments.
- **Resolution Attempt**: Implemented different database connection strategies and environment-specific configurations.

### 4. Dependency Management
- **Issue**: Dependency conflicts and outdated packages causing build failures.
- **Resolution Attempt**: Regularly updated npm packages, pinned specific versions, and used npm audit for vulnerability management.

### 5. Git Repository and Branching
- **Issue**: Challenges with Git repository management, including merge conflicts and branch management.
- **Resolution Attempt**: Utilized Git commands for resolving conflicts (`git merge`), branching strategies (`git branch`), and proper repository setup (`git init`).

## Future Enhancements
- Implement additional features such as user authentication, email notifications, and admin dashboard.
- Enhance UI/UX for better user interaction and accessibility.
## Unresolved Bugs and Issues

### 1. TypeScript Compilation Errors
- **Issue**: `npx tsc` not compiling TypeScript files properly.
- **Details**: Despite configuring TypeScript and updating dependencies, certain files fail to compile due to undefined variables and type mismatches.

### 2. Entity File Issues
- **Issue**: Persistent issues with entity files (`Doctor.ts`, `Appointment.ts`) not reflecting database changes correctly.
- **Details**: Modifications in entity definitions sometimes do not synchronize with the database schema, causing inconsistencies during runtime.

These unresolved issues are currently under investigation, and further updates and resolutions will be documented accordingly.


## Getting Started
To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/PabloCGSilva/stations-doctor.git
   
   
2. Install dependencies:
   ```sh
   npm install
   
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables (database credentials, API keys, etc.).

4. Start the development server:
   ```sh
   npm start
   
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
```

```
stations-doctor
├─ database.sqlite
├─ dist
│  ├─ controllers
│  │  ├─ appointmentController.js
│  │  ├─ doctorController.js
│  │  └─ patientController.js
│  ├─ database.js
│  ├─ entities
│  │  ├─ Appointment.js
│  │  ├─ Doctor.js
│  │  ├─ Patient.js
│  │  └─ SharedInterfaces.js
│  ├─ index.js
│  └─ routes
│     ├─ appointmentRoutes.js
│     ├─ appointments.js
│     ├─ doctorAppointments.js
│     ├─ doctorRoutes.js
│     └─ patientRoutes.js
├─ medical-appointment
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ components
│     │  ├─ AvailableDoctors.js
│     │  ├─ DoctorAppointments.js
│     │  ├─ PatientAppointments.js
│     │  └─ ScheduleAppointment.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ controllers
│  │  ├─ appointmentController.js
│  │  ├─ appointmentController.ts
│  │  ├─ doctorController.js
│  │  ├─ doctorController.ts
│  │  ├─ patientController.js
│  │  └─ patientController.ts
│  ├─ crud.js
│  ├─ database.js
│  ├─ database.ts
│  ├─ db.js
│  ├─ entities
│  │  ├─ Appointment.js
│  │  ├─ Appointment.ts
│  │  ├─ Doctor.js
│  │  ├─ Doctor.ts
│  │  ├─ Patient.js
│  │  ├─ Patient.ts
│  │  └─ SharedInterfaces.ts
│  ├─ index.js
│  ├─ index.ts
│  ├─ populate.js
│  └─ routes
│     ├─ appointmentRoutes.js
│     ├─ appointmentRoutes.ts
│     ├─ appointments.ts
│     ├─ doctorAppointments.ts
│     ├─ doctorRoutes.js
│     ├─ doctorRoutes.ts
│     ├─ patientRoutes.js
│     └─ patientRoutes.ts
└─ tsconfig.json

```

```
stations-doctor
├─ database.sqlite
├─ dist
│  ├─ controllers
│  │  ├─ appointmentController.js
│  │  ├─ doctorController.js
│  │  └─ patientController.js
│  ├─ database.js
│  ├─ entities
│  │  ├─ Appointment.js
│  │  ├─ Doctor.js
│  │  ├─ Patient.js
│  │  └─ SharedInterfaces.js
│  ├─ index.js
│  └─ routes
│     ├─ appointmentRoutes.js
│     ├─ appointments.js
│     ├─ doctorAppointments.js
│     ├─ doctorRoutes.js
│     └─ patientRoutes.js
├─ medical-appointment
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ components
│     │  ├─ AvailableDoctors.js
│     │  ├─ DoctorAppointments.js
│     │  ├─ PatientAppointments.js
│     │  └─ ScheduleAppointment.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ controllers
│  │  ├─ appointmentController.js
│  │  ├─ appointmentController.ts
│  │  ├─ doctorController.js
│  │  ├─ doctorController.ts
│  │  ├─ patientController.js
│  │  └─ patientController.ts
│  ├─ database.js
│  ├─ database.ts
│  ├─ entities
│  │  ├─ Appointment.js
│  │  ├─ Appointment.ts
│  │  ├─ Doctor.js
│  │  ├─ Doctor.ts
│  │  ├─ Patient.js
│  │  ├─ Patient.ts
│  │  └─ SharedInterfaces.ts
│  ├─ index.js
│  ├─ index.ts
│  └─ routes
│     ├─ appointmentRoutes.js
│     ├─ appointmentRoutes.ts
│     ├─ appointments.ts
│     ├─ doctorAppointments.ts
│     ├─ doctorRoutes.js
│     ├─ doctorRoutes.ts
│     ├─ patientRoutes.js
│     └─ patientRoutes.ts
└─ tsconfig.json

```

```
stations-doctor
├─ dist
│  ├─ controllers
│  │  ├─ appointmentController.js
│  │  ├─ doctorController.js
│  │  └─ patientController.js
│  ├─ database.js
│  ├─ entities
│  │  ├─ Appointment.js
│  │  ├─ Doctor.js
│  │  └─ Patient.js
│  ├─ index.js
│  ├─ routes
│  │  ├─ appointmentRoutes.js
│  │  ├─ doctorRoutes.js
│  │  └─ patientRoutes.js
│  └─ validationHelpers.js
├─ medical-appointment
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ components
│     │  ├─ AvailableDoctors.js
│     │  ├─ DoctorAppointments.js
│     │  ├─ PatientAppointments.js
│     │  └─ ScheduleAppointment.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ controllers
│  │  ├─ appointmentController.js
│  │  ├─ appointmentController.ts
│  │  ├─ doctorController.js
│  │  ├─ doctorController.ts
│  │  ├─ patientController.js
│  │  └─ patientController.ts
│  ├─ database.js
│  ├─ database.ts
│  ├─ entities
│  │  ├─ Appointment.js
│  │  ├─ Appointment.ts
│  │  ├─ Doctor.js
│  │  ├─ Doctor.ts
│  │  ├─ Patient.js
│  │  └─ Patient.ts
│  ├─ index.js
│  ├─ index.ts
│  ├─ routes
│  │  ├─ appointmentRoutes.js
│  │  ├─ appointmentRoutes.ts
│  │  ├─ doctorRoutes.js
│  │  ├─ doctorRoutes.ts
│  │  ├─ patientRoutes.js
│  │  └─ patientRoutes.ts
│  ├─ validationHelpers.js
│  └─ validationHelpers.ts
└─ tsconfig.json

```
