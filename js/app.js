$(document).ready(function(){

// zmienne dla menu:
var chooseSkin = $("#chooseSkin"),
	chooseHair = $("#chooseHair"),
	chooseEyes = $("#chooseEyes"),
	chooseNose = $("#chooseNose"),
	chooseMouth = $("#chooseMouth"),
	chooseTop = $("#chooseTop"),
	chooseBottom = $("#chooseBottom"),
	chooseShoes = $("#chooseShoes"),
	chooseGadget = $("#chooseGadget"),
	chooseBack = $("#chooseBack"),
	// wszystkie menu
	allChoose = $("li[id^=choose]");
// zmienne dla strzalek:
var skinArrows = $("#skinArrows"),
	hairArrows = $("#hairArrows"),
	eyesArrows = $("#eyesArrows"),
	noseArrows =$("#noseArrows"),
	mouthArrows = $("#mouthArrows"),
	topArrows = $("#topArrows"),
	bottomArrows = $("#bottomArrows"),
	shoesArrows = $("#shoesArrows"),
	gadgetArrows = $("#gadgetArrows"),
	backArrows = $("#backArrows"),
// wszystkie strzalki
	allArrows = $("div[id$=Arrows]");
// zmienne dla strzalek prev next::
var prevSkin = $("#prevSkin"),
	nextSkin = $("#nextSkin"),
	prevHair = $("#prevHair"),
	nextHair = $("#nextHair"),
	prevEyes = $("#prevEyes"),
	nextEyes = $("#nextEyes"),
	prevNose = $("#prevNose"),
	nextNose = $("#nextNose"),
	prevMouth = $("#prevMouth"),
	nextMouth = $("#nextMouth"),
	prevTop = $("#prevTop"),
	nextTop = $("#nextTop"),
	prevBottom = $("#prevBottom"),
	nextBottom = $("#nextBottom"),
	prevShoes = $("#prevShoes"),
	nextShoes = $("#nextShoes"),
	prevGadget = $("#prevGadget"),
	nextGadget = $("#nextGadget"),
	prevBack = $("#prevBack"),
	nextBack = $("#nextBack");

// zmienne dla strzalek gora dol w menu
var menuDown = $("#menuDown"),
	menuUp = $("#menuUp");
// zmienne dla sliderów
var skin = $("#skin"),
	hair = $("#hair"),
	eyes = $("#eyes"),
	nose = $("#nose"),
	mouth = $("#mouth"),
	top = $("#top"),
	bottom = $("#bottom"),
	shoes = $("#shoes"),
	gadget = $("#gadget");
	// back = $("#back");

// zmienne indeksów dla sliderów:
var skinIndex = 0,
	hairIndex = 0,
	eyesIndex = 0,
	noseIndex = 0,
	mouthIndex = 0,
	topIndex = 0,
	bottomIndex = 0,
	shoesIndex = 0,
	gadgetIndex = 0,
	backIndex = 0;

// zmienne dla sliderow lenght
	// length jest zawsze o jeden większy, niż ilość elementów jakie mamy w obrazkach
var skinLength = 10,
	hairLength = 19,
	eyesLength = 12,
	noseLength = 7,
	mouthLength = 14,
	topLength = 5,
	bottomLength = 6,
	shoesLength = 3,
	gadgetLength = 6,
	backLength = 9;


// zmienne dla kolor pikerow

// wszystkie kolor pikery
var allColorPicker = $("div[class=colorPicker]");

// wszystkie color pickery hair:
var hair1color = $("#hair1color"),
	hair2color = $("#hair2color"),
	hair3color = $("#hair3color"),
	hair4color = $("#hair4color"),
	hair5color = $("#hair5color"),
	hair6color = $("#hair6color"),
	hair7color = $("#hair7color"),
	hair8color = $("#hair8color"),
	hair9color = $("#hair9color"),
	hair10color = $("#hair10color"),
	hair11color = $("#hair11color"),
	hair12color = $("#hair12color"),
	hair13color = $("#hair13color"),
	hair14color = $("#hair14color"),
	hair15color = $("#hair15color"),
	hair16color = $("#hair16color"),
	hair17color = $("#hair17color"),
	hair18color = $("#hair18color");
// wszystkie probki color hair
var hair1color1 = $(".hair1color1"),
	hair1color2 = $(".hair1color2"),
	hair1color3 = $(".hair1color3"),
	hair1color4 = $(".hair1color4"),
	hair1color5 = $(".hair1color5"),
	hair1color6 = $(".hair1color6");

var hair2color1 = $(".hair2color1"),
	hair2color2 = $(".hair2color2"),
	hair2color3 = $(".hair2color3"),
	hair2color4 = $(".hair2color4"),
	hair2color5 = $(".hair2color5"),
	hair2color6 = $(".hair2color6");

var hair3color1 = $(".hair3color1"),
	hair3color2 = $(".hair3color2"),
	hair3color3 = $(".hair3color3"),
	hair3color4 = $(".hair3color4"),
	hair3color5 = $(".hair3color5"),
	hair3color6 = $(".hair3color6");

var hair4color1 = $(".hair4color1"),
	hair4color2 = $(".hair4color2"),
	hair4color3 = $(".hair4color3"),
	hair4color4 = $(".hair4color4"),
	hair4color5 = $(".hair4color5"),
	hair4color6 = $(".hair4color6");

var hair5color1 = $(".hair5color1"),
	hair5color2 = $(".hair5color2"),
	hair5color3 = $(".hair5color3"),
	hair5color4 = $(".hair5color4"),
	hair5color5 = $(".hair5color5"),
	hair5color6 = $(".hair5color6");

var hair6color1 = $(".hair6color1"),
	hair6color2 = $(".hair6color2"),
	hair6color3 = $(".hair6color3"),
	hair6color4 = $(".hair6color4"),
	hair6color5 = $(".hair6color5"),
	hair6color6 = $(".hair6color6");

var hair7color1 = $(".hair7color1"),
	hair7color2 = $(".hair7color2"),
	hair7color3 = $(".hair7color3"),
	hair7color4 = $(".hair7color4"),
	hair7color5 = $(".hair7color5"),
	hair7color6 = $(".hair7color6");

var hair8color1 = $(".hair8color1"),
	hair8color2 = $(".hair8color2"),
	hair8color3 = $(".hair8color3"),
	hair8color4 = $(".hair8color4"),
	hair8color5 = $(".hair8color5"),
	hair8color6 = $(".hair8color6");

var hair9color1 = $(".hair9color1"),
	hair9color2 = $(".hair9color2"),
	hair9color3 = $(".hair9color3"),
	hair9color4 = $(".hair9color4"),
	hair9color5 = $(".hair9color5"),
	hair9color6 = $(".hair9color6");

var hair10color1 = $(".hair10color1"),
	hair10color2 = $(".hair10color2"),
	hair10color3 = $(".hair10color3"),
	hair10color4 = $(".hair10color4"),
	hair10color5 = $(".hair10color5"),
	hair10color6 = $(".hair10color6");

var hair11color1 = $(".hair11color1"),
	hair11color2 = $(".hair11color2"),
	hair11color3 = $(".hair11color3"),
	hair11color4 = $(".hair11color4"),
	hair11color5 = $(".hair11color5"),
	hair11color6 = $(".hair11color6");

var hair12color1 = $(".hair12color1"),
	hair12color2 = $(".hair12color2"),
	hair12color3 = $(".hair12color3"),
	hair12color4 = $(".hair12color4"),
	hair12color5 = $(".hair12color5"),
	hair12color6 = $(".hair12color6");

var hair13color1 = $(".hair13color1"),
	hair13color2 = $(".hair13color2"),
	hair13color3 = $(".hair13color3"),
	hair13color4 = $(".hair13color4"),
	hair13color5 = $(".hair13color5"),
	hair13color6 = $(".hair13color6");

var hair14color1 = $(".hair14color1"),
	hair14color2 = $(".hair14color2"),
	hair14color3 = $(".hair14color3"),
	hair14color4 = $(".hair14color4"),
	hair14color5 = $(".hair14color5"),
	hair14color6 = $(".hair14color6");

var hair15color1 = $(".hair15color1"),
	hair15color2 = $(".hair15color2"),
	hair15color3 = $(".hair15color3"),
	hair15color4 = $(".hair15color4"),
	hair15color5 = $(".hair15color5"),
	hair15color6 = $(".hair15color6");

var hair16color1 = $(".hair16color1"),
	hair16color2 = $(".hair16color2"),
	hair16color3 = $(".hair16color3"),
	hair16color4 = $(".hair16color4"),
	hair16color5 = $(".hair16color5"),
	hair16color6 = $(".hair16color6");

var hair17color1 = $(".hair17color1"),
	hair17color2 = $(".hair17color2"),
	hair17color3 = $(".hair17color3"),
	hair17color4 = $(".hair17color4"),
	hair17color5 = $(".hair17color5"),
	hair17color6 = $(".hair17color6");

var hair18color1 = $(".hair18color1"),
	hair18color2 = $(".hair18color2"),
	hair18color3 = $(".hair18color3"),
	hair18color4 = $(".hair18color4"),
	hair18color5 = $(".hair18color5"),
	hair18color6 = $(".hair18color6");
// wszystkie color pickery eyes:
var eyes1color = $("#eyes1color"),
	eyes2color = $("#eyes2color"),
	eyes3color = $("#eyes3color"),
	eyes4color = $("#eyes4color"),
	eyes5color = $("#eyes5color"),
	eyes6color = $("#eyes6color"),
	eyes7color = $("#eyes7color"),
	eyes8color = $("#eyes8color"),
	eyes9color = $("#eyes9color");
// wszystkie probki color eyes
var eyes1color1 = $(".eyes1color1"),
	eyes1color2 = $(".eyes1color2"),
	eyes1color3 = $(".eyes1color3"),
	eyes1color4 = $(".eyes1color4"),
	eyes1color5 = $(".eyes1color5");

var eyes2color1 = $(".eyes2color1"),
	eyes2color2 = $(".eyes2color2"),
	eyes2color3 = $(".eyes2color3"),
	eyes2color4 = $(".eyes2color4"),
	eyes2color5 = $(".eyes2color5");

var eyes3color1 = $(".eyes3color1"),
	eyes3color2 = $(".eyes3color2"),
	eyes3color3 = $(".eyes3color3"),
	eyes3color4 = $(".eyes3color4"),
	eyes3color5 = $(".eyes3color5"),
	eyes3color6 = $(".eyes3color6");

var eyes4color1 = $(".eyes4color1"),
	eyes4color2 = $(".eyes4color2"),
	eyes4color3 = $(".eyes4color3"),
	eyes4color4 = $(".eyes4color4"),
	eyes4color5 = $(".eyes4color5"),
	eyes4color6 = $(".eyes4color6");

var eyes5color1 = $(".eyes5color1"),
	eyes5color2 = $(".eyes5color2"),
	eyes5color3 = $(".eyes5color3"),
	eyes5color4 = $(".eyes5color4"),
	eyes5color5 = $(".eyes5color5");

var eyes6color1 = $(".eyes6color1"),
	eyes6color2 = $(".eyes6color2"),
	eyes6color3 = $(".eyes6color3"),
	eyes6color4 = $(".eyes6color4"),
	eyes6color5 = $(".eyes6color5");

var eyes7color1 = $(".eyes7color1"),
	eyes7color2 = $(".eyes7color2"),
	eyes7color3 = $(".eyes7color3");

var eyes8color1 = $(".eyes8color1"),
	eyes8color2 = $(".eyes8color2"),
	eyes8color3 = $(".eyes8color3"),
	eyes8color4 = $(".eyes8color4"),
	eyes8color5 = $(".eyes8color5");

var eyes9color1 = $(".eyes9color1"),
	eyes9color2 = $(".eyes9color2"),
	eyes9color3 = $(".eyes9color3"),
	eyes9color4 = $(".eyes9color4"),
	eyes9color5 = $(".eyes9color5");
// wszystkie color pickery mouth:
var mouth8color = $("#mouth8color"),
	mouth9color = $("#mouth9color"),
	mouth10color = $("#mouth10color"),
	mouth11color = $("#mouth11color"),
	mouth12color = $("#mouth12color");
// wszystkie probki color eyes
var mouth8color1 = $(".mouth8color1"),
	mouth8color2 = $(".mouth8color2"),
	mouth8color3 = $(".mouth8color3"),
	mouth8color4 = $(".mouth8color4"),
	mouth8color5 = $(".mouth8color5"),
	mouth8color6 = $(".mouth8color6");

var mouth9color1 = $(".mouth9color1"),
	mouth9color2 = $(".mouth9color2"),
	mouth9color3 = $(".mouth9color3"),
	mouth9color4 = $(".mouth9color4"),
	mouth9color5 = $(".mouth9color5"),
	mouth9color6 = $(".mouth9color6");

var mouth10color1 = $(".mouth10color1"),
	mouth10color2 = $(".mouth10color2"),
	mouth10color3 = $(".mouth10color3"),
	mouth10color4 = $(".mouth10color4"),
	mouth10color5 = $(".mouth10color5"),
	mouth10color6 = $(".mouth10color6");

var mouth11color1 = $(".mouth11color1"),
	mouth11color2 = $(".mouth11color2"),
	mouth11color3 = $(".mouth11color3"),
	mouth11color4 = $(".mouth11color4"),
	mouth11color5 = $(".mouth11color5"),
	mouth11color6 = $(".mouth11color6");

var mouth12color1 = $(".mouth12color1"),
	mouth12color2 = $(".mouth12color2"),
	mouth12color3 = $(".mouth12color3"),
	mouth12color4 = $(".mouth12color4"),
	mouth12color5 = $(".mouth12color5"),
	mouth12color6 = $(".mouth12color6");
// wszystkie color pickery top:
var top1color = $("#top1color"),
	top2color = $("#top2color"),
	top3color = $("#top3color");
// wszystkie probki color top
var top1color1 = $(".top1color1"),
	top1color2 = $(".top1color2"),
	top1color3 = $(".top1color3"),
	top1color4 = $(".top1color4");

var top2color1 = $(".top2color1"),
	top2color2 = $(".top2color2"),
	top2color3 = $(".top2color3"),
	top2color4 = $(".top2color4");

var top3color1 = $(".top3color1"),
	top3color2 = $(".top3color2"),
	top3color3 = $(".top3color3"),
	top3color4 = $(".top3color4"),
	top3color5 = $(".top3color5");

var gadget2color = $("#gadget2color");

var gadget2color1 = $(".gadget2color1"),
	gadget2color2 = $(".gadget2color2"),
	gadget2color3 = $(".gadget2color3");
// wszystkie color pickery bottom:
var bottom1color = $("#bottom1color"),
	bottom2color = $("#bottom2color"),
	bottom3color = $("#bottom3color"),
	bottom4color = $("#bottom4color"),
	bottom5color = $("#bottom5color");
// wszystkie probki color bottom:
var bottom1color1 = $(".bottom1color1"),
	bottom1color2 = $(".bottom1color2"),
	bottom1color3 = $(".bottom1color3"),
	bottom1color4 = $(".bottom1color4"),
	bottom1color5 = $(".bottom1color5");

var bottom2color1 = $(".bottom2color1"),
	bottom2color2 = $(".bottom2color2"),
	bottom2color3 = $(".bottom2color3");

var bottom3color1 = $(".bottom3color1"),
	bottom3color2 = $(".bottom3color2"),
	bottom3color3 = $(".bottom3color3"),
	bottom3color4 = $(".bottom3color4"),
	bottom3color5 = $(".bottom3color5"),
	bottom3color6 = $(".bottom3color6");

var bottom4color1 = $(".bottom4color1"),
	bottom4color2 = $(".bottom4color2"),
	bottom4color3 = $(".bottom4color3");

var bottom5color1 = $(".bottom5color1"),
	bottom5color2 = $(".bottom5color2"),
	bottom5color3 = $(".bottom5color3"),
	bottom5color4 = $(".bottom5color4");
// zmienne koloru tla
var body = $("body"),
	ludzikContainer = $(".ludzikContainer"),
	backColor0 = '#FF3D00',
	backColor1 = '#78909C',
	// żółty
	backColor2 = '#FFCC00',
	// niebieski indygo
	backColor3 = '#3D5AFE',
	// roz mocny
	backColor4 = '#FF1744',
	// blady zielony green a200 (byl a100)
	backColor5 = '#69F0AE',
	// a700 purple misty
	backColor6 =  '#aa00ff',
	// roz red 100
	backColor7 = '#FFCDD2',
	// butelka
	backColor8 = '#00695C';

var doneButton = $("#doneButton");
// ukrycie wszystkich strzalek oprocz pierwszych
// $("div[id$=Arrows]").not(skinArrows).hide();
allArrows.not(skinArrows).hide();
// ukrycie wszystkich colorpickerow:
allColorPicker.hide();



// menu skin
	chooseSkin.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(skinArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		skinArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseSkin.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:


	});
// menu hair
	chooseHair.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(hairArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		hairArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseHair.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
		// if (hairIndex == 2){
		// 	// potem zapisz konkrtene kolor pickery do zmiennych
		// 	hair2color.show();
		// };
		// dla wlosow wszystkie kolory te same, wiec pokazujemy zawsze color picker
		if (hairIndex == 1){
			// potem zapisz konkrtene kolor pickery do zmiennych
			hair1color.show();
		} else if (hairIndex == 2){
			hair2color.show();
		} else if (hairIndex == 3){
			hair3color.show();
		} else if (hairIndex == 4){
			hair4color.show();
		} else if (hairIndex == 5){
			hair5color.show();
		} else if (hairIndex == 6){
			hair6color.show();
		} else if (hairIndex == 7){
			hair7color.show();
		} else if (hairIndex == 8){
			hair8color.show();
		} else if (hairIndex == 9){
			hair9color.show();
		} else if (hairIndex == 10){
			hair10color.show();
		} else if (hairIndex == 11){
			hair11color.show();
		} else if (hairIndex == 12){
			hair12color.show();
		} else if (hairIndex == 13){
			hair13color.show();
		} else if (hairIndex == 14){
			hair14color.show();
		} else if (hairIndex == 15){
			hair15color.show();
		} else if (hairIndex == 16){
			hair16color.show();
		} else if (hairIndex == 17){
			hair17color.show();
		} else if (hairIndex == 18){
			hair18color.show();
		};
	});
