(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{219:function(e,t,r){"use strict";var n={name:"RichText",props:{slice:{type:Object,required:!0}}},c=r(45),l={name:"SlicesBlock",components:{RichText:Object(c.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("prismic-rich-text",{attrs:{field:this.slice.primary.rtf}})}),[],!1,null,null,null).exports},props:{slices:{type:Array,required:!0}}},o=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.slices,(function(t,n){return r("div",{key:n},["text"===t.slice_type?r("rich-text",{attrs:{slice:t}}):e._e()],1)})),0)}),[],!1,null,null,null);t.a=o.exports},225:function(e,t,r){"use strict";r.r(t);r(27);var n=r(4),c={name:"Page",components:{SlicesBlock:r(219).a},asyncData:function(e){var t=e.params,r=e.$prismic;return Object(n.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.api.getByUID("page",t.uid);case 2:return n=e.sent,e.abrupt("return",{page:n});case 4:case"end":return e.stop()}}),e)})))()}},l=r(45),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("prismic-rich-text",{staticClass:"mb-3",attrs:{field:this.page.data.title}}),this._v(" "),t("slices-block",{attrs:{slices:this.page.data.body}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);