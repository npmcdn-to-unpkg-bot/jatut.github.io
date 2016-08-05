var video =  document.getElementById(element);
video.addEventListener('click',function(){
	  video.play();
},false);

var BV = new $.BigVideo  ();
   BV.init  ();
   if  (Modernizr.touch) {
   BV.show  ('video-poster.jpg'); } else {
   BV.show  ('video/Assistent.mp4',{ambient:true});
}
