# React-Flask

This project combines a React frontend (using Vite for development) with a Flask backend. Below are the instructions for setting up, running, and accessing the project, as well as the future purposes for the Flask backend.

---

## React Frontend Setup and Usage

### Installation
1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Navigate to your `chosen-folder` directory:
   ```bash
   cd /home/<user>/Documents/<chosen-folder>
3. Install the dependencies for the React frontend:
   ```npm install```

### Running in Development Mode
1. Start the development server:
   ```npm run dev -- --host```

2. The development server will start, and you can access the project in your browser at:
   `http://localhost:5173`

### Accessing the Project from Another PC
1. Ensure your local machine and the other PC are on the same network.

2. Find your local machine's IP address. You can use the following command:
   ```bash
   hostname -I
Copy the IP address (e.g., 192.168.x.xxx).

3. On the other PC, open a browser and navigate to:
   `http://<your-ip>:5173`

Replace `<your-ip>` with your local machine's IP address.

---

## Flask Backend (Future Purposes)
The Flask backend will be used for the following purposes:

* API Development: Serve as the backend API for the React frontend.
* Database Integration: Handle data storage and retrieval using a database (e.g., PostgreSQL, MySQL, or SQLite).
* Authentication: Implement user authentication and authorization.
* Business Logic: Process and manage application-specific logic.

Backend Setup (Placeholder)

The backend setup instructions will be added once the Flask backend is implemented.

---

This project is a study from the book _**FullStack React and Flask**_

writen by: _Olatunde Adedeji_

Packt Publishing LTD -> [www.packtpub.com](www.packtpub.com)