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
            sh 'npm run-script lint'
          }
        }

        stage('Unit tests') {
          steps {
            echo 'testing'
          }
        }

        stage('Sonar Scanner') {
          steps {
            echo 'Sonar Scanner here'
          }
        }
      }
    }

    stage('Npm Build') {
      steps {
        sh 'npm run-script build --prod --aot'
      }
    }

    stage ('Deploy to Webio') {
      steps {
        ftpPublisher alwaysPublishFromMaster: false,
          continueOnError: false,
          failOnError: false,
          masterNodeName: '',
          paramPublish: null,
          publishers: [
            [configName: 'webio-ftp', transfers: [[asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'eoroid2144.hostingasp.pl/wwwroot/ftpgit7/', remoteDirectorySDF: false, removePrefix: 'dist/Eoroid2144/', sourceFiles: 'dist/Eoroid2144/*,dist/Eoroid2144/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]]
        }
    }

  }
}
