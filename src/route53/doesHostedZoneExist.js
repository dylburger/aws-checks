import AWS from "./aws";

const route53 = new AWS.Route53();

export const doesHostedZoneExist = async domain => {
  const params = {
    DNSName: domain
  };

  try {
    const data = await route53.listHostedZonesByName(params).promise();
    if (!data.hasOwnProperty("HostedZones") || data.HostedZones.length === 0) {
      return false;
    }
    return data.HostedZones[0].Name === domain;
  } catch (err) {
    return false;
  }
};
