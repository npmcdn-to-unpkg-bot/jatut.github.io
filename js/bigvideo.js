//		 <script>
//			 $(function() {
//			 var BV = new $.BigVideo  ();
//           BV.init  ();
//           if  (Modernizr.touch) {
//           BV.show  ('image/system_white.png'); } else {
//           BV.show  ('video/Assistent.mp4',{ambient:true});
//           }
//			 })
//		 </script>

//$(function() {
//    var BV = new $.BigVideo();
//    BV.init();
//    BV.show('video/Assistent.mp4');
//});

//$(function() {
//    var BV = new $.BigVideo({useFlashForFirefox:false});
//	var BV = new $.BigVideo();
//	BV.init();
//    BV.show([
//        { type: "video/mp4",  src: "video/Assistent.mp4",{ambient:true} },
//        { type: "video/webm", src: "video/Assistent.webm",{ambient:true} },
//    ]);
//});

$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('video/Assistent.mp4',{ambient:true});
});
