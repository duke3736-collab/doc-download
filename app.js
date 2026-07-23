// ====================================================
//  서식 자료실 — 2025 Edition
//  보안 세션 차단 우회를 위한 공식 포털/통합검색 연결 적용
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
    title:'주민등록등본 발급',
    desc:'정부24 통합검색 결과로 바로 연결되어 가장 빠르고 확실하게 발급 페이지로 이동합니다.',
    tags:['거주증명','정부24','온라인발급'],
    source:'정부24 통합검색',
    url:'https://www.gov.kr/search/srh/srhMain.do?query=%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%93%B1%EB%B3%B8',
    kw:'주민등록등본 거주 주소 증명 발급 정부24'
  },
  {
    id:2, cat:'admin', e:'📄',
    title:'주민등록초본 발급',
    desc:'정부24 통합검색 결과로 바로 연결되어 안정적인 발급 신청이 가능합니다.',
    tags:['주소이력','정부24'],
    source:'정부24 통합검색',
    url:'https://www.gov.kr/search/srh/srhMain.do?query=%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EC%B4%88%EB%B3%B8',
    kw:'주민등록초본 주소 이력 이동 발급'
  },
  {
    id:3, cat:'admin', e:'👨‍👩‍👧',
    title:'가족관계증명서',
    desc:'대법원 전자가족관계등록시스템 메인으로 연결. [증명서 발급] 메뉴를 이용하세요.',
    tags:['가족','혼인','출생'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/',
    kw:'가족관계증명서 부모 배우자 자녀 혼인 발급'
  },
  {
    id:4, cat:'admin', e:'📋',
    title:'기본증명서',
    desc:'개인의 신분 기본 사항 증명. 대법원 전자가족관계시스템 메인 [증명서 발급] 이용.',
    tags:['신분증명','출생','사망'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/',
    kw:'기본증명서 출생 신분 사망 발급'
  },
  {
    id:5, cat:'admin', e:'🔏',
    title:'인감증명서 신청 안내',
    desc:'정부24 통합검색으로 연결. 관련 발급 및 신청 안내를 바로 확인할 수 있습니다.',
    tags:['인감','부동산','금융거래'],
    source:'정부24 통합검색',
    url:'https://www.gov.kr/search/srh/srhMain.do?query=%EC%9D%B8%EA%B0%90%EC%A6%9D%EB%AA%85%EC%84%9C',
    kw:'인감증명서 인감 도장 부동산 금융'
  },
  {
    id:6, cat:'admin', e:'👶',
    title:'출생신고 / 혼인신고 안내',
    desc:'대법원 전자가족관계등록시스템 메인의 [인터넷 신고] 메뉴에서 서식 다운로드 및 신고 가능.',
    tags:['신생아','가족관계','신고'],
    source:'대법원 전자가족관계등록',
    url:'https://efamily.scourt.go.kr/',
    kw:'출생신고서 신생아 아기 혼인신고'
  },
  {
    id:8, cat:'admin', e:'🏢',
    title:'전입신고',
    desc:'정부24 통합검색 결과로 연결. 전입신고 및 관련 온라인 신청 메뉴를 바로 이용하세요.',
    tags:['이사','전입','주소변경'],
    source:'정부24 통합검색',
    url:'https://www.gov.kr/search/srh/srhMain.do?query=%EC%A0%84%EC%9E%85%EC%8B%A0%EA%B3%A0',
    kw:'전입신고서 이사 주소변경 이사신고'
  },
  {
    id:9, cat:'admin', e:'🔑',
    title:'운전면허 재발급 신청',
    desc:'안전운전 통합민원 메인으로 연결. [운전면허 발급] 메뉴에서 재발급 신청 진행.',
    tags:['운전면허','재발급','분실'],
    source:'안전운전 통합민원',
    url:'https://www.safedriving.or.kr/main.do',
    kw:'운전면허 재발급 분실 훼손 면허증'
  },
  {
    id:10, cat:'admin', e:'📑',
    title:'건축물대장 발급',
    desc:'정부24 통합검색 결과로 연결. 건축물대장 열람 및 발급 메뉴를 바로 이용 가능.',
    tags:['건축물대장','건물정보','온라인발급'],
    source:'정부24 통합검색',
    url:'https://www.gov.kr/search/srh/srhMain.do?query=%EA%B1%B4%EC%B6%95%EB%AC%BC%EB%8C%80%EC%9E%A5',
    kw:'건축물대장 건물 구조 용도 면적'
  },

  // ─── 근로·취업 ───────────────────────────────────────────────
  {
    id:11, cat:'labor', e:'📝',
    title:'표준근로계약서 / 단시간 근로계약서',
    desc:'고용노동부 공식 서식자료실. 다양한 형태의 표준근로계약서 HWP/PDF 파일 직접 다운로드 가능.',
    tags:['근로계약','취업','고용'],
    source:'고용노동부 (정상링크)',
    url:'https://www.moel.go.kr/info/labor/laborContractStandard.do',
    kw:'근로계약서 표준 고용 취업 알바 단시간 아르바이트'
  },
  {
    id:13, cat:'labor', e:'💰',
    title:'퇴직급여 / 산재 요양급여 신청',
    desc:'근로복지공단 메인으로 연결. 퇴직연금 및 산재보험 관련 각종 서식/신청 메뉴 이용.',
    tags:['퇴직금','산재','급여청구'],
    source:'근로복지공단',
    url:'https://www.comwel.or.kr/comwel/main.jsp',
    kw:'퇴직금 신청서 퇴직 퇴사 임금 산재 요양급여'
  },
  {
    id:14, cat:'labor', e:'📊',
    title:'실업급여 / 육아휴직 / 출산전후 급여 신청',
    desc:'고용보험 공식 포털 메인으로 연결. 인증 후 관련 급여 신청 메뉴를 원활히 이용하세요.',
    tags:['실업급여','구직','육아휴직'],
    source:'고용보험',
    url:'https://www.ei.go.kr/ei/eih/cm/hm/main.do',
    kw:'실업급여 구직급여 실직 고용보험 육아휴직 출산급여'
  },

  // ─── 세금·금융 ───────────────────────────────────────────────
  {
    id:19, cat:'tax', e:'🧾',
    title:'종합소득세 / 부가가치세 신고 (홈택스)',
    desc:'국세청 홈택스 메인 연결. 보안 정책상 메인에서 로그인 후 [신고/납부] 메뉴를 이용하셔야 합니다.',
    tags:['소득세','부가세','홈택스'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/',
    kw:'종합소득세 부가가치세 세금 홈택스 신고서'
  },
  {
    id:20, cat:'tax', e:'🏪',
    title:'사업자등록 신청 / 정정 (홈택스)',
    desc:'국세청 홈택스 연결. [국세증명·사업자등록·세금관련 신청] 메뉴를 통해 간편 신청 가능.',
    tags:['사업자등록','창업','개업'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/',
    kw:'사업자등록 신청서 창업 개업 사업자 홈택스'
  },
  {
    id:22, cat:'tax', e:'📃',
    title:'소득확인증명 / 원천징수영수증 발급',
    desc:'홈택스 메인 연결. 로그인 후 [민원증명] 메뉴에서 소득 및 원천징수 내역을 100% 정상 발급.',
    tags:['원천징수','소득증명','급여증명'],
    source:'국세청 홈택스',
    url:'https://www.hometax.go.kr/',
    kw:'원천징수영수증 연말정산 소득증명 소득확인증명서'
  },
  {
    id:24, cat:'tax', e:'🏦',
    title:'금융상품 비교 / 금융거래 정보',
    desc:'금융감독원 금융상품한눈에 공식 사이트 정상 작동. 은행별 금리/수수료 즉시 비교.',
    tags:['금융','은행','금리비교'],
    source:'금융감독원 금융상품한눈에',
    url:'https://finlife.fss.or.kr/main/main.do',
    kw:'금융상품 은행 금리 수수료 비교'
  },

  // ─── 부동산 (국가법령정보센터 부동산 거래신고 법률 시행규칙 서식 전체) ──────
  {
    id:101, cat:'realestate', e:'📝',
    title:'부동산거래계약 신고서',
    desc:'부동산 매매계약 체결 후 30일 이내 관할 지자체에 제출하는 부동산거래계약 신고서 공식 서식.',
    tags:['부동산거래','매매신고','법정서식'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','00'),
    kw:'부동산거래계약 신고서 서식1 매매 신고 법정'
  },
  {
    id:102, cat:'realestate', e:'🏢',
    title:'법인 주택 거래계약 신고서',
    desc:'법인이 주택을 거래(매수/매도)할 때 법인 현황, 임원 관계 및 취득목적 등을 작성하는 신고서.',
    tags:['법인주택','법인거래','주택신고'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','02'),
    kw:'법인 주택 거래계약 신고서 서식1의2 법인'
  },
  {
    id:103, cat:'realestate', e:'💵',
    title:'주택취득자금 조달 및 입주계획서',
    desc:'주택 취득 시 자기자금, 차입금 등 자금 조달 출처 및 입주 여부/시기를 작성하는 서식.',
    tags:['자금조달','입주계획','주택취득'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','03'),
    kw:'주택취득자금 조달 및 입주계획서 서식1의3 자금조달계획서'
  },
  {
    id:104, cat:'realestate', e:'🏞️',
    title:'토지취득자금 조달 및 토지이용계획서',
    desc:'토지 거래 허가/신고 구역 내 토지 취득 시 자금 출처 및 토지 이용 계획을 명시하는 서식.',
    tags:['토지자금','토지이용','자금조달'],
    source:'국가법령정보센터',
    url: makeLawUrl('0001','04'),
    kw:'토지취득자금 조달 및 토지이용계획서 서식1의4 토지'
  },
  {
    id:105, cat:'realestate', e:'📜',
    title:'부동산거래계약 신고필증',
    desc:'부동산 거래계약 신고가 완료되었음을 지자체장이 확인 및 증명하는 공식 신고필증.',
    tags:['신고필증','부동산거래','확인증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0002','00'),
    kw:'부동산거래계약 신고필증 서식2'
  },
  {
    id:106, cat:'realestate', e:'🔄',
    title:'부동산거래계약 변경 신고서',
    desc:'거래가격, 면적, 잔금지급일 등 거래계약 신고 내용에 변경이 발생한 경우 제출하는 신고서.',
    tags:['변경신고','부동산거래','가격변경'],
    source:'국가법령정보센터',
    url: makeLawUrl('0003','00'),
    kw:'부동산거래계약 변경 신고서 서식3'
  },
  {
    id:107, cat:'realestate', e:'❌',
    title:'부동산거래계약 해제등 신고서',
    desc:'부동산 거래계약이 무효, 취소 또는 해제된 경우 해제 확정일로부터 30일 이내 제출.',
    tags:['해제신고','계약해제','취소신고'],
    source:'국가법령정보센터',
    url: makeLawUrl('0004','00'),
    kw:'부동산거래계약 해제등 신고서 서식4'
  },
  {
    id:108, cat:'realestate', e:'✅',
    title:'부동산거래계약 해제등 확인서',
    desc:'거래계약의 해제 등이 정상적으로 등록/신고 완료되었음을 확인하는 공식 서식.',
    tags:['해제확인서','부동산거래','확인서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','00'),
    kw:'부동산거래계약 해제등 확인서 서식5'
  },
  {
    id:109, cat:'realestate', e:'🏠',
    title:'주택 임대차 계약 신고서',
    desc:'보증금 6천만원 초과 또는 월세 30만원 초과 주택 임대차 계약 체결 시 제출하는 전월세 신고서.',
    tags:['주택임대차','전월세신고','임대차계약'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','02'),
    kw:'주택 임대차 계약 신고서 서식5의2 전월세신고'
  },
  {
    id:110, cat:'realestate', e:'📑',
    title:'주택 임대차 계약 신고필증',
    desc:'주택 임대차 계약 신고가 정상 접수 완료되었음을 확인하는 신고필증 서식.',
    tags:['임대차신고필증','전월세확인','신고필증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','03'),
    kw:'주택 임대차 계약 신고필증 서식5의3'
  },
  {
    id:111, cat:'realestate', e:'✏️',
    title:'주택 임대차 계약 변경 신고서',
    desc:'임대차 보증금, 차임(월세), 임대기간 등 계약 변경 사항이 있을 때 제출하는 신고서.',
    tags:['임대차변경','보증금변경','월세변경'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','04'),
    kw:'주택 임대차 계약 변경 신고서 서식5의4'
  },
  {
    id:112, cat:'realestate', e:'🚫',
    title:'주택 임대차 계약 해제 신고서',
    desc:'임대차 계약이 기간 만료 전 해제/취소된 경우 제출하는 해제 신고서.',
    tags:['임대차해제','전월세해제','계약해제'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','05'),
    kw:'주택 임대차 계약 해제 신고서 서식5의5'
  },
  {
    id:113, cat:'realestate', e:'📋',
    title:'주택 임대차 계약 해제 확인서',
    desc:'주택 임대차 계약 해제 신고가 등록되었음을 증명하는 공식 확인서.',
    tags:['임대차해제확인','해제확인서','확인서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0005','06'),
    kw:'주택 임대차 계약 해제 확인서 서식5의6'
  },
  {
    id:114, cat:'realestate', e:'🌐',
    title:'외국인 부동산등 취득·계속보유 신고서',
    desc:'외국인 또는 외국법인이 대한민국 내 부동산을 취득하거나 계속 보유할 때 제출하는 신고서.',
    tags:['외국인부동산','취득신고','계속보유'],
    source:'국가법령정보센터',
    url: makeLawUrl('0006','00'),
    kw:'외국인 부동산등 취득 신고서 계속보유 서식6'
  },
  {
    id:115, cat:'realestate', e:'📜',
    title:'외국인 부동산 취득·계속보유 신고확인증',
    desc:'외국인의 부동산 취득 또는 계속보유 신고 접수가 완료되었음을 확인하는 공식 확인증.',
    tags:['외국인확인증','취득확인','신고확인증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0007','00'),
    kw:'외국인 부동산 취득 신고확인증 서식7'
  },
  {
    id:116, cat:'realestate', e:'🛡️',
    title:'외국인 토지취득 허가신청서',
    desc:'군사시설보호구역, 문화재보호구역 등 외국인 토지취득 허가대상 구역 내 신청 서식.',
    tags:['외국인토지','허가신청','보호구역'],
    source:'국가법령정보센터',
    url: makeLawUrl('0007','02'),
    kw:'외국인 토지취득 허가신청서 서식7의2'
  },
  {
    id:117, cat:'realestate', e:'🎖️',
    title:'외국인 토지취득 허가증',
    desc:'외국인의 토지취득이 관할 관청으로부터 허가되었음을 증명하는 허가증 서식.',
    tags:['외국인허가증','토지허가','허가증'],
    source:'국가법령정보센터',
    url: makeLawUrl('0007','03'),
    kw:'외국인 토지취득 허가증 서식7의3'
  },
  {
    id:118, cat:'realestate', e:'🗺️',
    title:'토지거래계약허가구역 지정·해제 토지조서',
    desc:'토지거래허가구역 지정 또는 해제 대상 토지의 소재지, 지번, 지목, 면적 등을 기록하는 조서.',
    tags:['허가구역','토지조서','지정해제'],
    source:'국가법령정보센터',
    url: makeLawUrl('0008','00'),
    kw:'토지거래계약허가구역 토지조서 서식8'
  },
  {
    id:119, cat:'realestate', e:'🏛️',
    title:'토지거래계약 허가 신청서',
    desc:'토지거래허가구역 내 토지 매매계약 체결 전 관할 시장·군수·구청장에게 허가를 신청하는 서식.',
    tags:['토지거래허가','허가신청','매매허가'],
    source:'국가법령정보센터',
    url: makeLawUrl('0009','00'),
    kw:'토지거래계약 허가 신청서 서식9'
  },
  {
    id:120, cat:'realestate', e:'💰',
    title:'토지취득자금 조달계획서',
    desc:'토지거래허가구역 내 토지 취득 시 자기자금, 차입금 등 자금 조달 계획을 명시하는 서식.',
    tags:['토지자금','자금조달','계획서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0010','00'),
    kw:'토지취득자금 조달계획서 서식10'
  },
  {
    id:121, cat:'realestate', e:'🔄',
    title:'토지거래계약 변경 허가 신청서',
    desc:'허가받은 토지거래계약 내용(이용목적, 면적 등)을 변경하려 할 때 제출하는 신청서.',
    tags:['변경허가','토지거래','계약변경'],
    source:'국가법령정보센터',
    url: makeLawUrl('0011','00'),
    kw:'토지거래계약 변경 허가 신청서 서식11'
  },
  {
    id:122, cat:'realestate', e:'📜',
    title:'토지거래계약 허가증',
    desc:'토지거래계약 허가 신청에 대하여 관할 지자체가 허가했음을 증명하는 서식.',
    tags:['토지허가증','허가증','지자체허가'],
    source:'국가법령정보센터',
    url: makeLawUrl('0012','00'),
    kw:'토지거래계약 허가증 서식12'
  },
  {
    id:123, cat:'realestate', e:'⚠️',
    title:'토지거래계약 불허가처분 통지서',
    desc:'토지거래계약 허가 신청에 대하여 불허가 처분이 결정되었음을 신청인에게 알리는 통지서.',
    tags:['불허가','통지서','불허가처분'],
    source:'국가법령정보센터',
    url: makeLawUrl('0013','00'),
    kw:'토지거래계약 불허가처분 통지서 서식13'
  },
  {
    id:124, cat:'realestate', e:'⚖️',
    title:'이의신청서',
    desc:'토지거래계약 허가/불허가 처분 등에 불복하여 관할 지자체에 이의를 제기할 때 제출하는 서식.',
    tags:['이의신청','행정심판','처분이의'],
    source:'국가법령정보센터',
    url: makeLawUrl('0014','00'),
    kw:'이의신청서 서식14 토지거래 이의'
  },
  {
    id:125, cat:'realestate', e:'🤝',
    title:'선매협의조서',
    desc:'공공기관 등이 허가구역 내 토지를 우선 매수하기 위해 당사자와 진행한 선매협의 결과를 기록하는 조서.',
    tags:['선매협의','공공매수','선매조서'],
    source:'국가법령정보센터',
    url: makeLawUrl('0015','00'),
    kw:'선매협의조서 서식15'
  },
  {
    id:126, cat:'realestate', e:'📮',
    title:'토지매수청구서',
    desc:'토지거래계약 불허가 처분을 받은 토지 소유자가 지자체에 해당 토지의 매수를 청구하는 서식.',
    tags:['토지매수','매수청구','불허가토지'],
    source:'국가법령정보센터',
    url: makeLawUrl('0016','00'),
    kw:'토지매수청구서 서식16'
  },
  {
    id:127, cat:'realestate', e:'🏗️',
    title:'취득토지의 이용목적변경 승인신청서',
    desc:'허가받아 취득한 토지의 이용 목적을 당초 계획과 다르게 변경하고자 할 때 제출하는 승인신청서.',
    tags:['목적변경','이용계획','토지이용'],
    source:'국가법령정보센터',
    url: makeLawUrl('0017','00'),
    kw:'취득토지의 이용목적변경 승인신청서 서식17'
  },
  {
    id:128, cat:'realestate', e:'🚨',
    title:'위반행위 신고서',
    desc:'부동산 거래신고 및 토지거래허가 관련 법률 위반행위를 관할 관청에 신고하는 서식.',
    tags:['위반신고','거짓신고','불법거래'],
    source:'국가법령정보센터',
    url: makeLawUrl('0017','02'),
    kw:'위반행위 신고서 서식17의2'
  },
  {
    id:129, cat:'realestate', e:'🎁',
    title:'포상금 지급신청서',
    desc:'부동산 거래신고 위반행위 신고자에 대해 포상금 지급을 신청하는 서식.',
    tags:['포상금','신고포상금','지급신청'],
    source:'국가법령정보센터',
    url: makeLawUrl('0017','03'),
    kw:'포상금 지급신청서 서식17의3'
  },
  {
    id:130, cat:'realestate', e:'🕊️',
    title:'자진신고서',
    desc:'부동산 거래 거짓신고 등 위반행위를 자진하여 신고함으로써 과태료 감면을 받는 서식.',
    tags:['자진신고','과태료감면','위반자진신고'],
    source:'국가법령정보센터',
    url: makeLawUrl('0018','00'),
    kw:'자진신고서 서식18'
  },

  // ─── 의료·복지 ───────────────────────────────────────────────
  {
    id:32, cat:'health', e:'💊',
    title:'건강보험 / 요양보험 / 건강검진 서식 안내',
    desc:'국민건강보험공단 메인 포털. 보안 정책상 [민원요기요 > 서식자료실]에서 신청 서식을 직접 다운받으세요.',
    tags:['건강보험','건강검진','장기요양'],
    source:'국민건강보험공단',
    url:'https://www.nhis.or.kr/',
    kw:'건강보험료 경감 신청서 노인 요양 장기요양 건강검진 국가검진'
  },
  {
    id:33, cat:'health', e:'🏥',
    title:'의료급여 / 장애인등록 / 아동수당 복지 신청',
    desc:'복지로 공식 포털 메인. 메인 화면의 통합검색 또는 [서비스 신청] 메뉴를 이용하여 안정적으로 신청하세요.',
    tags:['복지로','복지신청','의료급여'],
    source:'복지로',
    url:'https://www.bokjiro.go.kr/',
    kw:'의료급여 신청서 기초생활 수급 장애인 장애등록 아동수당 육아'
  },

  // ─── 법률·계약 ───────────────────────────────────────────────
  {
    id:39, cat:'legal', e:'⚖️',
    title:'위임장·각종 법원 양식모음',
    desc:'위임장, 소장, 신청서 등 대법원 대민서비스 공식 법원 양식모음. 100% 정상 작동합니다.',
    tags:['위임장','대리','법원양식'],
    source:'대법원 대민서비스',
    url:'https://help.scourt.go.kr/nm/minwon/doc/DocListAction.work',
    kw:'위임장 대리 법률 위임 법원서식 양식'
  },
  {
    id:40, cat:'legal', e:'✉️',
    title:'내용증명 발송 서비스',
    desc:'법적 분쟁 전 상대방에게 의사를 공식 전달하는 인터넷우체국 내용증명 발송.',
    tags:['내용증명','우편','법적증명'],
    source:'인터넷우체국',
    url:'https://www.epost.go.kr/',
    kw:'내용증명 우편 법적 분쟁 통지 우체국'
  },
  {
    id:41, cat:'legal', e:'💸',
    title:'차용증·금전대차 서식',
    desc:'개인 간 금전 대여 시 작성하는 차용증 및 계약 양식 (법무부 찾기쉬운 생활법령).',
    tags:['차용증','대여금','계약서'],
    source:'찾기쉬운 생활법령정보',
    url:'https://www.easylaw.go.kr/CSP/CspRttList.laf',
    kw:'차용증 금전 대여 빌려주기 계약서 생활법령'
  },
  {
    id:42, cat:'legal', e:'🤝',
    title:'합의서·각종 서식모음',
    desc:'민사 분쟁·사고 처리 합의서 및 각종 계약서 서식 (대한법률구조공단 서식자료실).',
    tags:['합의서','분쟁해결','계약서'],
    source:'대한법률구조공단',
    url:'https://www.klac.or.kr/legalinfo/formSample.do',
    kw:'합의서 분쟁 해결 합의 계약 법률구조공단'
  },
  {
    id:43, cat:'legal', e:'📄',
    title:'고소장·무료 법률 서식자료실',
    desc:'대한법률구조공단 무료 법률 서식 자료실. 고소장, 답변서, 탄원서 등 서식 제공.',
    tags:['법률구조','무료상담','고소장'],
    source:'대한법률구조공단',
    url:'https://www.klac.or.kr/legalinfo/formSample.do',
    kw:'고소장 형사 고소 경찰 접수 무료법률 답변서'
  },
  {
    id:44, cat:'legal', e:'🏛️',
    title:'전자소송 (지급명령, 임차권 등기명령)',
    desc:'법원을 통해 채무 변제 요구, 임차권 등기 등 전자소송 관련 신청은 대법원 전자소송 메인에서 진행합니다.',
    tags:['지급명령','임차권등기','전자소송'],
    source:'대법원 전자소송',
    url:'https://ecfs.scourt.go.kr/',
    kw:'지급명령 임차권등기명령 전세사기 전자소송 빚'
  },

  // ─── 교육·자격 ───────────────────────────────────────────────
  {
    id:46, cat:'edu', e:'🎓',
    title:'졸업증명서 / 성적증명서 / 재학증명서 발급',
    desc:'정부24 통합검색 결과로 연결. 유치원부터 대학교까지 온라인 즉시 발급을 바로 신청하세요.',
    tags:['학력증명서','정부24','취업'],
    source:'정부24 통합검색',
    url:'https://www.gov.kr/search/srh/srhMain.do?query=%EC%A1%B8%EC%97%85%EC%A6%9D%EB%AA%85%EC%84%9C',
    kw:'졸업증명서 학력 성적증명서 재학증명서 학교'
  },
  {
    id:49, cat:'edu', e:'🎯',
    title:'국가기술자격 시험 접수',
    desc:'산업기사·기사·기능사 등 국가기술자격 응시 신청. 한국산업인력공단 큐넷 포털.',
    tags:['자격증','국가기술','시험'],
    source:'한국산업인력공단 큐넷',
    url:'https://www.q-net.or.kr/',
    kw:'자격증 국가기술자격 큐넷 시험 신청'
  },
  {
    id:50, cat:'edu', e:'📚',
    title:'국가장학금 신청',
    desc:'대학생 소득연계형 국가장학금 신청. 한국장학재단 공식 포털 메인.',
    tags:['장학금','대학','교육비'],
    source:'한국장학재단',
    url:'https://www.kosaf.go.kr/',
    kw:'장학금 신청서 국가장학금 대학 교육비'
  },
  {
    id:51, cat:'edu', e:'🌐',
    title:'TOEIC 성적표 발급',
    desc:'TOEIC 공인어학시험 성적 증명서 온라인 발급. 와이비엠 사이트.',
    tags:['TOEIC','영어','성적표'],
    source:'YBM 토익위원회',
    url:'https://www.toeic.co.kr/',
    kw:'어학 TOEIC 영어 성적표 토익 발급'
  },

  // ─── 사업·창업 ───────────────────────────────────────────────
  {
    id:52, cat:'business', e:'🚀',
    title:'창업지원사업 신청',
    desc:'중소벤처기업부 청년·일반 창업지원사업 공고 및 온라인 신청. K-스타트업 포털.',
    tags:['창업지원','청년창업','스타트업'],
    source:'K-스타트업 (중기부)',
    url:'https://www.k-startup.go.kr/',
    kw:'창업지원 신청서 창업 스타트업 청년'
  },
  {
    id:53, cat:'business', e:'📊',
    title:'창업 사업계획서 양식',
    desc:'창업진흥원 공식 포털 메인. 각종 사업계획서 및 지원 사업 공고를 확인하세요.',
    tags:['사업계획서','투자','지원신청'],
    source:'창업진흥원',
    url:'https://www.kised.or.kr/',
    kw:'사업계획서 투자 지원 창업'
  },
  {
    id:54, cat:'business', e:'📋',
    title:'법인 설립 등기 신청',
    desc:'주식회사·유한회사 등 법인 설립 등기 신청. 대법원 인터넷등기소 포털.',
    tags:['법인설립','주식회사','등기'],
    source:'대법원 인터넷등기소',
    url:'https://www.iros.go.kr/',
    kw:'법인설립 주식회사 유한회사 등기 설립'
  },
  {
    id:55, cat:'business', e:'💼',
    title:'소상공인 정책자금 신청',
    desc:'소상공인시장진흥공단 융자·지원사업 안내 포털 메인.',
    tags:['소상공인','융자','지원'],
    source:'소상공인시장진흥공단',
    url:'https://www.semas.or.kr/',
    kw:'소상공인 지원 신청서 융자 자영업'
  },
  {
    id:56, cat:'business', e:'🤝',
    title:'표준 용역·납품 계약서',
    desc:'프리랜서·외주 용역 및 납품 계약 시 활용하는 표준 계약서 (대한법률구조공단).',
    tags:['용역계약서','프리랜서','외주'],
    source:'대한법률구조공단',
    url:'https://www.klac.or.kr/legalinfo/formSample.do',
    kw:'용역계약서 프리랜서 외주 계약 납품'
  }
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
