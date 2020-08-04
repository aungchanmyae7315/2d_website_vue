import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({

        state: {
            isLoggedIn: false,
            check_btn: false,
            Otp: '',
            phoneResponse: '',
            getBet: '',
            updateLang: true,
            locales: ['en', 'uni', 'zg', 'zh'],
            locale: 'uni',
            token: '',
            file: '',
            webAppVersion: '',
            sliderImage: [],
            sliderText: '',
            sliderTime: '',
            hello: '',
            Chat_name:''

        },
        getters: {

        },
        mutations: {
            setWebAppVersion(state, version) {
                state.webAppVersion = version;
            },
            setSliderImage(state, slider_images) {
                localStorage.setItem('slider_images', JSON.stringify(slider_images));
                state.slider_images = slider_images;

            },
            setSliderText(state, slider_text) {
                localStorage.setItem('slider_text', JSON.stringify(slider_text));
                state.slider_text = slider_text;
            },
            setSliderTime(state, slider_time) {
                localStorage.setItem('slider_time', JSON.stringify(slider_time));
                state.slider_time = slider_time;
            },
            bank_card_grouping(state, bank_account) {
                localStorage.setItem('bank_account', JSON.stringify(bank_account));
                state.bank_account = bank_account;
            },
            bankgroupTime(state, bank_group_time) {
                localStorage.setItem('bank_group_time', JSON.stringify(bank_group_time));
                state.bank_group_time = bank_group_time;
            },
            referal_code(state, get_refel) {
                localStorage.setItem('get_refel', JSON.stringify(get_refel));
                state.get_refel = get_refel;
            },
            referalTime(state, referal_code_time) {
                localStorage.setItem('referal_code_time', JSON.stringify(referal_code_time));
                state.bank_group_time = referal_code_time;
            },
            SET_LANG(state, locale) {
                if (state.locales.indexOf(locale) !== -1) {
                    state.locale = locale
                    localStorage.setItem('locale', locale);
                }
            },

            logIn(state, userInfo) {
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                state.isLoggedIn = true;
            },
            accessToken(state, token) {
                state.token = token;
                localStorage.setItem('token', (token));
            },
            noti_id(state, data) {
                state.data = data;
                localStorage.setItem('notification_id', (data));
            },
            promotion_id(state, data) {
                state.data = data;
                localStorage.setItem('promotion_id', (data));
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
            updateImage(state, updateImage) {
                state.updateImage = updateImage;
            },
            setOtp(state, Otp) {
                state.Otp = Otp;
            },
            error_mes(state, Otp) {
                state.Otp = Otp;
            },

            setPhone(state, phoneResponse) {
                state.phoneResponse = phoneResponse;
            },
            getBet(state, check_btn) {
                localStorage.setItem('check_btn', check_btn);
                state.check_btn = check_btn;
            },
            getBetThreeD(state, bet_number) {
                localStorage.setItem('bet_numberThreeD', bet_number);
                state.bet_number = bet_number;
            },
            betAmount(state, bet_amount) {
                localStorage.setItem('bet_amount', bet_amount);
                state.bet_amount = bet_amount;
            },
            betAmountThreeD(state, amountThreeD) {
                localStorage.setItem('amountThreeD', amountThreeD);
                state.amountThreeD = amountThreeD;
            },
            file(state, file) {
                state.file = file;
            },
            axiosError(state, error) {
                localStorage.setItem('axiosRequestError', error);
                state.error = error;
            },
            userId(state, user_id) {
                localStorage.setItem('UserID', user_id);
                state.user_id = user_id;
            },
            topup_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('topup_detail_id', (data));
            },
            withdrawl_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('withdrawl_detail_id', (data));
            },
            football_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('football_detali_id', (data));
            },

            football_noti_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('football_noti_detail_id', (data));
            },

            bet_history_detail_id(state, data) {
                state.data = data;
                localStorage.setItem('bet_history_detail_id', (data));
            },
            Chat_name(state, data) {
                state.data = data;
                localStorage.setItem('Chat_name', (data));
            },

            change_zg_uni(state, data) {
                state.data = data;
                localStorage.setItem('change_zg_uni', (data));
            },

            mown(state, data) {
                state.data = data;
                localStorage.setItem('mown', (data));
            },




        }
    })
}

export default createStore;

