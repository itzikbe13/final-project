var mainEmail;
var carHTML;
var totalPrice;
var carPrice;
var distanceToUse;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var israel = new google.maps.LatLng(31.30, 34.45);
  var mapOptions = {
    zoom:7,
    center: israel
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
}
function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
	 
	
	
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
	  document.getElementById("distance").innerHTML = "Distance is " + response.routes[0].legs[0].distance.text;
	distanceToUse = response.routes[0].legs[0].distance.text;
	
	if (mainEmail) {
		totatlPrice = (parseFloat(distanceToUse)*100) + parseFloat(carPrice);
		var userDetails = JSON.parse(localStorage.getItem(mainEmail));
		userDetails['cardata'] = {distance: distanceToUse, price: parseFloat(parseFloat(distanceToUse)*100).toFixed(2), carprice: parseFloat(carPrice).toFixed(2), total:parseFloat(totatlPrice).toFixed(2) };
		localStorage.setItem(mainEmail, JSON.stringify(userDetails));
		
		

		if(typeof(Worker) !== "undefined") {
        
            //var workerMusic = new Worker("webworker.mp3");
            var workerMusic = new Audio("webworker.mp3");
			workerMusic.play();
			setTimeout(function() {
				workerMusic.pause();
				location.href = "#home";
				alert("you need to pay : " + totatlPrice);
			}, 3000);
        
		} else {
			alert("Sorry! No Web Worker support.");
		}
	 

	}
   }
   
 
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
	
