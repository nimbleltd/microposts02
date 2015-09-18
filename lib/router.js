Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//Posts Route
	this.route('posts',{
		path:'/',
		template: 'posts'
	});

	//About route
	this.route('about');

	//Profile route
	this.route('profile');

});