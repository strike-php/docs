# Route Handling
Strike can execute controller declared in two different ways.   
First one is as array, where the first index is the `FQCN` of the class and the 
second index is the name of a public method of that class.  
Second one is as string. In this case, the string contains only the `FQCN` of the class.
THe executed method will be the `__invoke` method.

## Request and route parameters
The executed method on the controller will always receive the current `Request`
as first argument and any potential route parameters as following arguments. 
The order will be the same as they are declared in the path.

Here an example:
```php
// Route declared like this
$routes->get('/products/{productId}/images/{imageId}/{width}/{length}', ProductImageController::class)
    ->setName('product.images.show')
// Will call the  `__invoke()` ProductImageController
class ProductImageController{
 public function __invoke(Request $request, string $productId, string $imageId, string $width, string $length)
 {
     //...
 }
}
```
