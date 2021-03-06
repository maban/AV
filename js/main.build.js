(function () {
'use strict';

var style = Object.assign(
  document.createElement('style'),
  {innerHTML: "\n    .🔈 {\n      background: hsla(0,0%,100%,.5);\n      border: 1px solid hsla(0, 0%, 0%, 0.09);\n\n      display: grid;\n\n      padding: 1em;\n      grid-gap: 1em;\n    }\n    .🔈 input {\n      grid-column: 2/4;\n      grid-row: 1;\n      justify-self: stretch\n    }\n\n    .🔈 canvas {\n      grid-column: 1/4;\n      grid-row: 2;\n      justify-self: stretch;\n      height: 75px;\n    }\n\n    .🔈 button {\n      border: 1px solid #3f3f46;\n      padding: .2em;\n    }\n\n    .🔈 svg {\n      grid-column: 1/4;\n      justify-self: stretch;\n      width: 100%;\n    }\n\n    .🔈 .emoji {\n      grid-column: 1/4;\n      justify-self: stretch;\n      width: 100%;\n      margin-top: 1em;\n    }\n\n    .🔈 .emoji span {\n      display: inline-block;\n    }\n  "
  }
);

document.body.appendChild(style);

//https://github.com/Rich-Harris/Points

(function(){function t(){this.originalEvent.preventDefault();}var e,n,i,r,o,a,c,d,s,v,u,l;if(void 0===window.onpointerdown){l="screenX screenY clientX clientY ctrlKey shiftKey altKey metaKey relatedTarget detail button buttons pointerId pointerType width height pressure tiltX tiltY isPrimary".split(" ");try{r=new UIEvent("test"), a=function(t,e){return new UIEvent(t,{view:window,bubbles:e})};}catch(p){document.createEvent&&(a=function(t,e){var n=document.createEvent("UIEvents");return n.initUIEvent(t,e,!0,window), n});}if(!a){ throw Error("Cannot create events. You may be using an unsupported browser."); }if(c=function(e,n,i,r){var o,c;for(o=a(e,!r), c=l.length;c--;){ Object.defineProperty(o,l[c],{value:i[l[c]],writable:!1}); }return Object.defineProperty(o,"originalEvent",{value:n,writable:!1}), Object.defineProperty(o,"preventDefault",{value:t,writable:!1}), o}, navigator.pointerEnabled=!0, void 0!==window.onmspointerdown){ return["MSPointerDown","MSPointerUp","MSPointerCancel","MSPointerMove","MSPointerOver","MSPointerOut"].forEach(function(t){var e;e=t.toLowerCase().substring(2), "pointerover"===e||"pointerout"===e?window.addEventListener(t,function(t){var n=c(e,t,t,!1);t.target.dispatchEvent(n), t.target.contains(t.relatedTarget)||(n=c("pointerover"===e?"pointerenter":"pointerleave",t,t,!0), t.target.dispatchEvent(n));},!0):window.addEventListener(t,function(t){var n=c(e,t,t,!1);t.target.dispatchEvent(n);},!0);}), navigator.maxTouchPoints=navigator.msMaxTouchPoints, void 0; }u={0:1,1:4,2:2}, d=function(e,n,i){var r,o,a,d;return void 0!==n.buttons?(o=n.buttons, r=n.buttons?n.button:-1):0===event.button&&0===event.which?(r=-1, o=0):(r=n.button, o=u[r]), a=n.pressure||n.mozPressure||(o?.5:0), d={screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,altKey:n.altKey,metaKey:n.metaKey,relatedTarget:n.relatedTarget,detail:n.detail,button:r,buttons:o,pointerId:1,pointerType:"mouse",width:0,height:0,pressure:a,tiltX:0,tiltY:0,isPrimary:!0,preventDefault:t}, c(e,n,d,i)}, s=void 0!==window.ontouchstart?function(t){for(var e,n=i.length,r=10;n--;){ if(e=i[n], r>Math.abs(t.clientX-e.clientX)&&r>Math.abs(t.clientY-e.clientY)){ return!0 } }}:function(){return!1}, o=function(t){"over"===t||"out"===t?window.addEventListener("mouse"+t,function(e){var n;s(e)||(n=d("pointer"+t,e), e.target.dispatchEvent(n), e.target.contains(e.relatedTarget)||(n=d("over"===t?"pointerenter":"pointerleave",e,!0), e.target.dispatchEvent(n)));}):window.addEventListener("mouse"+t,function(e){var n;s(e)||(n=d("pointer"+t,e), e.target.dispatchEvent(n));});}, ["down","up","over","out","move"].forEach(function(t){o(t);}), void 0!==window.ontouchstart&&(e={}, n=0, i=[], v=function(n,i,r,o,a){var d;return d={screenX:i.screenX,screenY:i.screenY,clientX:r.clientX,clientY:r.clientY,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,altKey:i.altKey,metaKey:i.metaKey,relatedTarget:a||i.relatedTarget,detail:i.detail,button:0,buttons:1,pointerId:r.identifier+2,pointerType:"touch",width:20,height:20,pressure:.5,tiltX:0,tiltY:0,isPrimary:e[r.identifier].isPrimary,preventDefault:t}, c(n,i,d,o)}, window.addEventListener("touchstart",function(t){var o,a;for(o=t.changedTouches, a=function(r){var o,a,c,d;d={target:r.target,isPrimary:n?!1:!0}, e[r.identifier]=d, n+=1, o=v("pointerdown",t,r), a=v("pointerover",t,r), c=v("pointerenter",t,r,!0), r.target.dispatchEvent(a), r.target.dispatchEvent(c), r.target.dispatchEvent(o), i.push(r), setTimeout(function(){var t=i.indexOf(r);-1!==t&&i.splice(t,1);},1500);}, r=0;o.length>r;r+=1){ a(o[r]); }}), window.addEventListener("touchmove",function(t){var n,i;for(n=t.changedTouches, i=function(n){var i,r,o,a,c,d,s,u;return d=e[n.identifier], u=document.elementFromPoint(n.clientX,n.clientY), d.target===u?(i=v("pointermove",t,n), u.dispatchEvent(i), void 0):(s=d.target, d.target=u, s.contains(u)||(c=v("pointerleave",t,n,!0,u), s.dispatchEvent(c)), o=v("pointerout",t,n,!1), s.dispatchEvent(o), i=v("pointermove",t,n,!1), u.dispatchEvent(i), r=v("pointerover",t,n,!1), u.dispatchEvent(r), u.contains(s)||(a=v("pointerenter",t,n,!0,s), u.dispatchEvent(a)), void 0)}, r=0;n.length>r;r+=1){ i(n[r]); }}), window.addEventListener("touchend",function(t){var i,o;for(i=t.changedTouches, o=function(i){var r,o,a,c;c=document.elementFromPoint(i.clientX,i.clientY), r=v("pointerup",t,i,!1), o=v("pointerout",t,i,!1), a=v("pointerleave",t,i,!0), delete e[i.identifier], n-=1, c.dispatchEvent(r), c.dispatchEvent(o), c.dispatchEvent(a);}, r=0;i.length>r;r+=1){ o(i[r]); }}), window.addEventListener("touchcancel",function(t){var i,o;for(i=t.changedTouches, o=function(i){var r,o,a;r=v("pointercancel",t,i), o=v("pointerout",t,i), a=v("pointerleave",t,i), i.target.dispatchEvent(r), i.target.dispatchEvent(o), i.target.dispatchEvent(a), delete e[i.identifier], n-=1;}, r=0;i.length>r;r+=1){ o(i[r]); }}));}})();



// https://github.com/w3c/IntersectionObserver

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(h,f){function m(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||l();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect;b=b.width*b.height;this.intersectionRatio=a?b/a:this.isIntersecting?1:0;}function d(a,b){var c=b||{};if("function"!=typeof a){ throw Error("callback must be a function"); }if(c.root&&1!=c.root.nodeType){ throw Error("root must be an Element"); }
this._checkForIntersections=u(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=a;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(c.rootMargin);this.thresholds=this._initThresholds(c.threshold);this.root=c.root||null;this.rootMargin=this._rootMarginValues.map(function(a){return a.value+a.unit}).join(" ");}function u(a,b){var c=null;return function(){c||(c=setTimeout(function(){a();c=null;},b));}}function n(a,b,c,e){"function"==
typeof a.addEventListener?a.addEventListener(b,c,e||!1):"function"==typeof a.attachEvent&&a.attachEvent("on"+b,c);}function r(a,b,c,e){"function"==typeof a.removeEventListener?a.removeEventListener(b,c,e||!1):"function"==typeof a.detatchEvent&&a.detatchEvent("on"+b,c);}function p(a){try{var b=a.getBoundingClientRect();}catch(c){}if(!b){ return l(); }b.width&&b.height||(b={top:b.top,right:b.right,bottom:b.bottom,left:b.left,width:b.right-b.left,height:b.bottom-b.top});return b}function l(){return{top:0,bottom:0,
left:0,right:0,width:0,height:0}}function t(a,b){for(var c=b;c;){if(c==a){ return!0; }c=q(c);}return!1}function q(a){return(a=a.parentNode)&&11==a.nodeType&&a.host?a.host:a}if("IntersectionObserver"in h&&"IntersectionObserverEntry"in h&&"intersectionRatio"in h.IntersectionObserverEntry.prototype){ "isIntersecting"in h.IntersectionObserverEntry.prototype||Object.defineProperty(h.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}); }else{var k=[];d.prototype.THROTTLE_TIMEOUT=
100;d.prototype.POLL_INTERVAL=null;d.prototype.USE_MUTATION_OBSERVER=!0;d.prototype.observe=function(a){if(!this._observationTargets.some(function(b){return b.element==a})){if(!a||1!=a.nodeType){ throw Error("target must be an Element"); }this._registerInstance();this._observationTargets.push({element:a,entry:null});this._monitorIntersections();this._checkForIntersections();}};d.prototype.unobserve=function(a){this._observationTargets=this._observationTargets.filter(function(b){return b.element!=a});this._observationTargets.length||
(this._unmonitorIntersections(), this._unregisterInstance());};d.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance();};d.prototype.takeRecords=function(){var a=this._queuedEntries.slice();this._queuedEntries=[];return a};d.prototype._initThresholds=function(a){a=a||[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,c,e){if("number"!=typeof a||isNaN(a)||0>a||1<a){ throw Error("threshold must be a number between 0 and 1 inclusively"); }
return a!==e[c-1]})};d.prototype._parseRootMargin=function(a){a=(a||"0px").split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);if(!a){ throw Error("rootMargin must be specified in pixels or percent"); }return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};d.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0, this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,
this.POLL_INTERVAL):(n(h,"resize",this._checkForIntersections,!0), n(f,"scroll",this._checkForIntersections,!0), this.USE_MUTATION_OBSERVER&&"MutationObserver"in h&&(this._domObserver=new MutationObserver(this._checkForIntersections), this._domObserver.observe(f,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))));};d.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1, clearInterval(this._monitoringInterval), this._monitoringInterval=null, r(h,"resize",this._checkForIntersections,!0), r(f,"scroll",this._checkForIntersections,!0), this._domObserver&&(this._domObserver.disconnect(), this._domObserver=null));};d.prototype._checkForIntersections=function(){var a=this._rootIsInDom(),b=a?this._getRootRect():l();this._observationTargets.forEach(function(c){var e=c.element,d=p(e),g=this._rootContainsTarget(e),f=c.entry,k=a&&g&&this._computeTargetAndRootIntersection(e,b);c=c.entry=new m({time:h.performance&&performance.now&&performance.now(),target:e,
boundingClientRect:d,rootBounds:b,intersectionRect:k});f?a&&g?this._hasCrossedThreshold(f,c)&&this._queuedEntries.push(c):f&&f.isIntersecting&&this._queuedEntries.push(c):this._queuedEntries.push(c);},this);this._queuedEntries.length&&this._callback(this.takeRecords(),this);};d.prototype._computeTargetAndRootIntersection=function(a,b){
var this$1 = this;
if("none"!=h.getComputedStyle(a).display){for(var c=p(a),e=q(a),d=!1;!d;){var g=null,k=1==e.nodeType?h.getComputedStyle(e):{};if("none"==k.display){ return; }e==this$1.root||
e==f?(d=!0, g=b):e!=f.body&&e!=f.documentElement&&"visible"!=k.overflow&&(g=p(e));if(g){k=Math.max(g.top,c.top);var l=Math.min(g.bottom,c.bottom),m=Math.max(g.left,c.left);c=Math.min(g.right,c.right);g=c-m;var n=l-k;c=0<=g&&0<=n&&{top:k,bottom:l,left:m,right:c,width:g,height:n};if(!c){ break }}e=q(e);}return c}};d.prototype._getRootRect=function(){if(this.root){ var a=p(this.root); }else{a=f.documentElement;var b=f.body;a={top:0,left:0,right:a.clientWidth||b.clientWidth,width:a.clientWidth||b.clientWidth,bottom:a.clientHeight||
b.clientHeight,height:a.clientHeight||b.clientHeight};}return this._expandRectByRootMargin(a)};d.prototype._expandRectByRootMargin=function(a){var b=this._rootMarginValues.map(function(b,d){return"px"==b.unit?b.value:b.value*(d%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3]};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};d.prototype._hasCrossedThreshold=function(a,b){
var this$1 = this;
var c=a&&a.isIntersecting?a.intersectionRatio||0:-1,d=b.isIntersecting?
b.intersectionRatio||0:-1;if(c!==d){ for(var f=0;f<this.thresholds.length;f++){var g=this$1.thresholds[f];if(g==c||g==d||g<c!==g<d){ return!0 }} }};d.prototype._rootIsInDom=function(){return!this.root||t(f,this.root)};d.prototype._rootContainsTarget=function(a){return t(this.root||f,a)};d.prototype._registerInstance=function(){0>k.indexOf(this)&&k.push(this);};d.prototype._unregisterInstance=function(){var a=k.indexOf(this);-1!=a&&k.splice(a,1);};h.IntersectionObserver=d;h.IntersectionObserverEntry=m;}})(window,
document);

