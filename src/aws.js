import config from "config";
import AWS from "aws-sdk";

const credentials = new AWS.SharedIniFileCredentials(config);
AWS.config.credentials = credentials;

export default AWS;
