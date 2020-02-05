import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        
        state: {
             isLoggedIn: false,
            Otp: '',
            phoneResponse:'',
            count: 0
            // modalProduct: {},
            // loaded:true
        },
        getters: {
            // getModalProduct(state) {
            //     return state.modalProduct
            // },
        },
        mutations: {
            logIn(state, userInfo) {
                // console.log("UserInfo", userInfo);
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                state.isLoggedIn = true;
            },
            logOut(state) {
                localStorage.removeItem('userInfo');
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
                console.log(phoneResponse)
            },
            // openOrderConfirmModal(state,modalProduct) {  
            //     state.modalProduct = modalProduct;  
            // }
            increment (state) {
                // mutate state
                state.count++
              }
        }
    })
}

export default createStore;






