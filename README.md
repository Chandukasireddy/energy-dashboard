# Energy Market Dashboard



The **Energy Market Dashboard** is a full-stack project that simulates and visualizes energy market data using a Flask backend and a React frontend. The backend generates fake energy data for a set of countries, and the frontend displays this data in a responsive bar chart.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [What the Project Does](#what-the-project-does)
- [Installation and Running Locally](#installation-and-running-locally)
- [Git Commands Overview](#git-commands-overview)
- [Deployment](#deployment)
- [Additional Resources](#additional-resources)

## Features

- **Backend (Flask API):**
  - Generates random (simulated) energy data including price and demand for countries such as Germany, France, Italy, Spain, and Poland.
  - Exposes a RESTful endpoint at `/api/data` to serve this data as JSON.
  - Uses Flask-CORS to allow cross-origin requests.

- **Frontend (React App):**
  - Fetches data from the Flask backend using Axios.
  - Visualizes the data using a responsive bar chart powered by Chart.js (via react-chartjs-2).
  - Displays a "Loading data..." message until data is fetched.

## Project Structure

```
energy-dashboard/
├── backend/
│   ├── app.py              # Flask application code
│   ├── venv/               # Virtual environment (not tracked by Git)
│   └── Dockerfile          # (Optional) Dockerfile for the backend
├── frontend/
│   └── energy-dashboard-frontend/
│       ├── public/
│       ├── src/
│       │   ├── App.js      # Main React component
│       │   ├── Dashboard.js  # Dashboard component that fetches and displays data
│       │   └── ...
│       ├── package.json    # React app dependencies
│       └── Dockerfile      # (Optional) Dockerfile for the frontend
└── docker-compose.yml      # (Optional) Docker Compose file to run both services locally
```

## What the Project Does

- **Backend:**
  - The Flask backend in `backend/app.py` simulates energy market data by randomly generating values for energy price and demand for a list of countries.
  - It provides this data via a GET request at the `/api/data` endpoint.
  - CORS is enabled so that the frontend can access the backend even if they are hosted on different domains or ports.

- **Frontend:**
  - The React frontend in `frontend/energy-dashboard-frontend` contains a `Dashboard` component.
  - This component uses Axios to fetch the simulated data from the backend.
  - The data is visualized using a bar chart:
    - **X-Axis:** Displays the list of countries.
    - **Y-Axis:** Displays numeric values for energy price and demand.
  - Initially, a "Loading data..." message is shown until the data is fetched.

### Visualization Example

Imagine a bar chart where:
- The **X-Axis** lists countries: Germany, France, Italy, Spain, Poland.
- The **Y-Axis** shows the values.
- For each country, two bars are displayed:
  - One for **Energy Price** (e.g., €45.67)
  - One for **Energy Demand** (e.g., 3500 units)

This visualization gives a clear comparison of energy market metrics across different countries.

## Installation and Running Locally

### Prerequisites

- **Git**
- **Python 3.x**
- **Node.js** and **Yarn**

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd energy-dashboard
   ```

2. **Set Up and Run the Backend:**

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install flask flask-cors pandas
   python app.py
   ```

   - The backend will run on port 5000.
   - Open your browser and navigate to:  
     `https://<your-codespace-name>-5000.preview.app.github.dev/api/data`
     to view the JSON data.

3. **Set Up and Run the Frontend:**

   ```bash
   cd ../frontend/energy-dashboard-frontend
   yarn install
   yarn start
   ```

   - The React app should open in your browser (usually at `http://localhost:3000` or via Codespaces preview).
   - The Dashboard component will fetch data from the backend and display it in a chart.

### Using Docker (Optional)

If you prefer running everything in containers, use Docker Compose:

1. **Build and Run with Docker Compose:**

   From the project root:

   ```bash
   docker-compose up --build
   ```

2. **Access the Services:**
   - Backend: `http://localhost:5000/api/data`
   - Frontend: `http://localhost:3000`

## Git Commands Overview

- **Clone the repository:**
  ```bash
  git clone <repository-url>
  ```
- **Check repository status:**
  ```bash
  git status
  ```
- **Stage changes:**
  ```bash
  git add .
  ```
- **Commit changes:**
  ```bash
  git commit -m "Your commit message"
  ```
- **Push changes to remote:**
  ```bash
  git push
  ```
- **Pull changes from remote:**
  ```bash
  git pull
  ```

## Deployment

- **Backend Deployment:**  
  Deploy the Flask backend to Heroku using the container registry or by pushing the code.
- **Frontend Deployment:**  
  Deploy the React frontend to Vercel by importing your GitHub repository and setting the root directory to `frontend/energy-dashboard-frontend`.

## Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://reactjs.org/)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [React Chartjs-2 Documentation](https://github.com/reactchartjs/react-chartjs-2)
- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- [Heroku Container Registry](https://devcenter.heroku.com/articles/container-registry-and-runtime)
- [Vercel Documentation](https://vercel.com/docs)

Happy coding!
```

---

This file is now ready to be saved as `README.md` in your project root. It explains what the project does, includes installation instructions, Git commands, and provides an overview of the visualizations. Let me know if you need any further modifications or additions!
