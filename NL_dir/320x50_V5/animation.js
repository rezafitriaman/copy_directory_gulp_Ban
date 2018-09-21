function showAd(){

$('.banner').show();
	//Load slider js
	if(prefix.Banner_Type == "Slider")
	{
				$('.gallery').css('height',h);
				$('.gallery').css('border','1px solid '+prefix.Border_Color+'');
				$('.productimg').css('width',slider_img_size);
				$('.productimg').css('margin-top',slider_img_top_margin);
				$('.gallery-cell').css('background',prefix.Sliderbg);
				
				 $('.gallery').flickity({
					  // options
					  cellAlign: 'left',
					  pageDots: true,
					  prevNextButtons: false,
					  contain: true,
					  setGallerySize: false,
					  wrapAround: true
					});
						$('.flickity-page-dots').css({'bottom' : slider_navigationBottom});
	}
	
if(theme != 'Template1')
{
	if(zoom == 'zoomIn')
	{
			$('.background1img').css({'transform' : 'scale(1)','left' : '0px','top' : '0px'});
	}
	//ZOOM OUT CSS 
	else if(zoom == 'zoomOut' && animationPos == 'rightTop')
	{
			$('.background1img').css({'transform' : 'scale('+zoomScale+')','left' : ZoomOutX+'px','top' : '-'+ZoomOutY+'px'});
	}

	else if(zoom == 'zoomOut' && animationPos == 'rightBottom')
	{
			$('.background1img').css({'transform' : 'scale('+zoomScale+')','left' :  ZoomOutX+'px','top' : +ZoomOutY+'px'});
	}

	else if(zoom == 'zoomOut' && animationPos == 'leftBottom')
	{
			$('.background1img').css({'transform' : 'scale('+zoomScale+')','left' : '-'+ ZoomOutX+'px','top' : +ZoomOutY+'px'});
	}
	else if(zoom == 'zoomOut' && animationPos == 'leftTop')
	{
			$('.background1img').css({'transform' : 'scale('+zoomScale+')','left' : '-'+ ZoomOutX+'px','top' :  '-'+ZoomOutY+'px'});
	}
}

if(theme == 'Template1')
{
	if(zoom == 'zoomIn')
	{
		$('.background1img').css({'transform' : 'scale(1)','left' : '0px','top' : theme1Height});
	}
	else if(zoom == 'zoomOut' )
	{
			$('.background1img').css({'transform' : 'scale('+zoomScale+')','left' : ZoomOutXT1+'px','top' : +theme1Height+'px'});
	}

}
	
	
(function(tweenui) 
{
	tweenui.init = function() 
	{
		//Voor debuggen
		var beginstate = true;
		var animate = true;
		
		//Variabelen
		$achtergrond = $('.background1img');
		$achtergrond2 = $('.background2img');
		$achtergrond3 = $('.background3img');
		//Tijdlijn
		var tl = new TimelineLite();
		window.tl = tl;
		
		//Beginstatus (zodat je geen elementen geladen ziet worden voor de animatie)
		if(beginstate == true)
		{
			//$($cornerWrapper).css('opacity','1');
		$achtergrond2.css('opacity','0');
		$achtergrond3.css('opacity','0');
		}
		//Voor debuggen alle elementen tonen
		else
		{
			$('body').find('*').css('opacity','1');
		}
		//Animatie code
		if(animate == true)
		{	
			if(theme != 'Template1')
			{
				//zoomout
				if(zoom == 'zoomOut')
				{
					if(zoom = 'zoomOut' && animationPos == 'rightTop')
					{
					tl.to($achtergrond, 5, {scale: 1}, 0)
					  .to($achtergrond, 5, {x:-ZoomOutX,y:ZoomOutY}, 0)
					}
					else if(zoom = 'zoomOut' && animationPos == 'rightBottom')
					{
					tl.to($achtergrond, 5, {scale: '1'}, 0)
					  .to($achtergrond, 5, {x:-ZoomOutX,y:-ZoomOutY}, 0)
					}
					else if(zoom = 'zoomOut' && animationPos == 'leftBottom')
					{
					tl.to($achtergrond, 5, {scale: 1}, 0)
					  .to($achtergrond, 5, {x:ZoomOutX,y:-ZoomOutY}, 0)
					}
					else if(zoom = 'zoomOut' && animationPos == 'leftTop')
					{
					tl.to($achtergrond, 5, {scale: 1}, 0)
					  .to($achtergrond, 5, {x:ZoomOutX,y:ZoomOutY}, 0)
					}
				}
				
				if(zoom == 'zoomIn')
				{
					tl.to($achtergrond, 5, {scale: zoomScale}, 0)
					  .to($achtergrond, 5, {x:ZoomInX,y:ZoomInY}, 0)
				}		
			}
			
			
			if(theme == "Template1")
			{
							//zoomout
				if(zoom == 'zoomOut')
				{
					tl.to($achtergrond, 5, {scale: 1}, 0)
					  .to($achtergrond, 5, {x:-ZoomOutXT1,y:ZoomOutYT1}, 0)
				}
				
				if(zoom == 'zoomIn')
				{
					tl.to($achtergrond, 5, {scale: zoomScale}, 0)
					  .to($achtergrond, 5, {x:ZoomInXT1,y:ZoomInYT1}, 0)
				}		
			}
		}
	}

}(window.tweenui = window.tweenui || {}));

								(function(d, t) {
								var s = d.createElement(t);
								s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js';
								s.onload = s.onreadystatechange = function() {
								var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
								tweenui.init();
								};
								var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
								})(document, 'script');
}