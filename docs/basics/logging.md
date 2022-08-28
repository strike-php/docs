# Logging

To help you to monitor your applications flow, Strike provides a lean but powerful
`PSR` compliant logging implementation based on the
famous [`monolog`](https://github.com/Seldaek/monolog) library.  
## Configuration
Logging will be configured via the `etc/config/logging.php`. You can add multiple 
channel configuration under the `channels` key in the config.

## Usage
To use it, simply inject the `\\Psr\\LoggerInterface` into one of your classes to 
get an implementation of the interface based on your configured default channel.

To get a specific channel instead of the default configuration, you can inject the 
`Strike\\Framework\\Logging\\LoggerFactoryInterface` which can create the desired
via its `createLogger` method.
