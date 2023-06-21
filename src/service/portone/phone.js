export default function requestAuth(merchant) {
    // IMP.certification(param, callback) 호출
    IMP.certification({ // param
    // 주문 번호
    // pg:'PG사코드.{CPID}',//본인인증 설정이 2개이상 되어 있는 경우 필
    
    merchant_uid: merchant, 
    // 모바일환경에서 popup:false(기본값) 인 경우 필수
    // m_redirect_url : "{리디렉션 될 URL}", 

    // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
    // popup : true 
    }, rsp => { // callback
        if (rsp.success) {
            console.log("success");
            console.log(rsp)
        // 인증 성공 시 로직,
            return;
        } else {
            console.log("failed");
            console.log(rsp)
        // 인증 실패 시 로직,
            return;
        }
    });
}