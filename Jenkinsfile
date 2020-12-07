pipeline {
  agent any
  stages {
    stage('Pre Build stages') {
      parallel {
        stage('Npm Install') {
          steps {
            echo '====================================== Npm Install ======================================'
            // sh 'npm install'
          }
        }
        stage('version Up') {
          steps {
            echo '====================================== Npm Install ======================================'
            script {
                jsonDictionary = readJSON file: "build-info.json"
                jsonDictionary.buildDateTime = "${BUILD_TIMESTAMP}".toString()
                jsonDictionary.buildId = "${BUILD_ID}".toString()
                writeJSON(file: 'build-info.json', json: jsonDictionary, pretty: 4)
                sh 'cat build-info.json'
            }
          }
        }
        stage('notifications before build') {
          steps {
            mail from: '',
              to: "zielonyeufor@gmail.com",
              cc: '',
              bcc: '',
              replyTo: '',
              subject: "From Jenkins -> ${JOB_NAME} #${BUILD_NUMBER} STARTED",
              body: "<b>Project: ${env.JOB_NAME}</b><br> Build Number: #${env.BUILD_NUMBER} <br> Build Status: STARTED <br>URL build: ${env.BUILD_URL}",
              charset: 'UTF-8',
              mimeType: 'text/html';
            discordSend title: "**${JOB_NAME} #${BUILD_NUMBER} STARTED**",
              description: "**`Status: STARTED`**",
              footer: "time: ${currentBuild.durationString}",
              result: "${currentBuild.currentResult}",
              thumbnail: "https://www.treehugger.com/thmb/eFvSYtTgdWT4SucO5nd1oBJBcyo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__01__grumpy_cat-c653c9bb27604d6e92c4ca8df4d9e3bb.jpg",
              link: "${BUILD_URL}",
              webhookURL: "https://discord.com/api/webhooks/781998432919355425/8XK5CZDTXgqrtgZSk8eur77Z1ClCppNQYySdPA4wPTo9STiEhSZa9c-rVNTvnKVO78JP"
          }
        }
      }
    }

    stage('Static code analysis') {
      parallel {
        stage('linting') {
          steps {
            echo '====================================== linting ======================================'
            sh 'ng lint'
          }
        }

        // stage('Unit tests') {
        //   steps {
        //     echo '====================================== Unit tests ======================================'
        //     echo 'testing'
        //   }
        // }

        stage('Sonar Scanner') {
          steps {
            echo '====================================== Sonar Scanner ======================================'
            sh '/srv/dev-disk-by-label-Magazyn-SSHD/SonarQube/sonar-scanner-4.5.0.2216-linux/bin/sonar-scanner -Dproject.settings=/srv/dev-disk-by-label-Magazyn-SSHD/jenkins/workspace/Eoroid2144/sonar-project.properties'
          }
        }
      }
    }

    stage('Npm Build') {
      steps {
        echo '====================================== Npm Build ======================================'
        // sh 'ng build -c production'
      }
    }

    stage ('Deploy to Webio') {
      steps {
        echo '====================================== Deploy to Webio ======================================'
        ftpPublisher alwaysPublishFromMaster: false,
          continueOnError: false,
          failOnError: false,
          masterNodeName: '',
          paramPublish: null,
          publishers: [
            [configName: 'webio-ftp', transfers: [[asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'eoroid2144.hostingasp.pl/wwwroot/test', remoteDirectorySDF: false, removePrefix: 'dist/Eoroid2144/', sourceFiles: 'dist/Eoroid2144/*,dist/Eoroid2144/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]]
        }
    }
  }

  post {
    always {
      echo '============================ post build actions =============================='
      mail from: '',
        to: "zielonyeufor@gmail.com",
        cc: '',
        bcc: '',
        replyTo: '',
        subject: "From Jenkins -> ${JOB_NAME} #${BUILD_NUMBER} ${currentBuild.currentResult}",
        body: "<b>Project: ${env.JOB_NAME}</b><br> Build Number: #${env.BUILD_NUMBER} <br> Build Result: #${currentBuild.currentResult} <br>URL build: ${env.BUILD_URL}",
        charset: 'UTF-8',
        mimeType: 'text/html';

      discordSend title: "**${JOB_NAME} #${BUILD_NUMBER} ${currentBuild.currentResult}**",
          description: "**`Result: ${currentBuild.currentResult}`**",
          footer: "time: ${currentBuild.durationString}",
          result: "${currentBuild.currentResult}",
          thumbnail: "https://www.treehugger.com/thmb/eFvSYtTgdWT4SucO5nd1oBJBcyo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__01__grumpy_cat-c653c9bb27604d6e92c4ca8df4d9e3bb.jpg",
          link: "${BUILD_URL}",
          webhookURL: "https://discord.com/api/webhooks/781998432919355425/8XK5CZDTXgqrtgZSk8eur77Z1ClCppNQYySdPA4wPTo9STiEhSZa9c-rVNTvnKVO78JP"
    }
  }
}
