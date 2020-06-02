pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
                echo '===================== Install dependencies ====================='
                sh 'export http_proxy="http://namnp:k60dbUetvnu@10.116.16.3:3128"'
                sh 'export https_proxy="http://namnp:k60dbUetvnu@10.116.16.3:3128"'
                sh 'npm i'
                sh 'ls'
            }
        }
    }

    post {
        always {
            echo 'One way or another, I have finished'
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable :'
        }
        failure {
            echo 'I failed'
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
