var mainQuestList = [genCR, test, test2, test3, test4, test5, test6, test7, test8];	
var GodObj = {};
var counter = 9;
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
function test(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 2";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
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
function test2(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 3";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};


/////Вопрос 4///////
function test3(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 4";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};

/////Вопрос 5///////
function test4(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 5";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};


/////Вопрос 6///////
function test5(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 6";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};

/////Вопрос 7///////
function test6(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 7";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};


/////Вопрос 8///////
function test7(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 7";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};

/////Вопрос 9///////
function test8(){
	var cr = document.getElementById('question');
	var answer = 10;
	var users_answer = document.getElementById('users_answer');
	cr.innerHTML = "вопрос 9";
	GodObj.ans = answer;
	users_answer.innerHTML = "Ответик = "
	console.log("ответ: " + answer);


};






/////Выбор вопроса//////

function genRandQuest(){			
	document.getElementById('win').innerHTML = "Жду ответик"
	var randtotal = Math.floor(Math.random() * mainQuestList.length);
	var callback = mainQuestList[randtotal];
	var index = mainQuestList.indexOf(randtotal);
	callback();
	clear();
	showCount();
	mainQuestList.splice(index, 1);
}

function removeFromList(){
	var mainQuestList = [genCR, test];

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
			console.log ("Количество вопросов: " + counter);

			}
	 	}
	 checkWin();
	 checkLose();
	 showGoal();
	 moveToNext()



	}


//////Переход к следующему вопросу/////////////

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


window.onload = genRandQuest;


