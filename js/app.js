$(function(){
	//画像の枚数
	var IMG_SIZE = 3;

  //画像の切り替わる秒数
  var INTERVAL = 5000;

	var idx = 0;


	var makeImgPath = function(i){
		return "<img src='img/face" + i + ".jpeg'></img>";
	};

	var renderImg = function(i){
		var imgPath = makeImgPath(i);
		$(".container-img").html(imgPath).hide().show("slow");
	}



	setInterval(function(){
		idx += 1;
		if (idx >= (IMG_SIZE)) idx = 0;
    $(".container-img").hide();
    $(".container-img").fadeIn("slow");
    renderImg(idx);
	},INTERVAL);

  var start = function(){
    renderImg(idx);
  }

  start();

});
