(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{383:function(t,e,n){var content=n(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("3b23fb25",content,!0,{sourceMap:!1})},477:function(t,e,n){"use strict";var o=n(383);n.n(o).a},478:function(t,e,n){(e=n(8)(!1)).push([t.i,".bet_status .el-header{background-color:#fff}.bet_status .table td,.table th{border:0}.el-page-header__left{margin:0}.bet_status .el-page-header{line-height:43px;color:#000;padding:0 20px}.bet_status .el-page-header__content{color:#000;font-weight:700}.list_bet_info ul{padding:20px;margin:0}.list_bet_info ul li{list-style:none;display:-webkit-box;display:flex;padding:20px 0;border-bottom:1px solid #bdc1cc}.bet_s_amount,.bet_s_d_t,.bet_s_no{font-size:13px;text-align:center}.model_items ul{padding:0;margin:0}.model_items ul li{list-style:none;padding:20px 0;border-bottom:1px solid #bdc1cc}.bet_status .el-dialog{border-radius:13px}.bet_status .table td,.table th{font-weight:unset}.bet_status .el-page-header__content{font-size:12pt}.bet_history_btn{background:green;max-width:480px;width:100%}.time_status{position:absolute;text-align:center;color:#000;right:0;font-size:12px;left:0}.bet_status_tag .el-tabs__nav{width:50%!important;text-align:center}.bet_status_tag .el-tabs--top .el-tabs__item.is-top:last-child{width:100%;padding:0}.bet_status_tag .el-tabs--top .el-tabs__item.is-top:nth-child(2){border-right:1px solid #b8b8b8;width:100%;padding:0}.bet_status_tag .table th{border:0}",""]),t.exports=e},649:function(t,e,n){"use strict";n.r(e);n(43);var o={mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()}))},data:function(){return{bet_stauts:"",bet_stauts_threed:"",dialogVisible:!1,time_status:"",activeName:"first"}},methods:{bet_date:function(data){this.$store.commit("bet_date",data),this.$router.push("/threeD/bet_threed_detail?lang=".concat(this.$store.state.locale))},goBack:function(){this.$router.push("/me?lang=".concat(this.$store.state.locale))},handleClick:function(t,e){console.log(t,e)}},created:function(){var t=this,e=localStorage.getItem("token");this.$axios.get("/v2/v1/betStatus",{headers:{Authorization:"Bearer "+e}}).then((function(e){t.$nuxt.$loading.finish(),t.bet_stauts=e.data.data,t.time_status=e.data.time})),this.$axios.get("/v2/v1/threed/betStatus",{headers:{Authorization:"Bearer "+e}}).then((function(e){t.$nuxt.$loading.finish(),t.bet_stauts_threed=e.data.data}))}},l=(n(477),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_container bet_status"},[n("el-header",[n("el-page-header",{attrs:{title:"",content:""+t.$t("bet_status_title")},on:{back:t.goBack}})],1),t._v(" "),n("div",{staticClass:"bet_status_tag"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"2D",name:"first"}},[n("p",{staticClass:"time_status"},[n("span",[t._v(t._s(this.time_status)+" Section")])]),t._v(" "),n("table",{staticClass:"table",staticStyle:{width:"100%"}},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("date_time")))]),t._v(" "),n("th",[t._v(t._s(t.$t("no")))]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.$t("Amount")))])])]),t._v(" "),n("tbody",t._l(t.bet_stauts,(function(e,b){return n("tr",{key:b,attrs:{id:e.id}},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.created_at))]),t._v(" "),n("td",[t._v(t._s(e.number))]),t._v(" "),"wallet"==e.wallet_status?n("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.amount)+" ကျပ်")]):n("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.amount)+" ပွိုင့်")])])})),0)])]),t._v(" "),n("el-tab-pane",{attrs:{label:"3D",name:"second"}},[n("table",{staticClass:"table",staticStyle:{width:"100%"}},[n("thead",[n("tr",[n("th",[t._v(t._s(t.$t("date_time")))]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.$t("Amount")))])])]),t._v(" "),n("tbody",t._l(t.bet_stauts_threed,(function(e,b){return n("tr",{key:b,attrs:{id:e.id},on:{click:function(n){return t.bet_date(e.date)}}},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.date))]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.amount)+" ကျပ်")])])})),0)])])],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"20px"}},[n("nuxt-link",{attrs:{to:t.$t("/bet_history_btn")+"?lang="+t.$store.state.locale}},[n("el-button",{staticClass:"bet_history_btn",attrs:{type:"info",round:""}},[t._v(t._s(t.$t("Click to see Bet History")))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);