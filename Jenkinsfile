node {
  stage("Clone") {
    git 'https://github.com/SebastianFlo/SebastianFlo.github.io.git'
  }

  stage("Build") {
    dir("./client") {
        try {
            sh "docker build --no-cache -t sebastianflo/sebastian.party ."
            // docker.build('sebastianflo/sebastian.party')
        } catch (e) {
            // if any exception occurs, mark the build as failed
            echo ('Build Failure')
            throw e
        }

    }

  }

  stage("Deploy") {
    try {
        sh "docker stop seb_party0"
        sh "docker rm seb_party0"
    } catch (e) {
        echo 'Creating container for the first time'
    }

    sh "docker run -d -v /var/www/ssl:/etc/ssl/certs:ro --name=seb_party0 -p 443:443 sebastianflo/sebastian.party:latest"

  }
}
