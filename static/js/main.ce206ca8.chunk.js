(window["webpackJsonpreact-joke-api"]=window["webpackJsonpreact-joke-api"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),s=a.n(r),o=(a(24),a(25),a(3)),c=a(4),l=a(6),u=a(5),p=a(2),g=a(7),h=(a(26),a(27),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t="";t=e.target.classList.contains("fa-arrow-down")?"down":"up",this.props.changeRating(this.props.id,t)}},{key:"render",value:function(){var e=this.props.rating>=40?"fa-grin-squint-tears":this.props.rating>=20?"fa-grin-tears":this.props.rating>=10?"fa-laugh-beam":this.props.rating>=0?"fa-smile":0===this.props.rating?"fa-meh":this.props.rating<0&&this.props.rating>=-30?"fa-surprise":"fa-tired",t=this.props.rating>=40?"Joke--green":0===this.props.rating?"":this.props.rating>0?"Joke--yellow":"Joke--red";return i.a.createElement("div",{className:"Joke"},i.a.createElement("div",{className:"Joke--rating_container"},i.a.createElement("i",{className:"fas fa-arrow-up Joke--icon",onClick:this.handleClick}),i.a.createElement("div",{className:"Joke--rating ".concat(t)},this.props.rating),i.a.createElement("i",{className:"fas fa-arrow-down Joke--icon",onClick:this.handleClick})),i.a.createElement("div",{className:"Joke--description"},this.props.text),i.a.createElement("div",{className:"Joke--scale"},i.a.createElement("i",{className:"far ".concat(e," ").concat(t," Joke--laugh_scale")})))}}]),t}(n.Component)),k=a(8),m=a.n(k),d="https://icanhazdadjoke.com/search?",f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),currentPage:0},a.changeRating=a.changeRating.bind(Object(p.a)(a)),a.generateNewJokes=a.generateNewJokes.bind(Object(p.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===this.state.jokes.length&&m.a.get("".concat(d),{headers:{Accept:"application/json"},params:{limit:10}}).then((function(t){var a=t.data,n=a.results.map((function(e,t){return e.rating=0,e}));e.setState({currentPage:a.current_page,jokes:n}),window.localStorage.setItem("jokes",JSON.stringify(n))}))}},{key:"changeRating",value:function(e,t){var a=this,n=this.state.jokes.map((function(a){return"up"===t&&a.id===e?a.rating+=1:"down"===t&&a.id===e&&(a.rating-=1),a})).sort((function(e,t){return t.rating-e.rating}));this.setState({jokes:n},(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}))}},{key:"generateNewJokes",value:function(){var e=this;this.setState({jokes:[]});var t=this.state.currentPage,a="".concat(t+1);m.a.get("".concat(d),{headers:{Accept:"application/json"},params:{limit:10,page:a}}).then((function(t){var a=t.data,n=a.results.map((function(e,t){return e.rating=0,e}));e.setState({jokes:n,currentPage:a.current_page})}))}},{key:"render",value:function(){var e=this,t=this.state.jokes.map((function(t){return i.a.createElement(h,{key:t.id,id:t.id,text:t.joke,changeRating:e.changeRating,rating:t.rating})}));return i.a.createElement("div",{className:"JokeList"},i.a.createElement("div",{className:"JokeList--inner_container"},i.a.createElement("div",{className:"JokeList--panel"},i.a.createElement("div",{className:"JokeList--heading"},"Bad Jokes"),i.a.createElement("button",{className:"JokeList--button",onClick:this.generateNewJokes},"New Jokes"))),i.a.createElement("div",{className:"JokeList--jokes"},t))}}]),t}(n.Component);var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))};s.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ce206ca8.chunk.js.map