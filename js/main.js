var mainQuestList = [genCR, genCAC, genARPPU, genLTVvsCAC, genROI, genARPC, genWAU, genGrossProf, genMarketfit, genCogorts];	
var GodObj = {};
var counter = 0;
var goal = 0;


//////////Вывод счетчика//////////

function showCount(){
	var coun = document.getElementById('counter');
	coun.innerHTML = "Вопрос " + counter + "/10";
};

function showGoal(){
	var coun = document.getElementById('correct');
	coun.innerHTML = "Правильных ответов: " + goal;

};



/////Вопрос 2///////
function genCAC(){
	var cac = document.getElementById('question');
	var users_answer = document.getElementById('users_answer');
	// var max = 400000;
	// var min = 250000;
	var costs = Math.floor(Math.random() * (400000 - 250000 + 1) + 250000);
	var buyers = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000);
	var answer = Math.floor((costs/buyers)/2);
	cac.innerHTML = "В июле и в августе потратили <strong>" + costs + "</strong> рублей на контекстную рекламу и привлекли <strong>" + buyers + "</strong> покупателей. Какой среднемесячный CAC?" ;
	GodObj.ans = answer;
	users_answer.innerHTML = "CAC = "
	console.log("ответ: " + answer);
	


};


/////Вопрос 1///////
function genCR(){
	var cr = document.getElementById('question');
	var users_answer = document.getElementById('users_answer');
	let users = Math.floor(Math.random() * 10000);
	let orders = Math.floor(Math.random() * 2000);
	var answer = Math.floor((orders/users) * 100);
	cr.innerHTML = "У вас <strong>" + users + "</strong>" + " уникальных пользователей" + " и <strong>" + orders + "</strong>" + " покупателей. " + " Посчитайте конверсию.";
	users_answer.innerHTML = "CR = "
	console.log("ответ: " + answer);
	GodObj.ans = answer;

};


/////Вопрос 3///////
function genARPPU(){
	var cr = document.getElementById('question');
	var users_answer = document.getElementById('users_answer');
	var revenue = Math.floor(Math.random() * (200000 - 180000 + 1) + 180000);
	var orders = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
	var inner_costs = Math.floor(Math.random() * (300 - 99 + 1) + 99);
	var answer = Math.floor((revenue/orders)-inner_costs);
	cr.innerHTML = "Выручка за период составила <strong>" + revenue + "</strong> при <strong>" + orders +"</strong> заказах, издержки на один заказ составляют <strong>" + inner_costs +"</strong> руб. Посчитайте средний доход на платящего пользователя.";
	GodObj.ans = answer;
	users_answer.innerHTML = "ARPPU = "
	console.log("ответ: " + answer);


};


/////Вопрос 4///////
function genLTVvsCAC(){
	var question = document.getElementById('question');
	var purch = Math.floor(Math.random() * (10 - 1 + 1) + 1);
	var AvP = Math.floor(Math.random() * (10000 - 500 + 1) + 500);
	var LTV = purch * AvP;
	var CAC = Math.floor(Math.random() * (500000 - 100 + 1) + 100);
	var answer = function(){
		if (LTV >= CAC){
			i = LTV/CAC;
			answer = parseFloat(i.toFixed(2)) + ":1";
			return answer;
		}else{
			i = CAC/LTV;
			answer = "1:" + parseFloat(i.toFixed(2));
			return answer;
		}
	}
	var users_answer = document.getElementById('users_answer');
	question.innerHTML = "Каждый пользовател совершает <strong>" + purch + "</strong> покупок за период, при среднем чеке в<strong> " + AvP + "</strong>. Стоимость привлечения одного пользователя — <strong>" + CAC +"</strong>";
	GodObj.ans = answer();
	users_answer.innerHTML = "LTV к CAC = "
	console.log("ответ: " + answer + " LTV: " + LTV + " CAC: " + CAC);


};

/////Вопрос 5///////
function genROI(){
	var question = document.getElementById('question');
	var cost = Math.floor(Math.random() * (8000 - 100 + 1) + 100);
	var buys = Math.floor(Math.random() * (20 - 10 + 1) + 10);
	var AvP = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
	var answer = Math.floor(((buys*AvP)/cost)*100) + "%";
	var users_answer = document.getElementById('users_answer');
	question.innerHTML = "Вы потратили на рекламную компанию букетов <strong>" + cost + "</strong> руб. Было продано <strong>" + buys + "</strong> букетов, по <strong>" + AvP + "</strong> руб. Какая окупаемость вложений?" ;
	GodObj.ans = answer;
	users_answer.innerHTML = "ROI (в процентах) = ";
	console.log("ответ: " + answer);


};


