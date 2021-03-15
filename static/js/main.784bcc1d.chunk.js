(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){},51:function(e,t,r){},70:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(8),o=r.n(c),i=r(10),l=r(4),s=r(5),u=r(7),h=r(6),g=(r(25),r(0)),d=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),r}(n.Component),m=(r(27),r.p+"static/media/default.2e01288c.jpg"),f=function(e){var t=e.imgSrc,r=e.imgAlt,n=e.largeSrc,a=e.onImgClick;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:r,className:"ImageGalleryItem-image",onClick:function(){a(n,r)}})})};f.defaultProps={imgSrc:m,largeSrc:m};var j=f,b=(r(28),document.querySelector("#modal-root")),p=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.onOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.onOverlayClick,children:Object(g.jsx)("div",{className:"Modal",children:this.props.children})}),b)}}]),r}(n.Component),y=(r(29),function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showModal:!1,largeSrc:"",imgAlt:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImgClick=function(t,r){e.toggleModal(),e.setState({largeSrc:t,imgAlt:r})},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this,t=this.props.gallery,r=this.state,n=r.showModal,a=r.largeSrc,c=r.imgAlt;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(t){var r=t.id,n=t.webformatURL,a=t.largeImageURL,c=t.tags;return Object(g.jsx)(j,{imgSrc:n,imgAlt:c,largeSrc:a,onImgClick:e.onImgClick},r)}))}),n&&Object(g.jsx)(p,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:a,alt:c})})]})}}]),r}(n.Component)),O=r(19),v=r.n(O),S=(r(50),function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(g.jsx)(v.a,{type:"Circles",color:"#ffffff",height:40,width:40,timeout:2e3})}}]),r}(n.Component)),w=(r(51),function(e){var t=e.onClick,r=e.children;return Object(g.jsxs)("button",{type:"button",className:"Button",onClick:t,children:["Load more",r]})}),x=r(20),k=r.n(x),C=function(e){var t=e.searchQuery,r=void 0===t?"":t,n=e.currentPage,a=void 0===n?1:n,c=e.perPage,o=void 0===c?12:c;e.error;return k.a.get("https://pixabay.com/api/?q=".concat(r,"&page=").concat(a,"&key=").concat("19870632-ff45bfcc8dee770edfcb419ec","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data})).catch((function(e){return e}))},P=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={gallery:[],currentPage:1,perPage:12,searchQuery:"",isLoading:!1,error:null},e.changeQuery=function(t){e.setState({searchQuery:t,currentPage:1,gallery:[],error:null})},e.fetchImages=function(){var t=e.state,r={searchQuery:t.searchQuery,currentPage:t.currentPage,perPage:t.perPage,error:t.error};e.setState({isLoading:!0}),C(r).then((function(t){var r=t.hits,n=t.totalHits;if(0===r.length)throw new Error("No matches were found! Try again!");e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(r)),totalHits:n,currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(s.a)(r,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.gallery,r=e.currentPage,n=e.perPage,a=e.isLoading,c=e.totalHits,o=e.error,i=t.length>0&&!a,l=c>(r-1)*n;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(d,{onSubmit:this.changeQuery}),Object(g.jsx)(y,{gallery:t}),a&&Object(g.jsx)(S,{}),i&&l&&Object(g.jsx)(w,{onClick:this.fetchImages,children:Object(g.jsx)(S,{})}),o&&Object(g.jsx)("h2",{className:"ErrorMessage",children:o.message})]})}}]),r}(n.Component);r(70),r(71);o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.784bcc1d.chunk.js.map