pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
                echo '===================== Install dependencies ====================='
                sh 'export http_proxy="http://namnp:k60dbUetvnu@10.116.16.20:3128"'
                sh 'export https_proxy="http://namnp:k60dbUetvnu@10.116.16.20:3128"'
                sh 'npm config set proxy http://namnp:k60dbUetvnu@10.116.16.20:3128'
                sh 'npm config set https-proxy http://namnp:k60dbUetvnu@10.116.16.20:3128'
                sh 'npm i'
                sh 'ls'
                echo '===================== Running ====================='
                sh 'node_modules/.bin/cypress run  --reporter junit -s cypress/integration/sw360/homepage/login.spec.js'
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
