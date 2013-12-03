$(function(){


	var makeImgPath = function(i){
		return "<img src='img/face" + i + ".jpeg'></img>";
	};

	var renderImg = function(){
		var imgPath = makeImgPath(0);
		$(".container-img").html(imgPath);
	}






	var setup = function(){
		renderImg();
	};

	setup();
});
