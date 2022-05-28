node {
    checkout scm

    docker.withRegistry('https://hub.docker.com', 'dockerHub') {

        def customImage = docker.build("septiapermana/learning-redis-client")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}