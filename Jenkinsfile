pipeline {
  agent any
  stages {

    // should i put this before linting?
    // stage('Npm Install') {
    //   steps { sh 'npm install' }
    // }

    // stage('Static code analysis') {
    //   parallel {
    //     stage('linting') {
    //         steps {
    //           echo 'linting'
    //           sh 'npm run-script lint'
    //         }
    //     }
    //     stage('Unit tests') {
    //         steps {
    //           echo 'testing'
    //           // sh 'npm run-script test'
    //         }
    //     }
    //   }
    // }

    // stage('Npm Build') {
    //   steps { sh 'npm run-script build --prod' }
    // }

    stage('Upload') {
      steps {
        ftpPublisher  alwaysPublishFromMaster: true,
                      continueOnError: false,
                      failOnError: false,
                      masterNodeName: '',
                      paramPublish: null,
                      publishers: [
                        [configName: 'YOUR_CONFIG_HERE',
                        transfers: [
                          [asciiMode: false,
                            cleanRemote: false,
                            excludes: '',
                            flatten: false,
                            makeEmptyDirs: false,
                            noDefaultExcludes: false,
                            patternSeparator: '[, ]+',
                            remoteDirectory: "/eoroid2144.hostingasp.pl/wwwroot/ftp",
                            remoteDirectorySDF: false,
                            removePrefix: '',
                            sourceFiles: '**.exe, **.txt'
                          ]
                        ],
                      usePromotionTimestamp: false,
                      useWorkspaceInPromotion: false,
                      verbose: true]
        ]
      }
    }

  }
}
