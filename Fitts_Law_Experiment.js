	var xCoOrd=[];			var yCoOrd=[];
	var timeArray=[];		var meanTime=[];
	var distance=[];	    var totalDistance=0;
	var distanceDia1=80;	var distanceDia2=120;	var distanceDia3=150;
	var width=25;			var width2=12;
	var targetCircleSize 	=	[[0.698132,"1"],[1.39626,"8"],[6.28319,"3"],
								[2.0944,"6"],[2.79253,"4"],[3.49066,"2"],
								[4.18879,"9"],[4.88692,"7"],[5.58505,"5"]];
	
	var index=0;
	var fillingColor;

		var size2=d3.select("body").append("input").attr("type","button").attr("name","Transform2").attr("value","Transform2")			
		.style("background","#ddddbb").style("width","100px").style("height","50px").style("margin-left","20px")		
		.on("click",function(d){
				index=0;
				page.selectAll("circle").remove();
				page.selectAll("circle")
				.data(targetCircleSize)
				.enter()
				.append("circle")
				.attr("cx",function(d,i) {return 300+distanceDia2*Math.cos(d[0]); })
				.attr("cy",function(d,i) {return 300+distanceDia2*Math.sin(d[0]); })
				.attr("r",width)
				.attr("id",function(d,i){ test=d[1]; return d[1];})
				.style("fill",function(d,i){ var fillingcolor; if(d[1]=="1") fillingcolor="black"; else fillingcolor="red"; return fillingcolor})
				.on("click", clickCircle);
			});

	var size3=d3.select("body").append("input").attr("type","button").attr("name","Transform3").attr("value","Transform3")			
	.style("background","#ddddbb").style("width","100px").style("height","50px").style("margin-left","20px")				
	.on("click",function(d){
				index=0;
				page.selectAll("circle").remove();
				page.selectAll("circle")
				.data(targetCircleSize)
				.enter()
				.append("circle")
				.attr("cx",function(d,i) {return 300+distanceDia3*Math.cos(d[0]); })
				.attr("cy",function(d,i) {return 300+distanceDia3*Math.sin(d[0]); })
				.attr("r",width)
				.attr("id",function(d,i){ test=d[1]; return d[1];})
				.style("fill",function(d,i){ var fillingcolor; if(d[1]=="1") fillingcolor="black"; else fillingcolor="red"; return fillingcolor})
				.on("click", clickCircle);
	
			});
			
	var size4=d3.select("body").append("input").attr("type","button").attr("name","Transform4").attr("value","Transform4")	
				.style("background","#ddddbb").style("width","100px").style("height","50px").style("margin-left","20px")		
				.on("click",function(d){
				index=0;
				page.selectAll("circle").remove();
				page.selectAll("circle")
				.data(targetCircleSize)
				.enter()
				.append("circle")
				.attr("cx",function(d,i) {return 300+distanceDia1*Math.cos(d[0]); })
				.attr("cy",function(d,i) {return 300+distanceDia1*Math.sin(d[0]); })
				.attr("r",width2)
				.attr("id",function(d,i){ test=d[1]; return d[1];})
				.style("fill",function(d,i){ var fillingcolor; if(d[1]=="1") fillingcolor="black"; else fillingcolor="red"; return fillingcolor})
				.on("click", clickCircle);
	
			});
			
	var size5=d3.select("body").append("input").attr("type","button").attr("name","Transform5").attr("value","Transform5")			
	.style("background","#ddddbb").style("width","100px").style("height","50px").style("margin-left","20px")			
	.on("click",function(d){
				index=0;
				page.selectAll("circle").remove();
				page.selectAll("circle").data(targetCircleSize).enter().append("circle")
				.attr("cx",function(d,i) {return 300+distanceDia2*Math.cos(d[0]); })
				.attr("cy",function(d,i) {return 300+distanceDia2*Math.sin(d[0]); })
				.attr("r",width2)
				.attr("id",function(d,i){ test=d[1]; return d[1];})
				.style("fill",function(d,i){ var fillingcolor; if(d[1]=="1") fillingcolor="black"; else fillingcolor="red"; return fillingcolor})
				.on("click", clickCircle);
	
			});
	var size6=d3.select("body").append("input").attr("type","button").attr("name","Transform6").attr("value","Transform6")			
	.style("background","#ddddbb").style("width","100px").style("height","50px").style("margin-left","20px")	
	.on("click",function(d){
				index=0;
				page.selectAll("circle").remove();
				page.selectAll("circle")
				.data(targetCircleSize)
				.enter()
				.append("circle")
				.attr("cx",function(d,i) {return 300+distanceDia3*Math.cos(d[0]); })
				.attr("cy",function(d,i) {return 300+distanceDia3*Math.sin(d[0]); })
				.attr("r",width2)
				.attr("id",function(d,i){ test=d[1]; return d[1];})
				.style("fill",function(d,i){ var fillingcolor; if(d[1]=="1") fillingcolor="black"; else fillingcolor="red"; return fillingcolor})
				.on("click", clickCircle);
	
			});
				
	var page=d3.select("body").append("div").append("svg");
		page.attr("width",550).attr("height",550).style("border", "4px solid white");

		var iValue = 9;
		var button=d3.select("body").append("div").append("input").attr("type","button").attr("name","Variables").attr("value","Variables")			
		.on("click",function(d)
			{
			for(var i=1;i<=iValue;i++)
			{ 
				var xSquare=(xCoOrd[i+1]-xCoOrd[i])*(xCoOrd[i+1]-xCoOrd[i]);
				var ySquare=(yCoOrd[i+1]-yCoOrd[i])*(yCoOrd[i+1]-yCoOrd[i]);
				distance[i]= Math.sqrt(xSquare+ySquare);
				meanTime[i]=timeArray[i+1]-timeArray[i];
			}
			for(var i=1;i<=iValue;i++)
			{ 
				totalDistance=+distance[i];
			}
			for(var i=1;i<=iValue;i++){
			var tab=document.getElementById("Distancedata");
			var row=tab.insertRow(0);
			var cell1=row.insertCell(0);
			var cell2=row.insertCell(1);
			var cell3=row.insertCell(2);
			var cell4=row.insertCell();
			
			if(i==iValue)
			{
				cell1.innerHTML="Click No."
				cell2.innerHTML="Distance Between the nodes";
				cell3.innerHTML="Time Taken(in ms)";
			}
			else{
				cell1.innerHTML=i;
				cell2.innerHTML=distance[i];
				cell3.innerHTML=meanTime[i];
			}					
			}			
			});

	
	var circles=page.selectAll("circle").data(targetCircleSize).enter().append("circle");
	
	var circleGroup=circles.attr("cx", function (d,i) { return 300+ distanceDia1* Math.cos(d[0]);})
			.attr("cy", function (d,i) { return 300+ distanceDia1* Math.sin(d[0]);})			
			.attr("r", width)
			.attr("id",function (d,i) {return d[1];})
			.attr("stroke","black")
			.style("fill", function(d,i){
				if(d[1]=="1")
					fillingColor="black";
				else
					fillingColor="red";
				return fillingColor});
			
	circleGroup.on("click", clickCircle);

	
	
	function handleMouseOver(d,i){	
		d3.select(this)
		.attr("stroke-width", 2)
		.attr("stroke", "black")
		.style("fill","black");
		 page.append("text").attr({})
	}
	
	function handleMouseOut(d,i) {  
            d3.select(this).style("fill", "red");
	}
	
	function clickCircle(){
		if(index<=iValue){
				var coordinates = [0,0];
				d3.select(this).style("fill","black");
				coordinates = d3.mouse(this);
				timeArray[index]=Date.now();
				var x = coordinates[0];
				var y = coordinates[1];	
				xCoOrd[index]=x;
				yCoOrd[index]=y;
			}
			index++;
			allcircles=page.selectAll("circle");
			allcircles.each(function(d,i)
			{
				var tempId=this.getAttribute("id");
				var indexId=index.toString();
				if(tempId==indexId)
					this.style.fill="black";
				else
					this.style.fill="red";
			}	
			)
	}