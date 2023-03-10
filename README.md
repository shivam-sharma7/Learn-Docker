<div align="center">Welcome to Docker Tutorial</div>

## What is Docker?

Docker is a platform that packages an application and its all dependencies in the form of containers **OR** Docker is a platform for building, running and shipping applications in a consistent manner. if your application runs your development machine so it can also run the same way on other machines.

## How to Install Docker Desktop Window, Mac and Linux?

You can check [Docker Website](https://docs.docker.com/desktop/install/windows-install/) and download it as per your system requirements you can see the following image at the yellow sign.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678412921615/46c10e5d-ad9e-46ed-a051-a436bc7c0dd3.png align="center")

## What is Docker Container?

This is an isolated environment for running an application. We can say running instances of `Docker image` and we can run multiple containers from 1 image. Check all running docker containers using the `docker ps` command on your Terminal.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678353404934/fa0f8a4a-78b6-4e96-ae4a-197180df3517.png align="center")

## What is Docker Images?

A Docker Image is a set of instructions that we need to build a container. It Includes `App source code`, but also complete environment configuration. Check all docker images using the `docker images` command on your Terminal. you can see **image** **TAG, Image ID, CREATED and SIZE.**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678353118804/62e16f4b-e0d5-494b-8415-51bd72bb037b.png align="center")

### How do we get Docker Images?

Let's suppose you want to run a database container like **MongoDB, SQL, PostgreSQL** whatever so where can we find these images that's where came `Docker Registries` A storage and distribution system for docker images.

**<mark>Note- Official images are always maintained by the software authors or in collaboration with Docker Community.</mark>**

Docker hosts one of the biggest Docker Registry, called [Docker Hub](https://hub.docker.com/).

### How do we get Docker Images locally?

To download any docker images locally we have to use the `docker pull <image name>` command. In this case, I am downloading a hello-world image from the docker hub. you can download with a specific version also using this command `docker pull <img name:version> or docker pull nginx:1.23`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678371915522/a8324828-c638-4af8-a804-69200374deb9.png align="center")

### How do we run an image in a container environment?

I have pulled `nginx` image to do this using the following command

* **docker pull nginx**
    
* **docker run -d nginx**
    
* To check all the running container `docker ps`
    

<mark>Note: It is not necessary to first we have to pull the image and then run. we can run it directly it will automatically pull images from the docker hub</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678374526478/11004ee0-a0c9-4120-a63b-fdfb3cebdc5f.png align="center")

You can open your [Docker Desktop](https://docs.docker.com/get-docker/) as well and check the all container in the status section you can see it is running.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678374708874/4e80cd95-84ae-4c70-a303-d242beb01f85.png align="center")

### How to Start and Stop Containers?

Whenever we use `docker run -d <image name>` It will always create and run a new container. You can see two handy commands in the following image to start and stop a container.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678436949984/32473a25-6d9b-4897-ae0d-ce82a765c711.png align="center")

### What is Dockerfile?

Dockerfile- Build instruction, This is a text document that contains commands to assemble an image. Then docker will able to read those instructions and build an image.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678437654255/7477bbed-16ca-46a2-bf13-bfce3ddd1bbf.png align="center")
