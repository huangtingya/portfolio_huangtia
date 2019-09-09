$(function(){
	
	// Loading & Index animation
	$(window).load(function(){
		$('#loading').fadeOut(1000);
		$('.st1').addClass('activeSvgStroke');
	});

	// Scroll - SectionBlcok - animation
	$('.navbar a').on('click',function(event){
		event.preventDefault();
		var target = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(target).offset().top + $('.navbar').innerHeight() - 110},500);
	});

	var $CloseWorkProject = $('.close'),
		$WorkProjectContent = $('.works_project > .project_content'),
		$WorkProjectBox = $('.works_project_container .works_project > .works_box'),
		$DrawProjectBox = $('.others_work_project > .others_box'),
		$DrawProjectContent = $('.others_work_project > .project_content');


		$WorkProjectContent.hide();
		$CloseWorkProject.on('click',function(){
			$WorkProjectContent.fadeOut(100);
			$DrawProjectContent.fadeOut(100);
		});

		$WorkProjectContent.on('touchstart click', function(event){
				event.stopPropagation();
		});
		
		$WorkProjectBox.on('click',function(){
			$(this).siblings('.project_content').fadeIn(300);	
			// console.log($(this).siblings());
		});	
		$DrawProjectContent.hide();
		$DrawProjectBox.on('click', function(){
			$(this).siblings('.project_content').fadeIn(300);
			// console.log($(this).siblings('.project_content').eq());
		});

	$(window).on('scroll',function(evt){
		var $worksProjectTop = [
			$('.works_project').eq(0).offset().top,
			$('.works_project').eq(1).offset().top,
			$('.works_project').eq(2).offset().top,
			$('.works_project').eq(3).offset().top,
		]
	 	// console.log($worksProjectTop[0]);
		var $scrollTop = $(window).scrollTop(),
			$sectionAbout = $('#section_about').offset().top,
			$sectionWorks = $('.works_content').offset().top,
			$sectionProject = $('.works_project').offset().top,
			$triEffectLeft = $('.tri_1, .tri_3, .tri_5, .tri_7, .tri_9'),
			$triEffectRight = $('.tri_2, .tri_4, .tri_6, .tri_8');
			// console.log($scrollTop);
			// console.log($sectionAbout);
		if ($scrollTop > 50) {
			$('.st1').removeClass('activeSvgStroke');
			$triEffectLeft.css({
				'transform' : 'translate3d(-25px, -10px, 500px)',
			});
			$triEffectRight.css({
				'transform' : 'translate3d(80px, -50px, 500px)',
			});
		}if ($scrollTop < 50) {
			$('.st1').addClass('activeSvgStroke');
			$triEffectLeft.css({
				'transform' : 'translate3d(20px, -20px, -500px)',
			});
			$triEffectRight.css({
				'transform' : 'translate3d(30px, -10px, -500px)',
			});
		
		}if ($scrollTop + 50 >= $sectionAbout) {
			$('.navbar a, .left_bottom_content').css({
				'color' : '#B5B5B6',
			});
			$('.effectShake').css("transform","translate(10px)");
			$('.vis_textblock_left_girl').css({
				'background-position':'0px',
				'transform' : 'translateX(60%) rotate(-12deg)'
			});
			$('.about_acc_line:nth-child(2)').addClass('active_effect');
			$('.about_acc_line:nth-child(1)').addClass('active_effect');
			$('.mobileWhileBg').removeClass('active');
		}if($scrollTop <= $sectionAbout){
			$('.navbar a, .left_bottom_content').css({
				'color' : '#14120F',
			});
			$('.effectShake').css("transform","translate(-60%)");
			$('.vis_textblock_left_girl').css({
				'background-position':'-2698px',
				'transform' : 'translateX(20%) rotate(-12deg)'
			});

		}if ($scrollTop + 150 >= $sectionWorks) {
			$('.navbar a, .left_bottom_content').css({
				'color' : '#14120F',
			});
			$('.mobileWhileBg').addClass('active');
		}if($scrollTop <= $sectionProject){
			$('.liquid').css({
				'transform' : 'translate(-50%,-50%) rotate(-90deg) scale(1)',
			});

			$('.works_box').css({
				'transform' : 'translate(0px,0px)',
			});
			$('.liquid').removeClass('active_effect');

		}if($scrollTop >= $worksProjectTop[0] - 300){
			$('.works_project:nth-child(1) .liquid').css({
				'transform' : 'translate(-50%,60%) rotate(-90deg) scale(2)',
			});
			$('.works_project:nth-child(1) .liquid').addClass('active_effect');

			$('.works_box').css({
				'transform' : 'translate(0px,-100px)',
			});
		}if($scrollTop >= $worksProjectTop[1] - 400){
			$('.works_project:nth-child(2) .works_box').css({
				'transform' : 'translate(0px,-40%)',
			});
			$('.works_project:nth-child(1) .liquid').css({
				'transform' : 'translate(30%,60%) rotate(-90deg) scale(2)',
			});
		}if($scrollTop >= $worksProjectTop[2] - 600){
			$('.works_project:nth-child(3) .works_box').css({
				'transform' : 'translate(0px,-40%)',
			});
			$('.works_project:nth-child(3) .liquid').addClass('active_effect');
			$('.works_project:nth-child(3) .liquid').css({
				'transform' : 'translate(-100%,-70%) rotate(-360deg) scale(2)',
			});
		
		}if($scrollTop >= $worksProjectTop[3] - 900){
			$('.works_project:nth-child(4) .works_box').css({
				'transform' : 'translate(0px,-40%)',
			});
			$('.works_project:nth-child(3) .liquid').addClass('active_effect');
			$('.works_project:nth-child(3) .liquid').css({
				'transform' : 'translate(-100%,20%) rotate(90deg) scale(2)',
			});
		
		}

	});
});