pipeline {
  agent any
  stages {
    stage('Npm Install') {
      steps {
        sh 'npm install'
      }
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
          }
        }

      }
    }

    stage('Npm Build') {
      steps {
        sh 'npm run-script build --prod --aot'
      }
    }

    stage('ftpupload') {
      steps {
        sh '''ls
'''
      }
    }

  }
}