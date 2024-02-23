# Docker Tookit

## Docker Introduction
### What is Docker?
``` Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is. ```
### What is a Container?
``` A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files. ```
### Docker Architecture
``` Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. ```
### Docker Components
- Docker Engine
- Docker Images
- Docker Containers
- Docker Registries
- Docker Compose
- Docker Swarm
- Docker Machine
- Docker Hub
- Docker Cloud
- Docker Store
- Docker Trusted Registry
- Docker Universal Control Plane
- Docker Datacenter
- Docker for Mac
- Docker for Windows

### Docker Engine
``` Docker Engine is a client-server application with these major components:
- A server which is a type of long-running program called a daemon process (the dockerd command).
- A REST API which specifies interfaces that programs can use to talk to the daemon and instruct it what to do.
- A command line interface (CLI) client (the docker command). ```
### Docker Images
``` An image is a lightweight, stand-alone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files. ```
### Docker Containers
``` A container is a runtime instance of a docker image. ```
### Docker Registries
``` A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry. ```
### Docker Compose
``` Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. ```
### Docker Swarm
``` Docker Swarm is a clustering and scheduling tool for Docker containers. With Swarm, IT administrators and developers can establish and manage a cluster of Docker nodes as a single virtual system. ```
### Docker Machine
``` Docker Machine is a tool that lets you install Docker Engine on virtual hosts, and manage the hosts with docker-machine commands. You can use Machine to create Docker hosts on your local Mac or Windows box, on your company network, in your data center, or on cloud providers. ```
### Docker Hub
``` Docker Hub is a cloud-based registry service which allows you to link to code repositories, build your images and test them, stores manually pushed images, and links to Docker Cloud so you can deploy images to your hosts. It provides a centralized resource for container image discovery, distribution and change management, user and team collaboration, and workflow automation throughout the development pipeline. ```
### Docker Cloud
``` Docker Cloud is a hosted service for Docker container management. It provides a platform for developers and sysadmins to build, ship, and run applications. Docker Cloud offers a native hosted version of the Docker Registry, integrated closely with Docker Hub. ```
### Docker Store
``` Docker Store is a place where you can find trusted and enterprise ready containers and plugins. ```
### Docker Trusted Registry
``` Docker Trusted Registry (DTR) is a commercial product that enables complete image management workflow, featuring LDAP/Active Directory integration, image signing, security scanning, and integration with Universal Control Plane. ```
### Docker Universal Control Plane
``` Docker Universal Control Plane (UCP) is the enterprise-grade cluster management solution from Docker. You install it on-premises or in your virtual private cloud, and it helps you manage your application life cycle, through development, testing, and production. ```
### Docker Datacenter
``` Docker Datacenter is an integrated platform for running and managing containers in production. It runs on-premises or in the cloud, on a variety of operating systems. ```
### Docker for Mac
``` Docker for Mac is a Mac native application, that you install in /Applications. It requires OS X 10.10.3 or newer. It includes a standalone server, that you can use to develop, test, and run Docker containers. It also includes Kitematic, a graphical user interface for managing Docker containers. ```
### Docker for Windows
``` Docker for Windows is a Windows native application, that you install in the same way you would install any other Windows application. It requires Microsoft Windows 10 Professional or Enterprise 64-bit. It includes a standalone server, that you can use to develop, test, and run Docker containers. It also includes Kitematic, a graphical user interface for managing Docker containers. ```
### Docker for Linux
``` Docker for Linux is a Linux native application, that you install in the same way you would install any other Linux application. It requires a recent Linux kernel and a modern Linux distribution. It includes a standalone server, that you can use to develop, test, and run Docker containers. It also includes Kitematic, a graphical user interface for managing Docker containers. ```

## Docker Installation
### Docker for Windows
``` Docker for Windows is a native Windows application that provides a simple development, test, and production Docker environment. It includes a standalone server, a built-in CLI, and a graphical user interface for managing Docker images, containers, and swarms. Docker for Windows is the best way to get started with Docker on Windows. ```
### Docker for Mac
``` Docker for Mac is a native Mac application that provides a simple development, test, and production Docker environment. It includes a standalone server, a built-in CLI, and a graphical user interface for managing Docker images, containers, and swarms. Docker for Mac is the best way to get started with Docker on a Mac. ```
### Docker for Linux
``` Docker for Linux is a native Linux application that provides a simple development, test, and production Docker environment. It includes a standalone server, a built-in CLI, and a graphical user interface for managing Docker images, containers, and swarms. Docker for Linux is the best way to get started with Docker on Linux. ```

## Docker Commands
### Create a Docker Container
``` docker create [OPTIONS] IMAGE [COMMAND] [ARG...] ```

### Start a Docker Container
``` docker start [OPTIONS] CONTAINER [CONTAINER...] ```

### Stop a Docker Container
``` docker stop [OPTIONS] CONTAINER [CONTAINER...] ```