// menu eyes
	chooseEyes.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(eyesArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		eyesArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseEyes.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
		if (eyesIndex == 1){
			// potem zapisz konkrtene kolor pickery do zmiennych
			eyes1color.show();
		} else if (eyesIndex == 2){
			eys2color.show();
		} else if (eyesIndex == 3){
			eyes3color.show();
		} else if (eyesIndex == 4){
			eyes4color.show();
		} else if (eyesIndex == 5){
			eyes5color.show();
		} else if (eyesIndex == 6){
			eyes6color.show();
		} else if (eyesIndex == 7){
			eyes7color.show();
		} else if (eyesIndex == 8){
			eyes8color.show();
		} else if (eyesIndex == 9){
			eyes9color.show();
		};
	});
// menu nose
	chooseNose.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(noseArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		noseArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseNose.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
		if (mouthIndex == 8){
			// potem zapisz konkrtene kolor pickery do zmiennych
			mouth8color.show();
		} else if (mouthIndex == 9){
			mouth9color.show();
		} else if (mouthIndex == 10){
			mouth10color.show();
		} else if (mouthIndex == 11){
			mouth11color.show();
		} else if (mouthIndex == 12){
			mouth12color.show();
		};
	});
// menu mouth
	chooseMouth.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(mouthArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		mouthArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseMouth.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
	});
// menu top
	chooseTop.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(topArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		topArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseTop.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
		if (topIndex == 1){
			// potem zapisz konkrtene kolor pickery do zmiennych
			top1color.show();
		} else if (topIndex == 2){
			top2color.show();
		} else if (topIndex == 3){
			top3color.show();
		};
	});
// menu bottom
	chooseBottom.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(bottomArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		bottomArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseBottom.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
		if (bottomIndex == 1){
			// potem zapisz konkrtene kolor pickery do zmiennych
			bottom1color.show();
		} else if (bottomIndex == 2){
			bottom2color.show();
		} else if (bottomIndex == 3){
			bottom3color.show();
		} else if (bottomIndex == 4){
			bottom4color.show();
		} else if (bottomIndex == 5){
			bottom5color.show();
		};
	});
// menu shoes
	chooseShoes.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(shoesArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		shoesArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseShoes.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
	});
// menu gadget
	chooseGadget.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(gadgetArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		gadgetArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseGadget.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
		if (gadgetIndex == 2){
			// potem zapisz konkrtene kolor pickery do zmiennych
			gadget2color.show();
		};
	});
// menu back
	chooseBack.on("click", function(){
		// ukrycie wszystkich innych strzalek:
		allArrows.not(backArrows).hide();
		// // pokazywanie strzalek w zaleznosci od pozycji w menu:
		backArrows.show();
		// usuniecie wszystkim pozycjom menu o id zaczynąjacym się od choose klasy active
		allChoose.removeClass("active");
		// nadanie pozycji menu kalsy active
		chooseBack.addClass("active");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// jeśli w tej pozycji menu, na pozycji pierwszej bedzie potrzebny color picker, to tu go pokaż
		// plus trzeba dodać, że jeśli indeks danej kategorii, to jednak kolor picker widać:
	});