$(document).ready(function(){
	//var email1;
	//localStorage.getItem(email1);
	//$(".entry").html("welcome " +email1);
	var date = new Date();
	//d.setDate(0);
	$(".date").html(''+date);
	$(".chooseCar").hide();
	$(".returnVehicle").hide();
	
$("button:nth(0)").click( function() {
 if (
	$(".user").val() == "" &&
	$(".id").val() == "" &&
	$(".email").val() == "" &&
	$(".birth").val() == "" &&
	$(".license").val() == "" )
	 {
		alert ("must fill all the required fields");
		}
else if (
	$(".phone").val() == "" &&
	$(".pele").val() == "" 
	) {
		alert("at least one phone must be filled");
	} else {
	alert("sign up complete..redirecting to the home page");
	
var user = $(".user").val();
var id = $(".id").val();
var email =	$(".email").val();
var phone =	$(".phone").val();
var pele = $(".pele").val();
var birth =	$(".birth").val();
var license = $(".license").val();
	
	
	
	
	var user1 = {
				'name': user,
				'id': id,
				'email': email,
				'phone': phone,
				'pele': pele,
				'birth': birth,
				'license': license,
				'cardata': {}
	};	
	
	
	
	var user = [];
	
	if (localStorage.getItem(email) == null) {
		localStorage.setItem(email, JSON.stringify(user1));
		} else { 
	alert("its already exists") ;
	};
	var entry = $(".email").val();
	mainEmail = entry;
	location.href = "#home";
	$(".entry").html("welcome " +entry);
	$(".chooseCar").show();
	$(".returnVehicle").show();
		}
		});
	
$(".loginbutton").click( function() {	
		var email1 = $(".login").val() ;
	if(localStorage.getItem(email1) == null) {
		alert ("user does not exist");
		} else {
		var entry = $(".login").val();
		mainEmail = entry;
		location.href = "#home";
		$(".entry").html("welcome " +entry);
		$(".chooseCar").show();
		$(".returnVehicle").show();
		}
	 });
	
	 
	 function Cars (car,carid,company,model,year,hand,auto,price,kmph) {
	 
		this.car = car;
		this.carid = carid;
		this.company = company;
		this.model = model;
		this.year = year;
		this.hand = hand;
		this.auto = auto;
		this.price = price;
		this.kmph = kmph;
		}
	
	
		var car1 = new Cars("car1.jpg","12345678","volvo","tsi","2008","no","yes","21000");
		var car2 = new Cars("car2.jpg","86825638","mazda","tsi","2009","no","yes","29000");
		var car3 = new Cars("car3.jpg","56712492","ferrari","tsi","2010","no","yes","35000");
		var car4 = new Cars("car4.jpg","79433211","b.m.w","tsi","2011","no","yes","1000");
		var car5 = new Cars("car5.jpg","97926347","volswagen","tsi","2012","no","yes","8000");
		var car6 = new Cars("car6.jpg","15683290","volvo","tsi","2013","no","yes","12222");
		var car7 = new Cars("car7.jpg","78932487","volvo","tsi","2014","no","yes","210334");
		var car8 = new Cars("car8.jpg","23547823","volvo","tsi","2015","no","yes","78962");
		var car9 = new Cars("car9.jpg","97473683","volvo","tsi","2007","no","yes","124346");
		var car10 = new Cars("car10.jpg","78236489","volvo","tsi","2006","no","yes","23847");
	
		var delay = 3000; 
        fadeTime = 2000;
	//setInterval(function(){
	 var carsArray = new Array();
	 carsArray.push.apply(carsArray,[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10]);
	 var highlightArray = new Array();
		highlightArray.push.apply(highlightArray,[".choosecar1",".choosecar2",".choosecar3",".choosecar4",".choosecar5",".choosecar6",".choosecar7",".choosecar8",".choosecar9",".choosecar10"]);
	//var started = false;
	function changeCarImg()
	{
		var current = /*!started ? $('.carsToChange li').first() : */$('.carsToChange li.open');
		var i = current.index();
		//if(started) i += 1;
		
		$(".car1id").html("car ID: "+carsArray[i].carid);
		$(".company1").html("model: "+carsArray[i].company);
		$(".model1").html("tsi\normal: "+carsArray[i].model);
		$(".year1").html("year: "+carsArray[i].year);
		$(".hand1").html("hand: "+carsArray[i].hand);
		$(".auto1").html("handel: "+carsArray[i].auto);
		$(".price1").html("price: "+carsArray[i].price);

		$.each(highlightArray, function(a, btn) {
			$(btn).css({ backgroundColor: '#fff' });
		});
		$(highlightArray[i]).css({ backgroundColor: '#cc0000' });
		
		if(/*started && */current.next().prop('tagName') == 'LI')
		{
			var next = current.next();
		}
		else
		{
			var next = $('.carsToChange li').first();
		}
		
		current.fadeOut('slow', function() {
			$(this).removeClass('open');
			next.fadeIn('slow', function() {
				$(this).addClass('open');
				started = true;
				setTimeout(function() { changeCarImg(); }, 3000);
			});
		});
	}

	changeCarImg();
		
	/*for (i=0; i<carsArray.length;i++) {
		localStorage.setItem(carsArray[i], JSON.stringify(Cars[i+1]));
		
    
        //$(".head:first-child").fadeOut(fadeTime).next(".head").fadeIn(fadeTime).end().appendTo("#kop")
   //$('.carsToChange > li').hide();
  // setTimeout(function() {
      // Do something after 3 seconds
	//$('.carsToChange > li:first-child').show();
	
		/*$(".car1").attr("src",carsArray[i].car).fadeOut(fadeTime);
		$(".car1id").html(carsArray[i].carid).fadeOut(fadeTime);
		$(".company1").html(carsArray[i].company).fadeOut(fadeTime);
		$(".model1").html(carsArray[i].model).fadeOut(fadeTime);
		$(".year1").html(carsArray[i].year).fadeOut(fadeTime);
		$(".hand1").html(carsArray[i].hand).fadeOut(fadeTime);
		$(".auto1").html(carsArray[i].auto).fadeOut(fadeTime);
		$(".price1").html(carsArray[i].price).fadeOut(fadeTime);*/
		//$(highlightArray[i]).effect( "highlight", {color: 'red'}, 3000 );
	//}
//	}, 3000);
	
		//}, delay+fadeTime);
	//$('.carsToChange > li').hide();	

  // setTimeout(function() {
      // Do something after 3 seconds
//	$('.carsToChange > li:second-child').show();

//}, 3000);




	 

	
	 $(".choosecar1").on("click",function() {
		$(".car2").attr("src",carsArray[0].car);
		$(".car2id").html("car ID: "+carsArray[0].carid);
		$(".company2").html("model: "+carsArray[0].company);
		$(".model2").html("tsi\normal: "+carsArray[0].model);
		$(".year2").html("year: "+carsArray[0].year);
		$(".hand2").html("hand: "+carsArray[0].hand);
		$(".auto2").html("handel: "+carsArray[0].auto);
		$(".price2").html("price: "+carsArray[0].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[0].price;
			});
			
		});
	 
	$(".choosecar2").on("click",function() {
		$(".car2").attr("src",carsArray[1].car);
		$(".car2id").html("car ID: "+carsArray[1].carid);
		$(".company2").html("model: "+carsArray[1].company);
		$(".model2").html("tsi\normal: "+carsArray[1].model);
		$(".year2").html("year: "+carsArray[1].year);
		$(".hand2").html("hand: "+carsArray[1].hand);
		$(".auto2").html("handel: "+carsArray[1].auto);
		$(".price2").html("price: "+carsArray[1].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[1].price;
			});
		});
		
		$(".choosecar3").on("click",function() {
		$(".car2").attr("src",carsArray[2].car);
		$(".car2id").html("car ID: "+carsArray[2].carid);
		$(".company2").html("model: "+carsArray[2].company);
		$(".model2").html("tsi\normal: "+carsArray[2].model);
		$(".year2").html("year: "+carsArray[2].year);
		$(".hand2").html("hand: "+carsArray[2].hand);
		$(".auto2").html("handel: "+carsArray[2].auto);
		$(".price2").html("price: "+carsArray[2].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[2].price;
			});
		});
		
		$(".choosecar4").on("click",function() {
		$(".car2").attr("src",carsArray[3].car);
		$(".car2id").html("car ID: "+carsArray[3].carid);
		$(".company2").html("model: "+carsArray[3].company);
		$(".model2").html("tsi\normal: "+carsArray[3].model);
		$(".year2").html("year: "+carsArray[3].year);
		$(".hand2").html("hand: "+carsArray[3].hand);
		$(".auto2").html("handel: "+carsArray[3].auto);
		$(".price2").html("price: "+carsArray[3].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[3].price;
			});
		});
		
		$(".choosecar5").on("click",function() {
		$(".car2").attr("src",carsArray[4].car);
		$(".car2id").html("car ID: "+carsArray[4].carid);
		$(".company2").html("model: "+carsArray[4].company);
		$(".model2").html("tsi\normal: "+carsArray[4].model);
		$(".year2").html("year: "+carsArray[4].year);
		$(".hand2").html("hand: "+carsArray[4].hand);
		$(".auto2").html("handel: "+carsArray[4].auto);
		$(".price2").html("price: "+carsArray[4].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[4].price;
			});
		});
		
		$(".choosecar6").on("click",function() {
		$(".car2").attr("src",carsArray[5].car);
		$(".car2id").html("car ID: "+carsArray[5].carid);
		$(".company2").html("model: "+carsArray[5].company);
		$(".model2").html("tsi\normal: "+carsArray[5].model);
		$(".year2").html("year: "+carsArray[5].year);
		$(".hand2").html("hand: "+carsArray[5].hand);
		$(".auto2").html("handel: "+carsArray[5].auto);
		$(".price2").html("price: "+carsArray[5].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[5].price;
			});
		});
		
		$(".choosecar7").on("click",function() {
		$(".car2").attr("src",carsArray[6].car);
		$(".car2id").html("car ID: "+carsArray[6].carid);
		$(".company2").html("model: "+carsArray[6].company);
		$(".model2").html("tsi\normal: "+carsArray[6].model);
		$(".year2").html("year: "+carsArray[6].year);
		$(".hand2").html("hand: "+carsArray[6].hand);
		$(".auto2").html("handel: "+carsArray[6].auto);
		$(".price2").html("price: "+carsArray[6].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[6].price;
			});
		});
		
		$(".choosecar8").on("click",function() {
		$(".car2").attr("src",carsArray[7].car);
		$(".car2id").html("car ID: "+carsArray[7].carid);
		$(".company2").html("model: "+carsArray[7].company);
		$(".model2").html("tsi\normal: "+carsArray[7].model);
		$(".year2").html("year: "+carsArray[7].year);
		$(".hand2").html("hand: "+carsArray[7].hand);
		$(".auto2").html("handel: "+carsArray[7].auto);
		$(".price2").html("price: "+carsArray[7].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[7].price;
			});
		});
		
		$(".choosecar9").on("click",function() {
		$(".car2").attr("src",carsArray[8].car);
		$(".car2id").html("car ID: "+carsArray[8].carid);
		$(".company2").html("model: "+carsArray[8].company);
		$(".model2").html("tsi\normal: "+carsArray[8].model);
		$(".year2").html("year: "+carsArray[8].year);
		$(".hand2").html("hand: "+carsArray[8].hand);
		$(".auto2").html("handel: "+carsArray[8].auto);
		$(".price2").html("price: "+carsArray[8].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[8].price;
			});
		});
		
		$(".choosecar10").on("click",function() {
		$(".car2").attr("src",carsArray[9].car);
		$(".car2id").html("car ID: "+carsArray[9].carid);
		$(".company2").html("model: "+carsArray[9].company);
		$(".model2").html("tsi\normal: "+carsArray[9].model);
		$(".year2").html("year: "+carsArray[9].year);
		$(".hand2").html("hand: "+carsArray[9].hand);
		$(".auto2").html("handel: "+carsArray[9].auto);
		$(".price2").html("price: "+carsArray[9].price);
		$(".procceed").html("to procceed to destination calculation?");
		$(".procceed").on("click",function() {
			location.href = "#calculate";
			carPrice = carsArray[9].price;
			});
		});
		
		$(".choosecar1, .choosecar2, .choosecar3, .choosecar4, .choosecar5, .choosecar6, .choosecar7, .choosecar8, .choosecar9, .choosecar10").click(function() {
		carHTML = $('#carDetails').html();
	 });
	 
		$('.returnVehicle').click(function() {
			$(".carsToReturn").html(carHTML);
		});
		$(".carsToReturnButton").click(function() {
			carHTML = '';
			location.href = "#home";
		});
	});
