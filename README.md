# novi-plugin-vide
Novi Builder Plugin for visual [Vide](https://github.com/VodkaBears/Vide) customization.

## How to Install
You should follow several simple steps to install this plugin:
* Copy the novi-plugin-vide.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change video source
* Change poster image

## Developer Settings
* querySelector — contains a css selector which defines the Vide main container.

## How to add Vide on your page
If your website doesn't contain Vide follow the instructions below to install it.

### Include Vide files to Website
Copy the "assets/vide.js" and "assets/vide.css" to website's JS and CSS folders respectively and include this files to your website.

### Add Vide HTML Layout
To use the plug-in correctly, you need to use the following page layout.
We added to the basic script API folowing attributes:
* data-vide-path - path to video file
* data-vide-poster - path to poster image

Add basic Vide HTML Layout:

```html
<section class="section novi-vide" 
         data-vide-path="video/path-to-video" 
         data-vide-poster="video/path-to-image">
</section>
```

Example of Vide markup using [Bootstrap](http://getbootstrap.com/):
```html
<section class="section novi-vide" data-vide-path="video/example.webm" data-vide-poster="video/example.jpg">
    <div class="container well well-lg">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum modi possimus quidem quos reprehenderit sapiente tenetur vel. Accusantium dolorum ea eveniet fugit hic placeat praesentium, quidem similique sit veniam!</p>
        <p>
            <a class="btn btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
</section>
```

### Initialize Vide
Initialize Vide in JS by adding following block code:

```js
$document.ready(function () {
    var vide = $('.novi-vide');
    if (vide.length){ 
        var i,$videItem, path, pathPoster, posterExt, ext, options = {}, availableExt = ['mp4', 'webm', 'ogv'];
        for (i = 0; i < vide.length; i++){
            $videItem = $(vide[i]);
            path = $videItem.attr('data-vide-path');
            pathPoster = $videItem.attr('data-vide-poster'); 
            posterExt = pathPoster.substring(pathPoster.lastIndexOf('.')+1, pathPoster.length).toLowerCase();
            ext = path.substring(path.lastIndexOf('.')+1, path.length).toLowerCase();
            if (availableExt.indexOf(ext) > -1 ){
                options[ext] = path;
                options.poster = pathPoster; 
                $videItem.vide(options, {posterType: posterExt});
            }
        }
    }
});