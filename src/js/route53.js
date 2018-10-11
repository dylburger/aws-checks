import config from "./config";
import AWS from "aws-sdk";

const credentials = new AWS.SharedIniFileCredentials(config);
AWS.config.credentials = credentials;

const route53 = new AWS.Route53();

export const doesHostedZoneExist = async domain => {
  const params = {
    DNSName: domain
  };

  try {
    const data = await route53.listHostedZonesByName(params).promise();
    return data.HostedZones[0].Name === domain;
  } catch (err) {
    return false;
  }
};