// I *think* there's a prettier way of doing this
// though I'm not sure
var OFF = 0;
var STARTED = 1;
var PAUSED = 2;

var targets = new Map();

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if(targets.has(entry.target))
      { targets.get(entry.target)(entry); }
  });
});

// This is a helper to start/stop scripts as they scroll into view
var Base = function Base(audioCtx, element) {
  var this$1 = this;

  Object.assign(this, {audioCtx: audioCtx, element: element});
  this.state = OFF;

  // set up intersection listener
  targets.set(element, function (e) {
    this$1.handleObservation(e);
  });

  observer.observe(element);
};


// reimplemented

Base.prototype.start = function start () {

};

Base.prototype.pause = function pause () {

};

Base.prototype.resume = function resume () {

};

Base.prototype.handleObservation = function handleObservation (event) {
  if(event.isIntersecting) {
    switch (this.state) {
      case OFF:
        this.start(this.audioCtx, this.element);
        this.state = STARTED;
        break;

      case PAUSED:
        this.resume();
        this.state = STARTED;
        break;

      default:
        console.error("bad state transition");

    }
  } else {
    switch (this.state) {
      case OFF:
        break;

      case STARTED:
        this.pause();
        this.state = PAUSED;
        break;

      default:
        console.error("bad state transition", event);
    }
  }
};

