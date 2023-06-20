import axios from '@/service/axios'
import router from '@/router';
import store from '@/store/store';

export async function payment(productname, price, items) {
    const { buyername, buyeremail, buyertel } = await fetchBuyerInfo()
    const merchant = createOrderNumber()
    
    // Initalize PG
    initPG(); 
    // Call PG API
    requestPay(merchant, productname, price, buyername, buyeremail, buyertel, items);
}

/**
 * Init PaymentGateway
 */
function initPG(){
    const IMP = window.IMP;
    IMP.init("imp75375154");
    console.log("Initalize Payment Gateway..");
}

/**
 * Section of request PG call
 */
function requestPay(merchant, productname, price, buyername, buyeremail, buyertel, items) {

    IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: merchant,
        name: productname,
        amount: price,
        buyer_email: buyeremail,
        buyer_name: buyername,
        buyer_tel: buyertel,
    }, async rsp => { 
        //callback
        if (rsp.success) {
            console.log("success");
            console.log('rsp', rsp)
            //* 결제 완료된 아이템은 카트에서 뺍니다.
            store.commit('User/SET_USERPAIDITEMS', items)
            deleteSelectedItems(buyeremail, items)

            try {
                let itemsId = items.map(item => item.id)
                const response = await axios.post('/api/v1/jobs/order/create', {
                    amount: rsp.paid_amount,
                    title: rsp.name,
                    courses: itemsId,
                    merchantid: rsp,
                    paymentid: rsp.imp_uid,
                })
                //* 주문번호 넣어야함
                store.commit('User/SET_ORDERNUMBER', response.data.data.merchantid)

                // 결제 성공 시 로직,
                router.push(`/order/result`)
            } catch(error) {
                console.log(error)
                alert('오류가 발생하였습니다. 관리자에게 문의하세요.')
            }
            
            
        } else {
            console.log("failed");
            console.log(rsp)
            // 결제 실패 시 로직,
        }
    });
}

//* 유저 정보 가져오기
async function fetchBuyerInfo() {
    try {
        const response = await axios.get('/api/v1/customer/getcustomer')
        const buyername = response.data.user.name
        const buyeremail = response.data.user.email
        const buyertel = response.data.user.phonenumber

        return { buyername, buyeremail, buyertel }
    } catch(error) {
        console.log(error)
    }
}

//* 주문 번호 생성
function createOrderNumber() {
    const num = new Date().getTime()
    const randnum = Math.floor(Math.random() * 900) + 100;
    return `ord${num}-${randnum}`
}

//* 결제 완료된 아이템 장바구니에서 제거
async function deleteSelectedItems(email, items) {
    let filteredList = store.state.User.userCart.filter(itemId => {
            return !items.some(item => item.id === itemId);
    });
    try {
            const response = await axios.post('/api/v1/customer/savecart', {
                email: email,
                cart: filteredList,
            });
            store.commit('User/SET_USERCART', response.data.updateCart.abandonedcart)
    } catch(error) {
        console.log(error)
    }
}