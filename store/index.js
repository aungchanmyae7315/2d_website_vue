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
                //console.log("UserInfo", userInfo);
                // state.userInfo = userInfo;
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                state.isLoggedIn = true;
                
            },
            accessToken(state, token) {
                // console.log("Token", token);
                 state.token = token;

                localStorage.setItem('token', (token));
            
                
            },
            noti_id(state, data) {
                // console.log("Token", token);
                state.data = data;
                localStorage.setItem('notification_id', (data));
            
                
            },
            bet_date(state, data) {
                state.data = data;
                localStorage.setItem('bet_date', (data));
             
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
                //console.log(Otp)
            },
            setPhone(state, phoneResponse){
                state.phoneResponse = phoneResponse;
                //console.log(phoneResponse.access_token)
            },
            getBet(state, check_btn){
                localStorage.setItem('check_btn', JSON.stringify(check_btn));
                state.check_btn = check_btn;
                //console.log(check_btn)
            },
            betAmount(state, bet_amount){
                localStorage.setItem('bet_amount', bet_amount);
                state.bet_amount = bet_amount;
                //console.log(bet_amount)
            },
            odds(state, bet_odds){
                localStorage.setItem('odds',  JSON.stringify(bet_odds));
                state.bet_odds = bet_odds;
                //console.log(check_btn)
            },
           
        }
    })
}

export default createStore;








