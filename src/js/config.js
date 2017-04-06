requirejs.config({
	// baseUrl:'js',
	paths:{
		'jquery':'../assets/jquery-3.1.1',
		'common':'../assets/common',
		'loginStatus':'../js/loginStatus',
		'head':'../js/head',
		'gdszoom':'../assets/jquery.gdszoom/jquery.gdszoom'
		// 'gdszoom':'../lib/jquery.gdszoom/jquery.gdszoom'
	},
	shim:{
		'gdszoom':{
			deps:['jquery'],
			exports:'jQuery.prototype.gdszoom'
		}
	}

	
})