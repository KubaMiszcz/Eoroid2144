pipeline {
  agent any
  stages {
    stage('Oh Hello') {
      agent any
      steps {
        echo 'hello'
      }
    }

    stage('Build') {
      steps {
        sh 'ng build --prod'
      }
    }

  }
}