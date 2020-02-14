import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        
        state: {
            isLoggedIn: false,
            check_btn:false,
            Otp: '',
            phoneResponse:'',
            getBet:'',
            
            locales: ['en', 'mm'],
            locale: 'en'
            // repairs: [],
            // purchases: [],
            // appStatus: {isViewDetail:false, repairPageNum:0, repairQueryType:'', lastRepairQueryType:'', isShowBottomTab:true, pageTitle:'', purchasePageNum:0, purchaseQueryType:'', lastPurchaseQueryType:'', isRefreshList:true},
            // repairBadge: {},
            // purchaseBadge:{},
            // products:[]
           
            // modalProduct: {},
            
            // loaded:true
        },
        getters: {
          
        },
        mutations: {
            SET_LANG (state, locale) {
                if (state.locales.includes(locale)) {
                  state.locale = locale
                  localStorage.setItem('locale', JSON.stringify(locale));
                }
              },
        //       SET_LANG(state , lang) {
        //         state.lang = lang
        //         console.log(lang);
        //         localStorage.setItem('lang', JSON.stringify(lang));
        //    },
            logIn(state, userInfo) {
                console.log("UserInfo", userInfo);
                // state.userInfo = userInfo;
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                state.isLoggedIn = true;
                
            },
            logOut(state) {
                localStorage.removeItem('userInfo');
                localStorage.removeItem('phoneResponse');
                state.isLoggedIn = false;
            },
            updateIsLoggedIn(state, isLoggedIn) {
                state.isLoggedIn = isLoggedIn;
            },
           
            
            setOtp(state, Otp){
                state.Otp = Otp;
                console.log(Otp)
            },
            setPhone(state, phoneResponse){
                state.phoneResponse = phoneResponse;
                console.log(phoneResponse.access_token)
            },
            getBet(state, check_btn){
                state.check_btn = check_btn;
                console.log(check_btn)
            },
            betAmount(state, input_amount){
                state.input_amount = input_amount;
                console.log(input_amount)
            },
            
           
        }
    })
}

export default createStore;








