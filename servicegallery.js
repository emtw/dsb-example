<script>
$(document).ready(function(){
	
	function randomPicture1() {
		var min=1;
		var max=4;
		var picture=Math.floor(Math.random()*(max-min+1))+min;
		return picture;
	};
	
	function randomPicture2() {
		var min=5;
		var max=8;
		var picture=Math.floor(Math.random()*(max-min+1))+min;
		return picture;
	};
	
	function randomPicture3() {
		var min=9;
		var max=12;
		var picture=Math.floor(Math.random()*(max-min+1))+min;
		return picture;
	};

	function bannerDisplaya(){
		$("#banner-a").fadeOut(2000,function(){
			var img = new Image()
			var imageSrc = "images/slideshow/"+randomPicture1()+".jpg";
			$(img).load(function(){
				$("#banner-a").html('').append($(this)).fadeIn(1000);
			}).attr('src', imageSrc);
		})
	};
	
	bannerDisplaya();
	window.setInterval(bannerDisplaya, 6000);
	
	function bannerDisplayb(){
		$("#banner-b").fadeOut(2000,function(){
			var img = new Image()
			var imageSrc = "images/slideshow/"+randomPicture2()+".jpg";
			$(img).load(function(){
				$("#banner-b").html('').append($(this)).fadeIn(1000);
			}).attr('src', imageSrc);
		})
	}
	
	bannerDisplayb();
	window.setInterval(bannerDisplayb, 6000);
	
	function bannerDisplayc(){
		$("#banner-c").fadeOut(2000,function(){
			var img = new Image()
			var imageSrc = "images/slideshow/"+randomPicture3()+".jpg";
			$(img).load(function(){
				$("#banner-c").html('').append($(this)).fadeIn(1000);
			}).attr('src', imageSrc);
		})
	}
	
	bannerDisplayc();
	window.setInterval(bannerDisplayc, 6000);
})
	

</script>