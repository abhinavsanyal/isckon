var configInfo=require('./config');

module.exports = {
    getConnectionUrl: () => {
        return `mongodb://${configInfo.user}:${configInfo.pass}@ds137089.mlab.com:37089/iskcon`;

    }
}

// mongodb://<dbuser>:<dbpassword>
