import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: {
             isLoggedIn: false,
            Otp: '',
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
            // openOrderConfirmModal(state,modalProduct) {  
            //     state.modalProduct = modalProduct;  
            // }
        }
    })
}

export default createStore;






