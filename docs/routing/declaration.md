# Route Declaration

Strike uses the powerful and fast [`symfony/routing`](https://github.com/symfony/routing) component and provides a
convenient declaration layer based on the contents of the `etc/routes.php` file
of your application.

## Registering routes
Routes are registered via the [`Strike\Framework\Http\Routing\RouteRegistrar`](https://github.com/strike-php/framework/blob/main/src/Http/Routing/RouteRegistrar.php).
Inside of the `etc/routes.php` you have access to it via the variable `$routes`.

Strike provides a fluent interface for declaring routes, by returning the new 
created route via one of the HTTP verb methods `get`, `head` , `patch`, `put` and `post`.

Here are some examples for static routes
```php
// GET endpoint with an invokable controller
$routes->get('/', FrontPageController::class)->setName('frontPage')
// POST endpoint with controller with specified method and additional middleware
$routes->post('/products', [ProductsController::class, 'create'])
    ->setName('product.create')
```

## Route Parameters
It is a common need to define variable parts in URL's for example to address unique 
resources. A simple example would be to have an API endpoint to fetch product details
via `/products/2dbf4527-aea9-43ba-b440-31e02d7de7e2` or `/products/wooden-sunglasses`.

Here are some examples for routes with parameters
```php
// GET endpoint with a route parameter called id
$routes->get('/products/{id}', [ProductsController::class, 'show'])->setName('product.details')
// PATCH endpoint with a route parameter called id
$routes->patch('/products/{id}', [ProductsController::class, 'update'])->setName('product.update')
```

Route parameters are passed to the controller as variables with the same name as 
the parameter. In the above example we have a route parameter called `id` which 
will be passed as the second argument of the controller method. More info about 
route handling can be found in the next [chapter](/routing/handling).
