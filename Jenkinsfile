pipeline {
  agent any
  stages {
    stage('Npm install') {
      steps {
        sh 'npm install'
      }
    }

    stage('before build') {
      steps {
        echo 'linting'
      }
    }

    stage('ng build') {
      steps {
        sh 'ng build --prod'
      }
    }

  }
}