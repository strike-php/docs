# Installation

## Prerequisites
Strike is a new framework which uses the latest PHP features and requires therefore  `PHP 8.1`.  
For dependency management it uses the de facto standard [composer](https://getcomposer.org).

## Local installation
If you meet both of the prerequisites, you are ready to create your first Strike project
via composers `create-project` command:
```bash
composer create-project strike/strike my-new-project
```
After composer has finished creating the project, you can use the Strike CLI to
start PHP's built-in local development server and start develop your new Strike project.
```bash
cd my-new-project
php bin/strike serve
```
