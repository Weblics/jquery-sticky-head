!function(t,i,e,s){i.fn.stickyHeader=function(t){return this.each(function(){i.data(this,"plugin_stickyHeader")||i.data(this,"plugin_stickyHeader",new n(this,t))})};var n=function(e,s){var o=this,c=i.extend(n.OPTS,s),a=i('<div class="jsh-wrapper"></div>'),r=i(e),p=i(t),d=r.outerHeight(),l=c.offset;o.addCss(),r.wrap(a),a.css("height",d),console.log(c),p.scroll(function(){p.scrollTop()>l?o.applySticky(r,c.onSticky):o.releaseSticky(r,c.onSticked)})};n.OPTS={offset:0,onSticky:function(){},onSticked:function(){}},n.prototype.addCss=function(){i("head").append("<style>.jsh-wrapper{   position: relative;}.jsh-wrapper .is-sticky{   position:fixed;   top: 0;   left: 50%;   transform: translateX(-50%);   z-index: 99;}</style>")},n.prototype.applySticky=function(t,i){t.addClass("is-sticky"),i()},n.prototype.releaseSticky=function(t,i){t.removeClass("is-sticky"),i()}}(window,jQuery,document);