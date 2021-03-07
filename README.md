# myPatient
[HackUNO2021 Project (24-hour dev)](https://mypatienthackuno1021.web.app/)

Justin Rathbone & Sydney Andreasen

## Inspiration
Members of the health care industry, especially doctors, haven't been taking full advantage of the technological revolution of the 21st century. Doctors still meet a patient at their bedside with a clipboard in hand, full of unsecured protected health information (PHI). Some doctors access software installed on a hospital computer, but he/she cannot monitor all of their patients at once in this way.

## What it does
myPatient is a Software-as-a-Service (SaaS) application that provides a homepage listing the doctors at a healthcare facility and allows each to securely login to a dashboard. This dashboard facilitates quick navigation between the information of all their patients currently staying at the hospital. At a glance, the doctor can see information about the patient's age, reason for hospitalization, vitals, test results, and documentation of their diagnosis.

## How we built it
We began developing myPatient by designing the UI in Figma and creating a JSON file to design our ideal data structure. Our development environment involved ReactJS with Firebase hosting, authentication, and realtime database. For streamlining a more cohesive UI design, we utilized a couple of basic React components from the Ant Design library.

### The full tech stack is listed below:
 - ReactJS
 - HTML5
 - CSS
 - Ant Design React Component Library
 - NoSQL (read and delete functionalities, asynchronous queries)
 - Domain Hosting (via Firebase)
 - User Authentication (via Firebase, login/logout using passwords)

## Challenges we ran into
One of our biggest challenges was in the setup of the environment from the beginning. When learning about Firebase, we merged advice that we found online, some saying to set the project up via Firebase CLI and some via the Firebase Console website. This posed compatibility issues between rules and settings in the background of the project, especially for the database. For this reason, we decided to start our project simple, using just a JSON file as the back-end and getting the data through a simple fetch() call. After getting much of the UI done this way, we were able to slowly transition our back-end to Firebase for more legitimate authentication and a true, modifiable, database.

## Accomplishments that we're proud of
We think that our planning early on, especially in designing the data structure, helped us immensely when it came to implementing the back-end in a seamless way. We were also able to make the UI design closely match our design created in Figma. This is an accomplishment worth noting, especially due to the complex grid-like style present throughout the interface. We are also proud to say, that in just 24 hours of development, myPatient is a full-stack application.

## What we learned
We learned about the importance of being meticulous during the CLI setup of a project. In design, we learned how to use CSS grids to smoothly create designs with the column proportions we desired. We also improved our CSS skills by first styling the basic layout of pages before rushing to fill in the content, which has previously led us to facing alignment issues. In the back-end of our project, we learned about NoSQL. JSON was a familiar idea to us, but in terms of databases, we are far more used to SQL relationships and relating primary keys across tables to get the information we are looking for. We also learned how to supplement each other's productivity while doing most of the React development from one device at a time. We utilized each other's strengths to make the best product we could and give each other feedback and brain breaks along the way.

## What's next for myPatient
With more time, we would like to fully implement the CRUD Operations: create, read, update, and delete. We were able to implement read and delete, however, all four operations would make myPatient a much more viable product for the healthcare industry. In concern for full HIPAA compliance, further security checks would be useful as well.
