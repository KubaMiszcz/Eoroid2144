pipeline {
  agent any
  stages {

    // should i put this before linting?
    stage('Npm Install') {
      steps {echo 'install'}
      steps { sh 'npm install' }
    }

    stage('Static code analysis') {
      parallel {
        stage('linting') {
            steps {
              echo 'linting'
              sh 'npm run-script lint'
            }
        }
        stage('Unit tests') {
            steps {
              echo 'testing'
              // sh 'npm run-script test'
            }
        }
      }
    }

    stage('Npm Build') {
      steps { echo 'build'}
      steps { sh 'npm run-script build --prod' }
    }

  }
}
