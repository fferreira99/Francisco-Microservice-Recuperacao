pipeline {
    agent any
    stages {
        stage('Verificar Repositório') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], useRemoteConfigs:[[url: 'https://github.com/fferreira99/Francisco-Microservice-Recuperacao.git']]])
            }
        }
        
        stage('Construir Imagem Docker') {
            steps {
                script {
                    def appName = 'francisco-ciclo2-microservice'
                    def imageTag = "${appName}:${env.BUILD_ID}"

                    // Construir a imagem Docker
                    bat "docker build -t ${imageTag} ."
                }
            }
        }

        stage('Fazer Deploy') {
            steps {
                script {
                    def appName = 'francisco-ciclo2-microservice'
                    def imageTag = "${appName}:${env.BUILD_ID}"
                    // Parar e remover o container existente, se houver
                    //bat "docker stop ${appName}"
                    //bat "docker rm ${appName}"
                    // Executar o novo container
                    bat "docker run -d --name ${appName} ${imageTag}"
                }
            }
        }
    }
    post {
        success {
            echo 'Deploy realizado com sucesso!'
        }
        failure {
            echo 'Houve um erro durante o deploy.'
        }
    }
}
