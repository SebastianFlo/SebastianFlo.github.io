pipeline {
    node {
    def app

    stage("Clone") {
        git 'https://github.com/SebastianFlo/SebastianFlo.github.io.git'
    }

    stage("Build") {
        dir("./client") {
            // app = docker.build("sebastianflo/sebastian.party")
            sh "docker build -t sebastianflo/sebastian.party ."
        }
    }

    stage("Push") {
    //     docker.withRegistry("https://registry.hub.docker.com", "docker-hub-credentials") {
    //       app.push("${env.BUILD_ID}")
    //       app.push("latest")
    //     }
        echo 'Pushing...'
    }

    stage("Deploy") {
        // sh "ssh root@my.server.ip \"docker stop ast_0 && \
        //     docker rm ast_0 && \
        //     docker pull caroso1222/ts-ast-viewer:latest && \
        sh "docker stop seb_party0 && \
            docker rm seb_party0 && \
            docker run -d --name=seb_party0 -p 80:80 sebastianflo/sebastian.party"
    }
    }

}