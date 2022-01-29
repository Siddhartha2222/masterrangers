// Create canvas variable
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   // to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '?') // add appropriate keycode
   {
       // upload red ranger
   }
   if(keyPressed == '71')
   {
       block_x = 200;
       // upload green ranger
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       // upload yellow ranger
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       // upload pink ranger
   }
   if(keyPressed == '66')
   {
       block_x = 700;
   // upload blue ranger
   var canvas= newfabric.Canvas('myCanvas');
   function new_image(gat_image)
   {
fabric.Image.fromURL(get_image, function(img)  {
    black_image_object = img;

    block_image_object.scaleTowidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:block_y,
        left:block_x});
        canvas.add(block_image_object);
    });


}


   }
   }
   if(keypressed == '82')
   {

    new_image('featureranger.jpg');
    console.log("r");
   }

   if(keypressed == '71')
   {

    new_image('yellow.jpg');
    console.log("g");
   }
   if(keypressed == '89')
   {

    new_image('green.jfif');
    console.log("y");
   }
   if(keypressed == '80')
   {

    new_image('black.jfif');
    console.log("p");
   }

   if(keypressed == '66')
   {

    new_image('blue.png');
    console.log("b");
   }