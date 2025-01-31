# Use an official Python image
FROM python:3.9

# Install Node.js (needed for React)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Set working directory in the container
WORKDIR /workspace

# Expose ports for Flask (5000) and React (3000)
EXPOSE 5000 3000
