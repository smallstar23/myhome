function sendit(){
    // 
    const userid=document.getElementById('userid');
    const userpw=document.getElementById('userpw');
    const userpw_re=document.getElementById('userpw_re');
    const name=document.getElementById('name');
    const hp=document.getElementById('hp');
    const email=document.getElementById('email');
    const hobby=document.getElementsByName('hobby'); // 배열로 받음
    const ssn1=document.getElementById('ssn1')
    const ssn2=document.getElementById('ssn2')

    // 정규식     
    // +: 여러글자여도 상관없다 $: 끝낸다  ^:이걸로 시작하세요  \d: 십진수
    // {num}: num 만큼 넣을수있다
    const expNameText= /[가-힣]+$/ 
    const expHpText= /^\d{3}-\d{3,4}-\d{4}$/
    const expEmailText=/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/; 
    const expNum=/[0-9]$/

    //아이디에 값을 입력하지 않았을 경우 alert 소환

    if(userid.value==''){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }

    if(userid.value.length < 4 || userid.value.length>20){
        alert('아이디는 4자 이상 20자 이하로 입력하세요')
        userid.focus();
        return false;
    }


    // 비밀번호 값 확인
    if(userpw.value==''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }

    if(userpw.value.length < 4 || userpw.value.length>20){
        alert('아이디는 4자 이상 20자 이하로 입력하세요')
        userpw.focus();
        return false;
    }

    //비밀번호 확인 값이 다를경우

    if(userpw.value != userpw_re.value){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다.')
        userpw.focus();
        return false;
    }

    // 정규표현식으로 이름값 확인
    if(!expNameText.test(name.value)){
        alert('이름의 형식을 확인하세요. \n한글만 입력이 가능합니다.')
        name.focus();
        return false;
    }

    // 전화번호 확인
    if(!expHpText.test(hp.value)){
        alert('휴대폰 번호 형식을 확인하세요. \n하이픈(-)을 포함해야합니다. ')
        hp.focus();
        return false;
    }

    // 이메일 확인
    if(!expEmailText.test(email.value)){
        alert('이메일의 형식을 확인하세요.')
        email.focus();
        return false;
    }

    // 취미는 적어도 1개이상 선택하게 만듬
    let count=0;
    for(let i in hobby){
        if(hobby[i].checked){
            count++
        }
    }
    if(count==0){
        alert('취미는 1개 이상 선택하세요');
        return false;
    }

    // 주민등록번호 입력 확인
    if(!expNum.test(ssn1.value) || !expNum.test(ssn2.value)){
        alert('올바른 주민등록번호를 숫자로 입력하세요');
        ssn1.focus();
        return false;
    }

    //주민등록번호 검사버튼을 눌렀을 경우에만 넘어가게 함

    if(isssn.value=='n'){
        alert("주민등록번호 검증버튼을 눌러주세요")
    }





    return true;
}

// 주민등록번호 포커스무브

function moveFocus(){
    const ssn1= document.getElementById('ssn1');
    if(ssn1.value.length>= 6){
        document.getElementById('ssn2').focus();
    }
}

// 주민등록번호 유효성 검사

function ssnTest(){
    const ssn1=document.getElementById('ssn1');
    const ssn2=document.getElementById('ssn2');
    let arr1=[];
    let arr2=[];

    for(let i=0; i<=ssn1.value.length-1; i++){
        arr1[i]=Number(ssn1.value.charAt(i))
    }
    for(let i=0; i<=ssn2.value.length-1; i++){
        arr2[i]=Number(ssn2.value.charAt(i))
    }

    let arr=arr1.concat(arr2);
    let add=[2,3,4,5,6,7,8,9,2,3,4,5,1];
    for(let j=0; j<=add.length; j++){
        arr[j] = arr[j] * add[j]
    }
    function sum(){
    let total=0;
        for(let a=0; a<=arr.length-3; a++){
                total += arr[a]
        }
    return total;
    }

    let final=11 - (sum() % 11)
    if(final>=10){
        final = final % 10
    }

    console.log(arr);
    console.log(final);

    if(final==arr[12]){
        alert('유효한 주민등록번호입니다.')
    }else(alert('유효하지 않습니다!'))


}

function ssnChange(){
    const isssn= document.getElementById('isssn')
    isssn.value='n';

}

