$(function(){


	var makeImgPath = function(i){
		return "<img src='img/face" + i + ".jpeg'></img>";
	};

	var renderImg = function(i){
		var imgPath = makeImgPath(i);
		$(".container-img").html(imgPath);
	}






	var setup = function(){
		renderImg(0);
	};

	setup();
});
