pipeline {
  agent any
  stages {
    // stage('Npm Install') {
    //   steps {
    //     sh 'npm install'
    //   }
    // }

    // stage('Static code analysis') {
    //   parallel {
    //     stage('linting') {
    //       steps {
    //         echo 'linting'
    //         sh 'npm run-script lint'
    //       }
    //     }

    //     stage('Unit tests') {
    //       steps {
    //         echo 'testing'
    //       }
    //     }

    //   }
    // }

    // stage('Npm Build') {
    //   steps {
    //     sh 'npm run-script build --prod --aot'
    //   }
    // }

    stage('ftpupload') {
      steps {
        sh 'ls'
      }
    }

    // stage ('Deploy') {
    //   steps {
    //     //        ftpPublisher alwaysPublishFromMaster: true,
    //     //                continueOnError: false,
    //     //                 failOnError: false,
    //     //                masterNodeName: '',
    //     //                 paramPublish: null,
    //     //                 publishers: [[configName: 'External Host', transfers: [[asciiMode: false, cleanRemote: true, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'public', sourceFiles: 'public/*,public/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]
    //     ftpPublisher alwaysPublishFromMaster: false,
    //       continueOnError: false,
    //       failOnError: false,
    //       masterNodeName: '',
    //       paramPublish: null,
    //       publishers: [
    //         [configName: 'webio-ftp', transfers: [[asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'eoroid2144.hostingasp.pl/wwwroot/ftpgit6/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'src/']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]]
    //     }
    // }

  }
}
