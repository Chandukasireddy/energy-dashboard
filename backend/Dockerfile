# Use an official lightweight Python image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the backend folder into the container
COPY . /app

# Install Flask and pandas (we use --no-cache-dir to keep image small)
RUN pip install --no-cache-dir flask pandas

# Expose port 5000 so that the app is accessible
EXPOSE 5000

# Set the environment variable for Flask
ENV FLASK_APP=app.py

# Run the Flask app when the container starts
CMD ["python", "app.py"]