var generator = function (audioCtx, target) { return function (seconds, fn) {
  var sampleRate = audioCtx.sampleRate;

  var buffer = audioCtx.createBuffer(
      1, sampleRate * seconds, sampleRate
  );
  var data = buffer.getChannelData(0);

  for (var i = 0; i < data.length; i++) {
    data[i] = fn(i / sampleRate, seconds);
  }

  return function () {
    var source = audioCtx.createBufferSource();
    source.buffer = buffer;

    source.connect(target || audioCtx.destination);
    source.start();
  }
}; };



var Scope = function Scope(analyser, canvas) {

  var ctx = canvas.getContext('2d');
  var frequencies = new Uint8Array(analyser.frequencyBinCount);
  var waveform = new Uint8Array(analyser.fftSize);

  Object.assign(this, {analyser: analyser, canvas: canvas, ctx: ctx, frequencies: frequencies, waveform: waveform});

};

Scope.prototype.render = function render () {

  var ref = this;
    var analyser = ref.analyser;
    var canvas = ref.canvas;
    var ctx = ref.ctx;
    var frequencies = ref.frequencies;
    var waveform = ref.waveform;

  analyser.getByteFrequencyData(frequencies);
  analyser.getByteTimeDomainData(waveform);

  var width = canvas.width;
    var height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = '#ff0043';
  ctx.beginPath();
  frequencies.forEach(function (value, i) {
    ctx.lineTo((i / frequencies.length) * width, (1-(value / 255)) * height * 0.95);
  });
  ctx.stroke();

  ctx.strokeStyle = '#3f023f';
  ctx.beginPath();
  waveform.forEach(function (value, i) {
    ctx.lineTo((i / waveform.length) * width, (value / 255) * height);
  });
  ctx.stroke();


};

