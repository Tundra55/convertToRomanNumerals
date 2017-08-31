node {
    stage('Configure') {
        env.PATH = "${tool 'maven-3.3.9'}/bin:${env.PATH}"
        version = '1.0.' + env.BUILD_NUMBER
        currentBuild.displayName = version

        properties([
                buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '10')),
                [$class: 'GithubProjectProperty', displayName: '', projectUrlStr: 'https://github.com/Tundra55/convertToRomanNumerals'],
                pipelineTriggers([[$class: 'GitHubPushTrigger']])
            ])
    }

    stage('Checkout') {
        git 'https://github.com/Tundra55/convertToRomanNumerals'
    }
    
    stage('Test') {
        sh 'npm install'
        sh 'npm test'   
    }

    stage('Archive') {
        junit allowEmptyResults: true, testResults: '**/target/**/TEST*.xml'
    }

    stage('Mock Deploy') {
    sh "echo Mock Deploy Stage"
    }
}
