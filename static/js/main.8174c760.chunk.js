(this.webpackJsonpvegan=this.webpackJsonpvegan||[]).push([[0],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=a(19),l=a(1),u=a.n(l),o=a(3),m=a(6),p=a(7),d=a(8),h=a(9),g=(a(89),a(10)),f=a(73),v=a.n(f).a.create({baseURL:"https://veganite.herokuapp.com"}),E=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/users",t);case 3:return a=e.sent,v.defaults.headers.common.authorization="Bearer ".concat(a.data.token),localStorage.setItem("authToken",a.data.token),e.abrupt("return",a.data.user);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:"Invalid Credentials"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/users/login",t,{headers:{}});case 3:return a=e.sent,v.defaults.headers.common.authorization="Bearer ".concat(a.data.token),localStorage.setItem("authToken",a.data.token),e.abrupt("return",a.data.user);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:"Invalid Credentials"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.authToken)){e.next=7;break}return v.defaults.headers.common.authorization="Bearer ".concat(t),e.next=5,v.get("/users/verify");case 5:return a=e.sent,e.abrupt("return",a.data);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.put("/users/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/recipes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/recipes/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users/".concat(t,"/recipes"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/users/".concat(t,"/recipes"),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.put("/recipes/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.delete("/recipes/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/recipes/".concat(t,"/recipe_comments"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.user_id=a,n.recipe_id=t,e.next=4,v.post("/recipes/".concat(t,"/recipe_comments"),{recipe_comment:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.delete("/recipes/:recipe_id/recipe_comments/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=a(11),_=a(5),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",error:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(S.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.handleLogin(e.state).then((function(t){return t.error?e.setState({error:"username or password invalid"}):e.setState({error:""}),t}))},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.a.createElement("img",{className:"login-logo-image",src:"https://i.imgur.com/IoEQE0G.png",alt:"verdure logo"}),r.a.createElement("div",{className:"sign-in-main"},r.a.createElement("div",{className:"sign-in-header"},r.a.createElement("h2",null,"Welcome Back")),r.a.createElement("div",{className:"sign-in-grid"},r.a.createElement("p",null,this.state.error),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Username",name:"username",id:"username",type:"text",value:this.state.username,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Password",name:"password",id:"password",type:"password",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{id:"submit"},"SIGN IN")),r.a.createElement("div",{className:"sign-in-lower-grid"},r.a.createElement("p",null,"Don't have an account?"),r.a.createElement(_.b,{to:"/register"},r.a.createElement("p",{id:"register-link"},"SIGN UP NOW"))))))}}]),a}(n.Component),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",location:"",description:"",error:{}},e.canBeSubmitted=function(){var t=e.state,a=t.username,n=t.password;return a.length>5&&n.length>5},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(S.a)({},n,r)),"username"===n&&r.length<5||"password"===n&&r.length<5?e.setState({error:Object(S.a)({},n,"minimum 5 characters")}):e.setState({error:{}})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.canBeSubmitted();return r.a.createElement("form",{className:"register-form",onSubmit:function(t){t.preventDefault(),e.props.handleRegister({user:e.state})}},r.a.createElement(_.b,{to:"/"},r.a.createElement("img",{className:"login-logo-image-two",src:"https://i.imgur.com/IoEQE0G.png",alt:"verdure logo"})),r.a.createElement("div",{className:"sign-in-main"},r.a.createElement("div",{className:"sign-in-header"},r.a.createElement("h2",null,"Register for a new account")),r.a.createElement("div",{className:"sign-in-grid"},r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Username",name:"username",id:"username",type:"text",value:this.state.username,onChange:this.handleChange,required:!0}),r.a.createElement("p",null,this.state.error.username)),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Email",name:"email",id:"email",type:"email",value:this.state.email,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Password",name:"password",id:"password",type:"password",value:this.state.password,onChange:this.handleChange,required:!0}),r.a.createElement("p",null,this.state.error.password)),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Location",name:"location",id:"location",type:"text",value:this.state.location,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{className:"sign-in-input",placeholder:"Description",name:"description",id:"description",type:"text",value:this.state.description,onChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{id:"register",disabled:!t},"Register")))))}}]),a}(n.Component),L=a(75),A=a.n(L);function T(e){return r.a.createElement("header",null,r.a.createElement("img",{src:A.a,alt:"Veganite"}),r.a.createElement(_.b,{to:"/home"},r.a.createElement("p",null,"Home")),r.a.createElement(_.b,{to:"/recipes"},r.a.createElement("p",null,"Recipes")),r.a.createElement(_.b,{to:"gallery"},r.a.createElement("p",null,"Gallery")),r.a.createElement("img",{className:"login-image",onClick:e.handleToggle,src:"https://i.imgur.com/CgrWQMw.png",alt:"login button"}))}var M=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentUserRecipes:[]},e.allUserRecipes=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a);case 2:n=t.sent,e.setState({currentUserRecipes:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){e.allUserRecipes(e.props.currentUser.id)},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-side"},r.a.createElement("div",{id:"profile-top",className:"main-side-top"},r.a.createElement("div",{className:"main-side-top-buttons"},r.a.createElement("div",{id:"user-image"},null===this.props.currentUser.image_url?r.a.createElement(_.b,{to:"/update_profile/".concat(this.props.currentUser.id)},r.a.createElement("img",{src:"https://i.imgur.com/HZPz2tu.png",alt:"default user profile"})):r.a.createElement(_.b,{to:"/update_profile/".concat(this.props.currentUser.id)},r.a.createElement("img",{src:this.props.currentUser.image_url,alt:"current user profile"}))),r.a.createElement("div",{className:"main-side-buttons"},r.a.createElement("button",{onClick:this.props.handleLogout,className:"small-button"},"Logout"))),r.a.createElement("div",{className:"sticky"},r.a.createElement("a",{className:"sticky-anchor",href:"#profile-top"},r.a.createElement("h1",null,this.props.currentUser.username)),r.a.createElement(_.b,{to:"/recipes/new"},r.a.createElement("button",null,"Create"))),r.a.createElement("h1",{className:"black"},"My Recipes"),r.a.createElement("div",{className:"side-segment-grid"},this.state.currentUserRecipes&&this.state.currentUserRecipes.map((function(e){return r.a.createElement("div",{className:"main-container-segment",key:e.id},r.a.createElement("div",{className:"main-container-sub-segment"},r.a.createElement("div",{className:"container-segment"},r.a.createElement("div",{className:"card-segment"},r.a.createElement("div",{className:"face-segment face1-segment"},r.a.createElement("div",{className:"content-segment"},r.a.createElement("div",{className:"sub-segment-card-heading"},r.a.createElement("h3",null,e.title))),r.a.createElement(_.b,{to:"/full_recipe/".concat(e.id)},r.a.createElement("button",{id:e.id,className:"main-page-button-segment-info"},"Cook"))),r.a.createElement("div",{className:"face-segment face2-segment",style:{background:"url("+e.image_url+")"}},r.a.createElement("h2",{className:"title-outline"},e.title))))))})))))}}]),a}(r.a.Component),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-div",style:this.props.toggle?{gridTemplateColumns:"70% 30%",gridTemplateAreas:"main side"}:{gridTemplateColumns:"100%",gridTemplateAreas:"main"}},r.a.createElement("div",{id:"recipe-list"},r.a.createElement("h1",null,"Take a look at our most recent recipes!"),r.a.createElement("div",{className:"main-container-card-grid"},this.props.recipes&&this.props.recipes.map((function(e){return r.a.createElement("div",{className:"main-container",key:e.id},r.a.createElement("div",{className:"main-container-sub"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"face face1"},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("h2",null,"Chef: ",e.user.username),r.a.createElement("p",null,e.description))),r.a.createElement(_.b,{to:"/full_recipe/".concat(e.id)},r.a.createElement("button",{id:e.id,className:"main-page-button"},"Cook"))),r.a.createElement("div",{className:"face face2",style:{background:"url("+e.image_url+")"}},r.a.createElement("h2",{className:"title-outline"},e.title))))))})))),this.props.currentUser&&this.props.toggle&&r.a.createElement(M,{handleLogout:this.props.handleLogout,currentUser:this.props.currentUser,currentUserRecipes:this.props.currentUserRecipes}))}}]),a}(r.a.Component);function q(e){return r.a.createElement("div",{className:"comment-parent"},e.comment&&e.comment.map((function(t){return t.recipe_id===e.recipe_id&&r.a.createElement("div",{className:"comment-wrapper",key:t.id},r.a.createElement("p",null,t.comment),r.a.createElement("button",{className:"comment-delete",onClick:function(){return e.destroyComment(t.id)}},"Delete Comment"))})))}var z=a(20),B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={commentData:{comment:""}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{commentData:Object(z.a)({},e.commentData,Object(S.a)({},n,r))}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"comment-box"},r.a.createElement("form",{className:"comment-form",onSubmit:function(t){t.preventDefault(),e.props.createComment(e.props.recipe_id,e.props.currentUser.id,e.state.commentData)}},r.a.createElement("label",{id:"comment-label",htmlFor:"comment"},"Comment"),r.a.createElement("textarea",{name:"comment",id:"comment",placeholder:"Comments...",value:this.state.commentData.comment,onChange:this.handleChange}),r.a.createElement("button",{id:"comment-button"},"Submit")))}}]),a}(r.a.Component),G=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={comment:[],oneRecipe:null},e.createComment=function(){var t=Object(o.a)(u.a.mark((function t(a,n,r){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(a,n,r);case 2:c=t.sent,e.setState((function(e){return{comment:[].concat(Object(s.a)(e.comment),[c])}}));case 4:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.destroyComment=function(){var t=Object(o.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:e.setState((function(e){return{comment:e.comment.filter((function(e){return e.id!==a}))}}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(this.props.id);case 2:return t=e.sent,e.next=5,k(this.props.id);case 5:a=e.sent,this.setState({comment:a,oneRecipe:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.oneRecipe&&r.a.createElement("div",{id:this.state.oneRecipe.id,className:"full-recipe-page"},r.a.createElement("h2",{className:"recipe-title"},this.state.oneRecipe.title),r.a.createElement("div",{className:"full-recipe-img"},r.a.createElement("img",{src:this.state.oneRecipe.image_url,alt:"recipe final product"})),r.a.createElement("h3",null,"Chef: ",r.a.createElement(_.b,{to:"/user_recipes/".concat(this.state.oneRecipe.user.id)},this.state.oneRecipe.user.username)),r.a.createElement("div",{className:"full-recipe-content"},r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,this.state.oneRecipe.description),r.a.createElement("h3",null,"Ingredients"),r.a.createElement("p",null,this.state.oneRecipe.ingredients),r.a.createElement("h3",null,"Preparation"),r.a.createElement("p",null,this.state.oneRecipe.prep)),r.a.createElement("div",{className:"full-recipe-user-buttons"},this.state.oneRecipe.user.id===this.props.currentUser.id?r.a.createElement("button",{className:"full-recipe-button-reach",id:this.state.oneRecipe.id,onClick:this.props.handleDelete},"Delete Recipe"):null,this.state.oneRecipe.user.id===this.props.currentUser.id?r.a.createElement(_.b,{to:"/edit/".concat(this.state.oneRecipe.id)},r.a.createElement("button",{className:"full-recipe-button-reach",id:this.state.oneRecipe.id},"Edit Recipe")):null),r.a.createElement(B,{createComment:this.createComment,recipe_id:this.state.oneRecipe.id,currentUser:this.props.currentUser}),r.a.createElement(q,{destroyComment:this.destroyComment,comment:this.state.comment,recipe_id:this.state.oneRecipe.id})))}}]),a}(r.a.Component),W=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentUserRecipes:[]},e.allUserRecipes=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a);case 2:n=t.sent,e.setState({currentUserRecipes:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.allUserRecipes(e.props.id);case 1:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.currentUserRecipes.map((function(e){return r.a.createElement("div",{className:"user-recipes",key:e.id},r.a.createElement("div",{className:"user-recipe-image-container"},r.a.createElement("img",{src:e.image_url,alt:"recipe-post"})),r.a.createElement("div",{className:"user-recipe-content-container"},r.a.createElement("h2",null,"Chef: ",e.user.username),r.a.createElement("p",null,e.description),r.a.createElement(_.b,{to:"/full_recipe/".concat(e.id)},r.a.createElement("button",null,"...read more!"))))})))}}]),a}(r.a.Component),V=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipeData:{image_url:"",title:"",description:"",ingredients:"",prep:""}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{recipeData:Object(z.a)({},e.recipeData,Object(S.a)({},n,r))}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"create-recipe"},r.a.createElement("form",{id:"create-recipe-form",onSubmit:function(t){t.preventDefault(),e.props.createRecipe(e.props.currentUser.id,e.state.recipeData)}},r.a.createElement("div",{className:"sign-in-main"},r.a.createElement("div",{className:"sign-in-header"},r.a.createElement("h2",{id:"create-form-title"},"Create Recipe")),r.a.createElement("div",{className:"sign-in-grid"},r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"create-label",htmlFor:"image_url"},"Image URL"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"image_url",id:"image_url",placeholder:"Image URL",value:this.state.image_url,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"create-label",htmlFor:"title"},"Title"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"title",id:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"create-label",htmlFor:"description"},"Description"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"description",id:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"create-label",htmlFor:"ingredients"},"Ingredients"),r.a.createElement("textarea",{className:"sign-in-input",name:"ingredients",id:"ingredients",placeholder:"Ingredients",row:"12",resize:"true",value:this.state.ingredients,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"create-label",htmlFor:"prep"},"Preparation"),r.a.createElement("textarea",{className:"sign-in-input",name:"prep",id:"prep",placeholder:"Preparation",row:"12",resize:"true",value:this.state.prep,onChange:this.handleChange,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{id:"create-recipe-button"},"Submit Recipe"))))))}}]),a}(r.a.Component),J=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={recipeData:{image_url:"",title:"",description:"",ingredients:"",prep:""}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{recipeData:Object(z.a)({},e.recipeData,Object(S.a)({},n,r))}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"edit-form"},r.a.createElement("form",{id:"edit-recipe-form",onSubmit:function(t){t.preventDefault(),e.props.handleEdit(e.props.id,e.state.recipeData)}},r.a.createElement("div",{className:"sign-in-main"},r.a.createElement("div",{className:"sign-in-header"},r.a.createElement("h2",{id:"edit-form-title"},"Edit Recipe")),r.a.createElement("div",{className:"sign-in-grid"},r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"edit-label",htmlFor:"image_url"},"Image URL"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"image_url",id:"image_url",placeholder:"Image URL",value:this.state.recipeData.image_url,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"edit-label",htmlFor:"title"},"Title"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"title",id:"title",placeholder:"Title",value:this.state.recipeData.title,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"edit-label",htmlFor:"description"},"Description"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"description",id:"description",placeholder:"Description",value:this.state.recipeData.description,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"edit-label",htmlFor:"ingredients"},"Ingredients"),r.a.createElement("textarea",{className:"sign-in-input",name:"ingredients",id:"edit-ingredients",row:"12",resize:"true",placeholder:"Ingredients",value:this.state.recipeData.ingredients,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{className:"edit-label",htmlFor:"prep"},"Preparation"),r.a.createElement("textarea",{className:"sign-in-input",name:"prep",id:"edit-prep",row:"12",resize:"true",placeholder:"Preparation",value:this.state.recipeData.prep,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("button",{id:"edit-recipe-button"},"Edit Recipe"))))))}}]),a}(r.a.Component),Q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={userData:{email:"",password:"",image_url:"",location:"",description:""}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{userData:Object(z.a)({},e.userData,Object(S.a)({},n,r))}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"update-user"},r.a.createElement("form",{id:"update-user-form",onSubmit:function(t){t.preventDefault(),e.props.handleEditUser(e.props.id,e.state.userData)}},r.a.createElement("div",{className:"sign-in-main"},r.a.createElement("div",{className:"sign-in-header"},r.a.createElement("h2",{id:"create-form-title"},"Update Profile")),r.a.createElement("div",{className:"sign-in-grid"},r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"email",id:"email",placeholder:"Email@address.com",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"sign-in-input",type:"password",name:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"image_url"},"Image"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"image_url",id:"image",placeholder:"Insert Image URL",value:this.state.image_url,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"location",id:"location",placeholder:"Enter Location",value:this.state.location,onChange:this.handleChange})),r.a.createElement("div",{className:"sign-in-input-div"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{className:"sign-in-input",type:"text",name:"description",id:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("button",{id:"update-user-button"},"Update"))))))}}]),a}(r.a.Component);function H(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{id:"copyright"},r.a.createElement("p",null,"info@veganite.com"))),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{id:"copyright"},r.a.createElement("p",null,"\xa9 2020 \u2014 Veganite | design by ",r.a.createElement("a",{target:"_blank",href:"https://jenniferawesomecoder.github.io/portfolio/"},"Jennifer Miller")))))}var Z=a(48),$=a(33),K=["https://verduraphx.com/wp-content/uploads/2019/02/chickpea-chana.jpg","https://verduraphx.com/wp-content/uploads/2019/02/goth-waffles.jpg","https://verduraphx.com/wp-content/uploads/2019/02/poboy.jpg"],X=K.map((function(e){return{source:e}})),Y=function(){var e=Object(n.useState)(0),t=Object(Z.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(Z.a)(i,2),l=s[0],u=s[1],o=function(e){u(!l),c(e)};return r.a.createElement("div",{className:"main-content"},K.map((function(e,t){return r.a.createElement("div",{key:e,className:"image-grid",onClick:function(){return o(t)}},r.a.createElement("img",{className:"image",src:e,alt:e}))})),r.a.createElement($.b,null,l?r.a.createElement($.a,{onClose:o},r.a.createElement($.c,{currentIndex:a,views:X})):null))},ee=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleLogin=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(a);case 2:return(n=t.sent).error?e.setState({authErrorMessage:n.error}):(e.setState({currentUser:n}),e.props.history.push("/recipes")),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRegister=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:(n=t.sent).error?e.setState({authErrorMessage:n.error}):(e.setState({currentUser:n}),e.props.history.push("/"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleLogout=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({currentUser:null}),localStorage.removeItem("authToken"),e.props.history.push("/");case 3:case"end":return t.stop()}}),t)}))),e.handleVerify=Object(o.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:return(a=t.sent)&&e.setState({currentUser:a}),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),e.readAllRecipes=Object(o.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:(a=t.sent).sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),e.setState({recipes:a});case 5:case"end":return t.stop()}}),t)}))),e.allUserRecipes=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a);case 2:(n=t.sent).sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),e.setState({currentUserRecipes:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.createRecipe=function(){var t=Object(o.a)(u.a.mark((function t(a,n){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(a,n);case 2:r=t.sent,c=r,e.setState((function(e){return{recipes:[c].concat(Object(s.a)(e.recipes)),currentUserRecipes:[c].concat(Object(s.a)(e.currentUserRecipes))}})),e.props.history.push("/recipes");case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleDelete=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.id,t.next=3,U(n);case 3:e.setState((function(e){return{recipes:Object(s.a)(e.recipes.filter((function(e){return e.id!==parseInt(n)}))),currentUserRecipes:Object(s.a)(e.currentUserRecipes.filter((function(e){return e.id!==parseInt(n)})))}})),e.props.history.push("/recipes");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleEdit=function(){var t=Object(o.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a,n);case 2:r=t.sent,e.setState((function(e){return{recipes:Object(s.a)(e.recipes.map((function(e){return e.id===r.id?r:e}))),currentUserRecipes:Object(s.a)(e.currentUserRecipes.map((function(e){return e.id===r.id?r:e})))}})),e.props.history.push("/full_recipe/".concat(a));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleEditUser=function(){var t=Object(o.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(a,n);case 2:r=t.sent,e.setState((function(t){return{currentUser:t.currentUser.id===r.id?r:e.state.currentUser}})),e.props.history.push("/recipes");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleToggle=function(){e.setState((function(t){return{toggle:!e.state.toggle}}))},e.state={currentUser:null,authErrorMessage:"",recipes:[],currentUserRecipes:[],toggle:!0},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.handleVerify();case 2:return t=e.sent,e.next=5,this.readAllRecipes();case 5:t&&this.allUserRecipes(t.id);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},this.state.currentUser?r.a.createElement(T,{handleToggle:this.handleToggle}):r.a.createElement("div",null),this.state.currentUser&&this.state.recipes?r.a.createElement(g.a,{exact:!0,path:"/recipes",render:function(){return r.a.createElement(P,{toggle:e.state.toggle,recipes:e.state.recipes,currentUser:e.state.currentUser,currentUserRecipes:e.state.currentUserRecipes,handleLogout:e.handleLogout})}}):r.a.createElement("div",null),r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(F,{handleLogin:e.handleLogin,authErrorMessage:e.state.authErrorMessage})}}),r.a.createElement(g.a,{path:"/register",render:function(){return r.a.createElement(I,{handleRegister:e.handleRegister,authErrorMessage:e.state.authErrorMessage})}}),r.a.createElement(g.a,{path:"/full_recipe/:id",render:function(t){return r.a.createElement(G,{id:t.match.params.id,recipes:e.state.recipes,oneRecipe:e.state.oneRecipe,currentUserRecipes:e.state.currentUserRecipes,currentUser:e.state.currentUser,handleDelete:e.handleDelete})}}),r.a.createElement(g.a,{path:"/user_recipes/:id",render:function(t){return r.a.createElement(W,{allUserRecipes:e.allUserRecipes,id:t.match.params.id})}}),r.a.createElement(g.a,{path:"/recipes/new",render:function(){return r.a.createElement(V,{currentUser:e.state.currentUser,createRecipe:e.createRecipe})}}),r.a.createElement(g.a,{path:"/edit/:id",render:function(t){return r.a.createElement(J,{id:t.match.params.id,handleChange:e.handleChange,handleEdit:e.handleEdit,currentUser:e.state.currentUser})}}),r.a.createElement(g.a,{path:"/update_profile/:id",render:function(t){return r.a.createElement(Q,{id:t.match.params.id,currentUser:e.state.currentUser,handleEditUser:e.handleEditUser})}}),r.a.createElement(g.a,{path:"/gallery",render:function(e){return r.a.createElement(Y,null)}}),r.a.createElement(g.a,{path:"/home",render:function(e){return r.a.createElement(Y,null)}}),this.state.currentUser?r.a.createElement(H,null):r.a.createElement(r.a.Fragment,null))}}]),a}(r.a.Component),te=Object(g.e)(ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_.a,{basename:"/vegan"},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,a){e.exports=a.p+"static/media/logo.63291ae6.png"},83:function(e,t,a){e.exports=a(182)},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.8174c760.chunk.js.map