### AWS checks

Provides a number of functions to check properties and state of your AWS resources.

You can either `import` these functions in your own code, or use the built-in `jest` tests to run the tests on your AWS account.

See the [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) docs for more information on the methods used to access AWS resources.

#### Configuration

You can modify certain configuration values (profile, region, etc.) in the `src/js/config.js` object. Please refer to the [AWS Docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/configuring-the-jssdk.html) for the format of this object.

#### Usage

```shell
git clone git@github.com:dylburger/aws-checks.git
npm i
```

From here, you can modify the tests in `src/js/tests` and run

```shell
jest
```

to execute all tests.
