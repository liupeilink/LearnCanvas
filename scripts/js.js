var drawing = document.getElementById("drawing");

if(drawing.getContext){
	var context = drawing.getContext("2d");

	

	//绘制红色矩形
	context.fillStyle = "#f00";
	context.fillRect(10, 10, 50, 50);
	
	//描边蓝色
	context.strokeStyle = "#00f";
	context.lineWidth = 1;
	context.strokeRect(10, 10, 50, 50);

	//绘制半透明蓝色矩形
	context.fillStyle = "rgba(0,0,255,0.5)";
	context.fillRect(30, 30, 50, 50);

	//在两个矩形重叠的地方清除一个小矩形（该区域变透明）	
	context.clearRect(40, 40, 10, 10);


	//取得图像的数据URI
	var imgURI = drawing.toDataURL("image/png");

	//显示图像
	var image = document.createElement("img");
	image.src = imgURI;
	document.body.appendChild(image);

}
