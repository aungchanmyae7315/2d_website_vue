import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        
        state: {
            isLoggedIn: false,
            check_btn:false,
            Otp: '',
            phoneResponse:'',
            getBet:'',
            updateLang:true,
            locales: ['en', 'mm'],
            token:'',
        
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
            SET_LANG(state, locale) {
                if (state.locales.indexOf(locale) !== -1) {
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
            accessToken(state, token) {
                // console.log("Token", token);
                // state.userInfo = userInfo;

                localStorage.setItem('token', (token));
            
                
            },
            noti_id(state, data) {
                // console.log("Token", token);
                // state.userInfo = userInfo;
                localStorage.setItem('notification_id', (data));
            
                
            },
            logOut(state) {
                localStorage.removeItem('userInfo');
                localStorage.removeItem('phoneResponse');
                localStorage.removeItem('token');
                state.isLoggedIn = false;
            },
            updateIsLoggedIn(state, isLoggedIn) {
                state.isLoggedIn = isLoggedIn;
            },
            updateLang(state, updateLang) {
                state.updateLang = updateLang;
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








