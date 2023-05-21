# Google Docs Clone

This is a Google Docs clone website built using React. It allows users to create and edit documents in a collaborative manner. The application consists of several components that replicate the functionalities of Google Docs.

## Components

1. **Button**
   - Description: A custom button component used throughout the application.
   - Usage: It can be used to trigger actions or perform specific functions.

2. **Header**
   - Description: The header component contains the document name, different formatting options, and the ability to share the document.
   - Usage: Users can modify the document name, apply formatting to text, and share the document with others.

3. **Main Content**
   - Description: This is a wrapper component for the Text Editor and Sidebar components.
   - Usage: It provides the main content area where users can compose and edit their documents.

4. **Modal**
   - Description: This is a custom modal component implemented using React Portals.
   - Usage: It allows the display of modals for various interactions or notifications within the application.

5. **ShareModalContent**
   - Description: This component is passed as a child to the Modal component for the share button functionality. It represents the content displayed inside the modal.
   - Usage: It provides the interface for users to share the document with others and manage sharing settings.

6. **Sidebar**
   - Description: This is a sidebar component that displays links to other Google apps. It is initially hidden but can be toggled by clicking on a button.
   - Usage: Users can navigate to other Google apps by accessing the links displayed in the sidebar.

7. **Text Editor**
   - Description: This component replicates the functionalities of the Google Docs text editor. It utilizes the `react-draft-wysiwyg` library.
   - Usage: It enables users to compose and edit documents with rich text formatting options, such as bold, italics, underline, bullet points, and more.

## Additional Features

- **Modal using React Portals**: The application utilizes React Portals to create a custom modal component that can be displayed above other components in a portal container.

- **Responsive Header using ResizeObserver**: The header component incorporates a `ResizeObserver` to achieve responsiveness. It dynamically recalculates the width and adjusts the display on the screen based on the screen width.

- **Solid Principles**: The project follows the SOLID principles of software development, promoting clean and maintainable code architecture.

Please note that this readme provides an overview of the components and features in the Google Docs clone application. For detailed implementation and usage instructions, refer to the individual component files and the accompanying code documentation.