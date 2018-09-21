/*required*/
let gulp = require('gulp'),
	order = require("gulp-order"),
	rename = require('gulp-rename'),
	file = require('gulp-file'), //need to create file
	fs   = require('fs'),
	path = require('path'),
	replace = require('gulp-string-replace'),
	wait = require('gulp-wait'),
	image = require('gulp-image'), //compress image
	fileExists = require('file-exists'), //need to create folder
	directoryExists = require('directory-exists'),
	zip = require('gulp-zip');

/* Utility to get an array of folders */
function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

/*Test build*/
const arg = (argList => {

  	let arg = {}, a, c, s, opt, thisOpt, curOpt, size, category;
  	for (a = 0; a < argList.length; a++) {

	    thisOpt = argList[a].trim();
	    opt = thisOpt.replace(/^\-+/, '');

	    if (opt === thisOpt) {

	      // argument value
	      if (curOpt) arg[curOpt] = opt;
	      curOpt = null;

	    } else {

	      // argument name
	      curOpt = opt;
	      arg[curOpt] = true;

	    }

  	}

 	return arg;

})(process.argv);

let id = arg.i || arg.id,
  	prefix = arg.p || arg.prefix,
  	country = arg.c || arg.country;

/*Second use gulp build to create the banner with the right size*/
gulp.task('argument', (cb) => {

	console.log('argument work!')

	/*check if args is empty*/
	function isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}

	if(!isEmpty(arg) && 
		( arg.hasOwnProperty('i') || arg.hasOwnProperty('id') ) && 
		( arg.hasOwnProperty('p') || arg.hasOwnProperty('prefix') ) && 
		( arg.hasOwnProperty('c') || arg.hasOwnProperty('country') ) ) {

	}else {
		console.log('help: try to make directories first = gulp origin_dir ')
		console.log('help: try to use this example = gulp copy --country "de" --id "1113413" --prefix "GStar_dynamic_feed_27032017_Blad1" ')
	}
	cb();
});

gulp.task('copy', () => {

	directoryExists('origin_dir').then(exists => {
		if(exists) {
			gulp.start('replace');
		}else {
			console.log('pls create directory first : gulp create_dir');
		}
	});
});

gulp.task('origin_dir', () => {
	console.log('origin_dir work!');

	directoryExists('origin_dir').then(exists => {

	  	if(exists) { // OUTPUTS: true or false
	  		console.log('u have allready created origin_dir directorie!!');
	  	}else {
	  		console.log('create origin_dir!');

	  		const folders = [
		        'origin_dir'
		    ];

		    folders.forEach(dir => {
		        if(!fs.existsSync(dir))     
		            fs.mkdirSync(dir), 
		            console.log('📁  folder created:', dir);        
		    });
	  	}

	});
    
});

gulp.task('init', ['argument'], () => {
	console.log('init');

	return gulp.src('origin_dir/**/*')
		.pipe(gulp.dest( arg.country + '_dir' ));

});

gulp.task('replace', ['argument', 'init'], () => {
	console.log('replace');
	console.log(arg.i || arg.id)
	console.log(arg.p || arg.prefix)
	console.log(arg.c || arg.country)

	return gulp.src([arg.country + '_dir/**/dynamicdata.js'])
    	.pipe(replace(/profileId\s=\s\d*/g, 'profileId = '+ arg.id )) //profileId
    	.pipe(replace(/devDynamicContent\.(\w)*/g, 'devDynamicContent.' + arg.prefix))	//dynamicContent
    	.pipe(replace(/dynamicContent\.(\w)*/g, 'dynamicContent.' + arg.prefix))	//dynamicContent
    	.pipe(gulp.dest(arg.country + '_dir'))

});

gulp.task('transZip', ['argument', 'replace'],  (done) => {
	let folders = getFolders(arg.country + '_dir');

	if (folders.length === 0) return done(); // nothing to do!

	return folders.map((folder) => {
		gulp.src(arg.country + '_dir' + folder + '/*')
        	.pipe(zip('archive'+folder+'.zip'))
        	.pipe(gulp.dest(arg.country + '_dir'))
	})
    
});

gulp.task('default',['copy']);