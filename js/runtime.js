var now=new Date;function createtime(){
	now.setTime(now.getTime()+1e3);
	var e=new Date("11/19/2022 00:00:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),n=new Date("11/19/2022 00:00:00"),
	s=(now-n)/1e3/60/60/24,o=Math.floor(s),r=(now-n)/1e3/60/60-24*o,i=Math.floor(r);1==String(i).length&&(i="0"+i);var l=(now-n)/1e3/60-1440*o-60*i,b=Math.floor(l);
	1==String(b).length&&(b="0"+b);var d=(now-n)/1e3-86400*o-3600*i-60*b,c=Math.round(d);1==String(c).length&&(c="0"+c);let g="";g=i<18&&i>=9?
	`<img class='boardsign' src='https://img.shields.io/badge/CloudH2O-%E4%B8%8A%E7%8F%AD%E6%91%B8%E9%B1%BC%E4%B8%AD-6adea8?style=social&logo=cakephp' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> 
	<br> 
	<b>本站居然运行了 ${o} 天</span>
	<span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </b></span> <i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i> <br> <b>旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
	</b> 
	<br> 
	<b>
	<font size=2px>再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨</font>
	</b> `:
	`<img class='boardsign' src='https://img.shields.io/badge/CloudH2O-打烊休息啦-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'>
	<br>
	<b>本站居然运行了 ${o} 天</span><span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </b></span>
	<i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i>
	<br> <b>旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</b> <br> 
	<b><font size=2px>再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨</font></b> `,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=g)}setInterval((()=>{createtime()}),1e3);