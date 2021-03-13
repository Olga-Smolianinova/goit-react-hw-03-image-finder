(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},51:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),o=n.n(c),i=n(10),l=n(4),s=n(5),u=n(7),h=n(6),g=(n(25),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),n}(r.Component),m=(n(27),n.p+"static/media/default.2e01288c.jpg"),f=function(e){var t=e.imgSrc,n=e.imgAlt,r=e.largeSrc,a=e.onImgClick;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image",onClick:function(){a(r,n)}})})};f.defaultProps={imgSrc:m,largeSrc:m};var j=f,b=(n(28),document.querySelector("#modal-root")),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.onOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.onOverlayClick,children:Object(g.jsx)("div",{className:"Modal",children:this.props.children})}),b)}}]),n}(r.Component),y=(n(29),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showModal:!1,largeSrc:"",imgAlt:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImgClick=function(t,n){e.toggleModal(),e.setState({largeSrc:t,imgAlt:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.gallery,n=this.state,r=n.showModal,a=n.largeSrc,c=n.imgAlt;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(t){var n=t.id,r=t.webformatURL,a=t.largeImageURL,c=t.tags;return Object(g.jsx)(j,{imgSrc:r,imgAlt:c,largeSrc:a,onImgClick:e.onImgClick},n)}))}),r&&Object(g.jsx)(p,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:a,alt:c})})]})}}]),n}(r.Component)),O=n(19),v=n.n(O),S=(n(50),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)(v.a,{type:"Circles",color:"#ffffff",height:40,width:40,timeout:2e3})}}]),n}(r.Component)),w=(n(51),function(e){var t=e.onClick,n=e.children;return Object(g.jsxs)("button",{type:"button",className:"Button",onClick:t,children:["Load more",n]})}),x=n(20),k=n.n(x),C=function(e){var t=e.searchQuery,n=void 0===t?"":t,r=e.currentPage,a=void 0===r?1:r,c=e.perPage,o=void 0===c?12:c;return k.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(a,"&key=").concat("19870632-ff45bfcc8dee770edfcb419ec","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data}))},P=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={gallery:[],currentPage:1,perPage:12,searchQuery:"spring",isLoading:!1,error:null},e.changeQuery=function(t){e.setState({searchQuery:t,currentPage:1,gallery:[],totalHits:null,error:null})},e.fetchImages=function(){var t=e.state,n={searchQuery:t.searchQuery,currentPage:t.currentPage,perPage:t.perPage};e.setState({isLoading:!0}),C(n).then((function(t){var n=t.hits,r=t.totalHits;if(0===n.length)throw new Error("Error fetching data");e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(n)),totalHits:r,currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchImages()}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.gallery,n=e.currentPage,r=e.perPage,a=e.isLoading,c=e.totalHits,o=e.error,i=t.length>0&&!a,l=c>(n-1)*r;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(d,{onSubmit:this.changeQuery}),Object(g.jsx)(y,{gallery:t}),a&&Object(g.jsx)(S,{}),i&&l&&Object(g.jsx)(w,{onClick:this.fetchImages,children:Object(g.jsx)(S,{})}),o&&Object(g.jsx)("h2",{className:"ErrorMessage",children:"Something get wrong! Please, try again!"})]})}}]),n}(r.Component);n(70),n(71);o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.81c449ba.chunk.js.map