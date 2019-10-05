(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,a,t){e.exports=t.p+"static/media/logo.6b7cbac7.jpg"},47:function(e,a,t){e.exports=t(63)},52:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(37),r=t.n(l),s=(t(52),t(46)),m=t(5),u=t(18),i=t(15),o=t(20),h=t(21),p=t(27),E=t(22),d=t(28),g=t(23),b=t(17),f=t.n(b),_=t(64),y=t(26),N=t.n(y),v=t(38),k=t.n(v);function j(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:N()({"text-success":r,"text-danger":!r})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(k.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function O(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"}),"  Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"}),"  Fail"))}function w(){var e=Object(g.a)(["\n query LaunchesQuery{\n   launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n   }\n }\n"]);return w=function(){return e},e}var x=f()(w()),L=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(O,null),c.a.createElement(_.a,{query:x},(function(e){var a=e.loading,t=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,l.launches.map((function(e){return c.a.createElement(j,{key:e.flight_number,launch:e})}))))})))}}]),a}(n.Component);function D(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var Y=f()(D()),q=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(_.a,{query:Y,variables:{flight_number:e}},(function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var l=n.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,i=l.launch_success,o=l.rocket,h=o.rocket_id,p=o.rocket_name,E=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: ")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",c.a.createElement("span",{className:N()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",E)),c.a.createElement("hr",null),c.a.createElement(u.b,{to:"/",className:"btn btn-secondary"},"Back to Home"))})))}}]),a}(n.Component),F=(t(61),t(45)),I=t.n(F),M=new s.a({uri:"/graphql"});var R=function(){return c.a.createElement(m.a,{client:M},c.a.createElement(u.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:I.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(i.a,{exact:!0,path:"/",component:L}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d3608a3a.chunk.js.map