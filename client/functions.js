Template.layout.rendered = function(){
    $(".button-collapse").sideNav();
  //   $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
  //     var ads, adsbygoogle;
  //     ads = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8680569398697574" data-ad-slot="3571640443" data-ad-format="auto"></ins>';
  //     $('#top-ad').html(ads);
  //     return (adsbygoogle = window.adsbygoogle || []).push({});
  // });
};


Template.sidebar.rendered = function(){
  this.subscribe('topArticles');
};

Template.sidebar.helpers({
	articles: function(){
		return Articles.find({}, { sort: { createdAt: -1 }, limit: 5});
	}
});

Meteor.startup(function() {
      return SEO.config({
        title: 'ASX Renewables and Sustainable Investing - The Clean Investor',
        meta: {
          'description': 'Information about renewable energy investments and green stocks on the Australian Stock Exchange (ASX).'
        },
        og: {
          'type': 'article',
          'image': 'http://thecleaninvestor.com.au/solar.jpg'
        }
      });
});
