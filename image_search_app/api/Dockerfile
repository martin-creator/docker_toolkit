FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Expose 
EXPOSE 5050

# Copy Pipfile and Pipfile.lock to the working directory
COPY Pipfile Pipfile.lock requirements.txt ./

# Install pipenv
#RUN pip install pipenv

# Install dependencies
#RUN pipenv lock --requirements > requirements.txt

# Install dependencies
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . ./

# Run the application
CMD ["python", "main.py"]
