# Use a lightweight Python 3.9 image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the required packages
RUN pip install --no-cache-dir flask flask-cors pandas

# Expose port 5000 (the port your Flask app listens on)
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