### Restart a Docker Container
``` docker restart [OPTIONS] CONTAINER [CONTAINER...] ```

### Remove a Docker Container
``` docker rm [OPTIONS] CONTAINER [CONTAINER...] ```

### List Docker Containers
``` docker ps [OPTIONS] ```

### List All Docker Containers
``` docker ps -a ```

### List Docker Images
``` docker images [OPTIONS] ```

### Pull a Docker Image
``` docker pull [OPTIONS] NAME[:TAG|@DIGEST] ```

### Push a Docker Image
``` docker push [OPTIONS] NAME[:TAG] ```

### Remove a Docker Image
``` docker rmi [OPTIONS] IMAGE [IMAGE...] ```

### Build a Docker Image
``` docker build [OPTIONS] PATH | URL | - ```

### Tag a Docker Image
``` docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG] ```

### Login to Docker
``` docker login [OPTIONS] [SERVER] ```

### Logout of Docker
``` docker logout [SERVER] ```

### Docker Version
``` docker version [OPTIONS] ```

### Docker Info
``` docker info [OPTIONS] ```

### Docker System
``` docker system [OPTIONS] ```

### Docker Network
``` docker network [OPTIONS] ```

### Docker Volume
``` docker volume [OPTIONS] ```

### Docker Events
``` docker events [OPTIONS] ```

### Docker History
``` docker history [OPTIONS] IMAGE ```

### Docker Inspect
``` docker inspect [OPTIONS] NAME|ID [NAME|ID...] ```

### Docker Logs
``` docker logs [OPTIONS] CONTAINER ```

### Docker Diff
``` docker diff [OPTIONS] CONTAINER ```

### Docker Top
``` docker top [OPTIONS] CONTAINER [ps OPTIONS] ```

### Docker Stats
``` docker stats [OPTIONS] [CONTAINER...] ```

### Docker Attach
``` docker attach [OPTIONS] CONTAINER ```

### Docker Exec
``` docker exec [OPTIONS] CONTAINER COMMAND [ARG...] ```

### Docker Export
``` docker export [OPTIONS] CONTAINER ```

### Docker Import
``` docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]] ```

### Docker Cp
``` docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-

### Docker Run
``` docker run [OPTIONS] IMAGE [COMMAND] [ARG...] ```

### Docker Commit
``` docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]] ```

### Docker Save
``` docker save [OPTIONS] IMAGE [IMAGE...] ```

### Docker Load
``` docker load [OPTIONS] ```

### Docker Wait
``` docker wait [OPTIONS] CONTAINER [CONTAINER...] ```

### Docker Kill
``` docker kill [OPTIONS] CONTAINER [CONTAINER...] ```

### Docker Pause
``` docker pause [OPTIONS] CONTAINER [CONTAINER...] ```

### Docker Unpause
``` docker unpause [OPTIONS] CONTAINER [CONTAINER...] ```

### Docker Events
``` docker events [OPTIONS] ```

### Docker Port
``` docker port [OPTIONS] CONTAINER [PRIVATE_PORT[/PROTO]] ```

### Docker Prune
``` docker prune [OPTIONS] ```

### Docker System Prune
``` docker system prune [OPTIONS] ```

### Docker System Events
``` docker system events [OPTIONS] ```

### Docker System Info
``` docker system info [OPTIONS] ```

### Docker System Df
``` docker system df [OPTIONS] ```

### Docker System Reboot
``` docker system reboot [OPTIONS] ```

### Docker System Restore
``` docker system restore [OPTIONS] ```

### Docker System Upgrade
``` docker system upgrade [OPTIONS] ```

### Docker System Version
``` docker system version [OPTIONS] ```

### Docker System Ping
``` docker system ping [OPTIONS] ```

### Docker System Trust
``` docker system trust [OPTIONS] ```

### Docker System Verify
``` docker system verify [OPTIONS] ```

### Docker System Prune
``` docker system prune [OPTIONS] ```

## Docker Links
- [Docker](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Docker Swarm](https://docs.docker.com/engine/swarm/)
- [Docker Machine](https://docs.docker.com/machine/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Docker for Windows](https://docs.docker.com/docker-for-windows/)
- [Docker for Mac](https://docs.docker.com/docker-for-mac/)
- [Docker for Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Docker for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Docker for CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)
- [Docker for Debian](https://docs.docker.com/install/linux/docker-ce/debian/)
- [Docker for Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)
- [Docker for RHEL](https://docs.docker.com/install/linux/docker-ce/centos/)
- [Docker for Oracle Linux](https://docs.docker.com/install/linux/docker-ce/oracle/)
- [Docker for SUSE](https://docs.docker.com/install/linux/docker-ce/suse/)
- [Docker for Windows Server](https://docs.docker.com/install/windows/docker-ee/)
- [Docker for AWS](https://docs.docker.com/docker-for-aws/)

