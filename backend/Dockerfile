# Use a lightweight Python image
FROM python:3.9-slim

# Set working directory in the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app

# Expose port 5000
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
