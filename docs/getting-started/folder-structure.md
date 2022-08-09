# Folder structure

Strike aims for an easy to remember generic folder structure. It is recognisable
by anyone who has worked with a unix like operating system. 
Underneath you will find the complete folder structure, followed by a description
of each of them.

```
strike/
├── app
├── bin/
│   └── strike
├── etc/
│   ├── config
│   ├── bootstrap.php
│   └── routes.php
├── public/
│   └── index.php
├── tests
└── var/
    ├── cache
    └── log
```

## The `app` folder
The `app` folder is, for your convenience, preregistered in the `composer.json` as 
the PSR-4 namespace`App\ `. You are free to use it. If you would like to have a
`src` folder instead or in addition, you have to edit the `autoload` section in
your `composer.json`:
```json
    //...
    "autoload": {
        "psr-4": {
            "App\\": "app/"
            "MyProject\\": "src/"
        }
    },
    //...
```

## The `bin` folder
The `bin` folder aims for holding all executables, that you deliver with your
application. Strike delivers the Strike CLI in this folder. More information about
the Strike CLI can be found [here](/cli/strike-cli).

## The `etc` folder
The `etc` folder holds, like in an unix operating system, configuration files.
In the sub folder `etc/config` are the configuration files which are read by Strike's
config component.  
Strike delivers two more files in the folder. The `bootstrap.php` file, which
is responsible for booting the application and the `routes.php` file which holds,
like the name says, the configured routes of your application.

## The `public` folder
The `public` folder is your document root. It is the folder on which you need to
point your webserver (i.e. nginx, apache, etc.). It contains the `index.php`.
Any static assets like CSS, Javascript or images should be in this folder to be
able to serve them.

## The `tests` folder
The `tests` folder is, for your convenience, preregistered in the `composer.json` as
the PSR-4 namespace`Tests\ `. More information about testing can be found [here](/testing/phpunit)

## The `var` folder
The `var` folder contains the cache folder contains the application logs and the 
framework cache. For example you can find the cached config in `var/cache/cached-config.php`
and the cached routes in `var/cache/cached-routes.php`.

## Change the paths of certain parts of the application
Strike goes an opinionated way with configuring the paths of certain paths of the 
application. If these paths do not favor you, you are not let alone. 
It is possible to configure the needed paths via the first `Strike\Framework\Core\Application` constructor
argument, which accepts either a string, or an instance of the [`Strike\Framework\Core\ApplicationPathsInterface`](https://github.com/strike-php/framework/blob/main/src/Core/ApplicationPathsInterface.php).
