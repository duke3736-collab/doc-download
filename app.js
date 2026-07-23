// ====================================================
//  서식 자료실 — 2025 Edition
// ====================================================

const CATS = {
  all:        '전체',
  admin:      '행정·공공',
  labor:      '근로·취업',
  tax:        '세금·금융',
  realestate: '부동산',
  health:     '의료·복지',
  legal:      '법률·계약',
  edu:        '교육·자격',
  business:   '사업·창업',
};

const LAW_BASE = 'https://www.law.go.kr/lsBylInfoPLinkR.do?lsiSeq=283339&lsNm=%EB%B6%80%EB%8F%99%EC%82%B0+%EA%B1%B0%EB%9E%98%EC%8B%A0%EA%B3%A0+%EB%93%B1%EC%97%90+%EA%B4%80%ED%95%9C+%EB%B2%95%EB%A5%A0+%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99&bylCls=BF&bylEfYd=20260210&bylEfYdYn=Y';

function makeLawUrl(bylNo, bylBrNo = '00') {
  return `${LAW_BASE}&bylNo=${bylNo}&bylBrNo=${bylBrNo}`;
}

// ── 서식 데이터 ──────────────────────────────────
const DOCS = [

  // ─── 행정·공공 ───────────────────────────────────────────────
  {
    id:1, cat:'admin', e:'🏠',
    title:'주민등록등본',
    desc:'거주지를 증명하는 기본 서류. 정부24에서 온라인 발급 가능하며 무인발급기 이용도 가능.',
    tags:['거주증명','무인발급','온라인발급'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000015&tp_seq=01',
    kw:'주민등록등본 거주 주소 증명 발급'
  },
  {
    id:2, cat:'admin', e:'📄',
    title:'주민등록초본',
    desc:'주소 이동 이력을 포함한 등록 현황 증명서. 과거 주소지 확인이 필요할 때 사용.',
    tags:['주소이력','행정서류'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000016&tp_seq=01',
    kw:'주민등록초본 주소 이력 이동 발급'
  },
  {
    id:3, cat:'admin', e:'👨‍👩‍👧',
    title:'가족관계증명서',
    desc:'부모·배우자·자녀 관계를 증명. 대법원 전자가족관계등록시스템에서 온라인 발급.',
    tags:['가족','혼인','출생'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/pt/ptg/PTG00100P.do',
    kw:'가족관계증명서 부모 배우자 자녀 혼인 발급'
  },
  {
    id:4, cat:'admin', e:'📋',
    title:'기본증명서',
    desc:'개인의 출생, 사망 등 신분 기본 사항 증명. 대법원 전자가족관계등록시스템에서 발급.',
    tags:['신분증명','출생','사망'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/pt/ptg/PTG00200P.do',
    kw:'기본증명서 출생 신분 사망 발급'
  },
  {
    id:5, cat:'admin', e:'🔏',
    title:'인감증명서',
    desc:'등록 인감도장 공식 증명. 부동산 거래·금융 거래 시 필수. 정부24 온라인 신청 가능.',
    tags:['인감','부동산','금융거래'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000014',
    kw:'인감증명서 인감 도장 부동산 금융'
  },
  {
    id:6, cat:'admin', e:'👶',
    title:'출생신고서',
    desc:'신생아 출생 후 1개월 이내 제출 의무. 대법원 전자가족관계등록시스템에서 서식 다운로드.',
    tags:['신생아','출생','신고'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/pt/ptg/PTG00110P.do',
    kw:'출생신고서 신생아 아기 출생 신고'
  },
  {
    id:7, cat:'admin', e:'💍',
    title:'혼인신고서',
    desc:'법적 혼인 성립을 위한 공식 신고 서식. 신고 서류 다운로드 후 주소지 행정복지센터 제출.',
    tags:['결혼','혼인','신고'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/pt/ptg/PTG00120P.do',
    kw:'혼인신고서 결혼 부부 배우자 신고'
  },
  {
    id:8, cat:'admin', e:'🏢',
    title:'전입신고',
    desc:'이사 후 14일 이내 의무 신고. 정부24에서 온라인으로 간편하게 전입신고 완료 가능.',
    tags:['이사','전입','주소변경'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000018',
    kw:'전입신고서 이사 주소변경 이사신고'
  },
  {
    id:9, cat:'admin', e:'🔑',
    title:'운전면허 재발급 신청',
    desc:'운전면허증 분실·훼손 시 재발급 신청. 도로교통공단 온라인 예약 후 방문 발급.',
    tags:['운전면허','재발급','분실'],
    source:'도로교통공단',
    url:'https://www.safedriving.or.kr/guide/larGuide051.do?menuCode=MN-PO-1218',
    kw:'운전면허 재발급 분실 훼손 면허증'
  },
  {
    id:10, cat:'admin', e:'📑',
    title:'건축물대장 발급',
    desc:'건물의 구조·용도·면적 등 공식 현황 확인. 정부24에서 온라인 즉시 발급 가능.',
    tags:['건축물대장','건물정보','온라인발급'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A02006&CappBizCD=13100000031',
    kw:'건축물대장 건물 구조 용도 면적'
  },

  // ─── 근로·취업 ───────────────────────────────────────────────
  {
    id:11, cat:'labor', e:'📝',
    title:'표준근로계약서',
    desc:'고용노동부 권장 표준 근로계약서 파일 다운로드. 근로시간·임금·휴가 조항 포함.',
    tags:['근로계약','취업','고용'],
    source:'고용노동부',
    url:'https://www.moel.go.kr/info/labor/laborContractStandard.do',
    kw:'근로계약서 표준 고용 취업 알바'
  },
  {
    id:12, cat:'labor', e:'🛍️',
    title:'단시간 근로계약서 (아르바이트)',
    desc:'파트타임·아르바이트용 단시간 표준근로계약서 HWP/PDF 다운로드.',
    tags:['알바','파트타임','단시간'],
    source:'고용노동부',
    url:'https://www.moel.go.kr/info/labor/laborContractStandard.do',
    kw:'아르바이트 알바 파트타임 단시간 근로계약서'
  },
  {
    id:13, cat:'labor', e:'💰',
    title:'퇴직급여 신청서',
    desc:'퇴직 시 근로복지공단 퇴직급여 지급 신청. 온라인 신청 또는 서식 다운로드.',
    tags:['퇴직금','퇴사','급여청구'],
    source:'근로복지공단',
    url:'https://www.comwel.or.kr/comwel/wkrs/slrymng/rtrmn.jsp',
    kw:'퇴직금 신청서 퇴직 퇴사 임금 퇴직급여'
  },
  {
    id:14, cat:'labor', e:'📊',
    title:'실업급여(구직급여) 신청',
    desc:'비자발적 실직 후 구직 기간 소득 지원. 고용보험 사이트에서 온라인 신청.',
    tags:['실업급여','구직','실직'],
    source:'고용보험',
    url:'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0303Info.do',
    kw:'실업급여 구직급여 실직 실업 고용보험'
  },
  {
    id:15, cat:'labor', e:'🍼',
    title:'육아휴직 급여 신청',
    desc:'만 8세 이하 자녀 양육을 위한 육아휴직 급여 신청. 고용보험 사이트에서 신청.',
    tags:['육아휴직','출산','양육'],
    source:'고용보험',
    url:'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0301Info.do',
    kw:'육아휴직 신청서 아이 출산 양육 부모'
  },
  {
    id:16, cat:'labor', e:'🤕',
    title:'산업재해 요양급여 신청',
    desc:'업무상 재해·질병 시 치료비 지원 신청. 근로복지공단 온라인 신청 또는 서식 다운로드.',
    tags:['산재','업무상재해','요양'],
    source:'근로복지공단',
    url:'https://www.comwel.or.kr/comwel/wkrs/injryprvntn/indstrlAccdnt.jsp',
    kw:'산재 산업재해 요양급여 신청서 업무상재해'
  },
  {
    id:17, cat:'labor', e:'🤰',
    title:'출산전후휴가 급여 신청',
    desc:'출산 전후 90일(다태아 120일) 유급휴가 급여 신청. 고용보험 사이트에서 신청.',
    tags:['출산휴가','임신','출산급여'],
    source:'고용보험',
    url:'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0302Info.do',
    kw:'출산전후휴가 출산휴가 임신 출산 산전 산후'
  },
  {
    id:18, cat:'labor', e:'🏥',
    title:'고용보험 피보험자격 확인 청구',
    desc:'고용보험 가입 여부 및 피보험자격 이력 확인 신청 서식.',
    tags:['고용보험','피보험자','가입확인'],
    source:'고용보험',
    url:'https://www.ei.go.kr/ei/eih/eg/pa/paH/retrievePaHInfo.do',
    kw:'고용보험 피보험 자격확인 가입이력'
  },

  // ─── 세금·금융 ───────────────────────────────────────────────
  {
    id:19, cat:'tax', e:'🧾',
    title:'종합소득세 신고 (홈택스)',
    desc:'개인사업자·프리랜서·기타소득자 연간 소득 신고. 국세청 홈택스에서 전자신고.',
    tags:['소득세','세금신고','프리랜서'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml',
    kw:'종합소득세 신고서 소득세 세금 프리랜서 개인사업자'
  },
  {
    id:20, cat:'tax', e:'🏪',
    title:'사업자등록 신청 (홈택스)',
    desc:'개인·법인 사업 개시 전 사업자등록 의무. 홈택스에서 온라인으로 즉시 신청 가능.',
    tags:['사업자등록','창업','개업'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_teht.xml',
    kw:'사업자등록 신청서 창업 개업 사업자'
  },
  {
    id:21, cat:'tax', e:'📈',
    title:'부가가치세 신고 (홈택스)',
    desc:'개인·법인 사업자의 분기별 부가세 전자신고. 홈택스에서 신고 및 납부.',
    tags:['부가세','VAT','세금신고'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml',
    kw:'부가가치세 신고서 부가세 VAT 세금'
  },
  {
    id:22, cat:'tax', e:'📃',
    title:'근로소득 원천징수영수증 발급',
    desc:'연말정산 및 소득 증빙에 필요한 원천징수영수증. 홈택스에서 온라인 발급.',
    tags:['원천징수','연말정산','급여증명'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml',
    kw:'원천징수영수증 연말정산 급여 소득증명'
  },
  {
    id:23, cat:'tax', e:'💵',
    title:'소득확인증명서 발급',
    desc:'과세연도별 소득 공식 증명서. 금융대출·청약 시 필수. 홈택스에서 즉시 발급.',
    tags:['소득증명','금융대출','청약'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml',
    kw:'소득확인증명서 소득증명 대출 청약'
  },
  {
    id:24, cat:'tax', e:'🏦',
    title:'금융상품 비교 및 금융거래 정보',
    desc:'금융감독원 금융상품 비교 공시. 은행별 금리, 수수료 비교 및 금융거래 정보 제공.',
    tags:['금융','은행','금리비교'],
    source:'금융감독원 금융상품한눈에',
    url:'https://finlife.fss.or.kr/main/main.do',
    kw:'금융거래확인서 은행 거래내역 금융 금리'
  },

  // ─── 부동산 (국가법령정보센터 부동산 거래신고 법률 시행규칙 서식 전체) ──────
  {
    id:101, cat:'realestate', e:'📝',
    title:'[서식 1] 부동산거래계약 신고서',
    desc:'부동산 매매계약 체결 후 30일 이내 관할 지자체에 제출하는 부동산거래계약 신고서 공식 서식.',
    tags:['부동산거래','매매신고','법정서식'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','00'),
    kw:'부동산거래계약 신고서 서식1 매매 신고 법정'
  },
  {
    id:102, cat:'realestate', e:'🏢',
    title:'[서식 1의 2] 법인 주택 거래계약 신고서',
    desc:'법인이 주택을 거래(매수/매도)할 때 법인 현황, 임원 관계 및 취득목적 등을 작성하는 신고서.',
    tags:['법인주택','법인거래','주택신고'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','02'),
    kw:'법인 주택 거래계약 신고서 서식1의2 법인'
  },
  {
    id:103, cat:'realestate', e:'💵',
    title:'[서식 1의 3] 주택취득자금 조달 및 입주계획서',
    desc:'주택 취득 시 자기자금, 차입금 등 자금 조달 출처 및 입주 여부/시기를 작성하는 서식.',
    tags:['자금조달','입주계획','주택취득'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','03'),
    kw:'주택취득자금 조달 및 입주계획서 서식1의3 자금조달계획서'
  },
  {
    id:104, cat:'realestate', e:'🏞️',
    title:'[서식 1의 4] 토지취득자금 조달 및 토지이용계획서',
    desc:'토지 거래 허가/신고 구역 내 토지 취득 시 자금 출처 및 토지 이용 계획을 명시하는 서식.',
    tags:['토지자금','토지이용','자금조달'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','04'),
    kw:'토지취득자금 조달 및 토지이용계획서 서식1의4 토지'
  },
  {
    id:105, cat:'realestate', e:'📜',
    title:'[서식 2] 부동산거래계약 신고필증',
    desc:'부동산 거래계약 신고가 완료되었음을 지자체장이 확인 및 증명하는 공식 신고필증.',
    tags:['신고필증','부동산거래','확인증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0002','00'),
    kw:'부동산거래계약 신고필증 서식2'
  },
  {
    id:106, cat:'realestate', e:'🔄',
    title:'[서식 3] 부동산거래계약 변경 신고서',
    desc:'거래가격, 면적, 잔금지급일 등 거래계약 신고 내용에 변경이 발생한 경우 제출하는 신고서.',
    tags:['변경신고','부동산거래','가격변경'],
    source:'국가법령정보센터',
    url: makeLawUrl('0003','00'),
    kw:'부동산거래계약 변경 신고서 서식3'
  },
  {
    id:107, cat:'realestate', e:'❌',
    title:'[서식 4] 부동산거래계약 해제등 신고서',
    desc:'부동산 거래계약이 무효, 취소 또는 해제된 경우 해제 확정일로부터 30일 이내 제출.',
    tags:['해제신고','계약해제','취소신고'],
    source:'국가법령정보센터',
    url: makeLawUrl('0004','00'),
    kw:'부동산거래계약 해제등 신고서 서식4'
  },
  {
    id:108, cat:'realestate', e:'✅',
    title:'[서식 5] 부동산거래계약 해제등 확인서',
    desc:'거래계약의 해제 등이 정상적으로 등록/신고 완료되었음을 확인하는 공식 서식.',
    tags:['해제확인서','부동산거래','확인서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','00'),
    kw:'부동산거래계약 해제등 확인서 서식5'
  },
  {
    id:109, cat:'realestate', e:'🏠',
    title:'[서식 5의 2] 주택 임대차 계약 신고서',
    desc:'보증금 6천만원 초과 또는 월세 30만원 초과 주택 임대차 계약 체결 시 제출하는 전월세 신고서.',
    tags:['주택임대차','전월세신고','임대차계약'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','02'),
    kw:'주택 임대차 계약 신고서 서식5의2 전월세신고'
  },
  {
    id:110, cat:'realestate', e:'📑',
    title:'[서식 5의 3] 주택 임대차 계약 신고필증',
    desc:'주택 임대차 계약 신고가 정상 접수 완료되었음을 확인하는 신고필증 서식.',
    tags:['임대차신고필증','전월세확인','신고필증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','03'),
    kw:'주택 임대차 계약 신고필증 서식5의3'
  },
  {
    id:111, cat:'realestate', e:'✏️',
    title:'[서식 5의 4] 주택 임대차 계약 변경 신고서',
    desc:'임대차 보증금, 차임(월세), 임대기간 등 계약 변경 사항이 있을 때 제출하는 신고서.',
    tags:['임대차변경','보증금변경','월세변경'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','04'),
    kw:'주택 임대차 계약 변경 신고서 서식5의4'
  },
  {
    id:112, cat:'realestate', e:'🚫',
    title:'[서식 5의 5] 주택 임대차 계약 해제 신고서',
    desc:'임대차 계약이 기간 만료 전 해제/취소된 경우 제출하는 해제 신고서.',
    tags:['임대차해제','전월세해제','계약해제'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','05'),
    kw:'주택 임대차 계약 해제 신고서 서식5의5'
  },
  {
    id:113, cat:'realestate', e:'📋',
    title:'[서식 5의 6] 주택 임대차 계약 해제 확인서',
    desc:'주택 임대차 계약 해제 신고가 등록되었음을 증명하는 공식 확인서.',
    tags:['임대차해제확인','해제확인서','확인서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','06'),
    kw:'주택 임대차 계약 해제 확인서 서식5의6'
  },
  {
    id:114, cat:'realestate', e:'🌐',
    title:'[서식 6] 외국인 부동산등 취득·계속보유 신고서',
    desc:'외국인 또는 외국법인이 대한민국 내 부동산을 취득하거나 계속 보유할 때 제출하는 신고서.',
    tags:['외국인부동산','취득신고','계속보유'],
    source:'국가법령정보센터',
    url: makeLawUrl('0006','00'),
    kw:'외국인 부동산등 취득 신고서 계속보유 서식6'
  },
  {
    id:115, cat:'realestate', e:'📜',
    title:'[서식 7] 외국인 부동산 취득·계속보유 신고확인증',
    desc:'외국인의 부동산 취득 또는 계속보유 신고 접수가 완료되었음을 확인하는 공식 확인증.',
    tags:['외국인확인증','취득확인','신고확인증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0007','00'),
    kw:'외국인 부동산 취득 신고확인증 서식7'
  },
  {
    id:116, cat:'realestate', e:'🛡️',
    title:'[서식 7의 2] 외국인 토지취득 허가신청서',
    desc:'군사시설보호구역, 문화재보호구역 등 외국인 토지취득 허가대상 구역 내 신청 서식.',
    tags:['외국인토지','허가신청','보호구역'],
    source:'국가법령정보센터',
    url: makeLawUrl('0007','02'),
    kw:'외국인 토지취득 허가신청서 서식7의2'
  },
  {
    id:117, cat:'realestate', e:'🎖️',
    title:'[서식 7의 3] 외국인 토지취득 허가증',
    desc:'외국인의 토지취득이 관할 관청으로부터 허가되었음을 증명하는 허가증 서식.',
    tags:['외국인허가증','토지허가','허가증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0007','03'),
    kw:'외국인 토지취득 허가증 서식7의3'
  },
  {
    id:118, cat:'realestate', e:'🗺️',
    title:'[서식 8] 토지거래계약허가구역 지정·해제 토지조서',
    desc:'토지거래허가구역 지정 또는 해제 대상 토지의 소재지, 지번, 지목, 면적 등을 기록하는 조서.',
    tags:['허가구역','토지조서','지정해제'],
    source:'국가법령정보센터',
    url: makeLawUrl('0008','00'),
    kw:'토지거래계약허가구역 토지조서 서식8'
  },
  {
    id:119, cat:'realestate', e:'🏛️',
    title:'[서식 9] 토지거래계약 허가 신청서',
    desc:'토지거래허가구역 내 토지 매매계약 체결 전 관할 시장·군수·구청장에게 허가를 신청하는 서식.',
    tags:['토지거래허가','허가신청','매매허가'],
    source:'국가법령정보센터',
    url: makeLawUrl('0009','00'),
    kw:'토지거래계약 허가 신청서 서식9'
  },
  {
    id:120, cat:'realestate', e:'💰',
    title:'[서식 10] 토지취득자금 조달계획서',
    desc:'토지거래허가구역 내 토지 취득 시 자기자금, 차입금 등 자금 조달 계획을 명시하는 서식.',
    tags:['토지자금','자금조달','계획서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0010','00'),
    kw:'토지취득자금 조달계획서 서식10'
  },
  {
    id:121, cat:'realestate', e:'🔄',
    title:'[서식 11] 토지거래계약 변경 허가 신청서',
    desc:'허가받은 토지거래계약 내용(이용목적, 면적 등)을 변경하려 할 때 제출하는 신청서.',
    tags:['변경허가','토지거래','계약변경'],
    source:'국가법령정보센터',
    url: makeLawUrl('0011','00'),
    kw:'토지거래계약 변경 허가 신청서 서식11'
  },
  {
    id:122, cat:'realestate', e:'📜',
    title:'[서식 12] 토지거래계약 허가증',
    desc:'토지거래계약 허가 신청에 대하여 관할 지자체가 허가했음을 증명하는 서식.',
    tags:['토지허가증','허가증','지자체허가'],
    source:'국가법령정보센터',
    url: makeLawUrl('0012','00'),
    kw:'토지거래계약 허가증 서식12'
  },
  {
    id:123, cat:'realestate', e:'⚠️',
    title:'[서식 13] 토지거래계약 불허가처분 통지서',
    desc:'토지거래계약 허가 신청에 대하여 불허가 처분이 결정되었음을 신청인에게 알리는 통지서.',
    tags:['불허가','통지서','불허가처분'],
    source:'국가법령정보센터',
    url: makeLawUrl('0013','00'),
    kw:'토지거래계약 불허가처분 통지서 서식13'
  },
  {
    id:124, cat:'realestate', e:'⚖️',
    title:'[서식 14] 이의신청서',
    desc:'토지거래계약 허가/불허가 처분 등에 불복하여 관할 지자체에 이의를 제기할 때 제출하는 서식.',
    tags:['이의신청','행정심판','처분이의'],
    source:'국가법령정보센터',
    url: makeLawUrl('0014','00'),
    kw:'이의신청서 서식14 토지거래 이의'
  },
  {
    id:125, cat:'realestate', e:'🤝',
    title:'[서식 15] 선매협의조서',
    desc:'공공기관 등이 허가구역 내 토지를 우선 매수하기 위해 당사자와 진행한 선매협의 결과를 기록하는 조서.',
    tags:['선매협의','공공매수','선매조서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0015','00'),
    kw:'선매협의조서 서식15'
  },
  {
    id:126, cat:'realestate', e:'📮',
    title:'[서식 16] 토지매수청구서',
    desc:'토지거래계약 불허가 처분을 받은 토지 소유자가 지자체에 해당 토지의 매수를 청구하는 서식.',
    tags:['토지매수','매수청구','불허가토지'],
    source:'국가법령정보센터',
    url: makeLawUrl('0016','00'),
    kw:'토지매수청구서 서식16'
  },
  {
    id:127, cat:'realestate', e:'🏗️',
    title:'[서식 17] 취득토지의 이용목적변경 승인신청서',
    desc:'허가받아 취득한 토지의 이용 목적을 당초 계획과 다르게 변경하고자 할 때 제출하는 승인신청서.',
    tags:['목적변경','이용계획','토지이용'],
    source:'국가법령정보센터',
    url: makeLawUrl('0017','00'),
    kw:'취득토지의 이용목적변경 승인신청서 서식17'
  },
  {
    id:128, cat:'realestate', e:'🚨',
    title:'[서식 17의 2] 위반행위 신고서',
    desc:'부동산 거래신고 및 토지거래허가 관련 법률 위반행위를 관할 관청에 신고하는 서식.',
    tags:['위반신고','거짓신고','불법거래'],
    source:'국가법령정보센터',
    url: makeLawUrl('0017','02'),
    kw:'위반행위 신고서 서식17의2'
  },
  {
    id:129, cat:'realestate', e:'🎁',
    title:'[서식 17의 3] 포상금 지급신청서',
    desc:'부동산 거래신고 위반행위 신고자에 대해 포상금 지급을 신청하는 서식.',
    tags:['포상금','신고포상금','지급신청'],
    source:'국가법령정보센터',
    url: makeLawUrl('0017','03'),
    kw:'포상금 지급신청서 서식17의3'
  },
  {
    id:130, cat:'realestate', e:'🕊️',
    title:'[서식 18] 자진신고서',
    desc:'부동산 거래 거짓신고 등 위반행위를 자진하여 신고함으로써 과태료 감면을 받는 서식.',
    tags:['자진신고','과태료감면','위반자진신고'],
    source:'국가법령정보센터',
    url: makeLawUrl('0018','00'),
    kw:'자진신고서 서식18'
  },

  // ─── 의료·복지 ───────────────────────────────────────────────
  {
    id:32, cat:'health', e:'💊',
    title:'건강보험료 경감 신청',
    desc:'저소득층·재난 피해자 건강보험료 감면 신청. 건강보험공단 홈페이지에서 신청.',
    tags:['건강보험','감면','저소득'],
    source:'국민건강보험공단',
    url:'https://www.nhis.or.kr/nhis/minwon/retrieveMinwonFrmList.do',
    kw:'건강보험료 경감 신청서 감면 저소득'
  },
  {
    id:33, cat:'health', e:'🏥',
    title:'의료급여 신청',
    desc:'기초생활수급자 등 의료비 지원 신청. 복지로 사이트에서 온라인 신청 가능.',
    tags:['의료급여','기초생활','수급'],
    source:'복지로',
    url:'https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/retrieveMkclAsisInfo.do?menuNo=10003',
    kw:'의료급여 신청서 기초생활 수급 의료비'
  },
  {
    id:34, cat:'health', e:'♿',
    title:'장애인 등록 신청',
    desc:'장애인 복지서비스 수혜를 위한 장애등급 판정 신청. 복지로에서 온라인 신청.',
    tags:['장애인','장애등록','복지'],
    source:'복지로',
    url:'https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/retrieveMkclAsisInfo.do?menuNo=10001',
    kw:'장애인등록 신청서 장애 복지 장애등급'
  },
  {
    id:35, cat:'health', e:'👴',
    title:'노인장기요양보험 신청',
    desc:'치매·뇌졸중 등 노인성 질환 요양 지원 신청. 건강보험공단에서 방문·온라인 신청.',
    tags:['장기요양','노인','요양원'],
    source:'국민건강보험공단',
    url:'https://www.nhis.or.kr/nhis/minwon/wbhacs04400m01.do',
    kw:'장기요양보험 신청서 노인 요양 치매'
  },
  {
    id:36, cat:'health', e:'💉',
    title:'국가건강검진 신청',
    desc:'국가 건강검진 대상자 확인 및 수검 신청. 건강보험공단에서 수검 기관 조회 및 예약.',
    tags:['건강검진','국가검진','건강'],
    source:'국민건강보험공단',
    url:'https://www.nhis.or.kr/nhis/healthin/wbhaia01900m01.do',
    kw:'건강검진 신청서 국가검진 건강 진단'
  },
  {
    id:37, cat:'health', e:'🍼',
    title:'아동수당 신청',
    desc:'만 8세 미만 아동 월 10만원 아동수당 신청. 복지로 또는 행정복지센터에서 신청.',
    tags:['아동수당','육아','복지'],
    source:'복지로',
    url:'https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/retrieveMkclAsisInfo.do?menuNo=10005',
    kw:'아동수당 신청서 아이 육아 자녀 아동'
  },
  {
    id:38, cat:'health', e:'🤱',
    title:'출산전후 급여 신청',
    desc:'출산 전후 90일간 지급되는 출산전후휴가급여 신청. 고용보험 사이트에서 신청.',
    tags:['출산급여','출산지원금','출산'],
    source:'고용보험',
    url:'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0302Info.do',
    kw:'출산급여 신청서 출산지원 출산 아기'
  },

  // ─── 법률·계약 ───────────────────────────────────────────────
  {
    id:39, cat:'legal', e:'⚖️',
    title:'위임장·각종 법원 서식',
    desc:'위임장, 소장, 각종 법원 서식 모음. 대법원 나홀로소송 서비스에서 다운로드.',
    tags:['위임장','대리','법원서식'],
    source:'대법원 나홀로소송',
    url:'https://pro-se.scourt.go.kr/wsh/WshDsm0100.do',
    kw:'위임장 대리 법률 위임 법원서식'
  },
  {
    id:40, cat:'legal', e:'✉️',
    title:'내용증명 발송',
    desc:'법적 분쟁 전 상대방에게 의사를 공식 전달하는 내용증명 우편 발송 서비스.',
    tags:['내용증명','우편','법적증명'],
    source:'우체국 인터넷우체국',
    url:'https://service.epost.go.kr/iservice/usr/cmm/login/EgovLoginForwardAction.do',
    kw:'내용증명 우편 법적 분쟁 통지'
  },
  {
    id:41, cat:'legal', e:'💸',
    title:'차용증·금전대차 서식',
    desc:'개인 간 금전 대여 시 작성하는 차용증 양식. 대법원 나홀로소송에서 다운로드.',
    tags:['차용증','대여금','계약서'],
    source:'대법원 나홀로소송',
    url:'https://pro-se.scourt.go.kr/wsh/WshDsm0100.do',
    kw:'차용증 금전 대여 빌려주기 계약서'
  },
  {
    id:42, cat:'legal', e:'🤝',
    title:'합의서·각종 계약서 서식',
    desc:'민사 분쟁·사고 처리 합의서 및 각종 계약서 양식. 대법원 나홀로소송 서비스 제공.',
    tags:['합의서','분쟁해결','계약'],
    source:'대법원 나홀로소송',
    url:'https://pro-se.scourt.go.kr/wsh/WshDsm0100.do',
    kw:'합의서 분쟁 해결 합의 계약'
  },
  {
    id:43, cat:'legal', e:'📄',
    title:'무료 법률 서식 및 상담',
    desc:'대한법률구조공단 무료 법률 서식 자료 및 법률 상담 서비스. 고소장 등 서식 제공.',
    tags:['법률구조','무료상담','고소장'],
    source:'대한법률구조공단',
    url:'https://www.klac.or.kr/legalinfo/formSample.do',
    kw:'고소장 형사 고소 경찰 접수 무료법률'
  },
  {
    id:44, cat:'legal', e:'🏛️',
    title:'지급명령 신청 (전자소송)',
    desc:'소송 없이 법원을 통해 채무 변제를 요구하는 간이 절차. 대법원 전자소송에서 온라인 신청.',
    tags:['지급명령','법원','채무'],
    source:'대법원 전자소송',
    url:'https://ecfs.scourt.go.kr/ecf/ecfMain/initCmnCrtInfoPage.do',
    kw:'지급명령 신청서 법원 채무 빚'
  },
  {
    id:45, cat:'legal', e:'🏠',
    title:'임차권 등기명령 신청',
    desc:'보증금 미반환 시 임차권 등기명령 신청. 대법원 전자소송에서 온라인 신청 가능.',
    tags:['임차권등기','보증금','전세사기'],
    source:'대법원 전자소송',
    url:'https://ecfs.scourt.go.kr/ecf/ecfMain/initCmnCrtInfoPage.do',
    kw:'임차권등기명령 보증금 미반환 전세사기'
  },

  // ─── 교육·자격 ───────────────────────────────────────────────
  {
    id:46, cat:'edu', e:'🎓',
    title:'졸업증명서 발급',
    desc:'학교 졸업 사실 증명서. 정부24에서 온라인 즉시 발급 가능 (유치원~대학교).',
    tags:['졸업증명','학력','취업'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01006&CappBizCD=13100000025',
    kw:'졸업증명서 학력 졸업 취업 학교'
  },
  {
    id:47, cat:'edu', e:'📊',
    title:'성적증명서 발급',
    desc:'학교 성적 이수 내역 공식 증명서. 정부24에서 온라인 발급.',
    tags:['성적증명','학교','학력'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01006&CappBizCD=13100000026',
    kw:'성적증명서 성적 학력 학교 이수'
  },
  {
    id:48, cat:'edu', e:'🏫',
    title:'재학증명서 발급',
    desc:'현재 재학 중인 학교 및 학년 증명서. 정부24에서 온라인 발급.',
    tags:['재학증명','학생','재학'],
    source:'정부24',
    url:'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01006&CappBizCD=13100000027',
    kw:'재학증명서 학생 재학 학교 학년'
  },
  {
    id:49, cat:'edu', e:'🎯',
    title:'국가기술자격 시험 접수',
    desc:'산업기사·기사·기능사 등 국가기술자격 응시 신청. 한국산업인력공단 큐넷에서 접수.',
    tags:['자격증','국가기술','시험'],
    source:'한국산업인력공단 큐넷',
    url:'https://www.q-net.or.kr/cst001.do?id=cst00102',
    kw:'자격증 국가기술자격 큐넷 시험 신청'
  },
  {
    id:50, cat:'edu', e:'📚',
    title:'국가장학금 신청',
    desc:'대학생 소득연계형 국가장학금 신청. 한국장학재단에서 학기별 신청 기간에 온라인 신청.',
    tags:['장학금','대학','교육비'],
    source:'한국장학재단',
    url:'https://www.kosaf.go.kr/ko/scholar.do?pg=foundation01_01',
    kw:'장학금 신청서 국가장학금 대학 교육비'
  },
  {
    id:51, cat:'edu', e:'🌐',
    title:'TOEIC 성적표 발급',
    desc:'TOEIC 공인어학시험 성적 증명서 온라인 발급. 와이비엠 사이트에서 즉시 발급.',
    tags:['TOEIC','영어','성적표'],
    source:'YBM 토익위원회',
    url:'https://www.toeic.co.kr/toeic_result.asp',
    kw:'어학 TOEIC 영어 성적표 토익 발급'
  },

  // ─── 사업·창업 ───────────────────────────────────────────────
  {
    id:52, cat:'business', e:'🚀',
    title:'창업지원사업 신청',
    desc:'중소벤처기업부 청년·일반 창업지원사업 공고 및 온라인 신청. K-스타트업 포털.',
    tags:['창업지원','청년창업','스타트업'],
    source:'K-스타트업 (중기부)',
    url:'https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schMenuId=00149',
    kw:'창업지원 신청서 창업 스타트업 청년'
  },
  {
    id:53, cat:'business', e:'📊',
    title:'창업 사업계획서 양식',
    desc:'창업진흥원 사업계획서 공식 양식 파일 다운로드. HWP/DOCX 형식 제공.',
    tags:['사업계획서','투자','지원신청'],
    source:'창업진흥원',
    url:'https://www.kised.or.kr/board.es?mid=a10201000000&bid=0003',
    kw:'사업계획서 투자 지원 창업'
  },
  {
    id:54, cat:'business', e:'📋',
    title:'법인 설립 등기 신청',
    desc:'주식회사·유한회사 등 법인 설립 등기 신청. 대법원 인터넷등기소에서 온라인 신청.',
    tags:['법인설립','주식회사','등기'],
    source:'대법원 인터넷등기소',
    url:'https://www.iros.go.kr/PMainJ.jsp',
    kw:'법인설립 주식회사 유한회사 등기 설립'
  },
  {
    id:55, cat:'business', e:'💼',
    title:'소상공인 정책자금 신청',
    desc:'소상공인시장진흥공단 융자·지원사업 신청. 온라인 신청 또는 지역센터 방문.',
    tags:['소상공인','융자','지원'],
    source:'소상공인시장진흥공단',
    url:'https://www.semas.or.kr/web/main/index.kmdc',
    kw:'소상공인 지원 신청서 융자 자영업'
  },
  {
    id:56, cat:'business', e:'🤝',
    title:'표준 용역·납품 계약서',
    desc:'프리랜서·외주 용역 및 납품 계약 시 활용하는 표준 계약서. 대법원 나홀로소송 다운로드.',
    tags:['용역계약서','프리랜서','외주'],
    source:'대법원 나홀로소송',
    url:'https://pro-se.scourt.go.kr/wsh/WshDsm0100.do',
    kw:'용역계약서 프리랜서 외주 계약 납품'
  },
];

// ── State ─────────────────────────────────────────
let currentCat = 'all';
let query = '';

// ── Filter ────────────────────────────────────────
function getFiltered() {
  return DOCS.filter(d => {
    const catOk = currentCat === 'all' || d.cat === currentCat;
    const q = query.toLowerCase();
    const textOk = !q ||
      d.title.toLowerCase().includes(q) ||
      d.desc.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q)) ||
      d.source.toLowerCase().includes(q) ||
      d.kw.toLowerCase().includes(q);
    return catOk && textOk;
  });
}

// ── Render ────────────────────────────────────────
function render() {
  const filtered = getFiltered();
  const grid = document.getElementById('grid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('resultCount');
  const labelEl = document.getElementById('resultLabel');

  countEl.textContent = `${filtered.length}개`;
  labelEl.textContent = query
    ? `"${query}" 검색 결과`
    : (currentCat === 'all' ? '전체 서식' : CATS[currentCat]);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = filtered.map((d, i) => `
    <article class="card c-${d.cat}"
             style="animation-delay:${Math.min(i * 0.035, 0.5)}s"
             onclick="window.open('${d.url}','_blank','noopener noreferrer')">
      <div class="card-head">
        <div class="card-emoji">${d.e}</div>
        <div class="card-info">
          <div class="card-cat">${CATS[d.cat]}</div>
          <div class="card-title">${d.title}</div>
        </div>
      </div>
      <p class="card-desc">${d.desc}</p>
      <div class="card-tags">
        ${d.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="card-foot">
        <div class="card-source-tag">
          <span class="card-source-dot"></span>
          <span>${d.source}</span>
        </div>
        <a class="card-cta"
           href="${d.url}" target="_blank" rel="noopener noreferrer"
           onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          <span>바로가기</span>
        </a>
      </div>
    </article>
  `).join('');
}

// ── Init ──────────────────────────────────────────
function init() {
  document.getElementById('totalCount').textContent = DOCS.length;

  // Category pills
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      render();
    });
  });

  // Search
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');

  input.addEventListener('input', e => {
    query = e.target.value.trim();
    clear.classList.toggle('visible', !!query);
    render();
  });

  clear.addEventListener('click', () => {
    input.value = '';
    query = '';
    clear.classList.remove('visible');
    input.focus();
    render();
  });

  // Sticky nav shadow on scroll
  const nav = document.getElementById('catNav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,0,0,0.5)'
      : 'none';
  }, { passive: true });

  render();
}

document.addEventListener('DOMContentLoaded', init);
