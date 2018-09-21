var profileId = 1113413;
var animationPos;
var zoomScale;
var zoom;
var prefix;
var bannerType;
var theme;
var development = false;
var autoshowDebug = true;
var exitUrl;

if(window.location.hostname == 'localhost')
{
	development = true;
}
if (Enabler.isInitialized()) {init();} else {Enabler.addEventListener(studio.events.StudioEvent.INIT, init);}
	
	function init()
	{
		// Dynamic Content variables and sample values
		Enabler.setProfileId(profileId);
		var devDynamicContent = {};
		window.devDynamicContent = devDynamicContent;
		
		if(development == true)
		{
			bannerErrors.error.push('## Development Version ##');
			devDynamicContent.GStar_dynamic_feed_27032017_Blad1= [{}];
			 var prefix = devDynamicContent.GStar_dynamic_feed_27032017_Blad1[0];
			 window.prefix = prefix;
			prefix._id = 0;
			prefix.UniqueID = 1;
			prefix.Reporting_Label = "test1";
			prefix.Banner_Type = "Banner";
			prefix.Theme = "Template1";
			prefix.Active = true;
			prefix.Default = true;
			prefix.Start_date = {};
			prefix.Start_date.RawValue = "2017-03-22";
			prefix.Start_date.UtcValue = 1490166000000;
			prefix.End_Date = {};
			prefix.End_Date.RawValue = "2017-06-22";
			prefix.End_Date.UtcValue = 1498114800000;
			prefix.Logo_Img = {};
			prefix.Logo_Img.Type = "file";
			prefix.Logo_Img.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/61026658/dirty/logo.svg";
			prefix.Border_Color = "Red";
			prefix.Copy1 = "Dynamic Content 1";
			prefix.Copy1_Text_Color = "Black";
			prefix.Background1 = {};
			prefix.Background1.Type = "file";
			prefix.Background1.Url = "background.jpg";
			prefix.BackgroundTheme1 = {};
			prefix.BackgroundTheme1.Url = "bg2.jpg";
			prefix.Background2 = {};
			prefix.Background2.Type = "file";
			prefix.Background2.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/61026655/dirty/background.jpg";
			prefix.Background3 = {};
			prefix.Background3.Type = "file";
			prefix.Background3.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/61026655/dirty/background.jpg";
			prefix.Product1 = {};
			prefix.Product1.Type = "file";
			prefix.Product1.Url = "https://s0.2mdn.net/ads/richmedia/studio/30964184/30964184_20170327021703709_product1.jpg";
			prefix.Product2 = {};
			prefix.Product2.Type = "file";
			prefix.Product2.Url = "https://s0.2mdn.net/ads/richmedia/studio/30964184/30964184_20170327021643024_product2.jpg";
			prefix.Product3 = {};
			prefix.Product3.Type = "file";
			prefix.Product3.Url = "https://s0.2mdn.net/ads/richmedia/studio/30964184/30964184_20170327021648933_product3.jpg";
			prefix.AantalSlides = 3;
			prefix.Sliderbg = "#FFFFFF";
			prefix.Video = {};
			prefix.Video.Type = "video";
			prefix.Video.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/993b59451d29b598/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3635056617/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/9815B668C552DED8BFEE597004E9872C2AF6C922.5F2514138ACE1765C337DEDC32EB8B22020041D1/key/ck2/file/file.mp4";
			prefix.Video.Stream_Url = "";
			prefix.AnimationPos = "leftBottom";
			prefix.ZoomScale = 1.5;
			prefix.Zoom = "zoomIn";
			prefix.CTA_Background = "#FFFFFF";
			prefix.CTA_Width = 150;
			prefix.CTA_Background_Hover = "transparent";
			prefix.CTA_Text_Color = "#000000";
			prefix.CTA_Text_Color_Hover = "Blue";
			prefix.CTA_Text = "Shop nu";
			prefix.Landing = {};
			prefix.Landing.Url = "http://www.g-star.com?testcontent";
			Enabler.setDevDynamicContent(devDynamicContent);
		}
		else
		{  
			 var prefix =  dynamicContent.GStar_dynamic_feed_27032017_Blad1[0];
			  window.prefix = prefix;
		}
		
		 if (Enabler.isPageLoaded()) 
		 {
			loadDynamicData();
			showAd();
		} 
		else 
		{
			loadDynamicData();
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
		}
		
		function loadDynamicData()
		{
			//Theme
			bannerErrors.error.push('Thema:'+ prefix.Theme);
			if(prefix.Theme == "Template1")
			{
				$('.theme1WhiteTop').show();
				$('.theme1WhiteBottom').show();
			}
			else{
				$('.theme1WhiteTop').hide();
				$('.theme1WhiteBottom').hide();
			}
			
			function reset(){
				$('.theme1WhiteTop').hide();
				$('.theme1WhiteBottom').hide();
				$('#background1').hide();
				$('#background2').hide();
				$('#background3').hide();
			}
			//BannerType
			if(prefix.Banner_Type == 'Video')
			{
				bannerErrors.error.push('Bannertype: '+ prefix.Banner_Type);
				reset();
				var videoCode = '<video class="backgroundVid"width="100%" height="100%" video autobuffer autoplay muted>\
													<source src="'+prefix.Video.Progressive_Url+'" type="video/mp4">\
												</video>';
			$('#videobg').append(videoCode);
				
			}
			
			if(prefix.Banner_Type == 'Slider')
			{
				var aantalSlides = prefix.AantalSlides + 1;
				var sliderContainer = '<div class="gallery"></div>';	
				
				bannerErrors.error.push('Bannertype: '+ prefix.Banner_Type);
				bannerErrors.error.push('Slider aantal slides: '+ aantalSlides -1);
				
				$(sliderContainer).insertAfter('.border');
				
				for(var i = 1; i < aantalSlides; i++)
				{
					var productimg =prefix['Product' + i].Url ;
					bannerErrors.error.push('Img slide ' +i+' url : '+ productimg);
					$('<div class="gallery-cell slide'+i+'"><img class="productimg" src="'+productimg+'"> </img></div>').appendTo('.gallery');
				}
				
				$('.gallery').on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {$('#cta').trigger('click')});
				$('.logoWrapper').click(function(){$('#cta').trigger('click')});
				$('.copy1Wrapper').click(function(){$('#cta').trigger('click')});
				$('.logoWrapper').css('z-index','900');
				$('.copy1Wrapper').css('z-index','900');
				$('#background1').hide();
			}
			
		
			//KOPPELINGEN
			$('.copy1').text(prefix.Copy1);
			$('.ctaText').text(prefix.CTA_Text);
			$('.cta').css('background-color',prefix.CTA_Background);
			$('.ctaText').css('color',prefix.CTA_Text_Color);
			$('.border').css('border-color',prefix.Border_Color);
			$('.copy1').css('color',prefix.Copy1_Text_Color);
			$('.gallery-cell').css('background',prefix.Sliderbg);
			$('.cta').css('min-width',prefix.CTA_Width);
			$('.cta').css('max-width',prefix.CTA_Width);
			
			animationPos = prefix.AnimationPos;
			zoom = prefix.Zoom;
			zoomScale = prefix.ZoomScale;
			bannerType = prefix.Banner_Type;
			theme = prefix.Theme;
			exitUrl = prefix.Landing.Url;
			if(prefix.Theme == "Template1")
			{
				$('.background1img').attr('src',prefix.BackgroundTheme1.Url);
			}
			else{
				$('.background1img').attr('src',prefix.Background1.Url);
				
			}
		}

	}
	