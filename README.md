SpaceX Capsules Dashboard
A Next-based application to view, edit, and manage SpaceX capsule data. Users can paginate through capsule entries, add new capsules, and edit existing ones, all while utilizing Redux for state management and Redux Toolkit for streamlined reducers. The app includes modals with form validation powered by Formik and Yup.

Table of Contents
Features
Installation
Usage
Technologies Used
Folder Structure
Contributing
License
Features
Paginated Capsule Data: Display SpaceX capsule data in a paginated table format.
Add/Edit Modals: Use modal pop-ups to add new capsules or edit existing entries with validation.
Form Validation: Client-side validation for forms with Formik and Yup.
Redux Toolkit Integration: Manage app state with Redux Toolkit and custom slices.
Responsive Design: Ensures a smooth user experience on various screen sizes.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/ikegwuonu/checkit.git
cd checkit
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm run dev
Open the application in your browser:

text
Copy code
http://localhost:3000
Usage
Viewing Capsules: Browse through paginated SpaceX capsule data.
Adding a New Capsule: Click the "Add Capsule" button, fill in the details, and submit to add a new capsule.
Editing Capsules: Select a capsule and click "Edit" to modify its information.
Deleting Capsules: Remove capsules from the list as needed.
Search & Filtering: Search functionality to filter capsules by specific criteria.
Technologies Used
Next for building the user interface
Redux Toolkit for state management
Formik and Yup for form handling and validation
Tailwind CSS for styling
Folder Structure
├── public                   # Public assets
├── src                      # Application source files
│   ├── components           # Reusable components (e.g., Modal, Add)
│   ├── store                # Redux setup and slices
│   │   ├── slices           # Redux slices
│   │   └── store.js         # Redux store configuration
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
└── README.md                # App documentation

Contributing:
Fork the repository.
Create a new branch with a descriptive name.
Make your changes and commit them.
Push the branch to your fork and submit a pull request.
License
This project is licensed under the MIT License.