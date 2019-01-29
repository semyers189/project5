(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(54)},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),s=(a(27),a(4)),o=a(5),i=a(8),h=a(6),u=a(7),m=a(57),p=(a(29),a(31),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Copyright \xa9 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"http://twitter.com",id:"twitter"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://facebook.com",id:"facebook"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://instagram.com",id:"instagram"},"Instagram"))))}}]),t}(n.Component)),d=a(58),f=(a(33),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={currentPage:""},a.updateNav=function(e,t){a.setState({currentPage:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"Header"},l.a.createElement("h1",{className:"title",onClick:function(t){return e.updateNav(t,"")}},l.a.createElement(d.a,{to:"/home"},"Adoption Central")),l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",{onClick:function(t){return e.updateNav(t,"shelters")},className:"shelters"===this.state.currentPage?"selected":""},l.a.createElement(d.a,{to:localStorage.getItem("shelterLink")?localStorage.getItem("shelterLink"):"/shelters"},"Shelters")),l.a.createElement("li",{onClick:function(t){return e.updateNav(t,"pets")},className:"pets"===this.state.currentPage?"selected":""},l.a.createElement(d.a,{to:localStorage.getItem("petLink")?localStorage.getItem("petLink"):"/pets"},"Pets"))))}}]),t}(n.Component)),b=(a(38),a(55)),g=(a(40),a(11)),E=a.n(g),S=a(56),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={shelters:[],shelterZ:"",shelterN:"",formSubmit:!1},a.findShelters=function(e){e.preventDefault();var t=e.target.querySelector("#name").value,n=e.target.querySelector("#zip").value;if(""===t&&(t=" "),""===n||isNaN(n))alert("you must enter a zip code at least");else{var l=a.buildUrlShelter(t,n);E()(l,{jsonpCallbackFunction:"callback"}).then(function(e){return e.json()}).then(function(e){var l=e.petfinder.shelters.shelter;a.setState({shelters:l,shelterZ:n,shelterN:t}),a.props.myCallBack(a.state.shelters,t,n),a.setState({formSubmit:!0})}).catch(function(e){console.log("Error occured:",e)})}},a.buildUrlShelter=function(e,t){return"https://api.petfinder.com/shelter.find?&format=json&key=".concat("0c3728361f369f16392e5d66b821cb3d","&location=").concat(t,"&name=").concat(e,"&callback=callback&count=15")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement("article",{className:"info"},l.a.createElement("h2",null,"Welcome to Adoption Central!"),l.a.createElement("p",{className:"description"},"We love adopting pets as much as you do. We would love to be able to search for animals via shelter instead! By using the form to the right, you'll be able to search for adoption shelters near you!")),l.a.createElement("form",{onSubmit:this.findShelters,className:"shelterForm"},l.a.createElement("h3",null,"Find a Shelter Near You!"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"zip"},"Zip Code:"),l.a.createElement("input",{type:"text",name:"zip",placeholder:"32792",id:"zip"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Shelter Name:"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Its All About the Cats Inc.",id:"name"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Find Shelter!"),l.a.createElement("button",{type:"reset"},"Clear"))))),l.a.createElement("div",null,!1===this.state.formSubmit?"":l.a.createElement(S.a,{to:"shelters/"+this.state.shelterZ+"/"+this.state.shelterN+"/1"})))}}]),t}(n.Component),k=a(3),O=a(14),j=a.n(O);a(50);j.a.setAppElement("#root");var y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).state={shelList:[],shelInfo:{},selectedShelter:{name:{$t:""},latitude:{$t:""},longitude:{$t:""},zip:{$t:""},city:{$t:""},state:{$t:""},phone:{$t:""},email:{$t:""}},pets:{id:"",list:[]},modalIsOpen:!1,goSeePets:!1,currPage:1,shelterSearch:{},redirect:!1,pagination:0},e.buildUrlPet=function(e,t){return"https://api.petfinder.com/shelter.getPets?&format=json&key=".concat("0c3728361f369f16392e5d66b821cb3d","&id=").concat(e,"&count=").concat(t)},e.getShelterPets=function(t,a){t.persist(),e.setState({recentShelter:a});var n=e.buildUrlPet(a,4);E()(n,{jsonpCallbackFunction:"callback"}).then(function(e){return e.json()}).then(function(t){e.setState({pets:{id:a,list:t.petfinder.pets.pet}})}).catch(function(e){console.log("Error occured: ",e)})},e.showAllPets=function(){var t=e.buildUrlPet(e.state.pets.id,10);E()(t,{jsonpCallbackFunction:"callback"}).then(function(e){return e.json()}).then(function(t){var a=t.petfinder.pets.pet;e.props.getAllPets(a,e.state.pets.id),e.setState({goSeePets:!0})}).catch(function(e){console.log("Error occured: ",e)})},e.previous=function(){if(1===e.state.currPage)e.setState({redirect:!1,pagination:0}),alert("you're on the first page!!");else{var t=e.state.currPage;t--,e.buildUrlShelter(e.state.shelterSearch.name,e.state.shelterSearch.zip,t),localStorage.setItem("shelterLink","/shelters/".concat(e.state.shelterSearch.zip,"/").concat(e.state.shelterSearch.name,"/").concat(t)),e.setState({pagination:1})}},e.next=function(){if(e.state.shelList.length<15)e.setState({redirect:!1,pagination:2}),alert("you're on the last page!!");else{var t=e.state.currPage;t++,e.buildUrlShelter(e.state.shelterSearch.name,e.state.shelterSearch.zip,t),localStorage.setItem("shelterLink","/shelters/".concat(e.state.shelterSearch.zip,"/").concat(e.state.shelterSearch.name,"/").concat(t)),e.setState({pagination:1})}},e.buildUrlShelter=function(t,a,n){var l="https://api.petfinder.com/shelter.find?&format=json&key=".concat("0c3728361f369f16392e5d66b821cb3d","&location=").concat(a,"&name=").concat(t,"&callback=callback&count=15&offset=").concat(15*(n-1));E()(l,{jsonpCallbackFunction:"callback"}).then(function(e){return e.json()}).then(function(l){var r=l.petfinder.shelters.shelter;e.setState({shelList:r,currPage:n,shelterSearch:{name:t,zip:a},redirect:!0})}).catch(function(e){console.log("Error occured:",e)})},e.openModal=e.openModal.bind(Object(k.a)(Object(k.a)(e))),e.afterOpenModal=e.afterOpenModal.bind(Object(k.a)(Object(k.a)(e))),e.closeModal=e.closeModal.bind(Object(k.a)(Object(k.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(e){this.setState({selectedShelter:e}),console.log(this.state.selectedShelter),this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){this.subtitle.style.color="#000"}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"componentDidMount",value:function(){var e=this.props.match.match.params.zip,t=this.props.match.match.params.name,a=Number(this.props.match.match.params.pageNum);this.setState({redirect:!1}),localStorage.setItem("shelterLink","/shelters/".concat(e,"/").concat(t,"/").concat(a)),this.buildUrlShelter(t,e,a)}},{key:"render",value:function(){var e=this,t=0,a=(this.state.pets.list.length,this.state.pets.list.map(function(e){return t++,l.a.createElement("article",{key:t,className:"petName"},l.a.createElement("div",null,l.a.createElement("div",{class:"peticon"},l.a.createElement("img",{src:e.media.photos.photo[1].$t,alt:e.name.$t+"'s picture"})),l.a.createElement("h4",null,e.name.$t)))})),n=this.state.shelList.map(function(t){return l.a.createElement("article",{key:t.id.$t,className:"shelterWrap"},l.a.createElement("section",{className:"shelters"},l.a.createElement("h4",null,t.name.$t," "),l.a.createElement("p",null,t.city.$t,", ",t.state.$t," ",t.zip.$t),l.a.createElement("button",{type:"button",onClick:function(a){e.getShelterPets(a,t.id.$t)}},"See Pets"),l.a.createElement("button",{type:"button",onClick:function(a){return e.openModal(t)}},"More Shelter Info"),l.a.createElement("button",{type:"button",onClick:function(){return e.showAllPets()}},"See all Pets")),l.a.createElement("div",{className:"shelterPets"},t.id.$t===e.state.pets.id?a:""))});return l.a.createElement("div",{className:"resShelter"},n,l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",null,l.a.createElement("button",{onClick:this.previous,id:0===this.state.pagination?"begin":""},"Previous")),l.a.createElement("li",null,this.state.currPage),l.a.createElement("li",null,l.a.createElement("button",{onClick:this.next,id:2===this.state.pagination?"end":""},"Next"))),l.a.createElement(j.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,style:P,contentLabel:"Example Modal"},l.a.createElement("h2",{ref:function(t){return e.subtitle=t}},this.state.selectedShelter.name.$t),l.a.createElement("p",null,null==this.state.selectedShelter.phone.$t?"No number":this.state.selectedShelter.phone.$t),l.a.createElement("p",null,null==this.state.selectedShelter.email.$t?"No email":this.state.selectedShelter.email.$t," "),l.a.createElement("p",null,this.state.selectedShelter.city.$t,", ",this.state.selectedShelter.state.$t," ",this.state.selectedShelter.zip.$t),l.a.createElement("a",{href:"https://maps.google.com/?q="+this.state.selectedShelter.latitude.$t+","+this.state.selectedShelter.longitude.$t},"Find this shelter on a map!"),l.a.createElement("button",{onClick:this.closeModal},"close")),l.a.createElement("div",null,!1===this.state.goSeePets?"":l.a.createElement(S.a,{to:"../../../pets/"+this.state.pets.id+"/1"})),l.a.createElement("div",null,this.state.redirect?l.a.createElement(S.a,{to:"../../"+this.state.shelterSearch.zip+"/"+this.state.shelterSearch.name+"/"+this.state.currPage}):""))}}]),t}(n.Component),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},N=(a(52),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).state={petList:[],shelterToCall:"",shelterInfo:{name:{$t:""}},currPet:{},currPage:1,modalIsOpen:!1,redirect:0,pagination:0},e.getShelter=function(t){var a="https://api.petfinder.com/shelter.get?&format=json&key=".concat("0c3728361f369f16392e5d66b821cb3d","&id=").concat(t);E()(a,{jsonpCallbackFunction:"callback"}).then(function(e){return e.json()}).then(function(t){var a=t.petfinder.shelter;console.log(a),e.setState({shelterInfo:a})}).catch(function(e){console.log("Error occured:",e)})},e.buildUrlPet=function(t,a){var n="https://api.petfinder.com/shelter.getPets?&format=json&key=".concat("0c3728361f369f16392e5d66b821cb3d","&id=").concat(t,"&count=10&offset=").concat(10*(a-1));E()(n,{jsonpCallbackFunction:"callback"}).then(function(e){return e.json()}).then(function(n){var l=n.petfinder.pets.pet;console.log(l),e.setState({shelterToCall:t,petList:l,currPage:a}),e.getShelter(t)}).catch(function(e){console.log("Error occured:",e)})},e.previous=function(){if(1===e.state.currPage)e.setState({redirect:0,pagination:0}),alert("you're on the first page!!");else{var t=e.state.currPage;t--,e.buildUrlPet(e.state.shelterToCall,t),e.setState({currPage:t,redirect:1,pagination:1}),localStorage.setItem("petLink","/pets/".concat(e.state.shelterToCall,"/").concat(t))}},e.next=function(){if(e.state.petList.length<10)e.setState({redirect:0,pagination:2}),alert("you're on the last page!!");else{var t=e.state.currPage;t++,e.buildUrlPet(e.state.shelterToCall,t),e.setState({currPage:t,redirect:1,pagination:1}),localStorage.setItem("petLink","/pets/".concat(e.state.shelterToCall,"/").concat(t))}},e.openModal=e.openModal.bind(Object(k.a)(Object(k.a)(e))),e.afterOpenModal=e.afterOpenModal.bind(Object(k.a)(Object(k.a)(e))),e.closeModal=e.closeModal.bind(Object(k.a)(Object(k.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(e){this.setState({currPet:{name:e.name.$t,image:e.media.photos.photo[2].$t,desc:e.description.$t}}),this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){this.subtitle.style.color="#000"}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.shelterId,t=Number(this.props.match.params.pageNum);localStorage.setItem("petLink","/pets/".concat(e,"/").concat(t)),this.buildUrlPet(e,t)}},{key:"render",value:function(){var e=this,t=this.state.petList.map(function(t){return l.a.createElement("article",{key:t.id.$t,onClick:function(a){return e.openModal(t)},className:"petLists"},l.a.createElement("div",null,l.a.createElement("img",{src:void 0===t.media.photos?"no photo available":t.media.photos.photo[3].$t,alt:t.name.$t+"'s photo"})),l.a.createElement("h3",null,t.name.$t))});return l.a.createElement("div",{className:"pets"},l.a.createElement("section",{className:"shelterDisplay"},l.a.createElement("h2",null,this.state.shelterInfo.name.$t)),l.a.createElement("section",{className:"petDisplay"},t),l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",null,l.a.createElement("button",{onClick:this.previous,id:0===this.state.pagination?"begin":""},"Previous")),l.a.createElement("li",null,this.state.currPage),l.a.createElement("li",null,l.a.createElement("button",{onClick:this.next,id:2===this.state.pagination?"end":""},"Next"))),l.a.createElement(j.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,style:C,contentLabel:"Example Modal"},l.a.createElement("img",{src:void 0===this.state.currPet.image?"no photo":this.state.currPet.image,alt:this.state.currPet.name+"'s image",className:"modalImg"}),l.a.createElement("h2",{ref:function(t){return e.subtitle=t}},this.state.currPet.name),l.a.createElement("p",{className:"modalText"},""===this.state.currPet.desc?"":this.state.currPet.desc),l.a.createElement("button",{onClick:this.closeModal},"close")),l.a.createElement("div",null,1===this.state.redirect?l.a.createElement(S.a,{to:"../"+this.state.shelterToCall+"/"+this.state.currPage}):""))}}]),t}(n.Component)),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={shelters:[],shelterInfo:{},petList:[],petsFrom:""},a.callBackShelter=function(e,t,n){a.setState({shelters:e,shelterInfo:{name:t,zip:n}})},a.setShelter=function(e,t){a.setState({petList:e,petsFrom:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Main"},l.a.createElement(b.a,{exact:!0,path:"/",render:function(){return l.a.createElement(v,{myCallBack:e.callBackShelter})}}),l.a.createElement(b.a,{exact:!0,path:"/home",render:function(){return l.a.createElement(v,{myCallBack:e.callBackShelter})}}),l.a.createElement(b.a,{exact:!0,path:"/shelters/:zip?/:name?/:pageNum?",render:function(t){return l.a.createElement(y,{match:t,shelterList:e.state.shelters,getAllPets:e.setShelter,shelterInfo:e.state.shelterInfo})}}),l.a.createElement(b.a,{exact:!0,path:"/pets/:shelterId?/:pageNum?",location:this.props.location,render:function(t){t.location;var a=t.match;return l.a.createElement(N,{match:a,petList:e.state.petList,shelterId:e.state.petsFrom})}}))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement($,null),l.a.createElement(p,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.e34d485c.chunk.js.map