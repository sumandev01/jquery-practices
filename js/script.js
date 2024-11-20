$(document).ready(function(){
	$(".bt1").on("click", function(){
		$(".bt1_s_h").hide();
	});
	$(".bt2").on("click", function(){
		$(".bt1_s_h").show();
	})
})

$(document).ready(function(){
	$(".toggler").on("click", function(){
		$(".toggler_content").toggle();
	});

	//animate jquery
	$("#btn1").on("click", function(){
		$("#btn1_box").animate({
			width: "70%",
			marginLeft: "50px",
			marginTop: "50px",
			padding: "100px",
			fontSize: "50px",
		}, 400);
	});

	// Animate jquery 2

	$("#btn2_prev").on("click", function(){
		$("#btn2_box").animate({
			"left": "-=50px",
		});
	});
	$("#btn2_next").on("click", function(){
		$("#btn2_box").animate({
			"left": "+=50px",
		});
	});
	$("#btn2_top").on("click", function(){
		$("#btn2_box").animate({
			"top": "-=50px",
		});
	});
	$("#btn2_bottom").on("click", function(){
		$("#btn2_box").animate({
			"top": "+=50px",
		});
	});

	//Animate jquery 3
	$("#btn3_1").on("click", function(){
		$("#btn3_box1")
		.animate({
			width: "70%",
		}, 1000)
		.animate({
			borderLeftWidth: "50px",
		}, "slow", function(){
			alert("All done!");
		})
	});
	$("#btn3_2").on("click", function() {
		$("#btn3_box2")
		.animate({
			width: "80%",
		}, 1200)
		.animate({
			borderRightWidth: "100px",
		}, "slow", function(){
			alert("All done!");
		})
	});
	$("#btn3_both").on("click", function(){
		$("#btn3_1").add("#btn3_2").trigger("click");
	});
	$("#btn3_reset").on("click", function(){
		$(".btn3_box").css({
			width: "",
			borderWidth: "",
		});
	});

	//Animate jquery 4
	$(".btn4_1").on("click", function(){
		$(".btn4_box2").toggleClass("bg_change");
	});
	$(".btn4_2").on("click", function(){
		$(".btn4_box3").toggleClass("box_animated");
	});
	function animateIt(){
		$(".btn4_box2").slideToggle("slow", animateIt);
		$(".box_animated").slideToggle("slow", animateIt);
	}
	animateIt();

	let countCheck = function(){
		let n = $(".check_box:checked").length;
		$(".check_count").text( n + (n === 1 ? " is " : " are ") + "checked!");
	};
	countCheck();
	$(".check_box[type=checkbox]").on("click", countCheck);

	//
	$(".radio_name").on("click", function(){
		$(".check_select_name").html($("input:checked").val() + " is checked!");
	});
	$(".ul_1").on("click", function(){
		$(event.target).closest("ul>li").toggleClass("highlight");
	});
	$(".ul_2").on("dblclick", function(){
		$(event.target).closest(".ul_2>li").toggleClass("highlight");
	});
	$(".fade_link").on("click", function(){
		$(".fade_box:hidden").first().fadeIn("slow");
	});
	$(".fade_out").on("click", function(){
		$(".fadeOut_box").fadeOut("slow");
	});
	$(".fade_In").on("click", function() {
		$(".fade_in").fadeIn("slow");
	});
	$(".fade_Toggle").on("click", function() {
		$(".fade_toggle").fadeToggle("slow");
	});
	$(".fade_Toggle2").on("click", function() {
		$(".toggle_show").fadeToggle(300, function() {
			$("span").fadeIn(100);
		});
	});

	//
	$(".apendend").on("click", function() {
		$("ol").append("<li>hello suman</li>");
	});

	//
	let textHighLight = $(".find_1").text().split(" ").join("</span> <span>");
		textHighLight = "<span>" + textHighLight + "</span>";

	$(".find_1")
		.html(textHighLight)
		.find("span")
		.hover( function() {
			$(this).addClass("hilite");
		}, function() {
			$(this).removeClass("hilite");
		})
		.end()
		.find(":contains('t')")
			.css({
				"font-style": "italic",
				"font-weight": "bolder"
			});
	$(".jq_toggler").on("click", function() {
		$(".jq_togglerp").slideToggle("slow", function() {
			$(".jq_toggler").toggleClass("cls");
		});
	});
})