pipeline {
  agent any
  stages {
    stage('Npm Install') {
      steps {
        echo '============================================ Npm Install =============================================================='
        sh 'npm install'
      }
    }

    stage('Static code analysis') {
      parallel {
        stage('linting') {
          steps {
            echo '============================================ linting =============================================================='
            sh 'ng lint'
          }
        }

        stage('Unit tests') {
          steps {
            echo '============================================ Unit tests =============================================================='
            echo 'testing'
          }
        }

        stage('Sonar Scanner') {
          steps {
            echo '============================================ Sonar Scanner =============================================================='
            sh '/srv/dev-disk-by-label-Magazyn-SSHD/SonarQube/sonar-scanner-4.5.0.2216-linux/bin/sonar-scanner -Dproject.settings=/srv/dev-disk-by-label-Magazyn-SSHD/jenkins/workspace/Eoroid2144/sonar-project.properties'
          }
        }
      }
    }

    stage('Npm Build') {
      steps {
        echo '============================================ Npm Build =============================================================='
        script {
            jsonDictionary = readJSON file: "build-info.json"
            jsonDictionary.buildDateTime = "${BUILD_TIMESTAMP}".toString()
            jsonDictionary.buildId = "${BUILD_ID}".toString()
            writeJSON(file: 'build-info.json', json: jsonDictionary, pretty: 4)
            sh 'cat build-info.json'
        }
        sh 'ng build -c production'
      }
    }

    stage ('Deploy to Webio') {
      steps {
        echo '============================================ Deploy to Webio =============================================================='
        ftpPublisher alwaysPublishFromMaster: false,
          continueOnError: false,
          failOnError: false,
          masterNodeName: '',
          paramPublish: null,
          publishers: [
            [configName: 'webio-ftp', transfers: [[asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'eoroid2144.hostingasp.pl/wwwroot', remoteDirectorySDF: false, removePrefix: 'dist/Eoroid2144/', sourceFiles: 'dist/Eoroid2144/*,dist/Eoroid2144/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]]
        }
    }

  }
}