var analyser = (function (Demo) {
  function analyser () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) analyser.__proto__ = Demo;
  analyser.prototype = Object.create( Demo && Demo.prototype );
  analyser.prototype.constructor = analyser;

  analyser.prototype.start = function start () {
    var this$1 = this;

    var ref = this;
    var element = ref.element;
    var audioCtx = ref.audioCtx;

    var media = element.querySelector('audio');
    var range = element.querySelector('input');
    var canvas = element.querySelector('canvas');


    var source = audioCtx.createMediaElementSource(media);
    var gain = audioCtx.createGain();
    var analyser = audioCtx.createAnalyser();

    // create the audio graph
    source.connect(gain);
    gain.connect(analyser);
    analyser.connect(audioCtx.destination);

    // connect gain
    range.addEventListener('input', function () { return gain.gain.value = parseFloat(range.value); }
    );


    // draw to canvas
    var scope = new Scope(analyser, canvas);
    var animate = function () {
      this$1.raf = requestAnimationFrame(animate);
      scope.render();
    };
    animate();


    Object.assign(this, {media: media, animate: animate});
  };

  analyser.prototype.pause = function pause () {
    this.wasPaused = this.media.paused;
    this.media.pause();
    cancelAnimationFrame(this.raf);
  };

  analyser.prototype.resume = function resume () {
    if(!this.wasPaused) { this.media.play(); }
    this.raf = requestAnimationFrame(this.animate);
  };

  return analyser;
}(Base));

