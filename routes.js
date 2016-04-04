Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout',
  template: 'home'
});
Router.route('/greenlist', {
  name: 'greenlist',
  layoutTemplate: 'layout',
  template: 'greenlist'
});
Router.route('/about', {
  name: 'about',
  layoutTemplate: 'layout',
  template: 'about',
	onAfterAction: function() {
		SEO.set({
			title: "Disclaimer - The Clean Investor",
			meta: {
				'description': "A disclaimer describing the dangers of investing and the possibility of losing money."
			}
		});
	}
});
Router.route('/disclaimer', {
	name: 'disclaimer',
	layoutTemplate: 'layout',
	template: 'disclaimer',
	onAfterAction: function() {
		SEO.set({
			title: "About The Clean Investor",
			meta: {
				'description': "Why invest in green energy and who is 'The Clean Investor'?"
			}
		});
	}
});

Router.route('/articles/:title', {
  name: 'article',
  layoutTemplate: 'layout',
  template: 'article',
  data: function() {
    console.log(this.params.title);
    var article = Articles.findOne({
      title: this.params.title
    });
    return {
      article: article
    };
  },
  onAfterAction: function() {
    var article = this.data().article;
    if (!Meteor.isClient) {
      return;
    }
    SEO.set({
      title: article.title + " - The Clean Investor",
      meta: {
        'description': article.blurb
      },
      og: {
        'title': article.title,
        'description': article.blurb,
        'image': article.image.url
      }
    });
  }
});
