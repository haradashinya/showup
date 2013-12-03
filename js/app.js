$(function(){
	//画像の枚数
	var IMG_SIZE = 3;

	var idx = 0;


	var makeImgPath = function(i){
		return "<img src='img/face" + i + ".jpeg'></img>";
	};

	var renderImg = function(i){
		var imgPath = makeImgPath(i);
		$(".container-img").html(imgPath);
		$(".container-img").fadeIn("slow");
	}



	setInterval(function(){
		idx += 1;
		if (idx > (IMG_SIZE)) idx = 0;

		renderImg(idx);
		$(".container-img").fadeOut("slow");
	},2000);
});
