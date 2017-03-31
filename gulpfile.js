var gulp=require('gulp');

//引入gulp插件
var sass=require('gulp-sass');

//创建编译sass的任务
gulp.task('compileSass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStyle:'expanded'}))
	// 错误信息处理，不会退出整个任务
	.on('error',sass.logError)
	.pipe(gulp.dest('./src/css/'));
})

// 监听sass文件修改，直接编译任务
gulp.task('watchSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
})