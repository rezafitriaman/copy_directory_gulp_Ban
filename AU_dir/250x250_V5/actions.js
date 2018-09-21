backupUrl = "http://www.g-star.com";

if(exitUrl == '' || exitUrl == 'undefined')
{
	exitUrl = backupUrl;
	bannerErrors.error.push('Exit Url: Backup url is used, exit url is undefined or empty');
}

function bgExitHandler(e) {
  Enabler.exitOverride('Background Exit', exitUrl);
}

document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
document.getElementById('cta').addEventListener('click', bgExitHandler, false);


$('.cta').hover(function()
{
	$(this).css('background-color',prefix.CTA_Background_Hover);
	$(this).find('.ctaText').css('color',prefix.CTA_Text_Color_Hover);
},
function(){
	$(this).css('background-color',prefix.CTA_Background);
	$(this).find('.ctaText').css('color',prefix.CTA_Text_Color);
});