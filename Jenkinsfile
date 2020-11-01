pipeline {
  agent any
  stages {

    //test
    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps {
              echo 'linting'
              // sh 'npm run-script lint'
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

    // should i put this before linting?
    stage('Npm Install') {
      echo 'install'
      // steps { sh 'npm install' }
    }

    stage('Npm Build') {
      echo 'build'
      // steps { sh 'npm run-script build --prod' }
    }

  }
}
