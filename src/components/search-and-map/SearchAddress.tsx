import Script from 'next/script';
import React, { FC, useCallback } from 'react';
import DaumPostcodeEmbed, { DaumPostcodeEmbedProps, Address } from 'react-daum-postcode';

import styled from 'styled-components';

const SearchAddressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const SearchPopup = styled.div`
  display:none;
  position:fixed;o
  verflow:hidden;
  z-index:1;
  -webkit-overflow-scrolling:touch;
`;

const CloseImage = styled.img`
  cursor: pointer;
  position: absolute;
  right: -3px;
  top: -3px;
  z-index: 1;
`;

interface SearchAddressProps extends DaumPostcodeEmbedProps {
  setCurrAddress: (adr: string) => void;
}

const SearchAddress: FC<SearchAddressProps> = ({ setCurrAddress, ...props }) => {
  const handleComplete = useCallback((data: Address) => {
    let fullAddress = data.address;

    setCurrAddress(fullAddress);
  }, []);

  return <DaumPostcodeEmbed style={{ width: 300 }} onComplete={handleComplete} {...props} autoClose={false} />;

  // var element_layer = document.getElementById('layer');

  // const closeDaumPostcode = useCallback((data: any) => {
  //   const map = window.daum?.Postcode;
  //   console.log('data', data);
  //   let fullAddress = data.address;
  //   let extraAddress = '';
  //   setCurrAddress(fullAddress);
  // }, []);

  // const handleComplete = () => {
  //   new window.daum.Postcode({
  //     oncomplete: function (data: any) {
  //       // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

  //       // 각 주소의 노출 규칙에 따라 주소를 조합한다.
  //       // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
  //       var addr = ''; // 주소 변수
  //       var extraAddr = ''; // 참고항목 변수

  //       //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
  //       if (data.userSelectedType === 'R') {
  //         // 사용자가 도로명 주소를 선택했을 경우
  //         addr = data.roadAddress;
  //       } else {
  //         // 사용자가 지번 주소를 선택했을 경우(J)
  //         addr = data.jibunAddress;
  //       }

  //       // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
  //       if (data.userSelectedType === 'R') {
  //         // 법정동명이 있을 경우 추가한다. (법정리는 제외)
  //         // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
  //         if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
  //           extraAddr += data.bname;
  //         }
  //         // 건물명이 있고, 공동주택일 경우 추가한다.
  //         if (data.buildingName !== '' && data.apartment === 'Y') {
  //           extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
  //         }
  //         // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
  //         if (extraAddr !== '') {
  //           extraAddr = ' (' + extraAddr + ')';
  //         }
  //         // 조합된 참고항목을 해당 필드에 넣는다.
  //         console.log(1, extraAddr);
  //         // document.getElementById('sample2_extraAddress').value = extraAddr;
  //       } else {
  //         console.log(2, extraAddr);
  //         // document.getElementById('sample2_extraAddress').value = '';
  //       }

  //       // 우편번호와 주소 정보를 해당 필드에 넣는다.
  //       // document.getElementById('sample2_postcode').value = data.zonecode;
  //       // document.getElementById('sample2_address').value = addr;
  //       console.log(1, 'data.zonecode;', data.zonecode);
  //       // 커서를 상세주소 필드로 이동한다.
  //       //  document.getElementById('sample2_detailAddress').focus();

  //       // iframe을 넣은 element를 안보이게 한다.
  //       // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
  //       // element_layer.style.display = 'none';
  //     },
  //     width: '100%',
  //     height: '100%',
  //     maxSuggestItems: 5,
  //   }).embed(element_layer);

  //   // iframe을 넣은 element를 보이게 한다.
  //   if (element_layer) element_layer.style.display = 'block';
  // };

  // return (
  //   <SearchAddressContainer>
  //     <input type="button" onClick={handleComplete} value="우편번호 찾기" />
  //     <SearchPopup id="layer">
  //       <CloseImage src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer" onClick={closeDaumPostcode} />
  //     </SearchPopup>
  //   </SearchAddressContainer>
  // );
};

export default SearchAddress;
