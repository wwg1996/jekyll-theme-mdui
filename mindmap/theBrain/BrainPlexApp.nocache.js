function BrainPlexApp(){
	var L='',
		M='BrainPlexApp',
		N='startup',
		O='bootstrap',
		P='begin',
		Q='gwt.codesvr=',
		R='gwt.hosted=',
		S='gwt.hybrid',
		T='moduleStartup',
		U='end',
		V='#',
		W='?',
		X='/',
		Y='img',
		Z='clear.cache.gif',
		$='baseUrl',
		_='script';
	
	var l=window,
		m=document,
		n=l.__gwtStatsEvent?function(a){return l.__gwtStatsEvent(a)}:null,
		o=l.__gwtStatsSessionId?l.__gwtStatsSessionId:null,
		p,
		q,
		r=L,
		s={},
		t=[],
		u=[],
		v=[],
		w=0,
		x,
		y;
	
	var	ab='BrainPlexApp.nocache.js',
		bb='undefined',
		cb='__gwt_marker_BrainPlexApp',
		db='<script id="',
		eb='"><\/script>',
		fb='SCRIPT',
		gb='base',
		hb='meta',
		ib='name',
		jb='BrainPlexApp::',
		kb='::',
		lb='gwt:property',
		mb='content',
		nb='=',
		ob='gwt:onPropertyErrorFn',
		pb='Bad handler "',
		qb='" for "gwt:onPropertyErrorFn"',
		rb='gwt:onLoadErrorFn',
		sb='" for "gwt:onLoadErrorFn"',
		tb='device.user.agent',
		ub='iphone',
		vb='ipod',
		wb='ipad',
		xb='android',
		yb='mobile',
		zb='androidMobile';
		
	var	Ab='browser',
		Bb='user.agent',
		Cb='opera',
		Db='webkit',
		Eb='safari',
		Fb='msie',
		Gb='ie9',
		Hb='ie8',
		Ib='ie6',		
		Jb='gecko',
		Kb='gecko1_8',
		Lb='unknown',
		Mb='Cross-site hosted mode not yet implemented. See issue ',
		Nb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',
		Ob='selectingPermutation',
		Pb='0532E7729A430B2FFE0D998A63BB860A',
		Qb='369B50B56853931E49125B30E0845A69',
		Rb='475BCCE5E852DEE48DEAC33CBDC62066',
		Sb='74B013E804F6D0E208E5489B1CB78E43',
		Tb='8A3AE4DD873EC2B851D043684E13B153',
		Ub='A6EC931DCD83986682FDC05C3041045C',
		Vb='ADEE999A861871D8B5E828ECB917DD0F',
		Wb='D45D5A19CF30E336E217704300B9F402',
		Xb='EAB903FFAE2131A8BDB46E1AD6E73022',
		Yb='F7889479DFB9112D9CA074A9FD6F4BD5',
		Zb=':',
		$b='DOMContentLoaded',
		_b='loadExternalRefs';
		
	var	ac='"<script src=\\"',
		bc='.cache.js\\"><\/scr" + "ipt>"',
		cc='<scr',
		dc='ipt><!-',
		ec='-\n',
		fc='window.__gwtStatsEvent && window.__gwtStatsEvent({';
		gc='moduleName:"BrainPlexApp", sessionId:window.__gwtStatsSessionId, subSystem:"startup",',
		hc='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',		
		ic='type: "end"});',
		jc='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',
		kc='type: "moduleRequested"});',
		lc='document.write(',
		mc=');',
		nc='\n-',
		oc='-><\/scr',
		pc='ipt>';
		
	// n&&n({
		// moduleName:M,
		// sessionId:o,
		// subSystem:N,
		// evtGroup:O,
		// millis:(new Date).getTime(),
		// type:P
	// });
	
	// if(!l.__gwt_stylesLoaded){
		// l.__gwt_stylesLoaded={}
	// }
	// if(!l.__gwt_scriptsLoaded){
		// l.__gwt_scriptsLoaded={}
	// }
	
	function z(){
		var b=false;
		try{
			var c=l.location.search;
			return (c.indexOf(Q)!=-1||(c.indexOf(R)!=-1||l.external&&l.external.gwtOnLoad))&&c.indexOf(S)==-1
		}catch(a){}
		z=function(){
			return b
		}
		return b
	}
	
	function A(){
		if(p&&q){
			p(x,M,r,w);
			n&&n({
				moduleName:M,
				sessionId:o,
				subSystem:N,
				evtGroup:T,
				millis:(new Date).getTime(),type:U
			})
		}
	}
	function B(){
		function e(a){
			var b=a.lastIndexOf(V);
			if(b==-1){
				b=a.length
			}
			var c=a.indexOf(W);
			if(c==-1){
				c=a.length
			}
			var d=a.lastIndexOf(X,Math.min(c,b));
			return d>=0?a.substring(0,d+1):L
		}
		function f(a){
			if(a.match(/^\w+:\/\//)){
			}else{
				var b=m.createElement(Y);
				b.src=a+Z;a=e(b.src)
			}
			return a
		}
		function g(){
			var a=D($);
			if(a!=null){
				return a
			}
			return L
		}
		function h(){
			var a=m.getElementsByTagName(_);
			for(var b=0;b<a.length;++b){
				if(a[b].src.indexOf(ab)!=-1){
					return e(a[b].src)}
				}return L
			}
		function i(){
			var a;
			if(typeof isBodyLoaded==bb||!isBodyLoaded()){
				var b=cb;
				var c;m.write(db+b+eb);
				c=m.getElementById(b);
				a=c&&c.previousSibling;
				while(a&&a.tagName!=fb){
					a=a.previousSibling
				}
				if(c){
					c.parentNode.removeChild(c)
				}
				if(a&&a.src){
					return e(a.src)
				}
			}
			return L
		}
		function j(){
			var a=m.getElementsByTagName(gb);
			if(a.length>0){
				return a[a.length-1].href
			}
			return L
		}
		var k=g();
		if(k==L){
			k=h()
		}
		if(k==L){
			k=i()
		}
		if(k==L){
			k=j()
		}
		if(k==L){
			k=e(m.location.href)
		}
		k=f(k);
		r=k;
		return k
	}
	function C(){
		var b=document.getElementsByTagName(hb);
		for(var c=0,d=b.length;c<d;++c){
			var e=b[c],
				f=e.getAttribute(ib),g;
			if(f){
				f=f.replace(jb,L);
				if(f.indexOf(kb)>=0){
					continue
				}
				if(f==lb){
					g=e.getAttribute(mb);
					if(g){
						var h,i=g.indexOf(nb);
						if(i>=0){
							f=g.substring(0,i);
							h=g.substring(i+1)
						}else{
							f=g;
							h=L
						}
						s[f]=h
					}
				}else if(f==ob){
					g=e.getAttribute(mb);
					if(g){
						try{
							y=eval(g)
						}catch(a){
							alert(pb+g+qb)
						}
					}
				}else if(f==rb){
					g=e.getAttribute(mb);
					if(g){
						try{
							x=eval(g)
						}catch(a){
							alert(pb+g+sb)
						}
					}
				}
			}
		}
	}
	function D(a){
		var b=s[a];
		return b==null?null:b
	}
	function E(a,b){
		var c=v;
		for(var d=0,e=a.length-1;d<e;++d){
			c=c[a[d]]||(c[a[d]]=[])
		}
		c[a[e]]=b
	}
	function F(a){
		var b=u[a](),c=t[a];
		if(b in c){
			return b
		}
		var d=[];
		for(var e in c){
			d[c[e]]=e
		}
		if(y){
			y(a,d,b)
		}
		throw null
	}
	
	u[tb]=function(){
		var a=navigator.userAgent.toLowerCase();
		if(a.indexOf(ub)!=-1||a.indexOf(vb)!=-1){
			return ub
		}else if(a.indexOf(wb)!=-1){
			return wb
		}else if(a.indexOf(xb)!=-1){
			if(a.indexOf(yb)!=-1){
				return zb
			}else{
				return xb
			}
		}
		return Ab
	};
	t[tb]={android:0,androidMobile:1,browser:2,ipad:3,iphone:4};
	u[Bb]=function(){
		var b=navigator.userAgent.toLowerCase();
		var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};
		if(function(){return b.indexOf(Cb)!=-1}())
			return Cb;
		if(function(){return b.indexOf(Db)!=-1}())
			return Eb;
		if(function(){return b.indexOf(Fb)!=-1&&m.documentMode>=9}())
			return Gb;
		if(function(){return b.indexOf(Fb)!=-1&&m.documentMode>=8}())
			return Hb;
		if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);
		if(a&&a.length==3)return c(a)>=6000}())
			return Ib;
		if(function(){return b.indexOf(Jb)!=-1}())
			return Kb;
		return Lb
	};
	t[Bb]={
		//gecko1_8:0,
		//ie6:1,
		//ie8:2,
		//ie9:3,
		//opera:4,
		safari:5
	};
	
	BrainPlexApp.onScriptLoad=function(a){
		BrainPlexApp.onScriptLoad=null;
		p=a;
		A()
	};
	// if(z()){
		// alert(Mb+Nb);
		// return
	// }
	// C();
	B();
	// n&&n({
		// moduleName:M,
		// sessionId:o,
		// subSystem:N,
		// evtGroup:O,
		// millis:(new Date).getTime(),type:Ob
	// });
	
	var G;
	try{
		//E([zb,Eb],Pb);
		//E([Ab,Ib],Qb);
		//E([wb,Eb],Rb);
		//E([Ab,Gb],Sb);
		E([Ab,Eb],Tb);
		//E([Ab,Cb],Ub);
		//E([Ab,Kb],Vb);
		//E([xb,Eb],Wb);
		//E([Ab,Hb],Xb);
		//E([ub,Eb],Yb);
		G=v[F(tb)][F(Bb)];
		var H=G.indexOf(Zb);
		if(H!=-1){
			w=Number(G.substring(H+1));
			G=G.substring(0,H)
		}
	}catch(a){
		return
	}
	
	var I;
	function J(){
		if(!q){
			q=true;A();
			if(m.removeEventListener){
				m.removeEventListener($b,J,false)
			}
			if(I){
				clearInterval(I)
			}
		}
	}
	// if(m.addEventListener){
		// m.addEventListener($b,function(){J()},false)
	// }
	
	var I=setInterval(function(){if(/loaded|complete/.test(m.readyState)){J()}},50);
	
	// n&&n({
		// moduleName:M,
		// sessionId:o,
		// subSystem:N,
		// evtGroup:O,
		// millis:(new Date).getTime(),
		// type:U
	// });
	n&&n({
		moduleName:M,
		sessionId:o,
		subSystem:N,
		evtGroup:_b,
		millis:(new Date).getTime(),
		type:P
	});
	
	var K=ac+r+G+bc;
	m.write(cc+dc+ec+fc+gc+hc+ic+fc+gc+jc+kc+lc+K+mc+nc+oc+pc)
}
BrainPlexApp();

/* 
输出：

<script>
<!--
window.__gwtStatsEvent && window.__gwtStatsEvent({
	moduleName:"BrainPlexApp",
	sessionId:window.__gwtStatsSessionId,
	subSystem:"startup",
	evtGroup: "loadExternalRefs",
	millis:(new Date()).getTime(),
	type: "end"});
window.__gwtStatsEvent && window.__gwtStatsEvent({
	moduleName:"BrainPlexApp",
	sessionId:window.__gwtStatsSessionId,
	subSystem:"startup",
	evtGroup: "moduleStartup",
	millis:(new Date()).getTime(),
	type: "moduleRequested"});
	document.write("<script src=\"function G(t){return document.getElementById(t)}.cache.js\"></scr" + "ipt>");
-->
</script>

*/