(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[3],{116:function(a,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return c}));var n="https://iot-saline-pre-mvp.herokuapp.com/api/vi",i=function(a,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",i="".concat(n,"/").concat(a);return"GET"===t?fetch(i):fetch(i,{method:t,headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},c=function(a,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",i="".concat(n,"/").concat(a),c=localStorage.getItem("token")||"";return"GET"===t?fetch(i,{method:t,headers:{"x-token":c}}):fetch(i,{method:t,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(e)})}},169:function(a,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return d})),t.d(e,"c",(function(){return f}));var n=t(70),i=t.n(n),c=t(115),r=t(385),l=t.n(r),o=t(116),u=t(22),h=t(59),s=function(a,e){return function(){var t=Object(c.a)(i.a.mark((function t(n){var c,r,u,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(h.d)()),t.next=3,Object(o.b)("auth/login",{credential:a,password:e},"POST");case 3:return c=t.sent,t.next=6,c.json();case 6:r=t.sent,u=r.body,s=r.error,u?(localStorage.setItem("token",u.token),localStorage.setItem("token-init-date",(new Date).getTime()),n(b({id:u.id,firstName:u.firstName,lastName:u.lastName,imageUrl:u.imageUrl,role:u.role})),n(Object(h.a)())):(n(Object(h.a)()),l.a.fire({text:s,confirmButtonColor:"#df4759"}));case 10:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}()},d=function(){return function(){var a=Object(c.a)(i.a.mark((function a(e){var t,n,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e(Object(h.d)()),a.next=3,Object(o.a)("auth/renew");case 3:return t=a.sent,a.next=6,t.json();case 6:n=a.sent,(c=n.body)?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),e(b({id:c.id,firstName:c.firstName,lastName:c.lastName,imageUrl:c.imageUrl,role:c.role})),e(Object(h.a)()),e(p())):(e(Object(h.a)()),e(p()));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return{type:u.a.authCheckingFinish}},b=function(a){return{type:u.a.authLogin,payload:a}},f=function(){return function(a){localStorage.clear(),a(g())}},g=function(){return{type:u.a.authLogout}}},22:function(a,e,t){"use strict";t.d(e,"a",(function(){return n})),t.d(e,"b",(function(){return i}));var n={authCheckingFinish:"[auth] Finish checking login state",authLogin:"[auth] Login",authStartTokenRenew:"[auth] Start token renew",authLogout:"[auth] Logout",userFetch:"[user] Fetch",userPurge:"[user] Purge",eventLogout:"[event] Logout event",uiSetError:"[UI] Set Error",uiRemoveError:"[UI] Remove Error",uiStartLoading:"[UI] Start Loading",uiFinishLoading:"[UI] Finish Loading"},i={admin:"USER_ADMIN_ROLE",doctor:"USER_DOCTOR_ROLE"}},496:function(a,e){!function(){if("function"===typeof window.CustomEvent)return!1;function a(a,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(a,e.bubbles,e.cancelable,e.detail),t}a.prototype=window.Event.prototype,window.CustomEvent=a}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var e=this;do{if(Element.prototype.matches.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},501:function(a,e,t){},507:function(a,e,t){"use strict";t.r(e);t(118),t(128),t(129),t(130),t(131),t(132),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(180),t(182),t(183),t(184),t(185),t(186),t(188),t(143),t(191),t(192),t(83),t(195),t(196),t(198),t(199),t(200),t(201),t(202),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(212),t(213),t(214),t(215),t(149),t(96),t(217),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(227),t(228),t(229),t(230),t(231),t(232),t(233),t(234),t(151),t(235),t(236),t(237),t(239),t(241),t(242),t(243),t(244),t(245),t(247),t(248),t(249),t(251),t(252),t(253),t(255),t(256),t(257),t(258),t(259),t(260),t(261),t(263),t(264),t(265),t(266),t(267),t(268),t(269),t(270),t(271),t(154),t(272),t(273),t(274),t(275),t(281),t(282),t(283),t(284),t(285),t(286),t(287),t(288),t(289),t(290),t(291),t(292),t(293),t(294),t(156),t(295),t(296),t(157),t(297),t(298),t(299),t(300),t(105),t(301),t(302),t(305),t(306),t(307),t(308),t(310),t(311),t(312),t(313),t(314),t(315),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327),t(328),t(329),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(339),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(109),t(366),t(399),t(401),t(402),t(403),t(404),t(405),t(407),t(408),t(409),t(410),t(411),t(412),t(413),t(414),t(416),t(417),t(418),t(419),t(420),t(421),t(422),t(423),t(424),t(425),t(426),t(427),t(428),t(429),t(430),t(431),t(432),t(433),t(434),t(435),t(436),t(437),t(438),t(439),t(440),t(442),t(444),t(445),t(446),t(447),t(448),t(449),t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(476),t(370),t(371),t(372),t(478),t(479),t(480),t(481),t(482),t(483),t(484),t(373),t(375),t(376),t(377),t(378),t(380),t(162),t(487),t(492),t(496);var n=t(1),i=t.n(n),c=t(113),r=t.n(c),l=t(383),o=t(384),u=t(388),h=t(387),s=(t(501),t(14)),d=t(69),p=t(168),b=t(16),f=t(169),g=t(61),v=t(19),m=function(a){var e=a.isAuthenticated,t=Object(g.a)(a,["isAuthenticated"]);return e?Object(v.jsx)(b.b,Object(s.a)({},t)):Object(v.jsx)(b.a,{to:"/login"})},j=function(a){var e=a.isAuthenticated,t=Object(g.a)(a,["isAuthenticated"]);return e?Object(v.jsx)(b.a,{to:"/"}):Object(v.jsx)(b.b,Object(s.a)({},t))},O=i.a.lazy((function(){return Promise.all([t.e(2),t.e(49),t.e(8)]).then(t.bind(null,717))})),V=i.a.lazy((function(){return Promise.all([t.e(2),t.e(13)]).then(t.bind(null,718))})),y=function(){var a=Object(d.b)(),e=Object(d.c)((function(a){return a.auth})).id;Object(n.useEffect)((function(){a(Object(f.a)())}),[a]);var t=Object(v.jsx)("div",{className:"pt-3 text-center",children:Object(v.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})});return Object(v.jsx)(p.a,{children:Object(v.jsx)(i.a.Suspense,{fallback:t,children:Object(v.jsxs)(b.d,{children:[Object(v.jsx)(j,{exact:!0,path:"/login",name:"",render:function(a){return Object(v.jsx)(V,Object(s.a)({},a))},isAuthenticated:!!e}),Object(v.jsx)(m,{path:"/",name:"Home",render:function(a){return Object(v.jsx)(O,Object(s.a)({},a))},isAuthenticated:!!e}),Object(v.jsx)(b.a,{to:"/login"})]})})})},A=function(a){Object(u.a)(t,a);var e=Object(h.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(v.jsx)(y,{})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(605),k=t(606),E=t(607),S=t(608),w=t(609),M=t(610),Z=t(611),C=t(612),x=t(613),H=t(614),P=t(615),I=t(616),F=t(617),N=t(618),T=t(619),U=t(620),R=t(621),q=t(622),B=t(623),D=t(624),_=t(625),G=t(626),J=t(627),X=t(628),z=t(599),W=t(600),Q=t(601),Y=t(602),$=t(603),K=t(604),aa=t(508),ea=t(509),ta=t(510),na=t(511),ia=t(512),ca=t(513),ra=t(514),la=t(515),oa=t(516),ua=t(517),ha=t(518),sa=t(519),da=t(520),pa=t(521),ba=t(522),fa=t(523),ga=t(524),va=t(525),ma=t(526),ja=t(527),Oa=t(528),Va=t(529),ya=t(530),Aa=t(531),La=t(532),ka=t(533),Ea=t(534),Sa=t(535),wa=t(536),Ma=t(537),Za=t(538),Ca=t(539),xa=t(540),Ha=t(541),Pa=t(542),Ia=t(543),Fa=t(544),Na=t(545),Ta=t(546),Ua=t(547),Ra=t(548),qa=t(549),Ba=t(550),Da=t(551),_a=t(552),Ga=t(553),Ja=t(554),Xa=t(555),za=t(556),Wa=t(557),Qa=t(558),Ya=t(559),$a=t(560),Ka=t(561),ae=t(562),ee=t(563),te=t(564),ne=t(565),ie=t(566),ce=t(567),re=t(568),le=t(569),oe=t(570),ue=t(571),he=t(572),se=t(573),de=t(574),pe=t(575),be=t(576),fe=t(577),ge=t(578),ve=t(579),me=t(580),je=t(581),Oe=t(582),Ve=t(583),ye=t(584),Ae=t(585),Le=t(586),ke=t(587),Ee=t(588),Se=t(589),we=t(590),Me=t(591),Ze=t(592),Ce=t(593),xe=t(594),He=t(595),Pe=t(596),Ie=t(597),Fe=t(598),Ne=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},{cilAlignCenter:aa.a,cilAlignLeft:ea.a,cilAlignRight:ta.a,cilApplicationsSettings:na.a,cilArrowRight:ia.a,cilArrowTop:ca.a,cilAsterisk:ra.a,cilBan:la.a,cilBasket:oa.a,cilBell:ua.a,cilBold:ha.a,cilBookmark:sa.a,cilCalculator:da.a,cilCalendar:pa.a,cilCloudDownload:ba.a,cilChartPie:fa.a,cilCheck:ga.a,cilChevronBottom:va.a,cilChevronLeft:ma.a,cilChevronRight:ja.a,cilChevronTop:Oa.a,cilCircle:Va.a,cilCheckCircle:ya.a,cilCode:Aa.a,cilCommentSquare:La.a,cilCreditCard:ka.a,cilCursor:Ea.a,cilCursorMove:Sa.a,cilDrop:wa.a,cilDollar:Ma.a,cilEnvelopeClosed:Za.a,cilEnvelopeLetter:Ca.a,cilEnvelopeOpen:xa.a,cilEuro:Ha.a,cilGlobeAlt:Pa.a,cilGrid:Ia.a,cilFile:Fa.a,cilFullscreen:Na.a,cilFullscreenExit:Ta.a,cilGraph:Ua.a,cilHome:Ra.a,cilInbox:qa.a,cilIndentDecrease:Ba.a,cilIndentIncrease:Da.a,cilInputPower:_a.a,cilItalic:Ga.a,cilJustifyCenter:Ja.a,cilJustifyLeft:Xa.a,cilLaptop:za.a,cilLayers:Wa.a,cilLightbulb:Qa.a,cilList:Ya.a,cilListNumbered:$a.a,cilListRich:Ka.a,cilLocationPin:ae.a,cilLockLocked:ee.a,cilMagnifyingGlass:te.a,cilMap:ne.a,cilMoon:ie.a,cilNotes:ce.a,cilOptions:re.a,cilPaperclip:le.a,cilPaperPlane:oe.a,cilPencil:ue.a,cilPeople:he.a,cilPhone:se.a,cilPrint:de.a,cilPuzzle:pe.a,cilSave:be.a,cilScrubber:fe.a,cilSettings:ge.a,cilShare:ve.a,cilShareAll:me.a,cilShareBoxed:je.a,cilShieldAlt:Oe.a,cilSpeech:Ve.a,cilSpeedometer:ye.a,cilSpreadsheet:Ae.a,cilStar:Le.a,cilSun:ke.a,cilTags:Ee.a,cilTask:Se.a,cilTrash:we.a,cilUnderline:Me.a,cilUser:Ze.a,cilUserFemale:Ce.a,cilUserFollow:xe.a,cilUserUnfollow:He.a,cilX:Pe.a,cilXCircle:Ie.a,cilWarning:Fe.a},{cifUs:z.a,cifBr:W.a,cifIn:Q.a,cifFr:Y.a,cifEs:$.a,cifPl:K.a},{cibSkype:L.a,cibFacebook:k.a,cibTwitter:E.a,cibLinkedin:S.a,cibFlickr:w.a,cibTumblr:M.a,cibXing:Z.a,cibGithub:C.a,cibStackoverflow:x.a,cibYoutube:H.a,cibDribbble:P.a,cibInstagram:I.a,cibPinterest:F.a,cibVk:N.a,cibYahoo:T.a,cibBehance:U.a,cibReddit:R.a,cibVimeo:q.a,cibCcMastercard:B.a,cibCcVisa:D.a,cibStripe:_.a,cibPaypal:G.a,cibGooglePay:J.a,cibCcAmex:X.a}),Te=t(68),Ue=t(386),Re=t(22),qe={checking:!0},Be={sidebarShow:"responsive"},De={loading:!1,msgError:null},_e={},Ge=Object(Te.b)({auth:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Re.a.authLogin:return Object(s.a)(Object(s.a)(Object(s.a)({},a),e.payload),{},{checking:!1});case Re.a.authCheckingFinish:return Object(s.a)(Object(s.a)({},a),{},{checking:!1});case Re.a.authLogout:return{checking:!1};default:return a}},nav:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=Object(g.a)(e,["type"]);switch(t){case"set":return Object(s.a)(Object(s.a)({},a),n);default:return a}},ui:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Re.a.uiSetError:return Object(s.a)(Object(s.a)({},a),{},{msgError:e.payload});case Re.a.uiRemoveError:return Object(s.a)(Object(s.a)({},a),{},{msgError:null});case Re.a.uiStartLoading:return Object(s.a)(Object(s.a)({},a),{},{loading:!0});case Re.a.uiFinishLoading:return Object(s.a)(Object(s.a)({},a),{},{loading:!1});default:return a}},user:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Re.a.userFetch:return Object(s.a)(Object(s.a)({},a),e.payload);case Re.a.userPurge:return{initialState:_e};default:return a}}}),Je="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Te.c,Xe=Object(Te.d)(Ge,Je(Object(Te.a)(Ue.a)));i.a.icons=Ne,r.a.render(Object(v.jsx)(d.a,{store:Xe,children:Object(v.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))},59:function(a,e,t){"use strict";t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return c})),t.d(e,"d",(function(){return r})),t.d(e,"a",(function(){return l}));var n=t(22),i=function(a){return{type:n.a.uiSetError,payload:a}},c=function(){return{type:n.a.uiRemoveError}},r=function(){return{type:n.a.uiStartLoading}},l=function(){return{type:n.a.uiFinishLoading}}}},[[507,4,5]]]);
//# sourceMappingURL=main.3c9d2177.chunk.js.map