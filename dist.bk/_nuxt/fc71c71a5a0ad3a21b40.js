(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{412:function(t,e,l){var content=l(542);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(9).default)("15fa49c2",content,!0,{sourceMap:!1})},541:function(t,e,l){"use strict";var r=l(412);l.n(r).a},542:function(t,e,l){(e=l(8)(!1)).push([t.i,".result .el-header{background-color:#2a612d}.el-page-header__left{margin:0}.result .el-page-header{line-height:43px;color:#fff;padding:0 20px}.result .el-page-header__content{color:#fff;font-weight:700}.result_item{padding:20px}.result_item h4{font-size:15px}.result .el-card{color:#fff;margin:15px auto;border-radius:10px;text-align:center}.result_item .el-col .result_number{width:52px;background:#222c36;float:right;font-weight:700;color:#fff;font-size:32px;padding:5px 10px;border-radius:13px;margin-right:3px}.result .el-card__body{background:#252e39;border:2px solid #ffea72;border-radius:10px}.result_date,.result_time{margin:17px 10px;padding-left:12px;font-size:11px}.result_item .el-divider{background:#696767;margin:12px auto}.result_item span{font-size:13px}.result .el-tabs__nav{width:50%!important;text-align:center}.result .el-tabs--top .el-tabs__item.is-top:last-child{width:100%;padding:0}.result .el-tabs--top .el-tabs__item.is-top:nth-child(2){border-right:1px solid #b8b8b8;width:100%;padding:0}.result .table th{border:0}.threed_result h4{font-size:13px}",""]),t.exports=e},670:function(t,e,l){"use strict";l.r(e);l(43);var r={mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()}))},data:function(){return{twod_result:"",threed_result:"",activeName:"first"}},methods:{goBack:function(){this.$router.push("/me?lang=".concat(this.$store.state.locale))},handleClick:function(t,e){console.log(t,e)}},created:function(){var t=this;this.$axios.get("/v2/v1/twod-result").then((function(e){console.log(e.data.data),t.twod_result=e.data.data,t.$nuxt.$loading.finish()})),this.$axios.get("/v2/v1/threed-result").then((function(e){console.log(e.data.data),t.threed_result=e.data.data,t.$nuxt.$loading.finish()}))}},n=(l(541),l(3)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main_container result"},[l("el-header",[l("el-page-header",{attrs:{title:"",content:""+t.$t("result_title")},on:{back:t.goBack}})],1),t._v(" "),l("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"2D",name:"first"}},[l("div",{staticClass:"result_item"},t._l(t.twod_result,(function(e,r){return l("div",{key:r,attrs:{"data-aos":"fade-up","data-aos-easing":"linear"}},[l("p",[t._v(t._s(e.date))]),t._v(" "),l("el-card",{attrs:{shadow:"always"}},[l("h6",{staticClass:"result_time_number",staticStyle:{color:"#FEDC54"}},[t._v("12:00 PM")]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("span",[t._v("Set")]),t._v(" "),l("h4",[t._v(t._s(e.set_1200))])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("Value")]),t._v(" "),l("h4",[t._v(t._s(e.val_1200))])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("2D")]),t._v(" "),l("h4",{staticStyle:{color:"#FEDC54","font-weight":"bold"}},[t._v(t._s(e.result_1200))])])]),t._v(" "),l("el-divider"),t._v(" "),l("h6",{staticClass:"result_time_number",staticStyle:{color:"#FEDC54"}},[t._v("4:30 PM")]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("span",[t._v("Set")]),t._v(" "),l("h4",[t._v(t._s(e.set_430))])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("Value")]),t._v(" "),l("h4",[t._v(t._s(e.val_430))])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("2D")]),t._v(" "),l("h4",{staticStyle:{color:"#FEDC54","font-weight":"bold"}},[t._v(t._s(e.result_430))])])]),t._v(" "),l("el-divider"),t._v(" "),l("div",{staticClass:"card_item"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col",staticStyle:{"padding-top":"15px"}},[l("h6",{staticClass:"result_time_number"},[t._v("9:30 AM")])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("Modern")]),t._v(" "),l("h4",[t._v(t._s(e.modern_930))])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("Internet")]),t._v(" "),l("h4",[t._v(t._s(e.internet_930))])])]),t._v(" "),l("el-divider"),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col",staticStyle:{"padding-top":"15px"}},[l("h6",{staticClass:"result_time_number"},[t._v("2:00 PM")])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("Modern")]),t._v(" "),l("h4",[t._v(t._s(e.modern_200))])]),t._v(" "),l("div",{staticClass:"col"},[l("span",[t._v("Internet")]),t._v(" "),l("h4",[t._v(t._s(e.internet_200))])])])],1)],1)],1)})),0)]),t._v(" "),l("el-tab-pane",{attrs:{label:"3D",name:"second"}},t._l(t.threed_result,(function(e,r){return l("div",{key:r,staticClass:"threed_result",staticStyle:{padding:"0 20px"},attrs:{"data-aos":"fade-up","data-aos-easing":"linear"}},[l("el-card",{attrs:{shadow:"always"}},[l("el-row",[l("el-col",{attrs:{span:16}},[l("h4",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.datetime))])]),t._v(" "),l("el-col",{attrs:{span:8}},[l("h4",{staticStyle:{"text-align":"right",color:"#FEDC54","font-weight":"bold"}},[t._v(t._s(e.result))])])],1)],1)],1)})),0)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);