/////Вопрос 6 - Средний доход на платящего пользователя///////
function genARPC(){
	var question = document.getElementById('question');
	var users_answer = document.getElementById('users_answer');
	var text = document.getElementById('question')
	var buys = Math.floor(Math.random() * (5 - 1 + 1) + 1);
	var AvP = Math.floor(Math.random() * (900 - 800 + 1) + 800);
	var cogs = Math.floor(Math.random() * (1000 - 900 + 1) + 900);
	var ARPC = (AvP-cogs) * buys;
	var new_ARPC = Math.floor(Math.random() * (1800 - 1200 + 1) + 1200);
	var answer = Math.floor(((new_ARPC/buys) + cogs) - AvP);
	GodObj.ans = answer;
	question.innerHTML = "Cредний чек <strong>" + AvP + "</strong> руб. при <strong>" + buys + "</strong> покупках на пользователя потери (<strong>" + ARPC + "</strong> руб.) Зная себестоимость 1-й продажи — <strong>" + cogs + "</strong> руб. на сколько увеличить средний чек, чтобы APRC стал <strong>" + new_ARPC + "</strong>";
	users_answer.innerHTML = "AvP = "
	console.log("ответ: " + answer);


};

/////Вопрос 7///////
function genWAU(){
	var question = document.getElementById('question');
	var WAU = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);
	var perc = Math.floor(Math.random() * (100 - 1 + 1) + 1);
	var i = WAU - ((WAU * perc)/100);
	var answer = parseFloat(i.toFixed(2));
	var users_answer = document.getElementById('users_answer');
	question.innerHTML = "У Saas проекта WAU<strong> " + WAU +  " </strong>человек.<strong> "+ perc + "%</strong> из них заходили больше одного раза. Какой DAU у проекта, при допущении, что уникальные пользователи равномерно распределены в течение недели?";
	GodObj.ans = answer;
	users_answer.innerHTML = "DAU (X.XX) = "
	console.log("ответ: " + answer);
};


/////Вопрос 8///////
function genGrossProf(){
	var question = document.getElementById('question');
	var UA = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
	var ARPU = Math.floor(Math.random() * (100 - 1 + 1) + 1);
	var CPA = Math.floor(Math.random() * (20 - 10 + 1) + 10);
	var answer = UA * (ARPU - CPA);
	var users_answer = document.getElementById('users_answer');
    question.innerHTML = "Количество привлеченных пользователей <strong>" + UA + "</strong>. При стоимости привлечения одного пользователя в <strong>" +CPA+ "</strong> руб. и ARPU = <strong>" +ARPU+"</strong> руб. ,посчитайте прибыль за вычетом фикс. расходов.";
	GodObj.ans = answer;
	users_answer.innerHTML = "Gross Profit = "
	console.log("ответ: " + answer);


};

/////Вопрос 9///////
function genMarketfit(user_score){
	var question = document.getElementById('question');
	var input = document.getElementsByClassName("users_input")[0];
	var drop = document.getElementById('usersDrop');
	var user_score = Math.floor(Math.random() * (100 - 1 + 1) + 1);
	var users_answer = document.getElementById('users_answer');
	input.style.visibility ="hidden";
	drop.style.visibility ="visible";
	var answer = function(){
			if(user_score <= 40){
				var i = "PMF не достигнут";
				return i;
			}
			else if(user_score >= 40 && user_score <= 100){
				var i = "PMF достигнут";
				return i;
			}
			else{
				var i = "Неизвестно";
				return i;
			}
	}		

	drop.onchange = function(){
		var value = drop.options[drop.selectedIndex].value;
		input.value = value;
		return value;
	}

	question.innerHTML = "<strong>" + user_score + "%</strong> пользователей сказали, что буду очень расстроены, если ваш продукт перестанет существовать. Можно ли сказать, что критерий Product Market Fit достигнут?";
	GodObj.ans = answer();
	users_answer.innerHTML = "Ответ = "
	console.log("ответ: " + answer());

}





/////Когорты///////

function genCogorts(){
	var question = document.getElementById('question');
	var users_answer = document.getElementById('users_answer');
	var cog_1 = Math.floor(Math.random() * (30 - 1 + 1) + 1);
	var cog_2 = Math.floor(Math.random() * (30 - 1 + 1) + 1);
	var cog_1_growth = Math.floor(Math.random() * (5 - 1 + 1) + 1);
	var cog_2_growth = Math.floor(Math.random() * (5 - 1 + 1) + 1);
	var i = cog_1 + (cog_1_growth * 6);
	var y = cog_2 + (cog_2_growth * 5);
	var answer = function(){
		if(i > y){
			var answer = i + "%";
			return answer;
		}else{
			var answer = y + "%";
			return answer;
 		}
	}
	question.innerHTML = "По результатам РК пользователей разделили на две когорты. 1 — видели рекламу в понедельник, 2 — видели рекламу во вторник. Какой процент установок к концу недели будет у когорты победителя, если в первый день показа <strong>" + cog_1 + "</strong>% из первой когорты установили приложение и <strong>" + cog_2 + "</strong>% из второй. Первая когорта приростает на <strong>" + cog_1_growth + "</strong>% в день, вторая на <strong>" + cog_2_growth +  "</strong>%";
	GodObj.ans = answer();
	users_answer.innerHTML = "Ответ в % = "
	console.log("ответ: " + answer());


};







