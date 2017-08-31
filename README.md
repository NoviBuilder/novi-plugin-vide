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

Add basic Vide HTML Layout:

```html
<section class="section novi-vide" data-vide-bg="video/path-to-video">
</section>
```

Example of Vide markup using [Bootstrap](http://getbootstrap.com/):
```html
<section class="section novi-vide" data-vide-bg="video/example">
    <div class="container well well-lg">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum modi possimus quidem quos reprehenderit sapiente tenetur vel. Accusantium dolorum ea eveniet fugit hic placeat praesentium, quidem similique sit veniam!</p>
        <p>
            <a class="btn btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
</section>
```