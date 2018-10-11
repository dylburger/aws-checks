import AWS from "aws-sdk";

const credentials = new AWS.SharedIniFileCredentials({ profile: "personal" });
AWS.config.credentials = credentials;

const route53 = new AWS.Route53();

export function doesHostedZoneExist(domain) {
  const params = {
    DNSName: domain
  };

  return new Promise((resolve, reject) => {
    route53
      .listHostedZonesByName(params)
      .promise()
      .then((data, err) => {
        if (err) {
          reject(err);
        }

        resolve(data.HostedZones[0].Name === domain);
      });
  });
}