/////Выбор вопроса//////


function moveToNext(){
	var text = document.getElementsByClassName("arrow-wrap-blocked");
	var arrow = document.getElementsByClassName("right-arrow-blocked");
	for (i of text){
		i.className = "arrow-wrap";
	}
	for (z of arrow){
		z.className = "right-arrow";
	}

}


function genRandQuest(){
		var animation = document.getElementsByClassName("question-wrap")[0];
		animation.classList.toggle('fade');
		setTimeout(function animdelay(){animation.classList.remove('fade')}, 1000);
		document.getElementById('win').innerHTML = "Жду ответик"
		var randtotal = Math.floor(Math.random() * mainQuestList.length);
		var callback = mainQuestList[randtotal];
		var index = mainQuestList.indexOf(callback);
		console.log(index);
		mainQuestList.splice(index, 1);	
		callback();
		clear();
		showCount();
	
}




/////Проверка ответа//////



 function checkAnswer(){
				var myAnswer = GodObj.ans;
				var user_answer = document.getElementById('answer');
				var win = document.getElementById('win');
				var thumpUp = document.getElementsByClassName("img-positive");
				var thumpDown = document.getElementsByClassName("img-negative");
				if (user_answer.value == myAnswer){
					win.innerHTML = "Так держать!";
					goal ++;
					counter ++;
					console.log ("Правильных ответов: " + goal);
					console.log ("Количество вопросов: " + counter);
					for (i of thumpUp){
						i.style.visibility = "visible";
					}
				}else{
					win.innerHTML = "неа :(";
					for (z of thumpDown){
						z.style.visibility = "visible";
						counter ++;

						}
				 	}
				 checkWin();
				 checkLose();
				 showGoal();
				 moveToNext()
 }






//////Победа/////////////

function checkWin(){
	if (goal === 10){
		var text = document.getElementById('question');
		var endgame = document.getElementsByClassName ("arrow-wrap-blocked");
		var endanswer = document.getElementsByClassName ("answer-conteiner");
		var endresult = document.getElementsByClassName ("result");
		var endarrow = document.getElementsByClassName ("right-arrow-blocked");
		var thumpUp = document.getElementsByClassName ("img-positive");
		var coun = document.getElementById('counter');
		text.innerHTML = ("Поздравляю, вы знаток unit-экономики");
		for (i of endgame) {
			i.style.visibility = "hidden";
		}

		for (z of endanswer){
			z. style.visibility = "hidden";
		}

		for (x of endresult){
			x.style.visibility = "hidden";
		}

		for (y of endarrow){
			y.style.visibility = "hidden"
		}

		for (z of thumpUp){
			z.style.visibility = "hidden";

		};
		coun.innerHTML = "Вопрос 10/10";

	}
}


function checkLose(){
	if (counter === 10){
		var text = document.getElementById('question');
		var endgame = document.getElementsByClassName("arrow-wrap-blocked");
		var endanswer = document.getElementsByClassName ("answer-conteiner");
		var endresult = document.getElementsByClassName ("result");
		text.innerHTML = ("Вы проиграли, почитайте немного статей");
		var coun = document.getElementById('counter');
		for (i of endgame) {
			i.style.visibility = "hidden";
		}

		for (z of endanswer){
			z. style.visibility = "hidden";
		}

		for (x of endresult){
			x.style.visibility = "hidden";
		}
		coun.innerHTML = "Вопрос 10/10";
	clear();

	}
}




/////Отчистка//////

function clear(){
	var thumpUp = document.getElementsByClassName("img-positive");
	var thumpDown = document.getElementsByClassName("img-negative");
	var user_answer = document.getElementById('answer');
	var text = document.getElementsByClassName("arrow-wrap");
	var arrow = document.getElementsByClassName("right-arrow");

	for (i of thumpUp){
			i.style.visibility = "hidden";
	};
	for (z of thumpDown){
			z.style.visibility = "hidden";

	};
	for (i of text){
		i.className = "arrow-wrap-blocked";
	};
	for (z of arrow){
		z.className = "right-arrow-blocked";
	};
	document.getElementById("answer").value = "";

}




document.getElementById("answer");
addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
})


//////Попробовать еще раз///////////


window.onload = genRandQuest