var emoji = (function (Demo) {
  function emoji () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) emoji.__proto__ = Demo;
  emoji.prototype = Object.create( Demo && Demo.prototype );
  emoji.prototype.constructor = emoji;

  emoji.prototype.start = function start () {
    var this$1 = this;

    var ref = this;
    var element = ref.element;
    var audioCtx = ref.audioCtx;

    var media = element.querySelector('audio');
    var range = element.querySelector('input');
    var emoji = element.querySelectorAll('.emoji span');


    var source = audioCtx.createMediaElementSource(media);
    var gain = audioCtx.createGain();
    var analyser = audioCtx.createAnalyser();

    // create the audio graph
    source.connect(gain);
    gain.connect(analyser);
    analyser.connect(audioCtx.destination);

    // connect gain
    range.addEventListener('input', function () { return gain.gain.value = parseFloat(range.value); }
    );


    window.a = analyser;

    var frequencies = new Uint8Array(analyser.frequencyBinCount);
    var waveform = new Uint8Array(analyser.fftSize);


    var animate = function () {
      this$1.raf = requestAnimationFrame(animate);

      analyser.getByteFrequencyData(frequencies);
      analyser.getByteTimeDomainData(waveform);


      emoji.forEach(
        function (s, i) { return s.style.transform = "scale(" + (1 + (frequencies[i]/100)) + ") "; }
      );


    };
    animate();


    Object.assign(this, {media: media, animate: animate});
  };

  emoji.prototype.pause = function pause () {
    this.wasPaused = this.media.paused;
    this.media.pause();
    cancelAnimationFrame(this.raf);
  };

  emoji.prototype.resume = function resume () {
    if(!this.wasPaused) { this.media.play(); }
    this.raf = requestAnimationFrame(this.animate);
  };

  return emoji;
}(Base));

