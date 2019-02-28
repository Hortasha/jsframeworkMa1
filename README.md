### This project is a jquary picture slider

## Script
code.js within the js folder need to be importent into your html document

## Dependencies
jquary must be present in the project.

## How to use
You should end up with something like shown below.

```HTML
<body>
    <div id="slider">
        <img src="img1.jpg" alt="A">
        <img src="img2.jpg" alt="B">
        <img src="img3.jpg" alt="C">
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/code.js"></script>
</body>
```

You only require <div/> with the id of #slider that contain all images.
The code.js file with make all images 100% width and create a new div with navigation to rotate through the images.
