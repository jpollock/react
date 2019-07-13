(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PubNubReact"] = factory();
	else
		root["PubNubReact"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pubnub = __webpack_require__(1);

	var _pubnub2 = _interopRequireDefault(_pubnub);

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	var _wrapper = __webpack_require__(5);

	var _wrapper2 = _interopRequireDefault(_wrapper);

	var _autoload = __webpack_require__(7);

	var _autoload2 = _interopRequireDefault(_autoload);

	var _broadcast = __webpack_require__(8);

	var _modules = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PubNubReact = function () {
	  function PubNubReact(config) {
	    _classCallCheck(this, PubNubReact);

	    var instance = new _pubnub2.default(config);
	    (0, _wrapper2.default)(instance, this);

	    this._pubnubInstance = instance;
	    this._autoload = new _autoload2.default();
	  }

	  _createClass(PubNubReact, [{
	    key: 'init',
	    value: function init(component) {
	      if (!component.state) {
	        component.state = { pn_messages: {}, pn_status: {}, pn_presence: {} };
	      } else {
	        component.state = (0, _immutabilityHelper2.default)(component.state, { $merge: { pn_status: {}, pn_messages: {}, pn_presence: {} } });
	      }

	      this._component = component;
	      this._broadcast = new _broadcast.Broadcast();
	      this._listener = {};
	      this._keepMessages = {};

	      this.addListener(this._listener);
	      this._autoload.initialize(this);

	      this.getPresence = _modules.getPresence.bind(this);
	      this.getMessage = _modules.getMessage.bind(this);
	      this.getStatus = _modules.getStatus.bind(this);
	      this.clean = _modules.clean.bind(this);
	      this.release = _modules.release.bind(this);
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe(args) {
	      this._pubnubInstance.subscribe(args);
	      this._autoload.enableLoad(args);
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(args) {
	      this._pubnubInstance.unsubscribe(args);
	      this._autoload.disableLoad(args);
	    }
	  }, {
	    key: 'getOriginalInstance',
	    value: function getOriginalInstance() {
	      if (this._pubnubInstance) {
	        return this._pubnubInstance;
	      } else {
	        throw new ReferenceError('Pubnub default instance is not initialized yet. Invoke #init() method first.');
	      }
	    }
	  }]);

	  return PubNubReact;
	}();

	exports.default = PubNubReact;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PubNub=t():e.PubNub=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){if(!navigator||!navigator.sendBeacon)return!1;navigator.sendBeacon(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=r(a),l=n(65),f=r(l),d=n(66),h=r(d),p=n(67),g=(n(5),function(e){function t(e){i(this,t);var n=e.listenToBrowserNetworkEvents,r=void 0===n||n;e.db=h.default,e.sdkFamily="Web",e.networking=new f.default({del:p.del,get:p.get,post:p.post,put:p.put,sendBeacon:u});var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r&&(window.addEventListener("offline",function(){o.networkDownDetected()}),window.addEventListener("online",function(){o.networkUpDetected()})),o}return o(t,e),t}(c.default));t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),a=i(u),c=n(6),l=i(c),f=n(8),d=i(f),h=n(9),p=i(h),g=n(16),y=i(g),b=n(17),v=r(b),_=n(18),m=r(_),P=n(19),k=r(P),T=n(20),M=r(T),S=n(21),O=r(S),C=n(22),w=r(C),R=n(23),N=r(R),E=n(24),K=r(E),x=n(25),U=r(x),A=n(26),D=r(A),j=n(27),G=r(j),L=n(28),I=r(L),q=n(29),H=r(q),B=n(30),F=r(B),z=n(31),J=r(z),V=n(32),$=r(V),X=n(33),W=r(X),Q=n(34),Y=r(Q),Z=n(35),ee=r(Z),te=n(36),ne=r(te),re=n(37),ie=r(re),se=n(38),oe=r(se),ue=n(39),ae=r(ue),ce=n(40),le=r(ce),fe=n(41),de=r(fe),he=n(42),pe=r(he),ge=n(43),ye=r(ge),be=n(44),ve=r(be),_e=n(45),me=r(_e),Pe=n(46),ke=r(Pe),Te=n(47),Me=r(Te),Se=n(48),Oe=r(Se),Ce=n(49),we=r(Ce),Re=n(50),Ne=r(Re),Ee=n(51),Ke=r(Ee),xe=n(52),Ue=r(xe),Ae=n(53),De=r(Ae),je=n(54),Ge=r(je),Le=n(55),Ie=r(Le),qe=n(56),He=r(qe),Be=n(57),Fe=r(Be),ze=n(58),Je=r(ze),Ve=n(59),$e=r(Ve),Xe=n(60),We=r(Xe),Qe=n(61),Ye=r(Qe),Ze=n(62),et=r(Ze),tt=n(63),nt=r(tt),rt=n(12),it=r(rt),st=n(64),ot=r(st),ut=n(13),at=i(ut),ct=n(10),lt=i(ct),ft=(n(5),n(3)),dt=i(ft),ht=function(){function e(t){var n=this;s(this,e);var r=t.db,i=t.networking,o=this._config=new a.default({setup:t,db:r}),u=new l.default({config:o});i.init(o);var c={config:o,networking:i,crypto:u},f=y.default.bind(this,c,it),h=y.default.bind(this,c,Ue),g=y.default.bind(this,c,Ge),b=y.default.bind(this,c,He),_=y.default.bind(this,c,ot),P=this._listenerManager=new p.default,T=new d.default({timeEndpoint:f,leaveEndpoint:h,heartbeatEndpoint:g,setStateEndpoint:b,subscribeEndpoint:_,crypto:c.crypto,config:c.config,listenerManager:P});this.addListener=P.addListener.bind(P),this.removeListener=P.removeListener.bind(P),this.removeAllListeners=P.removeAllListeners.bind(P),this.channelGroups={listGroups:y.default.bind(this,c,ke),listChannels:y.default.bind(this,c,Me),addChannels:y.default.bind(this,c,ye),removeChannels:y.default.bind(this,c,ve),deleteGroup:y.default.bind(this,c,me)},this.push={addChannels:y.default.bind(this,c,Oe),removeChannels:y.default.bind(this,c,we),deleteDevice:y.default.bind(this,c,Ke),listChannels:y.default.bind(this,c,Ne)},this.hereNow=y.default.bind(this,c,Fe),this.whereNow=y.default.bind(this,c,De),this.getState=y.default.bind(this,c,Ie),this.setState=T.adaptStateChange.bind(T),this.grant=y.default.bind(this,c,$e),this.audit=y.default.bind(this,c,Je),this.publish=y.default.bind(this,c,We),this.messageCounts=y.default.bind(this,c,v),this.addMessageReaction=y.default.bind(this,c,m),this.getMessageReactions=y.default.bind(this,c,k),this.deleteMessageMetadata=y.default.bind(this,c,M),this.setUserData=y.default.bind(this,c,O),this.getUserData=y.default.bind(this,c,w),this.deleteUserData=y.default.bind(this,c,U),this.setDeviceData=y.default.bind(this,c,N),this.getDeviceData=y.default.bind(this,c,K),this.deleteDeviceData=y.default.bind(this,c,D),this.addDeviceToUser=y.default.bind(this,c,G),this.removeDeviceFromUser=y.default.bind(this,c,I),this.listDevicesForUser=y.default.bind(this,c,H),this.addUserToVirtualSpace=y.default.bind(this,c,ee),this.removeUserFromVirtualSpace=y.default.bind(this,c,ne),this.listUsersInVirtualSpace=y.default.bind(this,c,ie),this.listVirtualSpacesForUser=y.default.bind(this,c,oe),this.addDeviceToVirtualSpace=y.default.bind(this,c,ae),this.removeDeviceFromVirtualSpace=y.default.bind(this,c,le),this.listDeviceInVirtualSpace=y.default.bind(this,c,de),this.listDevicesForUser=y.default.bind(this,c,pe),this.getVirtualSpaces=y.default.bind(this,c,F),this.addVirtualSpace=y.default.bind(this,c,J),this.updateVirtualSpace=y.default.bind(this,c,$),this.getVirtualSpace=y.default.bind(this,c,W),this.deleteVirtualSpace=y.default.bind(this,c,Y),this.fire=function(e,t){return e.replicate=!1,e.storeInHistory=!1,n.publish(e,t)},this.history=y.default.bind(this,c,Ye),this.deleteMessages=y.default.bind(this,c,et),this.fetchMessages=y.default.bind(this,c,nt),this.time=f,this.subscribe=T.adaptSubscribeChange.bind(T),this.presence=T.adaptPresenceChange.bind(T),this.unsubscribe=T.adaptUnsubscribeChange.bind(T),this.disconnect=T.disconnect.bind(T),this.reconnect=T.reconnect.bind(T),this.destroy=function(e){T.unsubscribeAll(e),T.disconnect()},this.stop=this.destroy,this.unsubscribeAll=T.unsubscribeAll.bind(T),this.getSubscribedChannels=T.getSubscribedChannels.bind(T),this.getSubscribedChannelGroups=T.getSubscribedChannelGroups.bind(T),this.encrypt=u.encrypt.bind(u),this.decrypt=u.decrypt.bind(u),this.getAuthKey=c.config.getAuthKey.bind(c.config),this.setAuthKey=c.config.setAuthKey.bind(c.config),this.setCipherKey=c.config.setCipherKey.bind(c.config),this.getUUID=c.config.getUUID.bind(c.config),this.setUUID=c.config.setUUID.bind(c.config),this.getFilterExpression=c.config.getFilterExpression.bind(c.config),this.setFilterExpression=c.config.setFilterExpression.bind(c.config),this.setHeartbeatInterval=c.config.setHeartbeatInterval.bind(c.config),i.hasModule("proxy")&&(this.setProxy=function(e){c.config.setProxy(e),n.reconnect()})}return o(e,[{key:"getVersion",value:function(){return this._config.getVersion()}},{key:"networkDownDetected",value:function(){this._listenerManager.announceNetworkDown(),this._config.restore?this.disconnect():this.destroy(!0)}},{key:"networkUpDetected",value:function(){this._listenerManager.announceNetworkUp(),this.reconnect()}}],[{key:"generateUUID",value:function(){return dt.default.createUUID()}}]),e}();ht.OPERATIONS=at.default,ht.CATEGORIES=lt.default,t.default=ht,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(s),u=(n(5),function(){function e(t){var n=t.setup,i=t.db;r(this,e),this._db=i,this.instanceId="pn-"+o.default.createUUID(),this.secretKey=n.secretKey||n.secret_key,this.subscribeKey=n.subscribeKey||n.subscribe_key,this.publishKey=n.publishKey||n.publish_key,this.sdkName=n.sdkName,this.sdkFamily=n.sdkFamily,this.partnerId=n.partnerId,this.setAuthKey(n.authKey),this.setCipherKey(n.cipherKey),this.setFilterExpression(n.filterExpression),this.origin=n.origin||"pubsub.pndsn.com",this.secure=n.ssl||!1,this.restore=n.restore||!1,this.proxy=n.proxy,this.keepAlive=n.keepAlive,this.keepAliveSettings=n.keepAliveSettings,this.autoNetworkDetection=n.autoNetworkDetection||!1,this.dedupeOnSubscribe=n.dedupeOnSubscribe||!1,this.maximumCacheSize=n.maximumCacheSize||100,this.customEncrypt=n.customEncrypt,this.customDecrypt=n.customDecrypt,"undefined"!=typeof location&&"https:"===location.protocol&&(this.secure=!0),this.logVerbosity=n.logVerbosity||!1,this.suppressLeaveEvents=n.suppressLeaveEvents||!1,this.announceFailedHeartbeats=n.announceFailedHeartbeats||!0,this.announceSuccessfulHeartbeats=n.announceSuccessfulHeartbeats||!1,this.useInstanceId=n.useInstanceId||!1,this.useRequestId=n.useRequestId||!1,this.requestMessageCountThreshold=n.requestMessageCountThreshold,this.setTransactionTimeout(n.transactionalRequestTimeout||15e3),this.setSubscribeTimeout(n.subscribeRequestTimeout||31e4),this.setSendBeaconConfig(n.useSendBeacon||!0),this.setPresenceTimeout(n.presenceTimeout||300),null!=n.heartbeatInterval&&this.setHeartbeatInterval(n.heartbeatInterval),this.setUUID(this._decideUUID(n.uuid))}return i(e,[{key:"getAuthKey",value:function(){return this.authKey}},{key:"setAuthKey",value:function(e){return this.authKey=e,this}},{key:"setCipherKey",value:function(e){return this.cipherKey=e,this}},{key:"getUUID",value:function(){return this.UUID}},{key:"setUUID",value:function(e){return this._db&&this._db.set&&this._db.set(this.subscribeKey+"uuid",e),this.UUID=e,this}},{key:"getFilterExpression",value:function(){return this.filterExpression}},{key:"setFilterExpression",value:function(e){return this.filterExpression=e,this}},{key:"getPresenceTimeout",value:function(){return this._presenceTimeout}},{key:"setPresenceTimeout",value:function(e){return this._presenceTimeout=e,this.setHeartbeatInterval(this._presenceTimeout/2-1),this}},{key:"setProxy",value:function(e){this.proxy=e}},{key:"getHeartbeatInterval",value:function(){return this._heartbeatInterval}},{key:"setHeartbeatInterval",value:function(e){return this._heartbeatInterval=e,this}},{key:"getSubscribeTimeout",value:function(){return this._subscribeRequestTimeout}},{key:"setSubscribeTimeout",value:function(e){return this._subscribeRequestTimeout=e,this}},{key:"getTransactionTimeout",value:function(){return this._transactionalRequestTimeout}},{key:"setTransactionTimeout",value:function(e){return this._transactionalRequestTimeout=e,this}},{key:"isSendBeaconEnabled",value:function(){return this._useSendBeacon}},{key:"setSendBeaconConfig",value:function(e){return this._useSendBeacon=e,this}},{key:"getVersion",value:function(){return"4.21.7"}},{key:"_decideUUID",value:function(e){return e||(this._db&&this._db.get&&this._db.get(this.subscribeKey+"uuid")?this._db.get(this.subscribeKey+"uuid"):"pn-"+o.default.createUUID())}}]),e}());t.default=u,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={createUUID:function(){return i.default.uuid?i.default.uuid():(0,i.default)()}},e.exports=t.default},function(e,t,n){var r,i,s;!function(n,o){i=[t],r=o,void 0!==(s="function"==typeof r?r.apply(t,i):r)&&(e.exports=s)}(0,function(e){function t(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n}function n(e,t){var n=r[t||"all"];return n&&n.test(e)||!1}var r={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};t.isUUID=n,t.VERSION="0.1.0",e.uuid=t,e.isUUID=n})},function(e,t){"use strict";e.exports={}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),u=(r(o),n(7)),a=r(u),c=function(){function e(t){var n=t.config;i(this,e),this._config=n,this._iv="0123456789012345",this._allowedKeyEncodings=["hex","utf8","base64","binary"],this._allowedKeyLengths=[128,256],this._allowedModes=["ecb","cbc"],this._defaultOptions={encryptKey:!0,keyEncoding:"utf8",keyLength:256,mode:"cbc"}}return s(e,[{key:"HMACSHA256",value:function(e){return a.default.HmacSHA256(e,this._config.secretKey).toString(a.default.enc.Base64)}},{key:"SHA256",value:function(e){return a.default.SHA256(e).toString(a.default.enc.Hex)}},{key:"_parseOptions",value:function(e){var t=e||{};return t.hasOwnProperty("encryptKey")||(t.encryptKey=this._defaultOptions.encryptKey),t.hasOwnProperty("keyEncoding")||(t.keyEncoding=this._defaultOptions.keyEncoding),t.hasOwnProperty("keyLength")||(t.keyLength=this._defaultOptions.keyLength),t.hasOwnProperty("mode")||(t.mode=this._defaultOptions.mode),-1===this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase())&&(t.keyEncoding=this._defaultOptions.keyEncoding),-1===this._allowedKeyLengths.indexOf(parseInt(t.keyLength,10))&&(t.keyLength=this._defaultOptions.keyLength),-1===this._allowedModes.indexOf(t.mode.toLowerCase())&&(t.mode=this._defaultOptions.mode),t}},{key:"_decodeKey",value:function(e,t){return"base64"===t.keyEncoding?a.default.enc.Base64.parse(e):"hex"===t.keyEncoding?a.default.enc.Hex.parse(e):e}},{key:"_getPaddedKey",value:function(e,t){return e=this._decodeKey(e,t),t.encryptKey?a.default.enc.Utf8.parse(this.SHA256(e).slice(0,32)):e}},{key:"_getMode",value:function(e){return"ecb"===e.mode?a.default.mode.ECB:a.default.mode.CBC}},{key:"_getIV",value:function(e){return"cbc"===e.mode?a.default.enc.Utf8.parse(this._iv):null}},{key:"encrypt",value:function(e,t,n){return this._config.customEncrypt?this._config.customEncrypt(e):this.pnEncrypt(e,t,n)}},{key:"decrypt",value:function(e,t,n){return this._config.customDecrypt?this._config.customDecrypt(e):this.pnDecrypt(e,t,n)}},{key:"pnEncrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);return a.default.AES.encrypt(e,s,{iv:r,mode:i}).ciphertext.toString(a.default.enc.Base64)||e}},{key:"pnDecrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);try{var o=a.default.enc.Base64.parse(e),u=a.default.AES.decrypt({ciphertext:o},s,{iv:r,mode:i}).toString(a.default.enc.Utf8);return JSON.parse(u)}catch(e){return null}}}]),e}();t.default=c,e.exports=t.default},function(e,t){"use strict";var n=n||function(e,t){var n={},r=n.lib={},i=function(){},s=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},o=r.WordArray=s.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:4*e.length},toString:function(e){return(e||a).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new o.init(n,t)}}),u=n.enc={},a=u.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new o.init(n,t/2)}},c=u.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new o.init(n,t)}},l=u.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},f=r.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,u=i/(4*s),u=t?e.ceil(u):e.max((0|u)-this._minBufferSize,0);if(t=u*s,i=e.min(4*t,i),t){for(var a=0;a<t;a+=s)this._doProcessBlock(r,a);a=r.splice(0,t),n.sigBytes-=i}return new o.init(a,i)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=f.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new d.HMAC.init(e,n).finalize(t)}}});var d=n.algo={};return n}(Math);!function(e){for(var t=n,r=t.lib,i=r.WordArray,s=r.Hasher,r=t.algo,o=[],u=[],a=function(e){return 4294967296*(e-(0|e))|0},c=2,l=0;64>l;){var f;e:{f=c;for(var d=e.sqrt(f),h=2;h<=d;h++)if(!(f%h)){f=!1;break e}f=!0}f&&(8>l&&(o[l]=a(e.pow(c,.5))),u[l]=a(e.pow(c,1/3)),l++),c++}var p=[],r=r.SHA256=s.extend({_doReset:function(){this._hash=new i.init(o.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],o=n[3],a=n[4],c=n[5],l=n[6],f=n[7],d=0;64>d;d++){if(16>d)p[d]=0|e[t+d];else{var h=p[d-15],g=p[d-2];p[d]=((h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3)+p[d-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+p[d-16]}h=f+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&c^~a&l)+u[d]+p[d],g=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&s^i&s),f=l,l=c,c=a,a=o+h|0,o=s,s=i,i=r,r=h+g|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+a|0,n[5]=n[5]+c|0,n[6]=n[6]+l|0,n[7]=n[7]+f|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=s._createHelper(r),t.HmacSHA256=s._createHmacHelper(r)}(Math),function(){var e=n,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n)),n.clamp();for(var s=this._oKey=n.clone(),o=this._iKey=n.clone(),u=s.words,a=o.words,c=0;c<r;c++)u[c]^=1549556828,a[c]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=n,t=e.lib.WordArray;e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var s=(t[i>>>2]>>>24-i%4*8&255)<<16|(t[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t[i+2>>>2]>>>24-(i+2)%4*8&255,o=0;4>o&&i+.75*o<n;o++)e.push(r.charAt(s>>>6*(3-o)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var n=e.length,r=this._map,i=r.charAt(64);i&&-1!=(i=e.indexOf(i))&&(n=i);for(var i=[],s=0,o=0;o<n;o++)if(o%4){var u=r.indexOf(e.charAt(o-1))<<o%4*2,a=r.indexOf(e.charAt(o))>>>6-o%4*2;i[s>>>2]|=(u|a)<<24-s%4*8,s++}return t.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(e){function t(e,t,n,r,i,s,o){return((e=e+(t&n|~t&r)+i+o)<<s|e>>>32-s)+t}function r(e,t,n,r,i,s,o){return((e=e+(t&r|n&~r)+i+o)<<s|e>>>32-s)+t}function i(e,t,n,r,i,s,o){return((e=e+(t^n^r)+i+o)<<s|e>>>32-s)+t}function s(e,t,n,r,i,s,o){return((e=e+(n^(t|~r))+i+o)<<s|e>>>32-s)+t}for(var o=n,u=o.lib,a=u.WordArray,c=u.Hasher,u=o.algo,l=[],f=0;64>f;f++)l[f]=4294967296*e.abs(e.sin(f+1))|0;u=u.MD5=c.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,n){for(var o=0;16>o;o++){var u=n+o,a=e[u];e[u]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,u=e[n+0],a=e[n+1],c=e[n+2],f=e[n+3],d=e[n+4],h=e[n+5],p=e[n+6],g=e[n+7],y=e[n+8],b=e[n+9],v=e[n+10],_=e[n+11],m=e[n+12],P=e[n+13],k=e[n+14],T=e[n+15],M=o[0],S=o[1],O=o[2],C=o[3],M=t(M,S,O,C,u,7,l[0]),C=t(C,M,S,O,a,12,l[1]),O=t(O,C,M,S,c,17,l[2]),S=t(S,O,C,M,f,22,l[3]),M=t(M,S,O,C,d,7,l[4]),C=t(C,M,S,O,h,12,l[5]),O=t(O,C,M,S,p,17,l[6]),S=t(S,O,C,M,g,22,l[7]),M=t(M,S,O,C,y,7,l[8]),C=t(C,M,S,O,b,12,l[9]),O=t(O,C,M,S,v,17,l[10]),S=t(S,O,C,M,_,22,l[11]),M=t(M,S,O,C,m,7,l[12]),C=t(C,M,S,O,P,12,l[13]),O=t(O,C,M,S,k,17,l[14]),S=t(S,O,C,M,T,22,l[15]),M=r(M,S,O,C,a,5,l[16]),C=r(C,M,S,O,p,9,l[17]),O=r(O,C,M,S,_,14,l[18]),S=r(S,O,C,M,u,20,l[19]),M=r(M,S,O,C,h,5,l[20]),C=r(C,M,S,O,v,9,l[21]),O=r(O,C,M,S,T,14,l[22]),S=r(S,O,C,M,d,20,l[23]),M=r(M,S,O,C,b,5,l[24]),C=r(C,M,S,O,k,9,l[25]),O=r(O,C,M,S,f,14,l[26]),S=r(S,O,C,M,y,20,l[27]),M=r(M,S,O,C,P,5,l[28]),C=r(C,M,S,O,c,9,l[29]),O=r(O,C,M,S,g,14,l[30]),S=r(S,O,C,M,m,20,l[31]),M=i(M,S,O,C,h,4,l[32]),C=i(C,M,S,O,y,11,l[33]),O=i(O,C,M,S,_,16,l[34]),S=i(S,O,C,M,k,23,l[35]),M=i(M,S,O,C,a,4,l[36]),C=i(C,M,S,O,d,11,l[37]),O=i(O,C,M,S,g,16,l[38]),S=i(S,O,C,M,v,23,l[39]),M=i(M,S,O,C,P,4,l[40]),C=i(C,M,S,O,u,11,l[41]),O=i(O,C,M,S,f,16,l[42]),S=i(S,O,C,M,p,23,l[43]),M=i(M,S,O,C,b,4,l[44]),C=i(C,M,S,O,m,11,l[45]),O=i(O,C,M,S,T,16,l[46]),S=i(S,O,C,M,c,23,l[47]),M=s(M,S,O,C,u,6,l[48]),C=s(C,M,S,O,g,10,l[49]),O=s(O,C,M,S,k,15,l[50]),S=s(S,O,C,M,h,21,l[51]),M=s(M,S,O,C,m,6,l[52]),C=s(C,M,S,O,f,10,l[53]),O=s(O,C,M,S,v,15,l[54]),S=s(S,O,C,M,a,21,l[55]),M=s(M,S,O,C,y,6,l[56]),C=s(C,M,S,O,T,10,l[57]),O=s(O,C,M,S,p,15,l[58]),S=s(S,O,C,M,P,21,l[59]),M=s(M,S,O,C,d,6,l[60]),C=s(C,M,S,O,_,10,l[61]),O=s(O,C,M,S,c,15,l[62]),S=s(S,O,C,M,b,21,l[63]);o[0]=o[0]+M|0,o[1]=o[1]+S|0,o[2]=o[2]+O|0,o[3]=o[3]+C|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var s=e.floor(r/4294967296);for(n[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),t=this._hash,n=t.words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return t},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e}}),o.MD5=c._createHelper(u),o.HmacMD5=c._createHmacHelper(u)}(Math),function(){var e=n,t=e.lib,r=t.Base,i=t.WordArray,t=e.algo,s=t.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),s=i.create(),o=s.words,u=n.keySize,n=n.iterations;o.length<u;){a&&r.update(a);var a=r.update(e).finalize(t);r.reset();for(var c=1;c<n;c++)a=r.finalize(a),r.reset();s.concat(a)}return s.sigBytes=4*u,s}});e.EvpKDF=function(e,t,n){return s.create(n).compute(e,t)}}(),n.lib.Cipher||function(e){var t=n,r=t.lib,i=r.Base,s=r.WordArray,o=r.BufferedBlockAlgorithm,u=t.enc.Base64,a=t.algo.EvpKDF,c=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(t,n,r){return("string"==typeof n?g:p).encrypt(e,t,n,r)},decrypt:function(t,n,r){return("string"==typeof n?g:p).decrypt(e,t,n,r)}}}});r.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},f=function(e,t,n){var r=this._iv;r?this._iv=void 0:r=this._prevBlock;for(var i=0;i<n;i++)e[t+i]^=r[i]},d=(r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();d.Encryptor=d.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;f.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),d.Decryptor=d.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),f.call(this,e,t,r),this._prevBlock=i}}),l=l.CBC=d,d=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,n=n-e.sigBytes%n,r=n<<24|n<<16|n<<8|n,i=[],o=0;o<n;o+=4)i.push(r);n=s.create(i,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},r.BlockCipher=c.extend({cfg:c.cfg.extend({mode:l,padding:d}),reset:function(){c.reset.call(this);var e=this.cfg,t=e.iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=e.createEncryptor;else n=e.createDecryptor,this._minBufferSize=1;this._mode=n.call(e,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var h=r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),l=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return e=e.salt,(e?s.create([1398893684,1701076831]).concat(e).concat(t):t).toString(u)},parse:function(e){e=u.parse(e);var t=e.words;if(1398893684==t[0]&&1701076831==t[1]){var n=s.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return h.create({ciphertext:e,salt:n})}},p=r.SerializableCipher=i.extend({cfg:i.extend({format:l}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,h.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),t=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){return r||(r=s.random(8)),e=a.create({keySize:t+n}).compute(e,r),n=s.create(e.words.slice(t),4*n),e.sigBytes=4*t,h.create({key:e,iv:n,salt:r})}},g=r.PasswordBasedCipher=p.extend({cfg:p.cfg.extend({kdf:t}),encrypt:function(e,t,n,r){return r=this.cfg.extend(r),n=r.kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,e=p.encrypt.call(this,e,t,n.key,r),e.mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,p.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=n,t=e.lib.BlockCipher,r=e.algo,i=[],s=[],o=[],u=[],a=[],c=[],l=[],f=[],d=[],h=[],p=[],g=0;256>g;g++)p[g]=128>g?g<<1:g<<1^283;for(var y=0,b=0,g=0;256>g;g++){var v=b^b<<1^b<<2^b<<3^b<<4,v=v>>>8^255&v^99;i[y]=v,s[v]=y;var _=p[y],m=p[_],P=p[m],k=257*p[v]^16843008*v;o[y]=k<<24|k>>>8,u[y]=k<<16|k>>>16,a[y]=k<<8|k>>>24,c[y]=k,k=16843009*P^65537*m^257*_^16843008*y,l[v]=k<<24|k>>>8,f[v]=k<<16|k>>>16,d[v]=k<<8|k>>>24,h[v]=k,y?(y=_^p[p[p[P^_]]],b^=p[p[b]]):y=b=1}var T=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,e=4*((this._nRounds=n+6)+1),r=this._keySchedule=[],s=0;s<e;s++)if(s<n)r[s]=t[s];else{var o=r[s-1];s%n?6<n&&4==s%n&&(o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o]):(o=o<<8|o>>>24,o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o],o^=T[s/n|0]<<24),r[s]=r[s-n]^o}for(t=this._invKeySchedule=[],n=0;n<e;n++)s=e-n,o=n%4?r[s]:r[s-4],t[n]=4>n||4>=s?o:l[i[o>>>24]]^f[i[o>>>16&255]]^d[i[o>>>8&255]]^h[i[255&o]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,u,a,c,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,f,d,h,s),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,s,o,u){for(var a=this._nRounds,c=e[t]^n[0],l=e[t+1]^n[1],f=e[t+2]^n[2],d=e[t+3]^n[3],h=4,p=1;p<a;p++)var g=r[c>>>24]^i[l>>>16&255]^s[f>>>8&255]^o[255&d]^n[h++],y=r[l>>>24]^i[f>>>16&255]^s[d>>>8&255]^o[255&c]^n[h++],b=r[f>>>24]^i[d>>>16&255]^s[c>>>8&255]^o[255&l]^n[h++],d=r[d>>>24]^i[c>>>16&255]^s[l>>>8&255]^o[255&f]^n[h++],c=g,l=y,f=b;g=(u[c>>>24]<<24|u[l>>>16&255]<<16|u[f>>>8&255]<<8|u[255&d])^n[h++],y=(u[l>>>24]<<24|u[f>>>16&255]<<16|u[d>>>8&255]<<8|u[255&c])^n[h++],b=(u[f>>>24]<<24|u[d>>>16&255]<<16|u[c>>>8&255]<<8|u[255&l])^n[h++],d=(u[d>>>24]<<24|u[c>>>16&255]<<16|u[l>>>8&255]<<8|u[255&f])^n[h++],e[t]=g,e[t+1]=y,e[t+2]=b,e[t+3]=d},keySize:8});e.AES=t._createHelper(r)}(),n.mode.ECB=function(){var e=n.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),e.Decryptor=e.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),e}(),e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(6),u=(r(o),n(2)),a=(r(u),n(9)),c=(r(a),n(11)),l=r(c),f=n(14),d=r(f),h=n(15),p=r(h),g=(n(5),n(10)),y=r(g),b=function(){function e(t){var n=t.subscribeEndpoint,r=t.leaveEndpoint,s=t.heartbeatEndpoint,o=t.setStateEndpoint,u=t.timeEndpoint,a=t.config,c=t.crypto,f=t.listenerManager;i(this,e),this._listenerManager=f,this._config=a,this._leaveEndpoint=r,this._heartbeatEndpoint=s,this._setStateEndpoint=o,this._subscribeEndpoint=n,this._crypto=c,this._channels={},this._presenceChannels={},this._heartbeatChannels={},this._heartbeatChannelGroups={},
	this._channelGroups={},this._presenceChannelGroups={},this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[],this._currentTimetoken=0,this._lastTimetoken=0,this._storedTimetoken=null,this._subscriptionStatusAnnounced=!1,this._isOnline=!0,this._reconnectionManager=new l.default({timeEndpoint:u}),this._dedupingManager=new d.default({config:a})}return s(e,[{key:"adaptStateChange",value:function(e,t){var n=this,r=e.state,i=e.channels,s=void 0===i?[]:i,o=e.channelGroups,u=void 0===o?[]:o;return s.forEach(function(e){e in n._channels&&(n._channels[e].state=r)}),u.forEach(function(e){e in n._channelGroups&&(n._channelGroups[e].state=r)}),this._setStateEndpoint({state:r,channels:s,channelGroups:u},t)}},{key:"adaptPresenceChange",value:function(e){var t=this,n=e.connected,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s;n?(i.forEach(function(e){t._heartbeatChannels[e]={state:{}}}),o.forEach(function(e){t._heartbeatChannelGroups[e]={state:{}}})):(i.forEach(function(e){e in t._heartbeatChannels&&delete t._heartbeatChannels[e]}),o.forEach(function(e){e in t._heartbeatChannelGroups&&delete t._heartbeatChannelGroups[e]}),!1===this._config.suppressLeaveEvents&&this._leaveEndpoint({channels:i,channelGroups:o},function(e){t._listenerManager.announceStatus(e)})),this.reconnect()}},{key:"adaptSubscribeChange",value:function(e){var t=this,n=e.timetoken,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s,u=e.withPresence,a=void 0!==u&&u,c=e.withHeartbeats,l=void 0===c||c;if(!this._config.subscribeKey||""===this._config.subscribeKey)return void(console&&console.log&&console.log("subscribe key missing; aborting subscribe"));n&&(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=n),"0"!==this._currentTimetoken&&0!==this._currentTimetoken&&(this._storedTimetoken=this._currentTimetoken,this._currentTimetoken=0),i.forEach(function(e){t._channels[e]={state:{}},a&&(t._presenceChannels[e]={}),l&&(t._heartbeatChannels[e]={}),t._pendingChannelSubscriptions.push(e)}),o.forEach(function(e){t._channelGroups[e]={state:{}},a&&(t._presenceChannelGroups[e]={}),l&&(t._heartbeatChannelGroups[e]={}),t._pendingChannelGroupSubscriptions.push(e)}),this._subscriptionStatusAnnounced=!1,this.reconnect()}},{key:"adaptUnsubscribeChange",value:function(e,t){var n=this,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s,u=[],a=[];i.forEach(function(e){e in n._channels&&(delete n._channels[e],u.push(e),e in n._heartbeatChannels&&delete n._heartbeatChannels[e]),e in n._presenceChannels&&(delete n._presenceChannels[e],u.push(e))}),o.forEach(function(e){e in n._channelGroups&&(delete n._channelGroups[e],a.push(e),e in n._heartbeatChannelGroups&&delete n._heartbeatChannelGroups[e]),e in n._presenceChannelGroups&&(delete n._channelGroups[e],a.push(e))}),0===u.length&&0===a.length||(!1!==this._config.suppressLeaveEvents||t||this._leaveEndpoint({channels:u,channelGroups:a},function(e){e.affectedChannels=u,e.affectedChannelGroups=a,e.currentTimetoken=n._currentTimetoken,e.lastTimetoken=n._lastTimetoken,n._listenerManager.announceStatus(e)}),0===Object.keys(this._channels).length&&0===Object.keys(this._presenceChannels).length&&0===Object.keys(this._channelGroups).length&&0===Object.keys(this._presenceChannelGroups).length&&(this._lastTimetoken=0,this._currentTimetoken=0,this._storedTimetoken=null,this._region=null,this._reconnectionManager.stopPolling()),this.reconnect())}},{key:"unsubscribeAll",value:function(e){this.adaptUnsubscribeChange({channels:this.getSubscribedChannels(),channelGroups:this.getSubscribedChannelGroups()},e)}},{key:"getHeartbeatChannels",value:function(){return Object.keys(this._heartbeatChannels)}},{key:"getHeartbeatChannelGroups",value:function(){return Object.keys(this._heartbeatChannelGroups)}},{key:"getSubscribedChannels",value:function(){return Object.keys(this._channels)}},{key:"getSubscribedChannelGroups",value:function(){return Object.keys(this._channelGroups)}},{key:"reconnect",value:function(){this._startSubscribeLoop(),this._registerHeartbeatTimer()}},{key:"disconnect",value:function(){this._stopSubscribeLoop(),this._stopHeartbeatTimer(),this._reconnectionManager.stopPolling()}},{key:"_registerHeartbeatTimer",value:function(){this._stopHeartbeatTimer(),0!==this._config.getHeartbeatInterval()&&(this._performHeartbeatLoop(),this._heartbeatTimer=setInterval(this._performHeartbeatLoop.bind(this),1e3*this._config.getHeartbeatInterval()))}},{key:"_stopHeartbeatTimer",value:function(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}},{key:"_performHeartbeatLoop",value:function(){var e=this,t=this.getHeartbeatChannels(),n=this.getHeartbeatChannelGroups(),r={};if(0!==t.length||0!==n.length){this.getSubscribedChannels().forEach(function(t){var n=e._channels[t].state;Object.keys(n).length&&(r[t]=n)}),this.getSubscribedChannelGroups().forEach(function(t){var n=e._channelGroups[t].state;Object.keys(n).length&&(r[t]=n)});var i=function(t){t.error&&e._config.announceFailedHeartbeats&&e._listenerManager.announceStatus(t),t.error&&e._config.autoNetworkDetection&&e._isOnline&&(e._isOnline=!1,e.disconnect(),e._listenerManager.announceNetworkDown(),e.reconnect()),!t.error&&e._config.announceSuccessfulHeartbeats&&e._listenerManager.announceStatus(t)};this._heartbeatEndpoint({channels:t,channelGroups:n,state:r},i.bind(this))}}},{key:"_startSubscribeLoop",value:function(){this._stopSubscribeLoop();var e=[],t=[];if(Object.keys(this._channels).forEach(function(t){return e.push(t)}),Object.keys(this._presenceChannels).forEach(function(t){return e.push(t+"-pnpres")}),Object.keys(this._channelGroups).forEach(function(e){return t.push(e)}),Object.keys(this._presenceChannelGroups).forEach(function(e){return t.push(e+"-pnpres")}),0!==e.length||0!==t.length){var n={channels:e,channelGroups:t,timetoken:this._currentTimetoken,filterExpression:this._config.filterExpression,region:this._region};this._subscribeCall=this._subscribeEndpoint(n,this._processSubscribeResponse.bind(this))}}},{key:"_processSubscribeResponse",value:function(e,t){var n=this;if(e.error)return void(e.category===y.default.PNTimeoutCategory?this._startSubscribeLoop():e.category===y.default.PNNetworkIssuesCategory?(this.disconnect(),e.error&&this._config.autoNetworkDetection&&this._isOnline&&(this._isOnline=!1,this._listenerManager.announceNetworkDown()),this._reconnectionManager.onReconnection(function(){n._config.autoNetworkDetection&&!n._isOnline&&(n._isOnline=!0,n._listenerManager.announceNetworkUp()),n.reconnect(),n._subscriptionStatusAnnounced=!0;var t={category:y.default.PNReconnectedCategory,operation:e.operation,lastTimetoken:n._lastTimetoken,currentTimetoken:n._currentTimetoken};n._listenerManager.announceStatus(t)}),this._reconnectionManager.startPolling(),this._listenerManager.announceStatus(e)):e.category===y.default.PNBadRequestCategory?(this._stopHeartbeatTimer(),this._listenerManager.announceStatus(e)):this._listenerManager.announceStatus(e));if(this._storedTimetoken?(this._currentTimetoken=this._storedTimetoken,this._storedTimetoken=null):(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=t.metadata.timetoken),!this._subscriptionStatusAnnounced){var r={};r.category=y.default.PNConnectedCategory,r.operation=e.operation,r.affectedChannels=this._pendingChannelSubscriptions,r.subscribedChannels=this.getSubscribedChannels(),r.affectedChannelGroups=this._pendingChannelGroupSubscriptions,r.lastTimetoken=this._lastTimetoken,r.currentTimetoken=this._currentTimetoken,this._subscriptionStatusAnnounced=!0,this._listenerManager.announceStatus(r),this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[]}var i=t.messages||[],s=this._config,o=s.requestMessageCountThreshold,u=s.dedupeOnSubscribe;if(o&&i.length>=o){var a={};a.category=y.default.PNRequestMessageCountExceededCategory,a.operation=e.operation,this._listenerManager.announceStatus(a)}i.forEach(function(e){var t=e.channel,r=e.subscriptionMatch,i=e.publishMetaData;if(t===r&&(r=null),u){if(n._dedupingManager.isDuplicate(e))return;n._dedupingManager.addEntry(e)}if(p.default.endsWith(e.channel,"-pnpres")){var s={};s.channel=null,s.subscription=null,s.actualChannel=null!=r?t:null,s.subscribedChannel=null!=r?r:t,t&&(s.channel=t.substring(0,t.lastIndexOf("-pnpres"))),r&&(s.subscription=r.substring(0,r.lastIndexOf("-pnpres"))),s.action=e.payload.action,s.state=e.payload.data,s.timetoken=i.publishTimetoken,s.occupancy=e.payload.occupancy,s.uuid=e.payload.uuid,s.timestamp=e.payload.timestamp,e.payload.join&&(s.join=e.payload.join),e.payload.leave&&(s.leave=e.payload.leave),e.payload.timeout&&(s.timeout=e.payload.timeout),n._listenerManager.announcePresence(s)}else{var o={};o.channel=null,o.subscription=null,o.actualChannel=null!=r?t:null,o.subscribedChannel=null!=r?r:t,o.channel=t,o.subscription=r,o.timetoken=i.publishTimetoken,o.publisher=e.issuingClientId,e.userMetadata&&(o.userMetadata=e.userMetadata),n._config.cipherKey?o.message=n._crypto.decrypt(e.payload):o.message=e.payload,n._listenerManager.announceMessage(o)}}),this._region=t.metadata.region,this._startSubscribeLoop()}},{key:"_stopSubscribeLoop",value:function(){this._subscribeCall&&("function"==typeof this._subscribeCall.abort&&this._subscribeCall.abort(),this._subscribeCall=null)}}]),e}();t.default=b,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(n(5),n(10)),o=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(){function e(){r(this,e),this._listeners=[]}return i(e,[{key:"addListener",value:function(e){this._listeners.push(e)}},{key:"removeListener",value:function(e){var t=[];this._listeners.forEach(function(n){n!==e&&t.push(n)}),this._listeners=t}},{key:"removeAllListeners",value:function(){this._listeners=[]}},{key:"announcePresence",value:function(e){this._listeners.forEach(function(t){t.presence&&t.presence(e)})}},{key:"announceStatus",value:function(e){this._listeners.forEach(function(t){t.status&&t.status(e)})}},{key:"announceMessage",value:function(e){this._listeners.forEach(function(t){t.message&&t.message(e)})}},{key:"announceNetworkUp",value:function(){var e={};e.category=o.default.PNNetworkUpCategory,this.announceStatus(e)}},{key:"announceNetworkDown",value:function(){var e={};e.category=o.default.PNNetworkDownCategory,this.announceStatus(e)}}]),e}();t.default=u,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNNetworkUpCategory:"PNNetworkUpCategory",PNNetworkDownCategory:"PNNetworkDownCategory",PNNetworkIssuesCategory:"PNNetworkIssuesCategory",PNTimeoutCategory:"PNTimeoutCategory",PNBadRequestCategory:"PNBadRequestCategory",PNAccessDeniedCategory:"PNAccessDeniedCategory",PNUnknownCategory:"PNUnknownCategory",PNReconnectedCategory:"PNReconnectedCategory",PNConnectedCategory:"PNConnectedCategory",PNRequestMessageCountExceededCategory:"PNRequestMessageCountExceededCategory"},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(12),o=(function(e){e&&e.__esModule}(s),n(5),function(){function e(t){var n=t.timeEndpoint;r(this,e),this._timeEndpoint=n}return i(e,[{key:"onReconnection",value:function(e){this._reconnectionCallback=e}},{key:"startPolling",value:function(){this._timeTimer=setInterval(this._performTimeLoop.bind(this),3e3)}},{key:"stopPolling",value:function(){clearInterval(this._timeTimer)}},{key:"_performTimeLoop",value:function(){var e=this;this._timeEndpoint(function(t){t.error||(clearInterval(e._timeTimer),e._reconnectionCallback())})}}]),e}());t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(){return f.default.PNTimeOperation}function i(){return"/time/0"}function s(e){return e.config.getTransactionTimeout()}function o(){return{}}function u(){return!1}function a(e,t){return{timetoken:t[0]}}function c(){}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.getURL=i,t.getRequestTimeout=s,t.prepareParams=o,t.isAuthSupported=u,t.handleResponse=a,t.validateParams=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNTimeOperation:"PNTimeOperation",PNHistoryOperation:"PNHistoryOperation",PNDeleteMessagesOperation:"PNDeleteMessagesOperation",PNFetchMessagesOperation:"PNFetchMessagesOperation",PNSubscribeOperation:"PNSubscribeOperation",PNUnsubscribeOperation:"PNUnsubscribeOperation",PNPublishOperation:"PNPublishOperation",PNPushNotificationEnabledChannelsOperation:"PNPushNotificationEnabledChannelsOperation",PNRemoveAllPushNotificationsOperation:"PNRemoveAllPushNotificationsOperation",PNWhereNowOperation:"PNWhereNowOperation",PNSetStateOperation:"PNSetStateOperation",PNHereNowOperation:"PNHereNowOperation",PNGetStateOperation:"PNGetStateOperation",PNHeartbeatOperation:"PNHeartbeatOperation",PNChannelGroupsOperation:"PNChannelGroupsOperation",PNRemoveGroupOperation:"PNRemoveGroupOperation",PNChannelsForGroupOperation:"PNChannelsForGroupOperation",PNAddChannelsToGroupOperation:"PNAddChannelsToGroupOperation",PNRemoveChannelsFromGroupOperation:"PNRemoveChannelsFromGroupOperation",PNAccessManagerGrant:"PNAccessManagerGrant",PNAccessManagerAudit:"PNAccessManagerAudit",PNUuidMetadataCreate:"PNUuidMetadataCreate"},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),o=(function(e){e&&e.__esModule}(s),n(5),function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n+=1){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t}),u=function(){function e(t){var n=t.config;r(this,e),this.hashHistory=[],this._config=n}return i(e,[{key:"getKey",value:function(e){var t=o(JSON.stringify(e.payload)).toString();return e.publishMetaData.publishTimetoken+"-"+t}},{key:"isDuplicate",value:function(e){return this.hashHistory.includes(this.getKey(e))}},{key:"addEntry",value:function(e){this.hashHistory.length>=this._config.maximumCacheSize&&this.hashHistory.shift(),this.hashHistory.push(this.getKey(e))}},{key:"clearHistory",value:function(){this.hashHistory=[]}}]),e}();t.default=u,e.exports=t.default},function(e,t){"use strict";function n(e){var t=[];return Object.keys(e).forEach(function(e){return t.push(e)}),t}function r(e){return encodeURIComponent(e).replace(/[!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){return n(e).sort()}function s(e){return i(e).map(function(t){return t+"="+r(e[t])}).join("&")}function o(e,t){return-1!==e.indexOf(t,this.length-t.length)}function u(){var e=void 0,t=void 0;return{promise:new Promise(function(n,r){e=n,t=r}),reject:t,fulfill:e}}e.exports={signPamFromParams:s,endsWith:o,createPromise:u,encodeString:r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return e.type=t,e.error=!0,e}function a(e){return u({message:e},"validationError")}function c(e,t,n){return e.usePost&&e.usePost(t,n)?e.postURL(t,n):e.usePut&&e.usePut(t,n)?e.putURL(t,n):e.useDelete&&e.useDelete(t,n)?e.deleteURL(t,n):e.getURL(t,n)}function l(e){if(e.sdkName)return e.sdkName;var t="PubNub-JS-"+e.sdkFamily;return e.partnerId&&(t+="-"+e.partnerId),t+="/"+e.getVersion()}function f(e,t,n){var r=e.config,i=e.crypto;n.timestamp=Math.floor((new Date).getTime()/1e3);var s=r.subscribeKey+"\n"+r.publishKey+"\n"+t+"\n";s+=g.default.signPamFromParams(n);var o=i.HMACSHA256(s);o=o.replace(/\+/g,"-"),o=o.replace(/\//g,"_"),n.signature=o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.networking,r=e.config,i=null,s=null,o={};t.getOperation()===v.default.PNTimeOperation||t.getOperation()===v.default.PNChannelGroupsOperation?i=arguments.length<=2?void 0:arguments[2]:(o=arguments.length<=2?void 0:arguments[2],i=arguments.length<=3?void 0:arguments[3]),"undefined"==typeof Promise||i||(s=g.default.createPromise());var u=t.validateParams(e,o);if(!u){var d=t.prepareParams(e,o),p=c(t,e,o),y=void 0,b={url:p,operation:t.getOperation(),timeout:t.getRequestTimeout(e)};d.uuid=r.UUID,d.pnsdk=l(r),r.useInstanceId&&(d.instanceid=r.instanceId),r.useRequestId&&(d.requestid=h.default.createUUID()),t.isAuthSupported()&&r.getAuthKey()&&(d.auth=r.getAuthKey()),r.secretKey&&f(e,p,d);var m=function(n,r){if(n.error)return void(i?i(n):s&&s.reject(new _("PubNub call failed, check status for details",n)));var u=t.handleResponse(e,r,o);i?i(n,u):s&&s.fulfill(u)};if(t.usePost&&t.usePost(e,o)){var P=t.postPayload(e,o);y=n.POST(d,P,b,m)}else if(t.usePut&&t.usePut()){var k=t.postPayload(e,o);y=n.PUT(d,k,b,m)}else y=t.useDelete&&t.useDelete()?n.DELETE(d,b,m):n.GET(d,b,m);return t.getOperation()===v.default.PNSubscribeOperation?y:s?s.promise:void 0}return i?i(a(u)):s?(s.reject(new _("Validation failed, check status for details",a(u))),s.promise):void 0};var d=n(3),h=r(d),p=(n(5),n(15)),g=r(p),y=n(2),b=(r(y),n(13)),v=r(b),_=function(e){function t(e,n){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.name=r.constructor.name,r.status=n,r.message=e,r}return o(t,e),t}(Error);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.channels,r=t.channelTimeTokens,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing ChannelTimeTokens"}function o(e,t){var n=t.channels,r=t.channelTimeTokens;return"/v3/history/sub-key/"+e.config.subscribeKey+"/message-counts/"+n+"?channelsTimetoken="+r}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){var n=t.channel,r=t.timetoken,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing timetoken":"Missing Channel"}function u(e,t){var n=t.channel,r=t.timetoken;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/message/"+r+"/action"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t.message)}function h(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){t.uuid,e.config;return"/v1/data/sub-key/${config.subscribeKey}/uuid/{$uuid}"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function u(e,t){t.uuid,e.config;return"/v1/data/sub-key/${config.subscribeKey}/uuid/{$uuid}"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/users/"+n}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/users/"+n}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/devices/"+n}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/devices/"+n}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function u(e,t){t.uuid,e.config;return"/v1/data/sub-key/${config.subscribeKey}/uuid/{$uuid}"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function u(e,t){t.uuid,e.config;return"/v1/data/sub-key/${config.subscribeKey}/uuid/{$uuid}"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/users/"+n+"/devices"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.user;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){var n=t.user_uuid,r=t.device_uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/users/"+n+"/devices/"+r}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.uuid,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing UUID"}function o(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/users/"+n+"/devices"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePost=i,t.getOperation=s,t.validateParams=o,t.postURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel"}function u(e,t){var n=t.channel;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel"}function o(e,t){var n=t.channel;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,
	t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function u(e,t){t.uuid,e.config;return"/v1/data/sub-key/${config.subscribeKey}/uuid/{$uuid}"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){var n=t.channel;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/users"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.user;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels"}function u(e,t){var n=t.channel,r=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/users/"+r}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function o(e,t){var n=t.channel;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/users"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.uuid,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing UUID"}function o(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/users/"+n+"/spaces"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return g.default.PNUuidMetadataCreate}function o(e,t){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function u(e,t){var n=t.channel;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/devices"}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.user;return{}}function f(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function d(e,t){return f(e,t)}function h(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.usePut=i,t.getOperation=s,t.validateParams=o,t.putURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.postPayload=d,t.handleResponse=h;var p=(n(5),n(13)),g=r(p),y=n(15);r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return!0}function s(){return h.default.PNUuidMetadataCreate}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels"}function u(e,t){var n=t.channel,r=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/devices/"+r}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){t.name,t.description;return{}}function f(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.useDelete=i,t.getOperation=s,t.validateParams=o,t.deleteURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15);r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function o(e,t){var n=t.channel;return"/v1/data/sub-key/"+e.config.subscribeKey+"/spaces/"+n+"/devices"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUuidMetadataCreate}function s(e,t){var n=t.uuid,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing UUID"}function o(e,t){var n=t.uuid;return"/v1/data/sub-key/"+e.config.subscribeKey+"/devices/"+n+"/spaces"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){t.name,t.description;return{}}function l(e,t){return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15);r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNAddChannelsToGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){var n=t.channels;return{add:(void 0===n?[]:n).join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNRemoveChannelsFromGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){var n=t.channels;return{remove:(void 0===n?[]:n).join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNRemoveGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)+"/remove"}function u(){return!0}function a(e){return e.config.getTransactionTimeout()}function c(){return{}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=u,t.getRequestTimeout=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(){return f.default.PNChannelGroupsOperation}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e){return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group"}function o(e){return e.config.getTransactionTimeout()}function u(){return!0}function a(){return{}}function c(e,t){return{groups:t.payload.groups}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNChannelsForGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(){return{}}function l(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(){return f.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function u(){return!0}function a(e,t){var n=t.pushGateway,r=t.channels;return{type:n,add:(void 0===r?[]:r).join(",")}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return f.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function u(){return!0}function a(e,t){var n=t.pushGateway,r=t.channels;return{type:n,remove:(void 0===r?[]:r).join(",")}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return f.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function u(){return!0}function a(e,t){return{type:t.pushGateway}}function c(e,t){return{channels:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return f.default.PNRemoveAllPushNotificationsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n+"/remove"}function o(e){return e.config.getTransactionTimeout()}function u(){return!0}function a(e,t){return{type:t.pushGateway}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNUnsubscribeOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(s)+"/leave"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(){return f.default.PNWhereNowOperation}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r;return"/v2/presence/sub-key/"+n.subscribeKey+"/uuid/"+i}function o(e){return e.config.getTransactionTimeout()}function u(){return!0}function a(){return{}}function c(e,t){return t.payload?{channels:t.payload.channels}:{channels:[]}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNHeartbeatOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(s)+"/heartbeat"}function u(){return!0}function a(e){return e.config.getTransactionTimeout()}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.state,s=void 0===i?{}:i,o=e.config,u={};return r.length>0&&(u["channel-group"]=r.join(",")),u.state=JSON.stringify(s),u.heartbeat=o.getPresenceTimeout(),u}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=u,t.getRequestTimeout=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNGetStateOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r,s=t.channels,o=void 0===s?[]:s,u=o.length>0?o.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(u)+"/uuid/"+i}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,u={};return 1===i.length&&0===o.length?u[i[0]]=t.payload:u=t.payload,{channels:u}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNSetStateOperation}function s(e,t){var n=e.config,r=t.state,i=t.channels,s=void 0===i?[]:i,o=t.channelGroups,u=void 0===o?[]:o;return r?n.subscribeKey?0===s.length&&0===u.length?"Please provide a list of channels and/or channel-groups":void 0:"Missing Subscribe Key":"Missing State"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(s)+"/uuid/"+n.UUID+"/data"}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){var n=t.state,r=t.channelGroups,i=void 0===r?[]:r,s={};return s.state=JSON.stringify(n),i.length>0&&(s["channel-group"]=i.join(",")),s}function l(e,t){return{state:t.payload}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNHereNowOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=t.channelGroups,o=void 0===s?[]:s,u="/v2/presence/sub-key/"+n.subscribeKey;if(i.length>0||o.length>0){var a=i.length>0?i.join(","):",";u+="/channel/"+p.default.encodeString(a)}return u}function u(e){return e.config.getTransactionTimeout()}function a(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.includeUUIDs,s=void 0===i||i,o=t.includeState,u=void 0!==o&&o,a={};return s||(a.disable_uuids=1),u&&(a.state=1),r.length>0&&(a["channel-group"]=r.join(",")),a}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,u=n.includeUUIDs,a=void 0===u||u,c=n.includeState,l=void 0!==c&&c;return i.length>1||o.length>0||0===o.length&&0===i.length?function(){var e={};return e.totalChannels=t.payload.total_channels,e.totalOccupancy=t.payload.total_occupancy,e.channels={},Object.keys(t.payload.channels).forEach(function(n){var r=t.payload.channels[n],i=[];return e.channels[n]={occupants:i,name:n,occupancy:r.occupancy},a&&r.uuids.forEach(function(e){l?i.push({state:e.state,uuid:e.uuid}):i.push({state:null,uuid:e})}),e}),e}():function(){var e={},n=[];return e.totalChannels=1,e.totalOccupancy=t.occupancy,e.channels={},e.channels[i[0]]={occupants:n,name:i[0],occupancy:t.occupancy},a&&t.uuids&&t.uuids.forEach(function(e){l?n.push({state:e.state,uuid:e.uuid}):n.push({state:null,uuid:e})}),e}()}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(){return f.default.PNAccessManagerAudit}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e){return"/v2/auth/audit/sub-key/"+e.config.subscribeKey}function o(e){return e.config.getTransactionTimeout()}function u(){return!1}function a(e,t){var n=t.channel,r=t.channelGroup,i=t.authKeys,s=void 0===i?[]:i,o={};return n&&(o.channel=n),r&&(o["channel-group"]=r),s.length>0&&(o.auth=s.join(",")),o}function c(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return f.default.PNAccessManagerGrant}function i(e){var t=e.config;return t.subscribeKey?t.publishKey?t.secretKey?void 0:"Missing Secret Key":"Missing Publish Key":"Missing Subscribe Key"}function s(e){return"/v2/auth/grant/sub-key/"+e.config.subscribeKey}function o(e){return e.config.getTransactionTimeout()}function u(){return!1}function a(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.channelGroups,s=void 0===i?[]:i,o=t.ttl,u=t.read,a=void 0!==u&&u,c=t.write,l=void 0!==c&&c,f=t.manage,d=void 0!==f&&f,h=t.authKeys,p=void 0===h?[]:h,g={};return g.r=a?"1":"0",g.w=l?"1":"0",g.m=d?"1":"0",r.length>0&&(g.channel=r.join(",")),s.length>0&&(g["channel-group"]=s.join(",")),p.length>0&&(g.auth=p.join(",")),(o||0===o)&&(g.ttl=o),g}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=u,t.prepareParams=a,t.handleResponse=c;var l=(n(5),n(13)),f=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function s(){return b.default.PNPublishOperation}function o(e,t){var n=e.config,r=t.message;return t.channel?r?n.subscribeKey?void 0:"Missing Subscribe Key":"Missing Message":"Missing Channel"}function u(e,t){var n=t.sendByPost;return void 0!==n&&n}function a(e,t){var n=e.config,r=t.channel,s=t.message,o=i(e,s);return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0/"+_.default.encodeString(o)}function c(e,t){var n=e.config,r=t.channel;return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0"}function l(e){return e.config.getTransactionTimeout()}function f(){return!0}function d(e,t){return i(e,t.message)}function h(e,t){var n=t.meta,r=t.replicate,i=void 0===r||r,s=t.storeInHistory,o=t.ttl,u={};return null!=s&&(u.store=s?"1":"0"),o&&(u.ttl=o),!1===i&&(u.norep="true"),n&&"object"===(void 0===n?"undefined":g(n))&&(u.meta=JSON.stringify(n)),u}function p(e,t){return{timetoken:t[2]}}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getOperation=s,t.validateParams=o,t.usePost=u,t.getURL=a,t.postURL=c,t.getRequestTimeout=l,t.isAuthSupported=f,t.postPayload=d,t.prepareParams=h,t.handleResponse=p;var y=(n(5),n(13)),b=r(y),v=n(15),_=r(v)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return h.default.PNHistoryOperation}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function u(e,t){var n=t.channel;return"/v2/history/sub-key/"+e.config.subscribeKey+"/channel/"+g.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.reverse,s=t.count,o=void 0===s?100:s,u=t.stringifiedTimeToken,a=void 0!==u&&u,c={include_token:"true"};return c.count=o,n&&(c.start=n),r&&(c.end=r),a&&(c.string_message_token="true"),null!=i&&(c.reverse=i.toString()),c}function f(e,t){var n={messages:[],startTimeToken:t[1],endTimeToken:t[2]};return t[0].forEach(function(t){var r={timetoken:t.timetoken,entry:i(e,t.message)};n.messages.push(r)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return h.default.PNDeleteMessagesOperation}function s(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function o(){return!0}function u(e,t){var n=t.channel;return"/v3/history/sub-key/"+e.config.subscribeKey+"/channel/"+g.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i={};return n&&(i.start=n),r&&(i.end=r),i}function f(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.useDelete=o,t.getURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return h.default.PNFetchMessagesOperation}function o(e,t){var n=t.channels,r=e.config;return n&&0!==n.length?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channels"}function u(e,t){var n=t.channels,r=void 0===n?[]:n,i=e.config,s=r.length>0?r.join(","):",";return"/v3/history/sub-key/"+i.subscribeKey+"/channel/"+g.default.encodeString(s)}function a(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.count,s=t.stringifiedTimeToken,o=void 0!==s&&s,u={};return i&&(u.max=i),n&&(u.start=n),r&&(u.end=r),o&&(u.string_message_token="true"),u}function f(e,t){var n={channels:{}};return Object.keys(t.channels||{}).forEach(function(r){n.channels[r]=[],(t.channels[r]||[]).forEach(function(t){var s={};s.channel=r,s.subscription=null,s.timetoken=t.timetoken,s.message=i(e,t.message),n.channels[r].push(s)})}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=u,t.getRequestTimeout=a,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=f;var d=(n(5),n(13)),h=r(d),p=n(15),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return d.default.PNSubscribeOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/subscribe/"+n.subscribeKey+"/"+p.default.encodeString(s)+"/0"}function u(e){return e.config.getSubscribeTimeout()}function a(){return!0}function c(e,t){var n=e.config,r=t.channelGroups,i=void 0===r?[]:r,s=t.timetoken,o=t.filterExpression,u=t.region,a={heartbeat:n.getPresenceTimeout()};return i.length>0&&(a["channel-group"]=i.join(",")),o&&o.length>0&&(a["filter-expr"]=o),s&&(a.tt=s),u&&(a.tr=u),a}function l(e,t){var n=[];t.m.forEach(function(e){var t={publishTimetoken:e.p.t,region:e.p.r},r={shard:parseInt(e.a,10),subscriptionMatch:e.b,channel:e.c,payload:e.d,flags:e.f,issuingClientId:e.i,subscribeKey:e.k,originationTimetoken:e.o,userMetadata:e.u,publishMetaData:t};n.push(r)});var r={timetoken:t.t.t,region:t.t.r};return{messages:n,metadata:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=u,t.isAuthSupported=a,t.prepareParams=c,t.handleResponse=l;var f=(n(5),n(13)),d=r(f),h=n(15),p=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),u=(r(o),n(10)),a=r(u),c=(n(5),function(){function e(t){var n=this;i(this,e),this._modules={},Object.keys(t).forEach(function(e){n._modules[e]=t[e].bind(n)})}return s(e,[{key:"init",value:function(e){this._config=e,this._maxSubDomain=20,this._currentSubDomain=Math.floor(Math.random()*this._maxSubDomain),this._providedFQDN=(this._config.secure?"https://":"http://")+this._config.origin,this._coreParams={},this.shiftStandardOrigin()}},{key:"nextOrigin",value:function(){if(-1===this._providedFQDN.indexOf("pubsub."))return this._providedFQDN;var e=void 0;return this._currentSubDomain=this._currentSubDomain+1,this._currentSubDomain>=this._maxSubDomain&&(this._currentSubDomain=1),e=this._currentSubDomain.toString(),this._providedFQDN.replace("pubsub","ps"+e)}},{key:"hasModule",value:function(e){return e in this._modules}},{key:"shiftStandardOrigin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._standardOrigin=this.nextOrigin(e),this._standardOrigin}},{key:"getStandardOrigin",value:function(){return this._standardOrigin}},{key:"PUT",value:function(e,t,n,r){return this._modules.put(e,t,n,r)}},{key:"POST",value:function(e,t,n,r){return this._modules.post(e,t,n,r)}},{key:"GET",value:function(e,t,n){return this._modules.get(e,t,n)}},{key:"DELETE",value:function(e,t,n){return this._modules.del(e,t,n)}},{key:"_detectErrorCategory",value:function(e){if("ENOTFOUND"===e.code)return a.default.PNNetworkIssuesCategory;if("ECONNREFUSED"===e.code)return a.default.PNNetworkIssuesCategory;if("ECONNRESET"===e.code)return a.default.PNNetworkIssuesCategory;if("EAI_AGAIN"===e.code)return a.default.PNNetworkIssuesCategory;if(0===e.status||e.hasOwnProperty("status")&&void 0===e.status)return a.default.PNNetworkIssuesCategory;if(e.timeout)return a.default.PNTimeoutCategory;if("ETIMEDOUT"===e.code)return a.default.PNNetworkIssuesCategory;if(e.response){if(e.response.badRequest)return a.default.PNBadRequestCategory;if(e.response.forbidden)return a.default.PNAccessDeniedCategory}return a.default.PNUnknownCategory}}]),e}());t.default=c,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){try{return localStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{return localStorage.setItem(e,t)}catch(e){return null}}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t=(new Date).getTime(),n=(new Date).toISOString(),r=function(){return console&&console.log?console:window&&window.console&&window.console.log?window.console:console}();r.log("<<<<<"),r.log("["+n+"]","\n",e.url,"\n",e.qs),r.log("-----"),e.on("response",function(n){var i=(new Date).getTime(),s=i-t,o=(new Date).toISOString();r.log(">>>>>>"),r.log("["+o+" / "+s+"]","\n",e.url,"\n",e.qs,"\n",n.text),r.log("-----")})}function i(e,t,n){var i=this;return this._config.logVerbosity&&(e=e.use(r)),this._config.proxy&&this._modules.proxy&&(e=this._modules.proxy.call(this,e)),
	this._config.keepAlive&&this._modules.keepAlive&&(e=this._modules.keepAlive(e)),e.timeout(t.timeout).end(function(e,r){var s={};if(s.error=null!==e,s.operation=t.operation,r&&r.status&&(s.statusCode=r.status),e){if(e.response&&e.response.text&&!i._config.logVerbosity)try{s.errorData=JSON.parse(e.response.text)}catch(t){s.errorData=e}else s.errorData=e;return s.category=i._detectErrorCategory(e),n(s,null)}var o=JSON.parse(r.text);return o.error&&1===o.error&&o.status&&o.message&&o.service?(s.errorData=o,s.statusCode=o.status,s.error=!0,s.category=i._detectErrorCategory(s),n(s,null)):n(s,o)})}function s(e,t,n){var r=l.default.get(this.getStandardOrigin()+t.url).query(e);return i.call(this,r,t,n)}function o(e,t,n,r){var s=l.default.post(this.getStandardOrigin()+n.url).set("Content-Type","application/json").query(e).send(t);return i.call(this,s,n,r)}function u(e,t,n,r){var s=l.default.put(this.getStandardOrigin()+n.url).set("Content-Type","application/json").query(e).send(t);return i.call(this,s,n,r)}function a(e,t,n){var r=l.default.delete(this.getStandardOrigin()+t.url).query(e);return i.call(this,r,t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.get=s,t.post=o,t.put=u,t.del=a;var c=n(68),l=function(e){return e&&e.__esModule?e:{default:e}}(c);n(5)},function(e,t,n){function r(){}function i(e){if(!g(e))return e;var t=[];for(var n in e)s(t,n,e[n]);return t.join("&")}function s(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){s(e,t,n)});else if(g(n))for(var r in n)s(e,t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t))}function o(e){for(var t,n,r={},i=e.split("&"),s=0,o=i.length;s<o;++s)t=i[s],n=t.indexOf("="),-1==n?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function u(e){for(var t,n,r,i,s=e.split(/\r?\n/),o={},u=0,a=s.length;u<a;++u)n=s[u],-1!==(t=n.indexOf(":"))&&(r=n.slice(0,t).toLowerCase(),i=_(n.slice(t+1)),o[r]=i);return o}function a(e){return/[\/+]json($|[^-\w])/.test(e)}function c(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function l(e,t){var n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new c(n)}catch(t){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=t,n.xhr?(e.rawResponse=void 0===n.xhr.responseType?n.xhr.responseText:n.xhr.response,e.status=n.xhr.status?n.xhr.status:null,e.statusCode=e.status):(e.rawResponse=null,e.status=null),n.callback(e)}n.emit("response",t);var r;try{n._isResponseOK(t)||(r=new Error(t.statusText||"Unsuccessful HTTP response"))}catch(e){r=e}r?(r.original=e,r.response=t,r.status=t.status,n.callback(r,t)):n.callback(null,t)})}function f(e,t,n){var r=v("DELETE",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}var d;"undefined"!=typeof window?d=window:"undefined"!=typeof self?d=self:(console.warn("Using browser-only version of superagent in non-browser environment"),d=this);var h=n(69),p=n(70),g=n(71),y=n(72),b=n(74),v=t=e.exports=function(e,n){return"function"==typeof n?new t.Request("GET",e).end(n):1==arguments.length?new t.Request("GET",e):new t.Request(e,n)};t.Request=l,v.getXHR=function(){if(!(!d.XMLHttpRequest||d.location&&"file:"==d.location.protocol&&d.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only version of superagent could not find XHR")};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=i,v.parseString=o,v.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},y(c.prototype),c.prototype._parseBody=function(e){var t=v.parse[this.type];return this.req._parser?this.req._parser(this,e):(!t&&a(this.type)&&(t=v.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null)},c.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=t,i.url=n,i},v.Response=c,h(l.prototype),p(l.prototype),l.prototype.type=function(e){return this.set("Content-Type",v.types[e]||e),this},l.prototype.accept=function(e){return this.set("Accept",v.types[e]||e),this},l.prototype.auth=function(e,t,n){1===arguments.length&&(t=""),"object"==typeof t&&null!==t&&(n=t,t=""),n||(n={type:"function"==typeof btoa?"basic":"auto"});var r=function(e){if("function"==typeof btoa)return btoa(e);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(e,t,n,r)},l.prototype.query=function(e){return"string"!=typeof e&&(e=i(e)),e&&this._query.push(e),this},l.prototype.attach=function(e,t,n){if(t){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(e,t,n||t.name)}return this},l.prototype._getFormData=function(){return this._formData||(this._formData=new d.FormData),this._formData},l.prototype.callback=function(e,t){if(this._shouldRetry(e,t))return this._retry();var n=this._callback;this.clearTimeout(),e&&(this._maxRetries&&(e.retries=this._retries-1),this.emit("error",e)),n(e,t)},l.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},l.prototype.buffer=l.prototype.ca=l.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},l.prototype.pipe=l.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},l.prototype._isHost=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&"[object Object]"!==Object.prototype.toString.call(e)},l.prototype.end=function(e){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=e||r,this._finalizeQueryString(),this._end()},l.prototype._end=function(){var e=this,t=this.xhr=v.getXHR(),n=this._formData||this._data;this._setTimeouts(),t.onreadystatechange=function(){var n=t.readyState;if(n>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4==n){var r;try{r=t.status}catch(e){r=0}if(!r){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end")}};var r=function(t,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=t,e.emit("progress",n)};if(this.hasListeners("progress"))try{t.onprogress=r.bind(null,"download"),t.upload&&(t.upload.onprogress=r.bind(null,"upload"))}catch(e){}try{this.username&&this.password?t.open(this.method,this.url,!0,this.username,this.password):t.open(this.method,this.url,!0)}catch(e){return this.callback(e)}if(this._withCredentials&&(t.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){var i=this._header["content-type"],s=this._serializer||v.serialize[i?i.split(";")[0]:""];!s&&a(i)&&(s=v.serialize["application/json"]),s&&(n=s(n))}for(var o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&t.setRequestHeader(o,this.header[o]);return this._responseType&&(t.responseType=this._responseType),this.emit("request",this),t.send(void 0!==n?n:null),this},v.agent=function(){return new b},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(e){b.prototype[e.toLowerCase()]=function(t,n){var r=new v.Request(e,t);return this._setDefaults(r),n&&r.end(n),r}}),b.prototype.del=b.prototype.delete,v.get=function(e,t,n){var r=v("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},v.head=function(e,t,n){var r=v("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},v.options=function(e,t,n){var r=v("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},v.del=f,v.delete=f,v.patch=function(e,t,n){var r=v("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},v.post=function(e,t,n){var r=v("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},v.put=function(e,t,n){var r=v("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,t,n){"use strict";function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}var s=n(71);e.exports=r,r.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},r.prototype.parse=function(e){return this._parser=e,this},r.prototype.responseType=function(e){return this._responseType=e,this},r.prototype.serialize=function(e){return this._serializer=e,this},r.prototype.timeout=function(e){if(!e||"object"!=typeof e)return this._timeout=e,this._responseTimeout=0,this;for(var t in e)switch(t){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;default:console.warn("Unknown timeout option",t)}return this},r.prototype.retry=function(e,t){return 0!==arguments.length&&!0!==e||(e=1),e<=0&&(e=0),this._maxRetries=e,this._retries=0,this._retryCallback=t,this};var o=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];r.prototype._shouldRetry=function(e,t){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var n=this._retryCallback(e,t);if(!0===n)return!0;if(!1===n)return!1}catch(e){console.error(e)}if(t&&t.status&&t.status>=500&&501!=t.status)return!0;if(e){if(e.code&&~o.indexOf(e.code))return!0;if(e.timeout&&"ECONNABORTED"==e.code)return!0;if(e.crossDomain)return!0}return!1},r.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},r.prototype.then=function(e,t){if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(e,t){n.end(function(n,r){n?t(n):e(r)})})}return this._fullfilledPromise.then(e,t)},r.prototype.catch=function(e){return this.then(void 0,e)},r.prototype.use=function(e){return e(this),this},r.prototype.ok=function(e){if("function"!=typeof e)throw Error("Callback required");return this._okCallback=e,this},r.prototype._isResponseOK=function(e){return!!e&&(this._okCallback?this._okCallback(e):e.status>=200&&e.status<300)},r.prototype.get=function(e){return this._header[e.toLowerCase()]},r.prototype.getHeader=r.prototype.get,r.prototype.set=function(e,t){if(s(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},r.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},r.prototype.field=function(e,t){if(null===e||void 0===e)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),s(e)){for(var n in e)this.field(n,e[n]);return this}if(Array.isArray(t)){for(var r in t)this.field(e,t[r]);return this}if(null===t||void 0===t)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof t&&(t=""+t),this._getFormData().append(e,t),this},r.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},r.prototype._auth=function(e,t,n,r){switch(n.type){case"basic":this.set("Authorization","Basic "+r(e+":"+t));break;case"auto":this.username=e,this.password=t;break;case"bearer":this.set("Authorization","Bearer "+e)}return this},r.prototype.withCredentials=function(e){return void 0==e&&(e=!0),this._withCredentials=e,this},r.prototype.redirects=function(e){return this._maxRedirects=e,this},r.prototype.maxResponseSize=function(e){if("number"!=typeof e)throw TypeError("Invalid argument");return this._maxResponseSize=e,this},r.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},r.prototype.send=function(e){var t=s(e),n=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(t&&s(this._data))for(var r in e)this._data[r]=e[r];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+e:e:(this._data||"")+e):this._data=e;return!t||this._isHost(e)?this:(n||this.type("json"),this)},r.prototype.sortQuery=function(e){return this._sort=void 0===e||e,this},r.prototype._finalizeQueryString=function(){var e=this._query.join("&");if(e&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+e),this._query.length=0,this._sort){var t=this.url.indexOf("?");if(t>=0){var n=this.url.substring(t+1).split("&");"function"==typeof this._sort?n.sort(this._sort):n.sort(),this.url=this.url.substring(0,t)+"?"+n.join("&")}}},r.prototype._appendQueryString=function(){console.trace("Unsupported")},r.prototype._timeoutError=function(e,t,n){if(!this._aborted){var r=new Error(e+t+"ms exceeded");r.timeout=t,r.code="ECONNABORTED",r.errno=n,this.timedout=!0,this.abort(),this.callback(r)}},r.prototype._setTimeouts=function(){var e=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){e._timeoutError("Timeout of ",e._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){e._timeoutError("Response timeout of ",e._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},function(e,t){"use strict";function n(e){return null!==e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}var s=n(73);e.exports=r,r.prototype.get=function(e){return this.header[e.toLowerCase()]},r.prototype._setHeaderProperties=function(e){var t=e["content-type"]||"";this.type=s.type(t);var n=s.params(t);for(var r in n)this[r]=n[r];this.links={};try{e.link&&(this.links=s.parseLinks(e.link))}catch(e){}},r.prototype._setStatusProperties=function(e){var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.redirect=3==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.created=201==e,this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.forbidden=403==e,this.notFound=404==e,this.unprocessableEntity=422==e}},function(e,t){"use strict";t.type=function(e){return e.split(/ *; */).shift()},t.params=function(e){return e.split(/ *; */).reduce(function(e,t){var n=t.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(e[r]=i),e},{})},t.parseLinks=function(e){return e.split(/ *, */).reduce(function(e,t){var n=t.split(/ *; */),r=n[0].slice(1,-1);return e[n[1].split(/ *= */)[1].slice(1,-1)]=r,e},{})},t.cleanHeader=function(e,t){return delete e["content-type"],delete e["content-length"],delete e["transfer-encoding"],delete e.host,t&&(delete e.authorization,delete e.cookie),e}},function(e,t){function n(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(e){n.prototype[e]=function(){return this._defaults.push({fn:e,arguments:arguments}),this}}),n.prototype._setDefaults=function(e){this._defaults.forEach(function(t){e[t.fn].apply(e,t.arguments)})},e.exports=n}])});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(3);

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var splice = Array.prototype.splice;

	var toString = Object.prototype.toString
	var type = function(obj) {
	  return toString.call(obj).slice(8, -1);
	}

	var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
	  getAllKeys(source).forEach(function(key) {
	    if (hasOwnProperty.call(source, key)) {
	      target[key] = source[key];
	    }
	  });
	  return target;
	};

	var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
	  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
	  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

	/* istanbul ignore next */
	function copy(object) {
	  if (Array.isArray(object)) {
	    return assign(object.constructor(object.length), object)
	  } else if (type(object) === 'Map') {
	    return new Map(object)
	  } else if (type(object) === 'Set') {
	    return new Set(object)
	  } else if (object && typeof object === 'object') {
	    var prototype = Object.getPrototypeOf(object);
	    return assign(Object.create(prototype), object);
	  } else {
	    return object;
	  }
	}

	function newContext() {
	  var commands = assign({}, defaultCommands);
	  update.extend = function(directive, fn) {
	    commands[directive] = fn;
	  };
	  update.isEquals = function(a, b) { return a === b; };

	  return update;

	  function update(object, spec) {
	    if (typeof spec === 'function') {
	      spec = { $apply: spec };
	    }

	    if (!(Array.isArray(object) && Array.isArray(spec))) {
	      invariant(
	        !Array.isArray(spec),
	        'update(): You provided an invalid spec to update(). The spec may ' +
	        'not contain an array except as the value of $set, $push, $unshift, ' +
	        '$splice or any custom command allowing an array value.'
	      );
	    }

	    invariant(
	      typeof spec === 'object' && spec !== null,
	      'update(): You provided an invalid spec to update(). The spec and ' +
	      'every included key path must be plain objects containing one of the ' +
	      'following commands: %s.',
	      Object.keys(commands).join(', ')
	    );

	    var nextObject = object;
	    var index, key;
	    getAllKeys(spec).forEach(function(key) {
	      if (hasOwnProperty.call(commands, key)) {
	        var objectWasNextObject = object === nextObject;
	        nextObject = commands[key](spec[key], nextObject, spec, object);
	        if (objectWasNextObject && update.isEquals(nextObject, object)) {
	          nextObject = object;
	        }
	      } else {
	        var nextValueForKey =
	          type(object) === 'Map'
	            ? update(object.get(key), spec[key])
	            : update(object[key], spec[key]);
	        var nextObjectValue =
	          type(nextObject) === 'Map'
	              ? nextObject.get(key)
	              : nextObject[key];
	        if (!update.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
	          if (nextObject === object) {
	            nextObject = copy(object);
	          }
	          if (type(nextObject) === 'Map') {
	            nextObject.set(key, nextValueForKey);
	          } else {
	            nextObject[key] = nextValueForKey;
	          }
	        }
	      }
	    })
	    return nextObject;
	  }

	}

	var defaultCommands = {
	  $push: function(value, nextObject, spec) {
	    invariantPushAndUnshift(nextObject, spec, '$push');
	    return value.length ? nextObject.concat(value) : nextObject;
	  },
	  $unshift: function(value, nextObject, spec) {
	    invariantPushAndUnshift(nextObject, spec, '$unshift');
	    return value.length ? value.concat(nextObject) : nextObject;
	  },
	  $splice: function(value, nextObject, spec, originalObject) {
	    invariantSplices(nextObject, spec);
	    value.forEach(function(args) {
	      invariantSplice(args);
	      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
	      splice.apply(nextObject, args);
	    });
	    return nextObject;
	  },
	  $set: function(value, nextObject, spec) {
	    invariantSet(spec);
	    return value;
	  },
	  $toggle: function(targets, nextObject) {
	    invariantSpecArray(targets, '$toggle');
	    var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;

	    targets.forEach(function(target) {
	      nextObjectCopy[target] = !nextObject[target];
	    });

	    return nextObjectCopy;
	  },
	  $unset: function(value, nextObject, spec, originalObject) {
	    invariantSpecArray(value, '$unset');
	    value.forEach(function(key) {
	      if (Object.hasOwnProperty.call(nextObject, key)) {
	        if (nextObject === originalObject) nextObject = copy(originalObject);
	        delete nextObject[key];
	      }
	    });
	    return nextObject;
	  },
	  $add: function(value, nextObject, spec, originalObject) {
	    invariantMapOrSet(nextObject, '$add');
	    invariantSpecArray(value, '$add');
	    if (type(nextObject) === 'Map') {
	      value.forEach(function(pair) {
	        var key = pair[0];
	        var value = pair[1];
	        if (nextObject === originalObject && nextObject.get(key) !== value) nextObject = copy(originalObject);
	        nextObject.set(key, value);
	      });
	    } else {
	      value.forEach(function(value) {
	        if (nextObject === originalObject && !nextObject.has(value)) nextObject = copy(originalObject);
	        nextObject.add(value);
	      });
	    }
	    return nextObject;
	  },
	  $remove: function(value, nextObject, spec, originalObject) {
	    invariantMapOrSet(nextObject, '$remove');
	    invariantSpecArray(value, '$remove');
	    value.forEach(function(key) {
	      if (nextObject === originalObject && nextObject.has(key)) nextObject = copy(originalObject);
	      nextObject.delete(key);
	    });
	    return nextObject;
	  },
	  $merge: function(value, nextObject, spec, originalObject) {
	    invariantMerge(nextObject, value);
	    getAllKeys(value).forEach(function(key) {
	      if (value[key] !== nextObject[key]) {
	        if (nextObject === originalObject) nextObject = copy(originalObject);
	        nextObject[key] = value[key];
	      }
	    });
	    return nextObject;
	  },
	  $apply: function(value, original) {
	    invariantApply(value);
	    return value(original);
	  }
	};

	var contextForExport = newContext();

	module.exports = contextForExport;
	module.exports.default = contextForExport;
	module.exports.newContext = newContext;

	// invariants

	function invariantPushAndUnshift(value, spec, command) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  );
	  invariantSpecArray(spec[command], command)
	}

	function invariantSpecArray(spec, command) {
	  invariant(
	    Array.isArray(spec),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    spec
	  );
	}

	function invariantSplices(value, spec) {
	  invariant(
	    Array.isArray(value),
	    'Expected $splice target to be an array; got %s',
	    value
	  );
	  invariantSplice(spec['$splice']);
	}

	function invariantSplice(value) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
	    'Did you forget to wrap your parameters in an array?',
	    value
	  );
	}

	function invariantApply(fn) {
	  invariant(
	    typeof fn === 'function',
	    'update(): expected spec of $apply to be a function; got %s.',
	    fn
	  );
	}

	function invariantSet(spec) {
	  invariant(
	    Object.keys(spec).length === 1,
	    'Cannot have more than one key in an object with $set'
	  );
	}

	function invariantMerge(target, specValue) {
	  invariant(
	    specValue && typeof specValue === 'object',
	    'update(): $merge expects a spec of type \'object\'; got %s',
	    specValue
	  );
	  invariant(
	    target && typeof target === 'object',
	    'update(): $merge expects a target of type \'object\'; got %s',
	    target
	  );
	}

	function invariantMapOrSet(target, command) {
	  var typeOfTarget = type(target);
	  invariant(
	    typeOfTarget === 'Map' || typeOfTarget === 'Set',
	    'update(): %s expects a target of type Set or Map; got %s',
	    command,
	    typeOfTarget
	  );
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (originalInstance, wrappedInstance) {
	  _config2.default.attributes_to_delegate.forEach(function (attribute) {
	    wrapAttribute(originalInstance, wrappedInstance, attribute);
	  });

	  _config2.default.methods_to_delegate.forEach(function (method) {
	    wrapMethod(originalInstance, wrappedInstance, method);
	  });
	};

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapAttribute(originalInstance, wrappedInstance, attributeName) {
	  wrappedInstance[attributeName] = originalInstance[attributeName];
	}

	function wrapMethod(OriginalInstance, wrappedInstance, methodName) {
	  wrappedInstance[methodName] = function () {
	    return OriginalInstance[methodName].apply(wrappedInstance, arguments);
	  };
	}

	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {"pubnub_prefix":"pubnub","attributes_to_delegate":["channelGroups","push"],"methods_to_delegate":["addListener","removeListener","removeAllListeners","hereNow","whereNow","getState","setState","grant","audit","publish","fire","history","deleteMessages","fetchMessages","time","reconnect","stop","unsubscribeAll","getSubscribedChannels","getSubscribedChannelGroups","encrypt","decrypt","getAuthKey","setAuthKey","setCipherKey","getUUID","setUUID","getFilterExpression","setFilterExpression","getVirtualSpaces","addVirtualSpace","updateVirtualSpace","getVirtualSpace","messageCounts","generateUUID","setUserData","getUserData","addUserToVirtualSpace","listUsersInVirtualSpace","listVirtualSpacesForUser","setDeviceData","getDeviceData","addDeviceToVirtualSpace","listDevicesInVirtualSpace","listVirtualSpacesForDevice","addDeviceToUser","removeDeviceFromUser","listDevicesForUser"],"common_callbacks_to_wrap":["callback","error"],"subscribe_listener_events_to_broadcast":["message","presence","status"],"history_sort_attribute":"timetoken"}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);

	    this.count = {};
	    this.instance = undefined;
	  }

	  _createClass(_class, [{
	    key: 'initialize',
	    value: function initialize(instance) {
	      this.instance = instance;
	    }
	  }, {
	    key: 'enableLoad',
	    value: function enableLoad(args) {
	      var _this = this;

	      if (this.instance && args.autoload && typeof args.autoload === 'number') {
	        this.count[args.channels] = args.autoload;

	        args.channels.forEach(function (channel) {
	          _this.count[channel] = args.autoload;
	        });
	      }
	    }
	  }, {
	    key: 'getHistory',
	    value: function getHistory(channel, callback) {
	      var _this2 = this;

	      if (this.count[channel]) {
	        this.instance.history({ channel: channel, count: this.count[channel] }).then(function (response) {
	          response.messages.forEach(function (m) {
	            m.message = m.entry;
	            m.channel = channel;

	            _this2.instance._component.setState(function (prevState) {
	              return {
	                pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, _defineProperty({}, channel, { $push: [m] }))
	              };
	            });
	          });

	          if (callback) {
	            callback();
	          }
	        }).catch(function () {});
	      }
	    }
	  }, {
	    key: 'disableLoad',
	    value: function disableLoad(args) {
	      var _this3 = this;

	      if (Array.isArray(args.channels)) {
	        args.channels.forEach(function (ch) {
	          if (_this3.count[ch]) delete _this3.count[ch];
	        });
	      } else if (this.count[args.channels]) {
	        delete this.count[args.channels];
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Broadcast = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function subscribeChannel(event, channel, callback) {
	  if (!event[channel]) {
	    event[channel] = callback || {};
	  } else if (event[channel] === {} && callback) {
	    event[channel] = callback;
	  }
	}

	function unsubscribeChannel(event, channel) {
	  if (event[channel]) {
	    delete event[channel];
	  }
	}

	var Broadcast = exports.Broadcast = function () {
	  function Broadcast() {
	    _classCallCheck(this, Broadcast);

	    this._message = {};
	    this._presence = {};
	    this._status = null;
	  }

	  _createClass(Broadcast, [{
	    key: 'message',
	    value: function message(channel, callback) {
	      subscribeChannel(this._message, channel, callback);
	    }
	  }, {
	    key: 'presence',
	    value: function presence(channel, callback) {
	      subscribeChannel(this._presence, channel, callback);
	    }
	  }, {
	    key: 'status',
	    value: function status(callback) {
	      if (!this._status) {
	        this._status = callback || {};
	      } else if (this._status === {} && callback) {
	        this._status = callback;
	      }
	    }
	  }, {
	    key: 'isSubscribe',
	    value: function isSubscribe(event, channel) {
	      var subscriber = '_' + event;

	      if (subscriber === '_status') {
	        return this[subscriber];
	      } else {
	        return this[subscriber] && this[subscriber][channel];
	      }
	    }
	  }, {
	    key: 'emit',
	    value: function emit(event, channel, args) {
	      var subscriber = '_' + event;

	      if (this[subscriber] && this[subscriber][channel] && typeof this[subscriber][channel] === 'function') {
	        this[subscriber][channel].call(null, args);
	      }
	    }
	  }, {
	    key: 'emitStatus',
	    value: function emitStatus(args) {
	      if (this._status && typeof this._status === 'function') {
	        this._status.call(null, args);
	      }
	    }
	  }, {
	    key: 'error',
	    value: function error(callback) {
	      this._error = callback;
	    }
	  }, {
	    key: 'emitError',
	    value: function emitError(args) {
	      if (this._error) {
	        this._error.call(null, args);
	      }
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(channel) {
	      var _this = this;

	      _config2.default.subscribe_listener_events_to_broadcast.forEach(function (event) {
	        var subscriber = '_' + event;

	        unsubscribeChannel(_this[subscriber], channel);
	      });
	    }
	  }]);

	  return Broadcast;
	}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getMessage = __webpack_require__(10);

	Object.defineProperty(exports, 'getMessage', {
	  enumerable: true,
	  get: function get() {
	    return _getMessage.getMessage;
	  }
	});

	var _getPresence = __webpack_require__(11);

	Object.defineProperty(exports, 'getPresence', {
	  enumerable: true,
	  get: function get() {
	    return _getPresence.getPresence;
	  }
	});

	var _getStatus = __webpack_require__(12);

	Object.defineProperty(exports, 'getStatus', {
	  enumerable: true,
	  get: function get() {
	    return _getStatus.getStatus;
	  }
	});

	var _clean = __webpack_require__(13);

	Object.defineProperty(exports, 'clean', {
	  enumerable: true,
	  get: function get() {
	    return _clean.clean;
	  }
	});

	var _release = __webpack_require__(14);

	Object.defineProperty(exports, 'release', {
	  enumerable: true,
	  get: function get() {
	    return _release.release;
	  }
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMessage = getMessage;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function init(component, channel) {
	  if (component.state.pn_messages[channel]) {
	    return false;
	  } else {
	    component.setState(function (prevState) {
	      return {
	        pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, { $merge: _defineProperty({}, channel, []) })
	      };
	    });

	    return true;
	  }
	}

	function emit(instance, channel, message) {
	  var messages = instance._component.state.pn_messages[channel];
	  var keepMessages = instance._keepMessages[channel];

	  messages.push(message);

	  if (keepMessages && messages.length > keepMessages) {
	    messages = messages.slice(messages.length - keepMessages);
	  }

	  instance._component.setState(function (prevState) {
	    return {
	      pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, _defineProperty({}, channel, { $set: messages }))
	    };
	  });

	  instance._broadcast.emit('message', channel, message);
	}

	function getMessage(channel) {
	  var _this = this;

	  var component = this._component;
	  var callback = void 0;
	  var keepMessages = 100;

	  if (arguments.length === 2 && typeof arguments[1] === 'function') {
	    callback = arguments[1];
	  } else if (arguments.length === 2 && typeof arguments[1] === 'number') {
	    keepMessages = arguments[1];
	  } else if (arguments.length === 3) {
	    callback = arguments[1];
	    keepMessages = arguments[2];
	  }

	  if (init(component, channel)) {
	    this._keepMessages[channel] = keepMessages;
	    this._autoload.getHistory(channel, callback);
	  }

	  this._broadcast.message(channel, callback);

	  if (!this._listener.message) {
	    this._listener.message = function (message) {
	      if (message.subscription && _this._broadcast.isSubscribe('message', message.subscription)) {
	        emit(_this, message.subscription, message);
	      }

	      if (message.channel && _this._broadcast.isSubscribe('message', message.channel)) {
	        emit(_this, message.channel, message);
	      }
	    };
	  }

	  if (component.state && component.state.pn_messages && component.state.pn_messages[channel]) {
	    return component.state.pn_messages[channel];
	  } else {
	    return [];
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPresence = getPresence;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function init(instance, channel) {
	  if (instance._component.state.pn_presence[channel]) {
	    return false;
	  }

	  instance._component.setState(function (prevState) {
	    return {
	      pn_presence: (0, _immutabilityHelper2.default)(prevState.pn_presence, { $merge: _defineProperty({}, channel, {}) })
	    };
	  });

	  return true;
	}

	function emit(instance, channel, presence) {
	  instance._component.setState(function (prevState) {
	    return {
	      pn_presence: (0, _immutabilityHelper2.default)(prevState.pn_presence, _defineProperty({}, channel, { $set: presence }))
	    };
	  });

	  instance._broadcast.emit('presence', presence.channel, presence);
	}

	function getPresence(channel, callback) {
	  var _this = this;

	  this._broadcast.presence(channel, callback);

	  init(this, channel);

	  if (!this._listener.presence) {
	    this._listener.presence = function (ps) {
	      if (ps.subscription && _this._broadcast.isSubscribe('presence', ps.subscription)) {
	        emit(_this, ps.subscription, ps);
	      }

	      if (ps.channel && _this._broadcast.isSubscribe('presence', ps.channel)) {
	        emit(_this, ps.channel, ps);
	      }
	    };
	  }

	  if (this._component.state && this._component.state.pn_presence) {
	    return this._component.state.pn_presence[channel];
	  } else {
	    return {};
	  }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getStatus = getStatus;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStatus(callback) {
	  var _this = this;

	  this._broadcast.status(callback);

	  if (!this._listener.status) {
	    this._listener.status = function (st) {
	      if (!_this._broadcast.isSubscribe('status')) {
	        return true;
	      }

	      _this._component.setState(function (prevState) {
	        return {
	          pn_status: (0, _immutabilityHelper2.default)(prevState.pn_status, { $set: st })
	        };
	      });

	      _this._broadcast.emitStatus(st);
	    };
	  }

	  if (this._component.state && this._component.state.pn_status) {
	    return this._component.state.pn_status;
	  } else {
	    return {};
	  }
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clean = clean;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function clean(channel) {
	  if (this._broadcast.isSubscribe('message', channel)) {
	    this._component.setState(function (prevState) {
	      return {
	        pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, _defineProperty({}, channel, { $set: [] }))
	      };
	    });
	  }

	  if (this._broadcast.isSubscribe('presence', channel)) {
	    this._component.setState(function (prevState) {
	      return {
	        pn_presence: (0, _immutabilityHelper2.default)(prevState.pn_presence, _defineProperty({}, channel, { $set: [] }))
	      };
	    });
	  }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.release = release;
	function release(channel) {
	  if (this._broadcast.isSubscribe('message', channel)) {
	    var pnMessages = this._component.state.pn_messages;

	    delete pnMessages[channel];

	    this._component.setState({ pn_messages: pnMessages });
	  }

	  if (this._broadcast.isSubscribe('presence', channel)) {
	    var pnPresence = this._component.state.pn_presence;

	    delete pnPresence[channel];

	    this._component.setState({ pn_presence: pnPresence });
	  }

	  this._broadcast.unsubscribe(channel);
	}

/***/ })
/******/ ])
});
;