var gain = (function (Demo) {
  function gain () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) gain.__proto__ = Demo;
  gain.prototype = Object.create( Demo && Demo.prototype );
  gain.prototype.constructor = gain;

  gain.prototype.start = function start (audioCtx, element) {

    var media = element.querySelector('audio');
    var range = element.querySelector('input');

    var source = audioCtx.createMediaElementSource(media);
    var gain = audioCtx.createGain();

    // create the audio graph
    source.connect(gain);
    gain.connect(audioCtx.destination);


    // connect gain
    range.addEventListener('input', function () { return gain.gain.value = parseFloat(range.value); }
    );

    Object.assign(this, {media: media});

  };

  gain.prototype.pause = function pause () {
    this.wasPaused = this.media.paused;
    this.media.pause();
  };

  gain.prototype.resume = function resume () {
    if(!this.wasPaused) { this.media.play(); }
  };

  return gain;
}(Base));

var basic = (function (Demo) {
  function basic () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) basic.__proto__ = Demo;
  basic.prototype = Object.create( Demo && Demo.prototype );
  basic.prototype.constructor = basic;

  basic.prototype.start = function start (audioCtx, element) {

   var media = element.querySelector('audio');
   var source = audioCtx.createMediaElementSource(media);

   // create the audio graph
   source.connect(audioCtx.destination);


   Object.assign(this, {media: media});

 };

 basic.prototype.pause = function pause () {
   this.wasPaused = this.media.paused;
   this.media.pause();
 };

 basic.prototype.resume = function resume () {
   if(!this.wasPaused) { this.media.play(); }
 };

  return basic;
}(Base));

// No Audio Graph here, just for pausing/playing
var plain = (function (Demo) {
  function plain () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) plain.__proto__ = Demo;
  plain.prototype = Object.create( Demo && Demo.prototype );
  plain.prototype.constructor = plain;

  plain.prototype.start = function start (audioCtx, element) {

   var media = element.querySelector('audio');
   Object.assign(this, {media: media});

 };

 plain.prototype.pause = function pause () {
   this.wasPaused = this.media.paused;
   this.media.pause();
 };

 plain.prototype.resume = function resume () {
   if(!this.wasPaused) { this.media.play(); }
 };

  return plain;
}(Base));

var ButtonDemo = (function (Demo) {
  function ButtonDemo () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) ButtonDemo.__proto__ = Demo;
  ButtonDemo.prototype = Object.create( Demo && Demo.prototype );
  ButtonDemo.prototype.constructor = ButtonDemo;

  ButtonDemo.prototype.start = function start () {
    var this$1 = this;

    var ref = this;
    var element = ref.element;
    var audioCtx = ref.audioCtx;

    var range = element.querySelector('input');
    var canvas = element.querySelector('canvas');

    var gain = audioCtx.createGain();
    var analyser = audioCtx.createAnalyser();


    gain.connect(analyser);
    analyser.connect(audioCtx.destination);


    // connect gain
    gain.gain.value = parseFloat(range.value);
    range.addEventListener('input', function () { return gain.gain.value = parseFloat(range.value); }
    );

    // draw to canvas
    var scope = new Scope(analyser, canvas);
    var animate = function () {
      this$1.raf = requestAnimationFrame(animate);
      scope.render();
    };

    animate();

    var sound = generator(audioCtx, gain);

    Object.assign(this, {
      range: range, gain: gain, animate: animate, sound: sound
    });

    this.buttonHandler(element.querySelectorAll('button'), this.sound);
  };

  ButtonDemo.prototype.buttonHandler = function buttonHandler () {
    console.error('not implemented');
  };

  ButtonDemo.prototype.pause = function pause () {
    cancelAnimationFrame(this.raf);
  };

  ButtonDemo.prototype.resume = function resume () {
    this.animate();
    this.gain.gain.value = parseFloat(this.range.value);
  };

  return ButtonDemo;
}(Base));


var ease = function (fn) { return function (t, s) { return fn(t) * Math.sin((t / s) * Math.PI); }; };


// Math.sin with period of 0..1
var sin = function (v) { return Math.sin(Math.PI * 2 * v); };

var harmony = function (f) { return function (t) { return sin(f * t) +
  (sin(f * t * 3) / 3) +
  (sin(f * t * 7) / 7); }; };

