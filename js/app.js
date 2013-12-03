$(function(){
	var idx = 0;


	var makeImgPath = function(i){
		return "<img src='img/face" + i + ".jpeg'></img>";
	};

	var renderImg = function(i){
		var imgPath = makeImgPath(i);
		$(".container-img").html(imgPath);
	}



	setInterval(function(){
		renderImg(idx);
		idx += 1;
		if (idx === 2) idx = 0;
	},1000);



	var setup = function(){
		renderImg(0);
		idx += 1;
	};

	setup();
});
