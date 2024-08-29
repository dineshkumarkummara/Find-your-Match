# DatingApp

Welcome to **DatingApp**, a modern and fully-featured dating platform designed to help people connect and build relationships. This application offers a secure and engaging environment for users to find potential matches, communicate in real-time, and manage their profiles—all within a sleek and responsive interface.

## Purpose

The purpose of this project is to create a reliable, scalable, and user-friendly dating application. The app is built with the latest technologies to ensure smooth performance and a rich user experience. It's designed to cater to a wide audience, offering features that make online dating accessible and enjoyable.

## Key Features

### Secure User Authentication
- **JWT-Based Authentication**: Ensures that all user data is protected and secure.
- **Role-Based Authorization**: Different levels of access depending on user roles (e.g., admin, user).

### Real-Time Communication
- **Instant Messaging**: Users can chat with their matches in real time using SignalR, providing a seamless communication experience.

### Profile Management
- **Customizable Profiles**: Users can create and personalize their profiles with photos, descriptions, and other personal information.
- **Profile Visibility Controls**: Users can manage their privacy by controlling what information is visible to others.

### Advanced Search & Matching
- **Filtering and Sorting**: Users can search for potential matches using various filters like age, location, interests, etc.
- **Matching Algorithm**: A built-in algorithm suggests matches based on user preferences and behavior.

### Responsive Design
- **Mobile and Desktop Friendly**: The frontend is fully responsive, ensuring a smooth experience whether you're on a smartphone, tablet, or desktop.

### Easy Deployment & Scalability
- **Dockerized Setup**: The application can be easily deployed using Docker, allowing for quick setup and scalability.
- **Microservices Architecture**: The backend is modular, making it easier to maintain and extend.

## Technologies Used

- **Backend**: .NET Core for building a robust and efficient API.
- **Frontend**: Angular for a dynamic and responsive user interface.
- **Database**: SQL Server for managing user data and relationships.
- **Real-Time Communication**: SignalR for instant messaging capabilities.
- **Containerization**: Docker and Docker Compose for simplified deployment and environment consistency.

## Getting Started

### Prerequisites
To get started with the project, ensure you have the following installed:
- **.NET SDK**: To run the backend API.
- **Node.js & npm**: To manage and run the Angular frontend.
- **Angular CLI**: For building and serving the Angular application.
- **Docker**: For containerization (optional but recommended).

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dineshkumarkummara/Find-your-match.git
   cd DatingApp
   ```

2. **Setup Backend**
   - Navigate to the `API` directory:
     ```bash
     cd API
     ```
   - Restore dependencies and update the database:
     ```bash
     dotnet restore
     dotnet ef database update
     ```

3. **Setup Frontend**
   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install npm packages:
     ```bash
     npm install
     ```

### Running the Application

- **Using Docker**:
  - Run the application using Docker Compose:
    ```bash
    docker-compose up --build
    ```

- **Without Docker**:
  1. **Run the Backend**:
     - From the `API` directory:
       ```bash
       dotnet run
       ```
  2. **Run the Frontend**:
     - From the `client` directory:
       ```bash
       ng serve
       ```

## Contributing

Contributions to this project are welcome! If you have ideas for improvements or new features, feel free to fork the repository and submit a pull request.