var adsr = d3.scaleLinear()
    .domain([0, 0.2, 0.3, 0.4, 0.5])
    .range( [0, 1,   .3, .3,  0]);


var _zag = d3.scaleLinear()
    .domain([0, 0.5,  1])
    .range([-1,  1, -1]);

var zag = function (t) { return _zag(t % 1); };

var harmonyz = function (f) { return function (t) { return zag(f * t) +
  (zag(f * t * 3) / 3) +
  (zag(f * t * 7) / 7); }; };


var buttonNoise = (function (ButtonDemo) {
  function buttonNoise () {
    ButtonDemo.apply(this, arguments);
  }

  if ( ButtonDemo ) buttonNoise.__proto__ = ButtonDemo;
  buttonNoise.prototype = Object.create( ButtonDemo && ButtonDemo.prototype );
  buttonNoise.prototype.constructor = buttonNoise;

  buttonNoise.prototype.buttonHandler = function buttonHandler (buttons, sound) {

    var noise = sound(.75, function (t) { return Math.random() * 0.2; });

    buttons[0].addEventListener('click', noise);

  };

  return buttonNoise;
}(ButtonDemo));


var buttonEase = (function (ButtonDemo) {
  function buttonEase () {
    ButtonDemo.apply(this, arguments);
  }

  if ( ButtonDemo ) buttonEase.__proto__ = ButtonDemo;
  buttonEase.prototype = Object.create( ButtonDemo && ButtonDemo.prototype );
  buttonEase.prototype.constructor = buttonEase;

  buttonEase.prototype.buttonHandler = function buttonHandler (buttons, sound) {

    var noise = sound(.75, ease(function (t) { return Math.random() * 0.2; }));

    buttons[0].addEventListener('click', noise);

  };

  return buttonEase;
}(ButtonDemo));


var buttonHz = (function (ButtonDemo) {
  function buttonHz () {
    ButtonDemo.apply(this, arguments);
  }

  if ( ButtonDemo ) buttonHz.__proto__ = ButtonDemo;
  buttonHz.prototype = Object.create( ButtonDemo && ButtonDemo.prototype );
  buttonHz.prototype.constructor = buttonHz;

  buttonHz.prototype.buttonHandler = function buttonHandler (buttons, sound) {

    var _440hz = sound(.75, ease(function (t) { return sin(t * 440); }));
    var _880hz = sound(.75, ease(function (t) { return sin(t * 880); }));

    buttons[0].addEventListener('click', _440hz);
    buttons[1].addEventListener('click', _880hz);

  };

  return buttonHz;
}(ButtonDemo));


var buttonHarmony = (function (ButtonDemo) {
  function buttonHarmony () {
    ButtonDemo.apply(this, arguments);
  }

  if ( ButtonDemo ) buttonHarmony.__proto__ = ButtonDemo;
  buttonHarmony.prototype = Object.create( ButtonDemo && ButtonDemo.prototype );
  buttonHarmony.prototype.constructor = buttonHarmony;

  buttonHarmony.prototype.buttonHandler = function buttonHandler (buttons, sound) {

    var _440hz = sound(.75, ease(harmony(440)));
    var _880hz = sound(.75, ease(harmony(880)));

    buttons[0].addEventListener('click', _440hz);
    buttons[1].addEventListener('click', _880hz);

  };

  return buttonHarmony;
}(ButtonDemo));

var buttonADSR = (function (ButtonDemo) {
  function buttonADSR () {
    ButtonDemo.apply(this, arguments);
  }

  if ( ButtonDemo ) buttonADSR.__proto__ = ButtonDemo;
  buttonADSR.prototype = Object.create( ButtonDemo && ButtonDemo.prototype );
  buttonADSR.prototype.constructor = buttonADSR;

  buttonADSR.prototype.buttonHandler = function buttonHandler (buttons, sound) {

     var h440 = harmony(440);
     var h880 = harmony(880);

     var _440hz = sound(.75, function (t) { return adsr(t) * h440(t); } );
     var _880hz = sound(.75, function (t) { return adsr(t) * h880(t); } );

     buttons[0].addEventListener('click', _440hz);
     buttons[1].addEventListener('click', _880hz);

  };

  return buttonADSR;
}(ButtonDemo));


