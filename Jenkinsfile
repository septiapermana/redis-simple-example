pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build . -t sp-learning-redis-client'
            }
        }
        stage('Run /w Docker') {
            steps {
                sh 'docker run -dp 5000:5000 sp-learning-redis-client'
            }
        }
        stage('Finish') {
            steps {
                echo 'Hai gais'
            }
        }
    }
}