// slider skin zachowanie:
nextSkin.on("click", function(){
	skinIndex +=1;
	if(skinIndex == 1){
		ludzikContainer.css("background-image", "url('images/ludzik.png')");
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		skin.attr("src", "images/skin1.png").hide().fadeIn('fast');

		// $(".ludzikContainer").css("background-image", "url('images/skin4.png')");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
	} else if (skinIndex == 2){
		// poprzedni obrazek
		ludzikContainer.css("background-image", "url('images/skin1.png')");
		// wlasciwy obrazek
		skin.attr("src", "images/skin2.png").hide().fadeIn('fast');
		// tez dziala:
		// skin.attr("src", "images/skin5.png").animate({opacity:0},0).animate({opacity:1},300);

		// margin left się przyda do animacji rawo lewo
		// skin.animate({opacity:1, marginLeft: '222px'},200).attr("src", "images/skinT.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
	} else if (skinIndex == 3){
		ludzikContainer.css("background-image", "url('images/skin2.png')");
		skin.attr("src", "images/skin3.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 4){
		ludzikContainer.css("background-image", "url('images/skin3.png')");
		skin.attr("src", "images/skin4.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 5){
		ludzikContainer.css("background-image", "url('images/skin4.png')");
		skin.attr("src", "images/skin5.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 6){
		ludzikContainer.css("background-image", "url('images/skin5.png')");
		skin.attr("src", "images/skin6.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 7){
		ludzikContainer.css("background-image", "url('images/skin6.png')");
		skin.attr("src", "images/skin7.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 8){
		ludzikContainer.css("background-image", "url('images/skin7.png')");
		skin.attr("src", "images/skin8.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 9){
		ludzikContainer.css("background-image", "url('images/skin8.png')");
		skin.attr("src", "images/skin9.png").hide().fadeIn('fast');
		allColorPicker.hide();
	// ponizej zerujesz do empty
	} else if (skinIndex == skinLength){
		skinIndex = 0;
		ludzikContainer.css("background-image", "url('images/skin9.png')");
		skin.attr("src", "images/ludzik.png").hide().fadeIn('fast');
		allColorPicker.hide();
	};

		
console.log("next skinIndex: " + skinIndex);
});

prevSkin.on("click", function(){
	skinIndex -=1;
	if(skinIndex == 1){
		ludzikContainer.css("background-image", "url('images/skin2.png')");
		skin.attr("src", "images/skin1.png").hide().fadeIn('fast');
		allColorPicker.hide();


	// tutaj kolejne obrazki do konca listy: 2,3,4...
	} else if (skinIndex == 2){
		ludzikContainer.css("background-image", "url('images/skin3.png')");
		skin.attr("src", "images/skin2.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 3){
		ludzikContainer.css("background-image", "url('images/skin4.png')");
		skin.attr("src", "images/skin3.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 4){
		ludzikContainer.css("background-image", "url('images/skin5.png')");
		skin.attr("src", "images/skin4.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 5){
		ludzikContainer.css("background-image", "url('images/skin6.png')");
		skin.attr("src", "images/skin5.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 6){
		ludzikContainer.css("background-image", "url('images/skin7.png')");
		skin.attr("src", "images/skin6.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 7){
		ludzikContainer.css("background-image", "url('images/skin8.png')");
		skin.attr("src", "images/skin7.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 8){
		ludzikContainer.css("background-image", "url('images/skin9.png')");
		skin.attr("src", "images/skin8.png").hide().fadeIn('fast');
		allColorPicker.hide();
	} else if (skinIndex == 9){
		ludzikContainer.css("background-image", "url('images/ludzik.png')");
		skin.attr("src", "images/skin9.png").hide().fadeIn('fast');
		allColorPicker.hide();

// tu wstaw ostatni obraz:
	} else if (skinIndex == -1){
		skinIndex = skinLength - 1;
		ludzikContainer.css("background-image", "url('images/ludzik.png')");
		skin.attr("src", "images/skin9.png").hide().fadeIn('fast');
		allColorPicker.hide();
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();
	// na koniec - tu wstaw empty:
	} else if (skinIndex == 0){
		ludzikContainer.css("background-image", "url('images/skin1.png')");
		skin.attr("src", "images/ludzik.png").hide().fadeIn('fast');
		allColorPicker.hide();
		
	};
		console.log("prev skinIndex: " + skinIndex);
});
// slider hair zachowanie:

nextHair.on("click", function(){
	hairIndex +=1;
	// hair 1 6 colors index 1
	if(hairIndex == 1 && hair.hasClass("color1")){
		hair.attr("src", "images/hair1color1.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color2")){
		hair.attr("src", "images/hair1color2.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color3")){
		hair.attr("src", "images/hair1color3.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color4")){
		hair.attr("src", "images/hair1color4.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color5")){
		hair.attr("src", "images/hair1color5.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color6")){
		hair.attr("src", "images/hair1color6.png");
		allColorPicker.hide();
		hair1color.show();
// hair 2 6 colors index 2
	} else if(hairIndex == 2 && hair.hasClass("color1")){
		hair.attr("src", "images/hair2color1.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color2")){
		hair.attr("src", "images/hair2color2.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color3")){
		hair.attr("src", "images/hair2color3.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color4")){
		hair.attr("src", "images/hair2color4.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color5")){
		hair.attr("src", "images/hair2color5.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color6")){
		hair.attr("src", "images/hair2color6.png");
		allColorPicker.hide();
		hair2color.show();
// hair 3 6 colors index 3
	} else if(hairIndex == 3 && hair.hasClass("color1")){
		hair.attr("src", "images/hair3color1.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color2")){
		hair.attr("src", "images/hair3color2.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color3")){
		hair.attr("src", "images/hair3color3.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color4")){
		hair.attr("src", "images/hair3color4.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color5")){
		hair.attr("src", "images/hair3color5.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color6")){
		hair.attr("src", "images/hair2color6.png");
		allColorPicker.hide();
		hair3color.show();
// hair 4 6 colors index 4
	} else if(hairIndex == 4 && hair.hasClass("color1")){
		hair.attr("src", "images/hair4color1.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color2")){
		hair.attr("src", "images/hair4color2.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color3")){
		hair.attr("src", "images/hair4color3.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color4")){
		hair.attr("src", "images/hair4color4.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color5")){
		hair.attr("src", "images/hair4color5.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color6")){
		hair.attr("src", "images/hair4color6.png");
		allColorPicker.hide();
		hair4color.show();
// hair 4 6 colors index 4
	} else if(hairIndex == 4 && hair.hasClass("color1")){
		hair.attr("src", "images/hair4color1.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color2")){
		hair.attr("src", "images/hair4color2.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color3")){
		hair.attr("src", "images/hair4color3.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color4")){
		hair.attr("src", "images/hair4color4.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color5")){
		hair.attr("src", "images/hair4color5.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color6")){
		hair.attr("src", "images/hair4color6.png");
		allColorPicker.hide();
		hair4color.show();
// hair 5 6 colors index 5
	} else if(hairIndex == 5 && hair.hasClass("color1")){
		hair.attr("src", "images/hair5color1.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color2")){
		hair.attr("src", "images/hair5color2.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color3")){
		hair.attr("src", "images/hair5color3.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color4")){
		hair.attr("src", "images/hair5color4.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color5")){
		hair.attr("src", "images/hair5color5.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color6")){
		hair.attr("src", "images/hair5color6.png");
		allColorPicker.hide();
		hair5color.show();
// hair 6 6 colors index 6
	} else if(hairIndex == 6 && hair.hasClass("color1")){
		hair.attr("src", "images/hair6color1.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color2")){
		hair.attr("src", "images/hair6color2.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color3")){
		hair.attr("src", "images/hair6color3.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color4")){
		hair.attr("src", "images/hair6color4.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color5")){
		hair.attr("src", "images/hair6color5.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color6")){
		hair.attr("src", "images/hair6color6.png");
		allColorPicker.hide();
		hair6color.show();
// hair 7 6 colors index 7
	} else if(hairIndex == 7 && hair.hasClass("color1")){
		hair.attr("src", "images/hair7color1.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color2")){
		hair.attr("src", "images/hair7color2.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color3")){
		hair.attr("src", "images/hair7color3.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color4")){
		hair.attr("src", "images/hair7color4.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color5")){
		hair.attr("src", "images/hair7color5.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color6")){
		hair.attr("src", "images/hair7color6.png");
		allColorPicker.hide();
		hair7color.show();
// hair 8 6 colors index 8
	} else if (hairIndex == 8 && hair.hasClass("color1")){
		hair.attr("src", "images/hair8color1.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color2")){
		hair.attr("src", "images/hair8color2.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color3")){
		hair.attr("src", "images/hair8color3.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color4")){
		hair.attr("src", "images/hair8color4.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color5")){
		hair.attr("src", "images/hair8color5.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color6")){
		hair.attr("src", "images/hair8color6.png");
		allColorPicker.hide();
		hair8color.show();
// hair 9 6 colors index 9
	} else if (hairIndex == 9 && hair.hasClass("color1")){
		hair.attr("src", "images/hair9color1.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color2")){
		hair.attr("src", "images/hair9color2.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color3")){
		hair.attr("src", "images/hair9color3.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color4")){
		hair.attr("src", "images/hair9color4.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color5")){
		hair.attr("src", "images/hair9color5.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color6")){
		hair.attr("src", "images/hair9color6.png");
		allColorPicker.hide();
		hair9color.show();
// hair 10 6 colors index 10
	} else if (hairIndex == 10 && hair.hasClass("color1")){
		hair.attr("src", "images/hair10color1.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color2")){
		hair.attr("src", "images/hair10color2.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color3")){
		hair.attr("src", "images/hair10color3.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color4")){
		hair.attr("src", "images/hair10color4.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color5")){
		hair.attr("src", "images/hair10color5.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color6")){
		hair.attr("src", "images/hair10color6.png");
		allColorPicker.hide();
		hair10color.show();
// hair 11 6 colors index 11
	} else if (hairIndex == 11 && hair.hasClass("color1")){
		hair.attr("src", "images/hair11color1.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color2")){
		hair.attr("src", "images/hair11color2.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color3")){
		hair.attr("src", "images/hair11color3.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color4")){
		hair.attr("src", "images/hair11color4.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color5")){
		hair.attr("src", "images/hair11color5.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color6")){
		hair.attr("src", "images/hair11color6.png");
		allColorPicker.hide();
		hair11color.show();
// hair 12 6 colors index 12
	} else if (hairIndex == 12 && hair.hasClass("color1")){
		hair.attr("src", "images/hair12color1.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color2")){
		hair.attr("src", "images/hair12color2.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color3")){
		hair.attr("src", "images/hair12color3.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color4")){
		hair.attr("src", "images/hair12color4.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color5")){
		hair.attr("src", "images/hair12color5.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color6")){
		hair.attr("src", "images/hair12color6.png");
		allColorPicker.hide();
		hair12color.show();
// hair 13 6 colors index 13
	} else if (hairIndex == 13 && hair.hasClass("color1")){
		hair.attr("src", "images/hair13color1.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color2")){
		hair.attr("src", "images/hair13color2.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color3")){
		hair.attr("src", "images/hair13color3.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color4")){
		hair.attr("src", "images/hair13color4.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color5")){
		hair.attr("src", "images/hair13color5.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color6")){
		hair.attr("src", "images/hair13color6.png");
		allColorPicker.hide();
		hair13color.show();
// hair 14 6 colors index 14
	} else if (hairIndex == 14 && hair.hasClass("color1")){
		hair.attr("src", "images/hair14color1.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color2")){
		hair.attr("src", "images/hair14color2.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color3")){
		hair.attr("src", "images/hair14color3.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color4")){
		hair.attr("src", "images/hair14color4.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color5")){
		hair.attr("src", "images/hair14color5.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color6")){
		hair.attr("src", "images/hair14color6.png");
		allColorPicker.hide();
		hair14color.show();
// hair 15 6 colors index 15
	} else if (hairIndex == 15 && hair.hasClass("color1")){
		hair.attr("src", "images/hair15color1.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color2")){
		hair.attr("src", "images/hair15color2.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color3")){
		hair.attr("src", "images/hair15color3.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color4")){
		hair.attr("src", "images/hair15color4.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color5")){
		hair.attr("src", "images/hair15color5.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color6")){
		hair.attr("src", "images/hair15color6.png");
		allColorPicker.hide();
		hair15color.show();
// hair 16 6 colors index 16
	} else if (hairIndex == 16 && hair.hasClass("color1")){
		hair.attr("src", "images/hair16color1.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color2")){
		hair.attr("src", "images/hair16color2.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color3")){
		hair.attr("src", "images/hair16color3.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color4")){
		hair.attr("src", "images/hair16color4.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color5")){
		hair.attr("src", "images/hair16color5.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color6")){
		hair.attr("src", "images/hair16color6.png");
		allColorPicker.hide();
		hair16color.show();
// hair 17 6 colors index 17
	} else if (hairIndex == 17 && hair.hasClass("color1")){
		hair.attr("src", "images/hair17color1.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color2")){
		hair.attr("src", "images/hair17color2.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color3")){
		hair.attr("src", "images/hair17color3.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color4")){
		hair.attr("src", "images/hair17color4.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color5")){
		hair.attr("src", "images/hair17color5.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color6")){
		hair.attr("src", "images/hair17color6.png");
		allColorPicker.hide();
		hair17color.show();
// hair 18 6 colors index 18
	} else if (hairIndex == 18 && hair.hasClass("color1")){
		hair.attr("src", "images/hair18color1.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color2")){
		hair.attr("src", "images/hair18color2.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color3")){
		hair.attr("src", "images/hair18color3.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color4")){
		hair.attr("src", "images/hair18color4.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color5")){
		hair.attr("src", "images/hair18color5.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color6")){
		hair.attr("src", "images/hair18color6.png");
		allColorPicker.hide();
		hair18color.show();
// ponizej zerujesz do empty
	} else if (hairIndex == hairLength){
		hairIndex = 0;
		hair.attr("src", "images/empty.png");
		allColorPicker.hide();
	};
console.log("next hairIndex: " + hairIndex);
});








prevHair.on("click", function(){
	hairIndex -=1;
	// hair 1 6 colors index 1
	if(hairIndex == 1 && hair.hasClass("color1")){
		hair.attr("src", "images/hair1color1.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color2")){
		hair.attr("src", "images/hair1color2.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color3")){
		hair.attr("src", "images/hair1color3.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color4")){
		hair.attr("src", "images/hair1color4.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color5")){
		hair.attr("src", "images/hair1color5.png");
		allColorPicker.hide();
		hair1color.show();
	} else if (hairIndex == 1 && hair.hasClass("color6")){
		hair.attr("src", "images/hair1color6.png");
		allColorPicker.hide();
		hair1color.show();
// hair 2 6 colors index 2
	} else if(hairIndex == 2 && hair.hasClass("color1")){
		hair.attr("src", "images/hair2color1.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color2")){
		hair.attr("src", "images/hair2color2.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color3")){
		hair.attr("src", "images/hair2color3.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color4")){
		hair.attr("src", "images/hair2color4.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color5")){
		hair.attr("src", "images/hair2color5.png");
		allColorPicker.hide();
		hair2color.show();
	} else if (hairIndex == 2 && hair.hasClass("color6")){
		hair.attr("src", "images/hair2color6.png");
		allColorPicker.hide();
		hair2color.show();
// hair 3 6 colors index 3
	} else if(hairIndex == 3 && hair.hasClass("color1")){
		hair.attr("src", "images/hair3color1.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color2")){
		hair.attr("src", "images/hair3color2.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color3")){
		hair.attr("src", "images/hair3color3.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color4")){
		hair.attr("src", "images/hair3color4.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color5")){
		hair.attr("src", "images/hair3color5.png");
		allColorPicker.hide();
		hair3color.show();
	} else if (hairIndex == 3 && hair.hasClass("color6")){
		hair.attr("src", "images/hair2color6.png");
		allColorPicker.hide();
		hair3color.show();
// hair 4 6 colors index 4
	} else if(hairIndex == 4 && hair.hasClass("color1")){
		hair.attr("src", "images/hair4color1.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color2")){
		hair.attr("src", "images/hair4color2.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color3")){
		hair.attr("src", "images/hair4color3.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color4")){
		hair.attr("src", "images/hair4color4.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color5")){
		hair.attr("src", "images/hair4color5.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color6")){
		hair.attr("src", "images/hair4color6.png");
		allColorPicker.hide();
		hair4color.show();
// hair 4 6 colors index 4
	} else if(hairIndex == 4 && hair.hasClass("color1")){
		hair.attr("src", "images/hair4color1.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color2")){
		hair.attr("src", "images/hair4color2.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color3")){
		hair.attr("src", "images/hair4color3.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color4")){
		hair.attr("src", "images/hair4color4.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color5")){
		hair.attr("src", "images/hair4color5.png");
		allColorPicker.hide();
		hair4color.show();
	} else if (hairIndex == 4 && hair.hasClass("color6")){
		hair.attr("src", "images/hair4color6.png");
		allColorPicker.hide();
		hair4color.show();
// hair 5 6 colors index 5
	} else if(hairIndex == 5 && hair.hasClass("color1")){
		hair.attr("src", "images/hair5color1.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color2")){
		hair.attr("src", "images/hair5color2.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color3")){
		hair.attr("src", "images/hair5color3.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color4")){
		hair.attr("src", "images/hair5color4.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color5")){
		hair.attr("src", "images/hair5color5.png");
		allColorPicker.hide();
		hair5color.show();
	} else if (hairIndex == 5 && hair.hasClass("color6")){
		hair.attr("src", "images/hair5color6.png");
		allColorPicker.hide();
		hair5color.show();
// hair 6 6 colors index 6
	} else if(hairIndex == 6 && hair.hasClass("color1")){
		hair.attr("src", "images/hair6color1.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color2")){
		hair.attr("src", "images/hair6color2.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color3")){
		hair.attr("src", "images/hair6color3.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color4")){
		hair.attr("src", "images/hair6color4.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color5")){
		hair.attr("src", "images/hair6color5.png");
		allColorPicker.hide();
		hair6color.show();
	} else if (hairIndex == 6 && hair.hasClass("color6")){
		hair.attr("src", "images/hair6color6.png");
		allColorPicker.hide();
		hair6color.show();
// hair 7 6 colors index 7
	} else if(hairIndex == 7 && hair.hasClass("color1")){
		hair.attr("src", "images/hair7color1.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color2")){
		hair.attr("src", "images/hair7color2.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color3")){
		hair.attr("src", "images/hair7color3.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color4")){
		hair.attr("src", "images/hair7color4.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color5")){
		hair.attr("src", "images/hair7color5.png");
		allColorPicker.hide();
		hair7color.show();
	} else if (hairIndex == 7 && hair.hasClass("color6")){
		hair.attr("src", "images/hair7color6.png");
		allColorPicker.hide();
		hair7color.show();
// hair 8 6 colors index 8
	} else if (hairIndex == 8 && hair.hasClass("color1")){
		hair.attr("src", "images/hair8color1.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color2")){
		hair.attr("src", "images/hair8color2.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color3")){
		hair.attr("src", "images/hair8color3.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color4")){
		hair.attr("src", "images/hair8color4.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color5")){
		hair.attr("src", "images/hair8color5.png");
		allColorPicker.hide();
		hair8color.show();
	} else if (hairIndex == 8 && hair.hasClass("color6")){
		hair.attr("src", "images/hair8color6.png");
		allColorPicker.hide();
		hair8color.show();
// hair 9 6 colors index 9
	} else if (hairIndex == 9 && hair.hasClass("color1")){
		hair.attr("src", "images/hair9color1.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color2")){
		hair.attr("src", "images/hair9color2.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color3")){
		hair.attr("src", "images/hair9color3.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color4")){
		hair.attr("src", "images/hair9color4.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color5")){
		hair.attr("src", "images/hair9color5.png");
		allColorPicker.hide();
		hair9color.show();
	} else if (hairIndex == 9 && hair.hasClass("color6")){
		hair.attr("src", "images/hair9color6.png");
		allColorPicker.hide();
		hair9color.show();
// hair 10 6 colors index 10
	} else if (hairIndex == 10 && hair.hasClass("color1")){
		hair.attr("src", "images/hair10color1.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color2")){
		hair.attr("src", "images/hair10color2.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color3")){
		hair.attr("src", "images/hair10color3.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color4")){
		hair.attr("src", "images/hair10color4.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color5")){
		hair.attr("src", "images/hair10color5.png");
		allColorPicker.hide();
		hair10color.show();
	} else if (hairIndex == 10 && hair.hasClass("color6")){
		hair.attr("src", "images/hair10color6.png");
		allColorPicker.hide();
		hair10color.show();
// hair 11 6 colors index 11
	} else if (hairIndex == 11 && hair.hasClass("color1")){
		hair.attr("src", "images/hair11color1.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color2")){
		hair.attr("src", "images/hair11color2.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color3")){
		hair.attr("src", "images/hair11color3.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color4")){
		hair.attr("src", "images/hair11color4.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color5")){
		hair.attr("src", "images/hair11color5.png");
		allColorPicker.hide();
		hair11color.show();
	} else if (hairIndex == 11 && hair.hasClass("color6")){
		hair.attr("src", "images/hair11color6.png");
		allColorPicker.hide();
		hair11color.show();
// hair 12 6 colors index 12
	} else if (hairIndex == 12 && hair.hasClass("color1")){
		hair.attr("src", "images/hair12color1.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color2")){
		hair.attr("src", "images/hair12color2.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color3")){
		hair.attr("src", "images/hair12color3.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color4")){
		hair.attr("src", "images/hair12color4.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color5")){
		hair.attr("src", "images/hair12color5.png");
		allColorPicker.hide();
		hair12color.show();
	} else if (hairIndex == 12 && hair.hasClass("color6")){
		hair.attr("src", "images/hair12color6.png");
		allColorPicker.hide();
		hair12color.show();
// hair 13 6 colors index 13
	} else if (hairIndex == 13 && hair.hasClass("color1")){
		hair.attr("src", "images/hair13color1.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color2")){
		hair.attr("src", "images/hair13color2.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color3")){
		hair.attr("src", "images/hair13color3.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color4")){
		hair.attr("src", "images/hair13color4.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color5")){
		hair.attr("src", "images/hair13color5.png");
		allColorPicker.hide();
		hair13color.show();
	} else if (hairIndex == 13 && hair.hasClass("color6")){
		hair.attr("src", "images/hair13color6.png");
		allColorPicker.hide();
		hair13color.show();
// hair 14 6 colors index 14
	} else if (hairIndex == 14 && hair.hasClass("color1")){
		hair.attr("src", "images/hair14color1.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color2")){
		hair.attr("src", "images/hair14color2.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color3")){
		hair.attr("src", "images/hair14color3.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color4")){
		hair.attr("src", "images/hair14color4.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color5")){
		hair.attr("src", "images/hair14color5.png");
		allColorPicker.hide();
		hair14color.show();
	} else if (hairIndex == 14 && hair.hasClass("color6")){
		hair.attr("src", "images/hair14color6.png");
		allColorPicker.hide();
		hair14color.show();
// hair 15 6 colors index 15
	} else if (hairIndex == 15 && hair.hasClass("color1")){
		hair.attr("src", "images/hair15color1.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color2")){
		hair.attr("src", "images/hair15color2.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color3")){
		hair.attr("src", "images/hair15color3.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color4")){
		hair.attr("src", "images/hair15color4.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color5")){
		hair.attr("src", "images/hair15color5.png");
		allColorPicker.hide();
		hair15color.show();
	} else if (hairIndex == 15 && hair.hasClass("color6")){
		hair.attr("src", "images/hair15color6.png");
		allColorPicker.hide();
		hair15color.show();
// hair 16 6 colors index 16
	} else if (hairIndex == 16 && hair.hasClass("color1")){
		hair.attr("src", "images/hair16color1.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color2")){
		hair.attr("src", "images/hair16color2.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color3")){
		hair.attr("src", "images/hair16color3.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color4")){
		hair.attr("src", "images/hair16color4.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color5")){
		hair.attr("src", "images/hair16color5.png");
		allColorPicker.hide();
		hair16color.show();
	} else if (hairIndex == 16 && hair.hasClass("color6")){
		hair.attr("src", "images/hair16color6.png");
		allColorPicker.hide();
		hair16color.show();
// hair 17 6 colors index 17
	} else if (hairIndex == 17 && hair.hasClass("color1")){
		hair.attr("src", "images/hair17color1.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color2")){
		hair.attr("src", "images/hair17color2.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color3")){
		hair.attr("src", "images/hair17color3.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color4")){
		hair.attr("src", "images/hair17color4.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color5")){
		hair.attr("src", "images/hair17color5.png");
		allColorPicker.hide();
		hair17color.show();
	} else if (hairIndex == 17 && hair.hasClass("color6")){
		hair.attr("src", "images/hair17color6.png");
		allColorPicker.hide();
		hair17color.show();
// hair 18 6 colors index 18
	} else if (hairIndex == 18 && hair.hasClass("color1")){
		hair.attr("src", "images/hair18color1.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color2")){
		hair.attr("src", "images/hair18color2.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color3")){
		hair.attr("src", "images/hair18color3.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color4")){
		hair.attr("src", "images/hair18color4.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color5")){
		hair.attr("src", "images/hair18color5.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == 18 && hair.hasClass("color6")){
		hair.attr("src", "images/hair18color6.png");
		allColorPicker.hide();
		hair18color.show();
// tu wstaw ostatni obraz:
	} else if (hairIndex == -1 && hair.hasClass("color1")){
		hairIndex = hairLength - 1;
		hair.attr("src", "images/hair18color1.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == -1 && hair.hasClass("color2")){
		hairIndex = hairLength - 1;
		hair.attr("src", "images/hair18color2.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == -1 && hair.hasClass("color3")){
		hairIndex = hairLength - 1;
		hair.attr("src", "images/hair18color3.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == -1 && hair.hasClass("color4")){
		hairIndex = hairLength - 1;
		hair.attr("src", "images/hair18color4.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == -1 && hair.hasClass("color5")){
		hairIndex = hairLength - 1;
		hair.attr("src", "images/hair18color5.png");
		allColorPicker.hide();
		hair18color.show();
	} else if (hairIndex == -1 && hair.hasClass("color6")){
		hairIndex = hairLength - 1;
		hair.attr("src", "images/hair18color6.png");
		allColorPicker.hide();
		hair18color.show();

	// na koniec - tu wstaw empty:	
	}else if (hairIndex == 0){
		hair.attr("src", "images/empty.png");
		allColorPicker.hide();
	};
		console.log("prev hairIndex: " + hairIndex);
});

// slider eyes zachowanie:

nextEyes.on("click", function(){
	eyesIndex +=1;
// eyes 1 5 colors index 1
	if(eyesIndex == 1 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes1color1.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes1color2.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes1color3.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes1color4.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes1color5.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1){
		eyes.attr("src", "images/eyes1color1.png");
		allColorPicker.hide();
		eyes1color.show();
// eyes 2 5 colors index 2
	} else if(eyesIndex == 2 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes2color1.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes2color2.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes2color3.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes2color4.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes2color5.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2){
		eyes.attr("src", "images/eyes2color1.png");
		allColorPicker.hide();
		eyes2color.show();
// eyes 3 5 colors index 3
	} else if(eyesIndex == 3 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes3color1.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes3color2.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes3color3.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes3color4.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes3color5.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color6")){
		eyes.attr("src", "images/eyes3color6.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3){
		eyes.attr("src", "images/eyes3color1.png");
		allColorPicker.hide();
		eyes3color.show();
// eyes 4 5 colors index 4
	} else if(eyesIndex == 4 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes4color1.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes4color2.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes4color3.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes4color4.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes4color5.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color6")){
		eyes.attr("src", "images/eyes4color6.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4){
		eyes.attr("src", "images/eyes4color1.png");
		allColorPicker.hide();
		eyes4color.show();
// eyes 5 5 colors index 5
	} else if (eyesIndex == 5 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes5color1.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes5color2.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes5color3.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes5color4.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes5color5.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5){
		eyes.attr("src", "images/eyes5color1.png");
		allColorPicker.hide();
		eyes5color.show();
// eyes 6 5 colors index 6
	} else if (eyesIndex == 6 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes6color1.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes6color2.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes6color3.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes6color4.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes6color5.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6){
		eyes.attr("src", "images/eyes6color1.png");
		allColorPicker.hide();
		eyes6color.show();
// eyes 7 5 colors index 7
	} else if (eyesIndex == 7 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes7color1.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes7color2.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes7color3.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes7color2.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7){
		eyes.attr("src", "images/eyes7color1.png");
		allColorPicker.hide();
		eyes7color.show();
// eyes 8 5 colors index 8
	} else if (eyesIndex == 8 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes8color1.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes8color2.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes8color3.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes8color4.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes8color5.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8){
		eyes.attr("src", "images/eyes8color1.png");
		allColorPicker.hide();
		eyes8color.show();
// eyes 9 5 colors index 9
	} else if (eyesIndex == 9 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes9color1.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes9color2.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes9color3.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes9color4.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes9color5.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9){
		eyes.attr("src", "images/eyes9color1.png");
		allColorPicker.hide();
		eyes9color.show();
// eyes 10 5 colors index 10
	} else if (eyesIndex == 10){
		eyes.attr("src", "images/eyes10.png");
		allColorPicker.hide();
	// eyes 11 5 colors index 11
	} else if (eyesIndex == 11){
		eyes.attr("src", "images/eyes11.png");
		allColorPicker.hide();

// ponizej zerujesz do empty
	} else if (eyesIndex == eyesLength){
		eyesIndex = 0;
		eyes.attr("src", "images/empty.png");
	};

		
console.log("next eyesIndex: " + eyesIndex);
});

prevEyes.on("click", function(){
	eyesIndex -=1;
	// eyes 1 5 colors index 1
	if(eyesIndex == 1 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes1color1.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes1color2.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes1color3.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes1color4.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes1color5.png");
		allColorPicker.hide();
		eyes1color.show();
	} else if (eyesIndex == 1){
		eyes.attr("src", "images/eyes1color1.png");
		allColorPicker.hide();
		eyes1color.show();
// eyes 2 5 colors index 2
	} else if(eyesIndex == 2 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes2color1.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes2color2.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes2color3.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes2color4.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes2color5.png");
		allColorPicker.hide();
		eyes2color.show();
	} else if (eyesIndex == 2){
		eyes.attr("src", "images/eyes2color1.png");
		allColorPicker.hide();
		eyes2color.show();
// eyes 3 5 colors index 3
	} else if(eyesIndex == 3 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes3color1.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes3color2.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes3color3.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes3color4.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes3color5.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3 && eyes.hasClass("color6")){
		eyes.attr("src", "images/eyes3color6.png");
		allColorPicker.hide();
		eyes3color.show();
	} else if (eyesIndex == 3){
		eyes.attr("src", "images/eyes3color1.png");
		allColorPicker.hide();
		eyes3color.show();
// eyes 4 5 colors index 4
	} else if(eyesIndex == 4 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes4color1.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes4color2.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes4color3.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes4color4.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes4color5.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4 && eyes.hasClass("color6")){
		eyes.attr("src", "images/eyes4color6.png");
		allColorPicker.hide();
		eyes4color.show();
	} else if (eyesIndex == 4){
		eyes.attr("src", "images/eyes4color1.png");
		allColorPicker.hide();
		eyes4color.show();
// eyes 5 5 colors index 5
	} else if (eyesIndex == 5 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes5color1.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes5color2.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes5color3.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes5color4.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes5color5.png");
		allColorPicker.hide();
		eyes5color.show();
	} else if (eyesIndex == 5){
		eyes.attr("src", "images/eyes5color1.png");
		allColorPicker.hide();
		eyes5color.show();
// eyes 6 5 colors index 6
	} else if (eyesIndex == 6 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes6color1.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes6color2.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes6color3.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes6color4.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes6color5.png");
		allColorPicker.hide();
		eyes6color.show();
	} else if (eyesIndex == 6){
		eyes.attr("src", "images/eyes6color1.png");
		allColorPicker.hide();
		eyes6color.show();
// eyes 7 5 colors index 7
	} else if (eyesIndex == 7 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes7color1.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes7color2.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes7color3.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes7color2.png");
		allColorPicker.hide();
		eyes7color.show();
	} else if (eyesIndex == 7){
		eyes.attr("src", "images/eyes7color1.png");
		allColorPicker.hide();
		eyes7color.show();
// eyes 8 5 colors index 8
	} else if (eyesIndex == 8 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes8color1.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes8color2.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes8color3.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes8color4.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes8color5.png");
		allColorPicker.hide();
		eyes8color.show();
	} else if (eyesIndex == 8){
		eyes.attr("src", "images/eyes8color1.png");
		allColorPicker.hide();
		eyes8color.show();
// eyes 9 5 colors index 9
	} else if (eyesIndex == 9 && eyes.hasClass("color1")){
		eyes.attr("src", "images/eyes9color1.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color2")){
		eyes.attr("src", "images/eyes9color2.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color3")){
		eyes.attr("src", "images/eyes9color3.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color4")){
		eyes.attr("src", "images/eyes9color4.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9 && eyes.hasClass("color5")){
		eyes.attr("src", "images/eyes9color5.png");
		allColorPicker.hide();
		eyes9color.show();
	} else if (eyesIndex == 9){
		eyes.attr("src", "images/eyes9color1.png");
		allColorPicker.hide();
		eyes9color.show();
// eyes 10 5 colors index 10
	} else if (eyesIndex == 10){
		eyes.attr("src", "images/eyes10.png");
		allColorPicker.hide();
// eyes 11 5 colors index 11
	} else if (eyesIndex == 11){
		eyes.attr("src", "images/eyes11.png");
		allColorPicker.hide();

// tu wstaw ostatni obraz:
	} else if (eyesIndex == -1){
		eyesIndex = eyesLength - 1;
		eyes.attr("src", "images/eyes11.png");
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();

	// na koniec - tu wstaw empty:	
	}else if (eyesIndex == 0){

		eyes.attr("src", "images/empty.png");
	};
		console.log("prev eyesIndex: " + eyesIndex);
});

// slider nose zachowanie:

nextNose.on("click", function(){
	noseIndex +=1;
	if(noseIndex == 1){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		nose.attr("src", "images/nose1.png");
	} else if (noseIndex == 2){
		nose.attr("src", "images/nose2.png");
	} else if (noseIndex == 3){
		nose.attr("src", "images/nose3.png");
	} else if (noseIndex == 4){
		nose.attr("src", "images/nose4.png");
	} else if (noseIndex == 5){
		nose.attr("src", "images/nose5.png");
	} else if (noseIndex == 6){
		nose.attr("src", "images/nose6.png");
	// ponizej zerujesz do empty
	} else if (noseIndex == noseLength){
		noseIndex = 0;
		nose.attr("src", "images/empty.png");
	};
console.log("next noseIndex: " + noseIndex);
});

prevNose.on("click", function(){
	noseIndex -=1;
	if(noseIndex == 1){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		nose.attr("src", "images/nose1.png");
	} else if (noseIndex == 2){
		nose.attr("src", "images/nose2.png");
	} else if (noseIndex == 3){
		nose.attr("src", "images/nose3.png");
	} else if (noseIndex == 4){
		nose.attr("src", "images/nose4.png");
	} else if (noseIndex == 5){
		nose.attr("src", "images/nose5.png");
	} else if (noseIndex == 6){
		nose.attr("src", "images/nose6.png");
// tu wstaw ostatni obraz:
	} else if (noseIndex == -1){
		noseIndex = noseLength - 1;
		nose.attr("src", "images/nose6.png");
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();

	// na koniec - tu wstaw empty:	
	}else if (noseIndex == 0){

		nose.attr("src", "images/empty.png");
	};
		console.log("prev noseIndex: " + noseIndex);
});

// slider mouth zachowanie:
nextMouth.on("click", function(){
	mouthIndex +=1;

	if(mouthIndex == 1){
		mouth.attr("src", "images/mouth1.png");
		allColorPicker.hide();
	} else if (mouthIndex == 2){
		mouth.attr("src", "images/mouth2.png");
		allColorPicker.hide();
	} else if (mouthIndex == 3){
		mouth.attr("src", "images/mouth3.png");
		allColorPicker.hide();
	} else if (mouthIndex == 4){
		mouth.attr("src", "images/mouth4.png");
		allColorPicker.hide();
	} else if (mouthIndex == 5){
		mouth.attr("src", "images/mouth5.png");
		allColorPicker.hide();
	} else if (mouthIndex == 6){
		mouth.attr("src", "images/mouth6.png");
		allColorPicker.hide();
	} else if (mouthIndex == 7){
		mouth.attr("src", "images/mouth7.png");
		allColorPicker.hide();
// mouth 8 6 colors index 8
	} else if (mouthIndex == 8 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth8color1.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth8color2.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth8color3.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth8color4.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth8color5.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth8color6.png");
		allColorPicker.hide();
		mouth8color.show();
// mouth 9 6 colors index 9
	} else if (mouthIndex == 9 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth9color1.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth9color2.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth9color3.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth9color4.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth9color5.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth9color6.png");
		allColorPicker.hide();
		mouth9color.show();
// mouth 10 6 colors index 10
	} else if (mouthIndex == 10 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth10color1.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth10color2.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth10color3.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth10color4.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth10color5.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth10color6.png");
		allColorPicker.hide();
		mouth10color.show();
// mouth 11 6 colors index 11
	} else if (mouthIndex == 11 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth11color1.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth11color2.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth11color3.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth11color4.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth11color5.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth11color6.png");
		allColorPicker.hide();
		mouth11color.show();
// mouth 12 6 colors index 12
	} else if (mouthIndex == 12 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth12color1.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth12color2.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth12color3.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth12color4.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth12color5.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth12color6.png");
		allColorPicker.hide();
		mouth12color.show();
// mouth 13
	} else if (mouthIndex == 13){
		mouth.attr("src", "images/mouth13.png");
		allColorPicker.hide();
// ponizej zerujesz do empty
	} else if (mouthIndex == mouthLength){
		mouthIndex = 0;
		mouth.attr("src", "images/empty.png");
	};
	console.log("next mouthIndex: " + mouthIndex);
});

prevMouth.on("click", function(){
	mouthIndex -=1;
	if(mouthIndex == 1){
		mouth.attr("src", "images/mouth1.png");
		allColorPicker.hide();
	} else if (mouthIndex == 2){
		mouth.attr("src", "images/mouth2.png");
		allColorPicker.hide();
	} else if (mouthIndex == 3){
		mouth.attr("src", "images/mouth3.png");
		allColorPicker.hide();
	} else if (mouthIndex == 4){
		mouth.attr("src", "images/mouth4.png");
		allColorPicker.hide();
	} else if (mouthIndex == 5){
		mouth.attr("src", "images/mouth5.png");
		allColorPicker.hide();
	} else if (mouthIndex == 6){
		mouth.attr("src", "images/mouth6.png");
		allColorPicker.hide();
	} else if (mouthIndex == 7){
		mouth.attr("src", "images/mouth7.png");
		allColorPicker.hide();
// mouth 8 6 colors index 8
	} else if (mouthIndex == 8 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth8color1.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth8color2.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth8color3.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth8color4.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth8color5.png");
		allColorPicker.hide();
		mouth8color.show();
	} else if (mouthIndex == 8 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth8color6.png");
		allColorPicker.hide();
		mouth8color.show();
// mouth 9 6 colors index 9
	} else if (mouthIndex == 9 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth9color1.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth9color2.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth9color3.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth9color4.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth9color5.png");
		allColorPicker.hide();
		mouth9color.show();
	} else if (mouthIndex == 9 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth9color6.png");
		allColorPicker.hide();
		mouth9color.show();
// mouth 10 6 colors index 10
	} else if (mouthIndex == 10 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth10color1.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth10color2.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth10color3.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth10color4.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth10color5.png");
		allColorPicker.hide();
		mouth10color.show();
	} else if (mouthIndex == 10 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth10color6.png");
		allColorPicker.hide();
		mouth10color.show();
// mouth 11 6 colors index 11
	} else if (mouthIndex == 11 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth11color1.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth11color2.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth11color3.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth11color4.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth11color5.png");
		allColorPicker.hide();
		mouth11color.show();
	} else if (mouthIndex == 11 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth11color6.png");
		allColorPicker.hide();
		mouth11color.show();
// mouth 12 6 colors index 12
	} else if (mouthIndex == 12 && mouth.hasClass("color1")){
		mouth.attr("src", "images/mouth12color1.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color2")){
		mouth.attr("src", "images/mouth12color2.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color3")){
		mouth.attr("src", "images/mouth12color3.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color4")){
		mouth.attr("src", "images/mouth12color4.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color5")){
		mouth.attr("src", "images/mouth12color5.png");
		allColorPicker.hide();
		mouth12color.show();
	} else if (mouthIndex == 12 && mouth.hasClass("color6")){
		mouth.attr("src", "images/mouth12color6.png");
		allColorPicker.hide();
		mouth12color.show();
// mouth 13
	} else if (mouthIndex == 13){
		mouth.attr("src", "images/mouth13.png");
		allColorPicker.hide();
// tu wstaw ostatni obraz:
	} else if (mouthIndex == -1){
		mouthIndex = mouthLength - 1;
		mouth.attr("src", "images/mouth13.png");
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();

	// na koniec - tu wstaw empty:	
	}else if (mouthIndex == 0){

		mouth.attr("src", "images/empty.png");
	};
		console.log("prev mouthIndex: " + mouthIndex);
});

// slider top zachowanie:
nextTop.on("click", function(){
	topIndex +=1;
// top1
	if(topIndex == 1 && top.hasClass("color1")){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		top.attr("src", "images/top1color1.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1 && top.hasClass("color2")){
		top.attr("src", "images/top1color2.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1 && top.hasClass("color3")){
		top.attr("src", "images/top1color3.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1 && top.hasClass("color4")){
		top.attr("src", "images/top1color4.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1){
		top.attr("src", "images/top1color1.png");
		allColorPicker.hide();
		top1color.show();
// top2
	} else if (topIndex == 2 && top.hasClass("color1")){
		top.attr("src", "images/top2color1.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2 && top.hasClass("color2")){
		top.attr("src", "images/top2color2.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2 && top.hasClass("color3")){
		top.attr("src", "images/top2color3.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2 && top.hasClass("color4")){
		top.attr("src", "images/top2color4.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2){
		top.attr("src", "images/top2color1.png");
		allColorPicker.hide();
		top2color.show();
// top3
	} else if (topIndex == 3 && top.hasClass("color1")){
		top.attr("src", "images/top3color1.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color2")){
		top.attr("src", "images/top3color2.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color3")){
		top.attr("src", "images/top3color3.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color4")){
		top.attr("src", "images/top3color4.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color5")){
		top.attr("src", "images/top3color5.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3){
		top.attr("src", "images/top3color1.png");
		allColorPicker.hide();
		top3color.show();
// top4
	} else if (topIndex == 4){
		top.attr("src", "images/top4.png");
		allColorPicker.hide();
// ponizej zerujesz do empty
	} else if (topIndex == topLength){
		topIndex = 0;
		top.attr("src", "images/empty.png");
		allColorPicker.hide();
	};

		
console.log("next topIndex: " + topIndex);
});

prevTop.on("click", function(){
	topIndex -=1;
// top1
	if(topIndex == 1 && top.hasClass("color1")){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		top.attr("src", "images/top1color1.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1 && top.hasClass("color2")){
		top.attr("src", "images/top1color2.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1 && top.hasClass("color3")){
		top.attr("src", "images/top1color3.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1 && top.hasClass("color4")){
		top.attr("src", "images/top1color4.png");
		allColorPicker.hide();
		top1color.show();
	} else if (topIndex == 1){
		top.attr("src", "images/top1color1.png");
		allColorPicker.hide();
		top1color.show();
// top2
	} else if (topIndex == 2 && top.hasClass("color1")){
		top.attr("src", "images/top2color1.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2 && top.hasClass("color2")){
		top.attr("src", "images/top2color2.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2 && top.hasClass("color3")){
		top.attr("src", "images/top2color3.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2 && top.hasClass("color4")){
		top.attr("src", "images/top2color4.png");
		allColorPicker.hide();
		top2color.show();
	} else if (topIndex == 2){
		top.attr("src", "images/top2color1.png");
		allColorPicker.hide();
		top2color.show();
// top3
	} else if (topIndex == 3 && top.hasClass("color1")){
		top.attr("src", "images/top3color1.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color2")){
		top.attr("src", "images/top3color2.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color3")){
		top.attr("src", "images/top3color3.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color4")){
		top.attr("src", "images/top3color4.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3 && top.hasClass("color5")){
		top.attr("src", "images/top3color5.png");
		allColorPicker.hide();
		top3color.show();
	} else if (topIndex == 3){
		top.attr("src", "images/top3color1.png");
		allColorPicker.hide();
		top3color.show();
// top4
	} else if (topIndex == 4){
		top.attr("src", "images/top4.png");
		allColorPicker.hide();

	// tu wstaw ostatni obraz:
	} else if (topIndex == -1){
		topIndex = topLength - 1;
		top.attr("src", "images/top4.png");
		allColorPicker.hide();
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();

	// na koniec - tu wstaw empty:	
	}else if (topIndex == 0){

		top.attr("src", "images/empty.png");
		allColorPicker.hide();
	};
		console.log("prev topIndex: " + topIndex);
});

// slider bottom zachowanie:
nextBottom.on("click", function(){
	bottomIndex +=1;
// bottom1
	if(bottomIndex == 1 && bottom.hasClass("color1")){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		bottom.attr("src", "images/bottom1color1.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom1color2.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom1color3.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color4")){
		bottom.attr("src", "images/bottom1color4.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color5")){
		bottom.attr("src", "images/bottom1color5.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1){
		bottom.attr("src", "images/bottom1color1.png");
		allColorPicker.hide();
		bottom1color.show();
// bottom2
	} else if (bottomIndex == 2 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom2color1.png");
		allColorPicker.hide();
		bottom2color.show();
	} else if (bottomIndex == 2 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom2color2.png");
		allColorPicker.hide();
		bottom2color.show();
	} else if (bottomIndex == 2 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom2color3.png");
		allColorPicker.hide();
		bottom2color.show();
	} else if (bottomIndex == 2){
		bottom.attr("src", "images/bottom2color1.png");
		allColorPicker.hide();
		bottom2color.show();
// bottom3
	} else if (bottomIndex == 3 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom3color1.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom3color2.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom3color3.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color4")){
		bottom.attr("src", "images/bottom3color4.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color5")){
		bottom.attr("src", "images/bottom3color5.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color6")){
		bottom.attr("src", "images/bottom3color6.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3){
		bottom.attr("src", "images/bottom3color1.png");
		allColorPicker.hide();
		bottom3color.show();
// bottom4
	} else if (bottomIndex == 4 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom4color1.png");
		allColorPicker.hide();
		bottom4color.show();
	} else if (bottomIndex == 4 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom4color2.png");
		allColorPicker.hide();
		bottom4color.show();
	} else if (bottomIndex == 4 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom4color3.png");
		allColorPicker.hide();
		bottom4color.show();
	} else if (bottomIndex == 4){
		bottom.attr("src", "images/bottom4color1.png");
		allColorPicker.hide();
		bottom4color.show();
// bottom5
	} else if (bottomIndex == 5 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom5color1.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom5color2.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom5color3.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5 && bottom.hasClass("color4")){
		bottom.attr("src", "images/bottom5color4.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5){
		bottom.attr("src", "images/bottom5color1.png");
		allColorPicker.hide();
		bottom5color.show();


	// ponizej zerujesz do empty
	} else if (bottomIndex == bottomLength){
		bottomIndex = 0;
		bottom.attr("src", "images/empty.png");
		allColorPicker.hide();
	};

		
console.log("next bottomIndex: " + bottomIndex);
});

prevBottom.on("click", function(){
	bottomIndex -=1;
	// bottom1
	if(bottomIndex == 1 && bottom.hasClass("color1")){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		bottom.attr("src", "images/bottom1color1.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom1color2.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom1color3.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color4")){
		bottom.attr("src", "images/bottom1color4.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1 && bottom.hasClass("color5")){
		bottom.attr("src", "images/bottom1color5.png");
		allColorPicker.hide();
		bottom1color.show();
	} else if (bottomIndex == 1){
		bottom.attr("src", "images/bottom1color1.png");
		allColorPicker.hide();
		bottom1color.show();
// bottom2
	} else if (bottomIndex == 2 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom2color1.png");
		allColorPicker.hide();
		bottom2color.show();
	} else if (bottomIndex == 2 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom2color2.png");
		allColorPicker.hide();
		bottom2color.show();
	} else if (bottomIndex == 2 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom2color3.png");
		allColorPicker.hide();
		bottom2color.show();
	} else if (bottomIndex == 2){
		bottom.attr("src", "images/bottom2color1.png");
		allColorPicker.hide();
		bottom2color.show();
// bottom3
	} else if (bottomIndex == 3 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom3color1.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom3color2.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom3color3.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color4")){
		bottom.attr("src", "images/bottom3color4.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color5")){
		bottom.attr("src", "images/bottom3color5.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3 && bottom.hasClass("color6")){
		bottom.attr("src", "images/bottom3color6.png");
		allColorPicker.hide();
		bottom3color.show();
	} else if (bottomIndex == 3){
		bottom.attr("src", "images/bottom3color1.png");
		allColorPicker.hide();
		bottom3color.show();
// bottom4
	} else if (bottomIndex == 4 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom4color1.png");
		allColorPicker.hide();
		bottom4color.show();
	} else if (bottomIndex == 4 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom4color2.png");
		allColorPicker.hide();
		bottom4color.show();
	} else if (bottomIndex == 4 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom4color3.png");
		allColorPicker.hide();
		bottom4color.show();
	} else if (bottomIndex == 4){
		bottom.attr("src", "images/bottom4color1.png");
		allColorPicker.hide();
		bottom4color.show();
// bottom5
	} else if (bottomIndex == 5 && bottom.hasClass("color1")){
		bottom.attr("src", "images/bottom5color1.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5 && bottom.hasClass("color2")){
		bottom.attr("src", "images/bottom5color2.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5 && bottom.hasClass("color3")){
		bottom.attr("src", "images/bottom5color3.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5 && bottom.hasClass("color4")){
		bottom.attr("src", "images/bottom5color4.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == 5){
		bottom.attr("src", "images/bottom5color1.png");
		allColorPicker.hide();
		bottom5color.show();

	// tu wstaw ostatni obraz:
	} else if (bottomIndex == -1 && bottom.hasClass("color1")){
		bottomIndex = bottomLength - 1;
		bottom.attr("src", "images/bottom5color1.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == -1 && bottom.hasClass("color2")){
		bottomIndex = bottomLength - 1;
		bottom.attr("src", "images/bottom5color2.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == -1 && bottom.hasClass("color3")){
		bottomIndex = bottomLength - 1;
		bottom.attr("src", "images/bottom5color3.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == -1 && bottom.hasClass("color4")){
		bottomIndex = bottomLength - 1;
		bottom.attr("src", "images/bottom5color4.png");
		allColorPicker.hide();
		bottom5color.show();
	} else if (bottomIndex == -1){
		bottomIndex = bottomLength - 1;
		bottom.attr("src", "images/bottom5color1.png");
		allColorPicker.hide();
		bottom5color.show();

	// na koniec - tu wstaw empty:	
	}else if (bottomIndex == 0){

		bottom.attr("src", "images/empty.png");
		allColorPicker.hide();
	};
		console.log("prev bottomIndex: " + bottomIndex);
});

// slider shoes zachowanie:
nextShoes.on("click", function(){
	shoesIndex +=1;
	if(shoesIndex == 1){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		shoes.attr("src", "images/shoes1.png");
	} else if (shoesIndex == 2){
		shoes.attr("src", "images/shoes2.png");
	// ponizej zerujesz do empty
	} else if (shoesIndex == shoesLength){
		shoesIndex = 0;
		shoes.attr("src", "images/empty.png");
	};

		
console.log("next shoesIndex: " + shoesIndex);
});

prevShoes.on("click", function(){
	shoesIndex -=1;
	if(shoesIndex == 1){
		shoes.attr("src", "images/shoes1.png");
	// tutaj kolejne obrazki do konca listy: 2,3,4...
	} else if (shoesIndex == 2){
		shoes.attr("src", "images/shoes2.png");

	// tu wstaw ostatni obraz:
	} else if (shoesIndex == -1){
		shoesIndex = shoesLength - 1;
		shoes.attr("src", "images/shoes2.png");
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();

	// na koniec - tu wstaw empty:	
	}else if (shoesIndex == 0){

		shoes.attr("src", "images/empty.png");
	};
		console.log("prev shoesIndex: " + shoesIndex);
});

// slider gadget zachowanie:
nextGadget.on("click", function(){
		gadgetIndex +=1;
	if(gadgetIndex == 1){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		gadget.attr("src", "images/gadget1.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
// gadget 2 3 colors
	} else if (gadgetIndex == 2 && gadget.hasClass("color1")){
		gadget.attr("src", "images/gadget2color1.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
	} else if (gadgetIndex == 2 && gadget.hasClass("color2")){
		gadget.attr("src", "images/gadget2color2.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
	} else if (gadgetIndex == 2 && gadget.hasClass("color3")){
		gadget.attr("src", "images/gadget2color3.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
	} else if (gadgetIndex == 2){
		gadget.attr("src", "images/gadget2color1.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
// gadget 3
	} else if (gadgetIndex == 3){
		gadget.attr("src", "images/gadget3.png");
		allColorPicker.hide();
// gadget 4
	} else if (gadgetIndex == 4){
		gadget.attr("src", "images/gadget4.png");
		allColorPicker.hide();
// gadget 5
	} else if (gadgetIndex == 5){
		gadget.attr("src", "images/gadget5.png");
		allColorPicker.hide();
// ponizej zerujesz do empty
	} else if (gadgetIndex == gadgetLength){
		gadgetIndex = 0;
		allColorPicker.hide();
		gadget.attr("src", "images/empty.png");
	};

		
console.log("next gadgetIndex: " + gadgetIndex);
});

prevGadget.on("click", function(){
		gadgetIndex -=1;
	if(gadgetIndex == 1){
		// dopracować animację: show, hide, slideup, slidedown lub animate fade in fade out
		gadget.attr("src", "images/gadget1.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
// gadget 2 3 colors
	} else if (gadgetIndex == 2 && gadget.hasClass("color1")){
		gadget.attr("src", "images/gadget2color1.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
	} else if (gadgetIndex == 2 && gadget.hasClass("color2")){
		gadget.attr("src", "images/gadget2color2.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
	} else if (gadgetIndex == 2 && gadget.hasClass("color3")){
		gadget.attr("src", "images/gadget2color3.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
	} else if (gadgetIndex == 2){
		gadget.attr("src", "images/gadget2color1.png");
		// ukrycie wszystkich kolor pickerów:
		allColorPicker.hide();
		// poakzanie tego jednego konkretnego kolor pickera:
		gadget2color.show();
// gadget 3
	} else if (gadgetIndex == 3){
		gadget.attr("src", "images/gadget3.png");
		allColorPicker.hide();
// gadget 4
	} else if (gadgetIndex == 4){
		gadget.attr("src", "images/gadget4.png");
		allColorPicker.hide();
// gadget 5
	} else if (gadgetIndex == 5){
		gadget.attr("src", "images/gadget5.png");
		allColorPicker.hide();
// tu wstaw ostatni obraz - jesli ostatni ma wybor koloru, to tez warunki color1, color2 itd.:
	} else if (gadgetIndex == -1){
		gadgetIndex = gadgetLength - 1;
		
		gadget.attr("src", "images/gadget5.png");
		allColorPicker.hide();
		// uwaga na to miejsce: ponizej wklejasz tylko jeśli dana probka ma sowją palete kolorow
		// $("#gender2color").show();

	// na koniec - tu wstaw empty:
	}else if (gadgetIndex == 0){
		allColorPicker.hide();
		gadget.attr("src", "images/empty.png");
	};
		console.log("prev gadgetIndex: " + gadgetIndex);
});

// slider back zachowanie:
nextBack.on("click", function(){
	backIndex +=1;
	if(backIndex == 1){
		body.css("background-color", backColor1);
	} else if (backIndex == 2){
		body.css("background-color", backColor2);
	} else if (backIndex == 3){
		body.css("background-color", backColor3);
	} else if (backIndex == 4){
		body.css("background-color", backColor4);
	} else if (backIndex == 5){
		body.css("background-color", backColor5);
	} else if (backIndex == 6){
		body.css("background-color", backColor6);
	} else if (backIndex == 7){
		body.css("background-color", backColor7);
	} else if (backIndex == 8){
		body.css("background-color", backColor8);
	// ponizej zerujesz koloru 0 okreslonego w style.css
	} else if (backIndex == backLength){
		backIndex = 0;
		body.css("background-color", backColor0);
	};

		
console.log("next backIndex: " + backIndex);
});

prevBack.on("click", function(){
	backIndex -=1;
	if(backIndex == 1){
		body.css("background-color", backColor1);
	} else if (backIndex == 2){
		body.css("background-color", backColor2);
	} else if (backIndex == 3){
		body.css("background-color", backColor3);
	} else if (backIndex == 4){
		body.css("background-color", backColor4);
	} else if (backIndex == 5){
		body.css("background-color", backColor5);
	} else if (backIndex == 6){
		body.css("background-color", backColor6);
	} else if (backIndex == 7){
		body.css("background-color", backColor7);
	} else if (backIndex == 8){
		body.css("background-color", backColor8);
// tu wstaw ostatnie tlo:
	} else if (backIndex == -1){
		backIndex = backLength - 1;
		body.css("background-color", backColor8);
	// na koniec - zerujesz koloru 0 okreslonego w style.css
	} else if (backIndex == 0){
		body.css("background-color", backColor0);
	};
		console.log("prev backIndex: " + backIndex);
});

	// strzalka dol menu klikane myszką
menuDown.on("click", function(event){
		if (chooseSkin.hasClass("active")){
			chooseHair.trigger("click");
		} else if (chooseHair.hasClass("active")){
			chooseEyes.trigger("click");
		} else if (chooseEyes.hasClass("active")){
			chooseNose.trigger("click");
		} else if (chooseNose.hasClass("active")){
			chooseMouth.trigger("click");
		} else if (chooseMouth.hasClass("active")){
			chooseTop.trigger("click");
		} else if (chooseTop.hasClass("active")){
			chooseBottom.trigger("click");
		} else if (chooseBottom.hasClass("active")){
			chooseShoes.trigger("click");
		} else if (chooseShoes.hasClass("active")){
			chooseGadget.trigger("click");
		} else if (chooseGadget.hasClass("active")){
			chooseBack.trigger("click");
		} else if (chooseBack.hasClass("active")){
			chooseSkin.trigger("click");
		};
	});
	// strzalka gora dol menu klikane myszką
menuUp.on("click", function(event){
		if (chooseSkin.hasClass("active")){
			chooseBack.trigger("click");
		} else if (chooseHair.hasClass("active")){
			chooseSkin.trigger("click");
		} else if (chooseEyes.hasClass("active")){
			chooseHair.trigger("click");
		} else if (chooseNose.hasClass("active")){
			chooseEyes.trigger("click");
		} else if (chooseMouth.hasClass("active")){
			chooseNose.trigger("click");
		} else if (chooseTop.hasClass("active")){
			chooseMouth.trigger("click");
		} else if (chooseBottom.hasClass("active")){
			chooseTop.trigger("click");
		} else if (chooseShoes.hasClass("active")){
			chooseBottom.trigger("click");
		} else if (chooseGadget.hasClass("active")){
			chooseShoes.trigger("click");
		} else if (chooseBack.hasClass("active")){
			chooseGadget.trigger("click");
		};	
	});

doneButton.on("click", function(event){
	alert("Wydarzenie po kliknięciu OK! - canvas");
		});

// podpięcie strzalek prawo lewo -> next prev
// potem dopisz jeszcze enter - koczy cala zabawe
// każda pozycja w menu mieć swój wlasny warunek, żeby dzialaly niezależnie
	$(document).on("keydown", function(event){
		// next dla skin:
		if (event.keyCode === 39 && chooseSkin.hasClass("active")){
			nextSkin.trigger("click");
		// next dla hair:
		} else if (event.keyCode === 39 && chooseHair.hasClass("active")){
			nextHair.trigger("click");
		} else if (event.keyCode === 39 && chooseEyes.hasClass("active")){
			nextEyes.trigger("click");
		} else if (event.keyCode === 39 && chooseNose.hasClass("active")){
			nextNose.trigger("click");
		} else if (event.keyCode === 39 && chooseMouth.hasClass("active")){
			nextMouth.trigger("click");
		} else if (event.keyCode === 39 && chooseTop.hasClass("active")){
			nextTop.trigger("click");
		} else if (event.keyCode === 39 && chooseBottom.hasClass("active")){
			nextBottom.trigger("click");
		} else if (event.keyCode === 39 && chooseShoes.hasClass("active")){
			nextShoes.trigger("click");
		} else if (event.keyCode === 39 && chooseGadget.hasClass("active")){
			nextGadget.trigger("click");
		} else if (event.keyCode === 39 && chooseBack.hasClass("active")){
			nextBack.trigger("click");
		};

		// prev dla skin:
		if (event.keyCode === 37 && chooseSkin.hasClass("active")){
			prevSkin.trigger("click");
		// prev dla hair:
		} else if (event.keyCode === 37 && chooseHair.hasClass("active")){
			prevHair.trigger("click");
		} else if (event.keyCode === 37 && chooseEyes.hasClass("active")){
			prevEyes.trigger("click");
		} else if (event.keyCode === 37 && chooseNose.hasClass("active")){
			prevNose.trigger("click");
		} else if (event.keyCode === 37 && chooseMouth.hasClass("active")){
			prevMouth.trigger("click");
		} else if (event.keyCode === 37 && chooseTop.hasClass("active")){
			prevTop.trigger("click");
		} else if (event.keyCode === 37 && chooseBottom.hasClass("active")){
			prevBottom.trigger("click");
		} else if (event.keyCode === 37 && chooseShoes.hasClass("active")){
			prevShoes.trigger("click");
		} else if (event.keyCode === 37 && chooseGadget.hasClass("active")){
			prevGadget.trigger("click");
		} else if (event.keyCode === 37 && chooseBack.hasClass("active")){
			prevBack.trigger("click");
		};
// strzalka dol z klawiatury
		if (event.keyCode === 40){
			menuDown.trigger("click");
		};
// strzalka gora z klawiatury
		if (event.keyCode === 38){
			menuUp.trigger("click");
		};
		if (event.keyCode === 13){
			doneButton.trigger("click");
		};
});



// opcje wyboru koloru dla konkretnego elementu
// hair1color
hair1color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	hair.attr("src", "images/hair1color1.png").removeClass().addClass("color1");
});
hair1color2.on("click", function(){
	hair.attr("src", "images/hair1color2.png").removeClass().addClass("color2");
});
hair1color3.on("click", function(){
	hair.attr("src", "images/hair1color3.png").removeClass().addClass("color3");
});
hair1color4.on("click", function(){
	hair.attr("src", "images/hair1color4.png").removeClass().addClass("color4");
});
hair1color5.on("click", function(){
	hair.attr("src", "images/hair1color5.png").removeClass().addClass("color5");
});
hair1color6.on("click", function(){
	hair.attr("src", "images/hair1color6.png").removeClass().addClass("color6");
});
// hair2color
hair2color1.on("click", function(){
	hair.attr("src", "images/hair2color1.png").removeClass().addClass("color1");
});
hair2color2.on("click", function(){
	hair.attr("src", "images/hair2color2.png").removeClass().addClass("color2");
});
hair2color3.on("click", function(){
	hair.attr("src", "images/hair2color3.png").removeClass().addClass("color3");
});
hair2color4.on("click", function(){
	hair.attr("src", "images/hair2color4.png").removeClass().addClass("color4");
});
hair2color5.on("click", function(){
	hair.attr("src", "images/hair2color5.png").removeClass().addClass("color5");
});
hair2color6.on("click", function(){
	hair.attr("src", "images/hair2color6.png").removeClass().addClass("color6");
});
// hair3color
hair3color1.on("click", function(){
	hair.attr("src", "images/hair3color1.png").removeClass().addClass("color1");
});
hair3color2.on("click", function(){
	hair.attr("src", "images/hair3color2.png").removeClass().addClass("color2");
});
hair3color3.on("click", function(){
	hair.attr("src", "images/hair3color3.png").removeClass().addClass("color3");
});
hair3color4.on("click", function(){
	hair.attr("src", "images/hair3color4.png").removeClass().addClass("color4");
});
hair3color5.on("click", function(){
	hair.attr("src", "images/hair3color5.png").removeClass().addClass("color5");
});
hair3color6.on("click", function(){
	hair.attr("src", "images/hair3color6.png").removeClass().addClass("color6");
});
// hair4color
hair4color1.on("click", function(){
	hair.attr("src", "images/hair4color1.png").removeClass().addClass("color1");
});
hair4color2.on("click", function(){
	hair.attr("src", "images/hair4color2.png").removeClass().addClass("color2");
});
hair4color3.on("click", function(){
	hair.attr("src", "images/hair4color3.png").removeClass().addClass("color3");
});
hair4color4.on("click", function(){
	hair.attr("src", "images/hair4color4.png").removeClass().addClass("color4");
});
hair4color5.on("click", function(){
	hair.attr("src", "images/hair4color5.png").removeClass().addClass("color5");
});
hair4color6.on("click", function(){
	hair.attr("src", "images/hair4color6.png").removeClass().addClass("color6");
});
// hair5color
hair5color1.on("click", function(){
	hair.attr("src", "images/hair5color1.png").removeClass().addClass("color1");
});
hair5color2.on("click", function(){
	hair.attr("src", "images/hair5color2.png").removeClass().addClass("color2");
});
hair5color3.on("click", function(){
	hair.attr("src", "images/hair5color3.png").removeClass().addClass("color3");
});
hair5color4.on("click", function(){
	hair.attr("src", "images/hair5color4.png").removeClass().addClass("color4");
});
hair5color5.on("click", function(){
	hair.attr("src", "images/hair5color5.png").removeClass().addClass("color5");
});
hair5color6.on("click", function(){
	hair.attr("src", "images/hair5color6.png").removeClass().addClass("color6");
});
// hair6color
hair6color1.on("click", function(){
	hair.attr("src", "images/hair6color1.png").removeClass().addClass("color1");
});
hair6color2.on("click", function(){
	hair.attr("src", "images/hair6color2.png").removeClass().addClass("color2");
});
hair6color3.on("click", function(){
	hair.attr("src", "images/hair6color3.png").removeClass().addClass("color3");
});
hair6color4.on("click", function(){
	hair.attr("src", "images/hair6color4.png").removeClass().addClass("color4");
});
hair6color5.on("click", function(){
	hair.attr("src", "images/hair6color5.png").removeClass().addClass("color5");
});
hair6color6.on("click", function(){
	hair.attr("src", "images/hair6color6.png").removeClass().addClass("color6");
});
// hair7color
hair7color1.on("click", function(){
	hair.attr("src", "images/hair7color1.png").removeClass().addClass("color1");
});
hair7color2.on("click", function(){
	hair.attr("src", "images/hair7color2.png").removeClass().addClass("color2");
});
hair7color3.on("click", function(){
	hair.attr("src", "images/hair7color3.png").removeClass().addClass("color3");
});
hair7color4.on("click", function(){
	hair.attr("src", "images/hair7color4.png").removeClass().addClass("color4");
});
hair7color5.on("click", function(){
	hair.attr("src", "images/hair7color5.png").removeClass().addClass("color5");
});
hair7color6.on("click", function(){
	hair.attr("src", "images/hair7color6.png").removeClass().addClass("color6");
});
// hair8color
hair8color1.on("click", function(){
	hair.attr("src", "images/hair8color1.png").removeClass().addClass("color1");
});
hair8color2.on("click", function(){
	hair.attr("src", "images/hair8color2.png").removeClass().addClass("color2");
});
hair8color3.on("click", function(){
	hair.attr("src", "images/hair8color3.png").removeClass().addClass("color3");
});
hair8color4.on("click", function(){
	hair.attr("src", "images/hair8color4.png").removeClass().addClass("color4");
});
hair8color5.on("click", function(){
	hair.attr("src", "images/hair8color5.png").removeClass().addClass("color5");
});
hair8color6.on("click", function(){
	hair.attr("src", "images/hair8color6.png").removeClass().addClass("color6");
});
// hair9color
hair9color1.on("click", function(){
	hair.attr("src", "images/hair9color1.png").removeClass().addClass("color1");
});
hair9color2.on("click", function(){
	hair.attr("src", "images/hair9color2.png").removeClass().addClass("color2");
});
hair9color3.on("click", function(){
	hair.attr("src", "images/hair9color3.png").removeClass().addClass("color3");
});
hair9color4.on("click", function(){
	hair.attr("src", "images/hair9color4.png").removeClass().addClass("color4");
});
hair9color5.on("click", function(){
	hair.attr("src", "images/hair9color5.png").removeClass().addClass("color5");
});
hair9color6.on("click", function(){
	hair.attr("src", "images/hair9color6.png").removeClass().addClass("color6");
});
// hair10color
hair10color1.on("click", function(){
	hair.attr("src", "images/hair10color1.png").removeClass().addClass("color1");
});
hair10color2.on("click", function(){
	hair.attr("src", "images/hair10color2.png").removeClass().addClass("color2");
});
hair10color3.on("click", function(){
	hair.attr("src", "images/hair10color3.png").removeClass().addClass("color3");
});
hair10color4.on("click", function(){
	hair.attr("src", "images/hair10color4.png").removeClass().addClass("color4");
});
hair10color5.on("click", function(){
	hair.attr("src", "images/hair10color5.png").removeClass().addClass("color5");
});
hair10color6.on("click", function(){
	hair.attr("src", "images/hair10color6.png").removeClass().addClass("color6");
});
// hair11color
hair11color1.on("click", function(){
	hair.attr("src", "images/hair11color1.png").removeClass().addClass("color1");
});
hair11color2.on("click", function(){
	hair.attr("src", "images/hair11color2.png").removeClass().addClass("color2");
});
hair11color3.on("click", function(){
	hair.attr("src", "images/hair11color3.png").removeClass().addClass("color3");
});
hair11color4.on("click", function(){
	hair.attr("src", "images/hair11color4.png").removeClass().addClass("color4");
});
hair11color5.on("click", function(){
	hair.attr("src", "images/hair11color5.png").removeClass().addClass("color5");
});
hair11color6.on("click", function(){
	hair.attr("src", "images/hair11color6.png").removeClass().addClass("color6");
});
// hair12color
hair12color1.on("click", function(){
	hair.attr("src", "images/hair12color1.png").removeClass().addClass("color1");
});
hair12color2.on("click", function(){
	hair.attr("src", "images/hair12color2.png").removeClass().addClass("color2");
});
hair12color3.on("click", function(){
	hair.attr("src", "images/hair12color3.png").removeClass().addClass("color3");
});
hair12color4.on("click", function(){
	hair.attr("src", "images/hair12color4.png").removeClass().addClass("color4");
});
hair12color5.on("click", function(){
	hair.attr("src", "images/hair12color5.png").removeClass().addClass("color5");
});
hair12color6.on("click", function(){
	hair.attr("src", "images/hair12color6.png").removeClass().addClass("color6");
});
// hair13color
hair13color1.on("click", function(){
	hair.attr("src", "images/hair13color1.png").removeClass().addClass("color1");
});
hair13color2.on("click", function(){
	hair.attr("src", "images/hair13color2.png").removeClass().addClass("color2");
});
hair13color3.on("click", function(){
	hair.attr("src", "images/hair13color3.png").removeClass().addClass("color3");
});
hair13color4.on("click", function(){
	hair.attr("src", "images/hair13color4.png").removeClass().addClass("color4");
});
hair13color5.on("click", function(){
	hair.attr("src", "images/hair13color5.png").removeClass().addClass("color5");
});
hair13color6.on("click", function(){
	hair.attr("src", "images/hair13color6.png").removeClass().addClass("color6");
});
// hair14color
hair14color1.on("click", function(){
	hair.attr("src", "images/hair14color1.png").removeClass().addClass("color1");
});
hair14color2.on("click", function(){
	hair.attr("src", "images/hair14color2.png").removeClass().addClass("color2");
});
hair14color3.on("click", function(){
	hair.attr("src", "images/hair14color3.png").removeClass().addClass("color3");
});
hair14color4.on("click", function(){
	hair.attr("src", "images/hair14color4.png").removeClass().addClass("color4");
});
hair14color5.on("click", function(){
	hair.attr("src", "images/hair14color5.png").removeClass().addClass("color5");
});
hair14color6.on("click", function(){
	hair.attr("src", "images/hair14color6.png").removeClass().addClass("color6");
});
// hair15color
hair15color1.on("click", function(){
	hair.attr("src", "images/hair15color1.png").removeClass().addClass("color1");
});
hair15color2.on("click", function(){
	hair.attr("src", "images/hair15color2.png").removeClass().addClass("color2");
});
hair15color3.on("click", function(){
	hair.attr("src", "images/hair15color3.png").removeClass().addClass("color3");
});
hair15color4.on("click", function(){
	hair.attr("src", "images/hair15color4.png").removeClass().addClass("color4");
});
hair15color5.on("click", function(){
	hair.attr("src", "images/hair15color5.png").removeClass().addClass("color5");
});
hair15color6.on("click", function(){
	hair.attr("src", "images/hair15color6.png").removeClass().addClass("color6");
});
// hair16color
hair16color1.on("click", function(){
	hair.attr("src", "images/hair16color1.png").removeClass().addClass("color1");
});
hair16color2.on("click", function(){
	hair.attr("src", "images/hair16color2.png").removeClass().addClass("color2");
});
hair16color3.on("click", function(){
	hair.attr("src", "images/hair16color3.png").removeClass().addClass("color3");
});
hair16color4.on("click", function(){
	hair.attr("src", "images/hair16color4.png").removeClass().addClass("color4");
});
hair16color5.on("click", function(){
	hair.attr("src", "images/hair16color5.png").removeClass().addClass("color5");
});
hair16color6.on("click", function(){
	hair.attr("src", "images/hair16color6.png").removeClass().addClass("color6");
});
// hair17color
hair17color1.on("click", function(){
	hair.attr("src", "images/hair17color1.png").removeClass().addClass("color1");
});
hair17color2.on("click", function(){
	hair.attr("src", "images/hair17color2.png").removeClass().addClass("color2");
});
hair17color3.on("click", function(){
	hair.attr("src", "images/hair17color3.png").removeClass().addClass("color3");
});
hair17color4.on("click", function(){
	hair.attr("src", "images/hair17color4.png").removeClass().addClass("color4");
});
hair17color5.on("click", function(){
	hair.attr("src", "images/hair17color5.png").removeClass().addClass("color5");
});
hair17color6.on("click", function(){
	hair.attr("src", "images/hair17color6.png").removeClass().addClass("color6");
});
// hair18color
hair18color1.on("click", function(){
	hair.attr("src", "images/hair18color1.png").removeClass().addClass("color1");
});
hair18color2.on("click", function(){
	hair.attr("src", "images/hair18color2.png").removeClass().addClass("color2");
});
hair18color3.on("click", function(){
	hair.attr("src", "images/hair18color3.png").removeClass().addClass("color3");
});
hair18color4.on("click", function(){
	hair.attr("src", "images/hair18color4.png").removeClass().addClass("color4");
});
hair18color5.on("click", function(){
	hair.attr("src", "images/hair18color5.png").removeClass().addClass("color5");
});
hair18color6.on("click", function(){
	hair.attr("src", "images/hair18color6.png").removeClass().addClass("color6");
});
// eyes1color
eyes1color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	eyes.attr("src", "images/eyes1color1.png").removeClass().addClass("color1");
});
eyes1color2.on("click", function(){
	eyes.attr("src", "images/eyes1color2.png").removeClass().addClass("color2");
});
eyes1color3.on("click", function(){
	eyes.attr("src", "images/eyes1color3.png").removeClass().addClass("color3");
});
eyes1color4.on("click", function(){
	eyes.attr("src", "images/eyes1color4.png").removeClass().addClass("color4");
});
eyes1color5.on("click", function(){
	eyes.attr("src", "images/eyes1color5.png").removeClass().addClass("color5");
});
// eyes2color
eyes2color1.on("click", function(){
	eyes.attr("src", "images/eyes2color1.png").removeClass().addClass("color1");
});
eyes2color2.on("click", function(){
	eyes.attr("src", "images/eyes2color2.png").removeClass().addClass("color2");
});
eyes2color3.on("click", function(){
	eyes.attr("src", "images/eyes2color3.png").removeClass().addClass("color3");
});
eyes2color4.on("click", function(){
	eyes.attr("src", "images/eyes2color4.png").removeClass().addClass("color4");
});
eyes2color5.on("click", function(){
	eyes.attr("src", "images/eyes2color5.png").removeClass().addClass("color5");
});
// eyes3color
eyes3color1.on("click", function(){
	eyes.attr("src", "images/eyes3color1.png").removeClass().addClass("color1");
});
eyes3color2.on("click", function(){
	eyes.attr("src", "images/eyes3color2.png").removeClass().addClass("color2");
});
eyes3color3.on("click", function(){
	eyes.attr("src", "images/eyes3color3.png").removeClass().addClass("color3");
});
eyes3color4.on("click", function(){
	eyes.attr("src", "images/eyes3color4.png").removeClass().addClass("color4");
});
eyes3color5.on("click", function(){
	eyes.attr("src", "images/eyes3color5.png").removeClass().addClass("color5");
});
eyes3color6.on("click", function(){
	eyes.attr("src", "images/eyes3color6.png").removeClass().addClass("color6");
});
// eyes4color
eyes4color1.on("click", function(){
	eyes.attr("src", "images/eyes4color1.png").removeClass().addClass("color1");
});
eyes4color2.on("click", function(){
	eyes.attr("src", "images/eyes4color2.png").removeClass().addClass("color2");
});
eyes4color3.on("click", function(){
	eyes.attr("src", "images/eyes4color3.png").removeClass().addClass("color3");
});
eyes4color4.on("click", function(){
	eyes.attr("src", "images/eyes4color4.png").removeClass().addClass("color4");
});
eyes4color5.on("click", function(){
	eyes.attr("src", "images/eyes4color5.png").removeClass().addClass("color5");
});
eyes4color6.on("click", function(){
	eyes.attr("src", "images/eyes4color6.png").removeClass().addClass("color6");
});
// eyes5color
eyes5color1.on("click", function(){
	eyes.attr("src", "images/eyes5color1.png").removeClass().addClass("color1");
});
eyes5color2.on("click", function(){
	eyes.attr("src", "images/eyes5color2.png").removeClass().addClass("color2");
});
eyes5color3.on("click", function(){
	eyes.attr("src", "images/eyes5color3.png").removeClass().addClass("color3");
});
eyes5color4.on("click", function(){
	eyes.attr("src", "images/eyes5color4.png").removeClass().addClass("color4");
});
eyes5color5.on("click", function(){
	eyes.attr("src", "images/eyes5color5.png").removeClass().addClass("color5");
});
// eyes6color
eyes6color1.on("click", function(){
	eyes.attr("src", "images/eyes6color1.png").removeClass().addClass("color1");
});
eyes6color2.on("click", function(){
	eyes.attr("src", "images/eyes6color2.png").removeClass().addClass("color2");
});
eyes6color3.on("click", function(){
	eyes.attr("src", "images/eyes6color3.png").removeClass().addClass("color3");
});
eyes6color4.on("click", function(){
	eyes.attr("src", "images/eyes6color4.png").removeClass().addClass("color4");
});
eyes6color5.on("click", function(){
	eyes.attr("src", "images/eyes6color5.png").removeClass().addClass("color5");
});
// eyes7color
eyes7color1.on("click", function(){
	eyes.attr("src", "images/eyes7color1.png").removeClass().addClass("color1");
});
eyes7color2.on("click", function(){
	eyes.attr("src", "images/eyes7color2.png").removeClass().addClass("color5");
});
eyes7color3.on("click", function(){
	eyes.attr("src", "images/eyes7color3.png").removeClass().addClass("color3");
});
// eyes8color
eyes8color1.on("click", function(){
	eyes.attr("src", "images/eyes8color1.png").removeClass().addClass("color1");
});
eyes8color2.on("click", function(){
	eyes.attr("src", "images/eyes8color2.png").removeClass().addClass("color2");
});
eyes8color3.on("click", function(){
	eyes.attr("src", "images/eyes8color3.png").removeClass().addClass("color3");
});
eyes8color4.on("click", function(){
	eyes.attr("src", "images/eyes8color4.png").removeClass().addClass("color4");
});
eyes8color5.on("click", function(){
	eyes.attr("src", "images/eyes8color5.png").removeClass().addClass("color5");
});
// eyes9color
eyes9color1.on("click", function(){
	eyes.attr("src", "images/eyes9color1.png").removeClass().addClass("color1");
});
eyes9color2.on("click", function(){
	eyes.attr("src", "images/eyes9color2.png").removeClass().addClass("color2");
});
eyes9color3.on("click", function(){
	eyes.attr("src", "images/eyes9color3.png").removeClass().addClass("color3");
});
eyes9color4.on("click", function(){
	eyes.attr("src", "images/eyes9color4.png").removeClass().addClass("color4");
});
eyes9color5.on("click", function(){
	eyes.attr("src", "images/eyes9color5.png").removeClass().addClass("color5");
});
// mouth8color
mouth8color1.on("click", function(){
	mouth.attr("src", "images/mouth8color1.png").removeClass().addClass("color1");
});
mouth8color2.on("click", function(){
	mouth.attr("src", "images/mouth8color2.png").removeClass().addClass("color2");
});
mouth8color3.on("click", function(){
	mouth.attr("src", "images/mouth8color3.png").removeClass().addClass("color3");
});
mouth8color4.on("click", function(){
	mouth.attr("src", "images/mouth8color4.png").removeClass().addClass("color4");
});
mouth8color5.on("click", function(){
	mouth.attr("src", "images/mouth8color5.png").removeClass().addClass("color5");
});
mouth8color6.on("click", function(){
	mouth.attr("src", "images/mouth8color6.png").removeClass().addClass("color6");
});
// mouth9color
mouth9color1.on("click", function(){
	mouth.attr("src", "images/mouth9color1.png").removeClass().addClass("color1");
});
mouth9color2.on("click", function(){
	mouth.attr("src", "images/mouth9color2.png").removeClass().addClass("color2");
});
mouth9color3.on("click", function(){
	mouth.attr("src", "images/mouth9color3.png").removeClass().addClass("color3");
});
mouth9color4.on("click", function(){
	mouth.attr("src", "images/mouth9color4.png").removeClass().addClass("color4");
});
mouth9color5.on("click", function(){
	mouth.attr("src", "images/mouth9color5.png").removeClass().addClass("color5");
});
mouth9color6.on("click", function(){
	mouth.attr("src", "images/mouth9color6.png").removeClass().addClass("color6");
});
// mouth10color
mouth10color1.on("click", function(){
	mouth.attr("src", "images/mouth10color1.png").removeClass().addClass("color1");
});
mouth10color2.on("click", function(){
	mouth.attr("src", "images/mouth10color2.png").removeClass().addClass("color2");
});
mouth10color3.on("click", function(){
	mouth.attr("src", "images/mouth10color3.png").removeClass().addClass("color3");
});
mouth10color4.on("click", function(){
	mouth.attr("src", "images/mouth10color4.png").removeClass().addClass("color4");
});
mouth10color5.on("click", function(){
	mouth.attr("src", "images/mouth10color5.png").removeClass().addClass("color5");
});
mouth10color6.on("click", function(){
	mouth.attr("src", "images/mouth10color6.png").removeClass().addClass("color6");
});
// mouth11color
mouth11color1.on("click", function(){
	mouth.attr("src", "images/mouth11color1.png").removeClass().addClass("color1");
});
mouth11color2.on("click", function(){
	mouth.attr("src", "images/mouth11color2.png").removeClass().addClass("color2");
});
mouth11color3.on("click", function(){
	mouth.attr("src", "images/mouth11color3.png").removeClass().addClass("color3");
});
mouth11color4.on("click", function(){
	mouth.attr("src", "images/mouth11color4.png").removeClass().addClass("color4");
});
mouth11color5.on("click", function(){
	mouth.attr("src", "images/mouth11color5.png").removeClass().addClass("color5");
});
mouth11color6.on("click", function(){
	mouth.attr("src", "images/mouth11color6.png").removeClass().addClass("color6");
});
// mouth12color
mouth12color1.on("click", function(){
	mouth.attr("src", "images/mouth12color1.png").removeClass().addClass("color1");
});
mouth12color2.on("click", function(){
	mouth.attr("src", "images/mouth12color2.png").removeClass().addClass("color2");
});
mouth12color3.on("click", function(){
	mouth.attr("src", "images/mouth12color3.png").removeClass().addClass("color3");
});
mouth12color4.on("click", function(){
	mouth.attr("src", "images/mouth12color4.png").removeClass().addClass("color4");
});
mouth12color5.on("click", function(){
	mouth.attr("src", "images/mouth12color5.png").removeClass().addClass("color5");
});
mouth12color6.on("click", function(){
	mouth.attr("src", "images/mouth12color6.png").removeClass().addClass("color6");
});
// top1color
top1color1.on("click", function(){
	top.attr("src", "images/top1color1.png").removeClass().addClass("color1");
});
top1color2.on("click", function(){
	top.attr("src", "images/top1color2.png").removeClass().addClass("color2");
});
top1color3.on("click", function(){
	top.attr("src", "images/top1color3.png").removeClass().addClass("color3");
});
top1color4.on("click", function(){
	top.attr("src", "images/top1color4.png").removeClass().addClass("color4");
});
// top2color
top2color1.on("click", function(){
	top.attr("src", "images/top2color1.png").removeClass().addClass("color1");
});
top2color2.on("click", function(){
	top.attr("src", "images/top2color2.png").removeClass().addClass("color2");
});
top2color3.on("click", function(){
	top.attr("src", "images/top2color3.png").removeClass().addClass("color3");
});
top2color4.on("click", function(){
	top.attr("src", "images/top2color4.png").removeClass().addClass("color4");
});
// top3color
top3color1.on("click", function(){
	top.attr("src", "images/top3color1.png").removeClass().addClass("color1");
});
top3color2.on("click", function(){
	top.attr("src", "images/top3color2.png").removeClass().addClass("color2");
});
top3color3.on("click", function(){
	top.attr("src", "images/top3color3.png").removeClass().addClass("color3");
});
top3color4.on("click", function(){
	top.attr("src", "images/top3color4.png").removeClass().addClass("color4");
});
top3color5.on("click", function(){
	top.attr("src", "images/top3color5.png").removeClass().addClass("color5");
});

// bottom1
bottom1color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom1color1.png").removeClass().addClass("color1");
});
bottom1color2.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom1color2.png").removeClass().addClass("color2");
});
bottom1color3.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom1color3.png").removeClass().addClass("color3");
});
bottom1color4.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom1color4.png").removeClass().addClass("color4");
});
bottom1color5.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom1color5.png").removeClass().addClass("color5");
});
// bottom2
bottom2color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom2color1.png").removeClass().addClass("color1");
});
bottom2color2.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom2color2.png").removeClass().addClass("color2");
});
bottom2color3.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom2color3.png").removeClass().addClass("color3");
});
// bottom3
bottom3color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom3color1.png").removeClass().addClass("color1");
});
bottom3color2.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom3color2.png").removeClass().addClass("color2");
});
bottom3color3.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom3color3.png").removeClass().addClass("color3");
});
bottom3color4.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom3color4.png").removeClass().addClass("color4");
});
bottom3color5.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom3color5.png").removeClass().addClass("color5");
});
bottom3color6.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom3color6.png").removeClass().addClass("color6");
});
// bottom4
bottom4color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom4color1.png").removeClass().addClass("color1");
});
bottom4color2.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom4color2.png").removeClass().addClass("color2");
});
bottom4color3.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom4color3.png").removeClass().addClass("color3");
});
// bottom5
bottom5color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom5color1.png").removeClass().addClass("color1");
});
bottom5color2.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom5color2.png").removeClass().addClass("color2");
});
bottom5color3.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom5color3.png").removeClass().addClass("color3");
});
bottom5color4.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	bottom.attr("src", "images/bottom5color4.png").removeClass().addClass("color4");
});
// gadget2color
gadget2color1.on("click", function(){
	// zmiana obrazka - usuniecie wszystkich klas - dodanie jedej klasy z kolorem
	gadget.attr("src", "images/gadget2color1.png").removeClass().addClass("color1");
});
gadget2color2.on("click", function(){
	gadget.attr("src", "images/gadget2color2.png").removeClass().addClass("color2");
});
gadget2color3.on("click", function(){
	gadget.attr("src", "images/gadget2color3.png").removeClass().addClass("color3");
});



// zachowanie guzika ok jeżeli test ma być tekstem:
// $("#doneButton").on("mouseenter", function(){
// 	$(".doneButtonText").css("visibility", "visible");
// });
// $("#doneButton").on("mouseleave", function(){
// 	$(".doneButtonText").css("visibility", "hidden");
// });


});