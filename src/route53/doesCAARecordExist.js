import route53 from "src/route53/route53";

export default async domain => {
  const params = {
    DNSName: domain
  };

  try {
    const hostedZones = await route53.listHostedZonesByName(params).promise();
    if (
      !hostedZones.hasOwnProperty("HostedZones") ||
      hostedZones.HostedZones.length === 0
    ) {
      return false;
    }

    const targetHostedZone = hostedZones.HostedZones.filter(
      zone => zone.Name === domain
    )[0];
    const HostedZoneId = targetHostedZone.Id;

    try {
      const records = await route53
        .listResourceRecordSets({
          HostedZoneId
        })
        .promise();

      return (
        records.ResourceRecordSets.filter(record => record.Type === "CAA")
          .length > 0
      );
    } catch (err) {
      return false;
    }
  } catch (err) {
    return false;
  }
};
