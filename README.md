Santander Candidates Application
Technical solution for candidate management with Excel-based data upload (Angular frontend + NestJS backend).

Project Description
A full-stack application that enables:

Frontend (Angular 16+): Upload Excel files with candidate data and display them in a table

Backend (NestJS): Process Excel files and return combined data in JSON format

Technical Requirements
Component	Version
Node.js	18+
Angular CLI	16+
NestJS	9+
npm	8+
Installation and Execution
Backend (NestJS)
bash
Copy
cd backend
npm install
npm run start:dev
Server runs at: http://localhost:3000

Frontend (Angular)
bash
Copy
cd frontend
npm install
ng serve
Access at: http://localhost:4200

Required Excel Format
The Excel file must contain these exact columns (1 row per candidate):

Name	Surname	Seniority (junior/senior)	Years of experience	Availability (true/false)
John	Doe	junior	5	true
Jane	Smith	senior	8	false
Important notes:

File must be .xlsx or .xls format

Seniority must be either "junior" or "senior"

Availability must be boolean (true/false)