var buttonD3 = (function (ButtonDemo) {
  function buttonD3 () {
    ButtonDemo.apply(this, arguments);
  }

  if ( ButtonDemo ) buttonD3.__proto__ = ButtonDemo;
  buttonD3.prototype = Object.create( ButtonDemo && ButtonDemo.prototype );
  buttonD3.prototype.constructor = buttonD3;

  buttonD3.prototype.buttonHandler = function buttonHandler (buttons, sound) {

     var h440 = ease(harmonyz(440));
     var h880 = ease(harmonyz(880));

     var _440hz = sound(.75, h440 );
     var _880hz = sound(.75, h880 );

     buttons[0].addEventListener('click', _440hz);
     buttons[1].addEventListener('click', _880hz);

  };

  return buttonD3;
}(ButtonDemo));

var keyboard = (function (Demo) {
  function keyboard () {
    Demo.apply(this, arguments);
  }

  if ( Demo ) keyboard.__proto__ = Demo;
  keyboard.prototype = Object.create( Demo && Demo.prototype );
  keyboard.prototype.constructor = keyboard;

  keyboard.prototype.start = function start (audioCtx, element) {
    var this$1 = this;


    var canvas = element.querySelector('canvas');

    var analyser = audioCtx.createAnalyser();

    analyser.connect(audioCtx.destination);

    // draw to canvas
    var scope = new Scope(analyser, canvas);
    this.animate = function () {
      this$1.raf = requestAnimationFrame(this$1.animate);
      scope.render();
    };
    this.animate();

    var sound = generator(audioCtx, analyser);


    // Math.sin with period of 0..1
    var sin = function (v) { return Math.sin(Math.PI * 2 * v); };

    var freq = function (note) { return 27.5 * Math.pow(2, (note - 21) / 12); };

    var harmony = function (f) { return function (t) { return (sin(f * t) +
      (sin(f * t * 3) / 3) +
      (sin(f * t * 7) / 7))
      * 0.2 * sin(t * 2); }; };


    Array.from(element.querySelectorAll('svg rect'))
      .sort(function (a, b) { return parseFloat(a.getAttribute('x')) - parseFloat(b.getAttribute('x')); }
      )
      .forEach(function (key, i) {
        var s = sound(0.25, harmony(freq(i + 48)));

        var handler = function (e) {
          e.preventDefault();
          s();
        };

        key.addEventListener('pointerenter', handler);
        key.addEventListener('touchstart', handler);
      });

  };



    keyboard.prototype.pause = function pause () {
      cancelAnimationFrame(this.raf);
    };

    keyboard.prototype.resume = function resume () {
      this.raf = requestAnimationFrame(this.animate);
    };

  return keyboard;
}(Base));

var demos = {
  analyser: analyser,
  gain: gain,
  basic: basic,
  plain: plain,
  emoji: emoji,

  buttonNoise: buttonNoise,
  buttonEase: buttonEase,
  buttonHz: buttonHz,
  buttonHarmony: buttonHarmony,
  buttonADSR: buttonADSR,
  buttonD3: buttonD3,

  keyboard: keyboard
};


var audioCtx = new (window.AudioContext || window.webkitAudioContext)();


// run scripts on each section
Array.from(document.querySelectorAll('.🔈[data-demo]'))
  .forEach(function (section) {
    var name = section.dataset.demo;

    var demo = demos[name];

    if(demo)
      { new demo(audioCtx, section); }

    else
      { console.warn(("Demo not found: \"" + name + "\"")); }


  });


Array.from(document.querySelectorAll('.🔈 audio'))
  .forEach(function (audio, i, all) { return audio.addEventListener('pause', function () { return all
        .filter(function (other) { return other !== audio; })
        .forEach(function (other) { return other.currentTime = audio.currentTime; }); }
    ); }
  );


Array.from(document.querySelectorAll('.🔈 input[type=range]'))
  .forEach(function (range, i, all) { return range.addEventListener('change', function () { return all
        .filter(function (other) { return other !== range; })
        .forEach(function (other) { return other.value = range.value; }); }
    ); }
  );

}());
