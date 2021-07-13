;
(function(Vue) {
	'use strict';
	Vue.component('address-picker', {
		template: `
			<div class="blackbg" v-show="bgshow">
				<div class="addkuang">
					<div class="addkuangtitle">
						<span>所在地区</span><span id="xxx" @click="close()">✖</span>
					</div>
					<div class="province">
						<span @click="dataList()" :class="prishow==true?'spanact':'spannom'">{{pro}}</span>
						<span @click="citys()" v-show="cityspanshow==true" :class="cityshow==true?'spanact':'spannom'">{{cit}}</span>
						<span @click="qus()" v-show="quspanshow==true" :class="qushow==true?'spanact':'spannom'">{{qu}}</span>
						<!-- <span @click="streets()" v-show="streetspanshow==true" :class="streetshow==true?'spanact':'spannom'">{{street}}</span> -->
					</div>
					<div class="chooseadd">
						<div ref="pro1" v-show="prishow==true" class="provinceEach" v-for="(value, key) in proList" :key="key" @click="cityfun(value,key)">
							{{key}}
						</div>
						<div ref="cit2" v-show="cityshow==true" class="provinceEach" v-for="(value, key) in citList" :key="key" @click="qufun(value,key)">
							{{key}}
						</div>
						<div ref="qu3" v-show="qushow==true" class="provinceEach" v-for="(value, key) in quList" :key="key" @click="endlist(value,key)">
							{{value}}
						</div>
						<!-- <div ref="street4" v-show="streetshow==true" class="provinceEach" v-for="(value, key) in streetList" :key="key" @click="endlist(pro.childs,pro.name)">
                                    {{key}}
                            </div> -->
					</div>
				</div>
			</div>
        `,
		data: function () {
			return {

				bgshow: false,
				proList: [],
				citList: [],
				quList: [],
				// streetList:[],
				prishow: true,
				cityshow: false,
				qushow: false,
				streetshow: false,
				cityspanshow: false,
				quspanshow: false,
				streetspanshow: false,
				pro: "请选择",
				cit: "请选择",
				qu: "请选择",
				// street:"请选择",
			}
		},
		mounted: function() {
			this.dataList();
		},
		methods: {
			getAddress: function() {
				this.bgshow = true;
			},
			dataList: function() {
				this.proList = address;
				// window.console.log(address);
				this.prishow = true;
				this.cityshow = false;
				this.qushow = false;
				this.streetshow = false;
			},
			cityfun: function(e, n) {
				this.pro = n;
				this.citList = e;
				this.cityspanshow = true;
				this.quspanshow = false;
				this.streetspanshow = false;

				this.prishow = false;
				this.cityshow = true;
				this.qushow = false;
				this.streetshow = false;
				this.cit = "请选择";
				//   this.qu="请选择";
				this.street = "请选择";

			},
			citys: function() {
				this.prishow = false;
				this.cityshow = true;
				this.qushow = false;
				this.streetshow = false;
			},
			qus: function() {
				this.prishow = false;
				this.cityshow = false;
				this.qushow = true;
				this.streetshow = false;
			},
			qufun: function(e, n) {
				this.cit = n;
				this.quList = e;
				this.quspanshow = true;
				this.streetspanshow = false;

				this.prishow = false;
				this.cityshow = false;
				this.qushow = true;
				this.streetshow = false;

				this.qu = "请选择";
				// this.street="请选择";
			},
			// streets:function(){
			//         this.prishow=false;
			//       this.cityshow=false;
			//       this.qushow=false;
			//       this.streetshow= true;
			// },
			// streetfun:function(e,n){
			//      this.qu =n;
			//       this.streetList = e;
			//       this.streetspanshow =true;
			//        this.prishow=false;
			//       this.cityshow=false;
			//       this.qushow=false;
			//       this.streetshow= true;

			//         this.street="请选择";
			// },
			endlist: function(e, n) {
				this.qu = e;
				this.bgshow = false;
				this.$parent.sendValueToParent(this.pro,this.cit,this.qu);
			},
			close: function() {
				this.bgshow = false;
				this.$parent.sendValueToParent(this.pro,this.cit,this.qu);
			}
		}
	})
})(Vue);