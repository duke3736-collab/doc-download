// ================================================
// 서식 자료실 - 문서 데이터 및 앱 로직
// ================================================

const DOCS = [
  // ────────────────────────────────
  // 행정·공공
  // ────────────────────────────────
  {
    id: 1, cat: 'admin', emoji: '🏠',
    title: '주민등록등본',
    desc: '주민등록지를 증명하는 가장 기본적인 행정서류. 온라인 발급 가능.',
    tags: ['거주확인', '신분증명', '무인발급'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000015&tp_seq=01',
    keywords: '주민등록등본 거주 주소 증명'
  },
  {
    id: 2, cat: 'admin', emoji: '📄',
    title: '주민등록초본',
    desc: '주민등록 이동사항(주소 변경 이력)을 포함한 증명서.',
    tags: ['주소이력', '행정서류'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000016&tp_seq=01',
    keywords: '주민등록초본 주소 이력 이동'
  },
  {
    id: 3, cat: 'admin', emoji: '👨‍👩‍👧‍👦',
    title: '가족관계증명서',
    desc: '부모·배우자·자녀 관계를 증명하는 서류. 각종 신청에 필수.',
    tags: ['가족', '혼인', '출생'],
    source: '대법원 전자가족관계등록시스템',
    url: 'https://efamily.scourt.go.kr/',
    keywords: '가족관계증명서 부모 배우자 자녀 혼인'
  },
  {
    id: 4, cat: 'admin', emoji: '📋',
    title: '기본증명서',
    desc: '개인의 출생, 사망 등 기본적인 신분 사항을 증명.',
    tags: ['신분증명', '출생', '사망'],
    source: '대법원 전자가족관계등록시스템',
    url: 'https://efamily.scourt.go.kr/',
    keywords: '기본증명서 출생 신분 사망'
  },
  {
    id: 5, cat: 'admin', emoji: '🔏',
    title: '인감증명서',
    desc: '등록된 인감도장을 공식 증명하는 서류. 부동산·금융 거래 필수.',
    tags: ['인감', '부동산', '금융'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000014',
    keywords: '인감증명서 인감 도장 부동산'
  },
  {
    id: 6, cat: 'admin', emoji: '👶',
    title: '출생신고서',
    desc: '신생아 출생 후 1개월 이내에 제출해야 하는 신고 서식.',
    tags: ['신생아', '출생', '신고'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/flDownload.do?flSeq=9000',
    keywords: '출생신고서 신생아 아기 아이'
  },
  {
    id: 7, cat: 'admin', emoji: '💍',
    title: '혼인신고서',
    desc: '법적 혼인 관계를 성립시키기 위한 공식 신고 서식.',
    tags: ['결혼', '혼인', '신고'],
    source: '대법원 전자가족관계등록시스템',
    url: 'https://efamily.scourt.go.kr/pt/ptg/PTG00100P.do',
    keywords: '혼인신고서 결혼 부부 배우자'
  },
  {
    id: 8, cat: 'admin', emoji: '🪦',
    title: '사망신고서',
    desc: '사망 후 1개월 이내에 주소지 관할 행정복지센터에 제출.',
    tags: ['사망', '신고', '행정'],
    source: '대법원 전자가족관계등록시스템',
    url: 'https://efamily.scourt.go.kr/pt/ptg/PTG00200P.do',
    keywords: '사망신고서 사망 부고'
  },
  {
    id: 9, cat: 'admin', emoji: '🏢',
    title: '전입신고서',
    desc: '새 주소지로 이사한 후 14일 이내 전입신고 의무.',
    tags: ['이사', '전입', '주소변경'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01001&CappBizCD=13100000018',
    keywords: '전입신고서 이사 이사신고 주소변경'
  },
  {
    id: 10, cat: 'admin', emoji: '🚗',
    title: '운전면허 재발급 신청서',
    desc: '운전면허증 분실·훼손 시 재발급 신청 서식.',
    tags: ['운전면허', '재발급', '분실'],
    source: '도로교통공단',
    url: 'https://www.safedriving.or.kr/main.do',
    keywords: '운전면허 재발급 분실 훼손'
  },

  // ────────────────────────────────
  // 근로·취업
  // ────────────────────────────────
  {
    id: 11, cat: 'labor', emoji: '📝',
    title: '표준근로계약서',
    desc: '고용노동부 권장 표준 근로계약서. 근로시간, 임금, 휴가 명시.',
    tags: ['근로계약', '취업', '고용'],
    source: '고용노동부',
    url: 'https://www.moel.go.kr/policy/policyinfo/notice/list.do',
    keywords: '근로계약서 표준 고용 취업 알바'
  },
  {
    id: 12, cat: 'labor', emoji: '📑',
    title: '단시간 근로계약서 (아르바이트)',
    desc: '파트타임·아르바이트 근무자를 위한 단시간 표준근로계약서.',
    tags: ['알바', '파트타임', '단시간'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=44000',
    keywords: '아르바이트 알바 파트타임 단시간 근로계약서'
  },
  {
    id: 13, cat: 'labor', emoji: '💰',
    title: '퇴직금 신청서',
    desc: '퇴직 시 근로복지공단을 통한 퇴직금 지급 신청 서식.',
    tags: ['퇴직금', '퇴사', '급여'],
    source: '근로복지공단',
    url: 'https://www.comwel.or.kr/comwel/wkrs/slrymng/rtrmn.jsp',
    keywords: '퇴직금 신청서 퇴직 퇴사 임금'
  },
  {
    id: 14, cat: 'labor', emoji: '📊',
    title: '실업급여 신청서 (구직급여)',
    desc: '비자발적 실직 후 구직 기간 중 소득을 지원받기 위한 신청서.',
    tags: ['실업급여', '구직', '실직'],
    source: '고용보험',
    url: 'https://www.ei.go.kr/ei/eih/cm/hm/main.do',
    keywords: '실업급여 구직급여 실직 실업 고용보험'
  },
  {
    id: 15, cat: 'labor', emoji: '🍼',
    title: '육아휴직 신청서',
    desc: '만 8세 이하 자녀 양육을 위한 육아휴직 신청 서식.',
    tags: ['육아휴직', '출산', '양육'],
    source: '고용보험',
    url: 'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0303Info.do',
    keywords: '육아휴직 신청서 아이 출산 양육 부모'
  },
  {
    id: 16, cat: 'labor', emoji: '🤕',
    title: '산업재해 요양급여 신청서',
    desc: '업무상 재해·질병 발생 시 치료비 지원을 위한 신청서.',
    tags: ['산재', '업무상재해', '요양'],
    source: '근로복지공단',
    url: 'https://www.comwel.or.kr/comwel/wkrs/injryprvntn/indstrlAccdnt.jsp',
    keywords: '산재 산업재해 요양급여 신청서 업무상재해'
  },
  {
    id: 17, cat: 'labor', emoji: '✈️',
    title: '연차휴가 신청서 (양식)',
    desc: '직장 내 사용 가능한 연차휴가 신청서 표준 양식.',
    tags: ['연차', '휴가', '년차'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=59000',
    keywords: '연차휴가 신청서 휴가 연차 년차'
  },
  {
    id: 18, cat: 'labor', emoji: '🤰',
    title: '출산전후휴가 신청서',
    desc: '출산 전후 90일(다태아 120일) 유급휴가 신청 서식.',
    tags: ['출산휴가', '임신', '출산'],
    source: '고용보험',
    url: 'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0301Info.do',
    keywords: '출산전후휴가 출산휴가 임신 출산 산전 산후'
  },

  // ────────────────────────────────
  // 세금·금융
  // ────────────────────────────────
  {
    id: 19, cat: 'tax', emoji: '🧾',
    title: '종합소득세 신고서',
    desc: '개인사업자·프리랜서·기타소득자의 연간 소득 신고 서식.',
    tags: ['소득세', '세금신고', '프리랜서'],
    source: '국세청 홈택스',
    url: 'https://www.hometax.go.kr/',
    keywords: '종합소득세 신고서 소득세 세금 프리랜서 개인사업자'
  },
  {
    id: 20, cat: 'tax', emoji: '🏪',
    title: '사업자등록 신청서',
    desc: '개인·법인 사업 시작 전 사업자등록 의무. 국세청 온라인 처리 가능.',
    tags: ['사업자등록', '창업', '개업'],
    source: '국세청 홈택스',
    url: 'https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_teht.xml',
    keywords: '사업자등록 신청서 창업 개업 사업자'
  },
  {
    id: 21, cat: 'tax', emoji: '📈',
    title: '부가가치세 신고서',
    desc: '개인·법인 사업자의 분기별 부가세 신고 및 납부 서식.',
    tags: ['부가세', 'VAT', '세금신고'],
    source: '국세청 홈택스',
    url: 'https://www.hometax.go.kr/',
    keywords: '부가가치세 신고서 부가세 VAT 세금'
  },
  {
    id: 22, cat: 'tax', emoji: '📃',
    title: '근로소득 원천징수영수증',
    desc: '연말정산 및 각종 소득 증빙에 사용하는 급여 관련 서류.',
    tags: ['원천징수', '연말정산', '급여증명'],
    source: '국세청 홈택스',
    url: 'https://www.hometax.go.kr/',
    keywords: '원천징수영수증 연말정산 급여 소득증명'
  },
  {
    id: 23, cat: 'tax', emoji: '💵',
    title: '소득확인증명서',
    desc: '국세청에서 발급하는 과세연도별 소득 공식 증명서.',
    tags: ['소득증명', '금융대출', '청약'],
    source: '국세청 홈택스',
    url: 'https://www.hometax.go.kr/',
    keywords: '소득확인증명서 소득증명 대출 청약'
  },
  {
    id: 24, cat: 'tax', emoji: '🏦',
    title: '금융거래확인서',
    desc: '은행 거래 내역을 공식 확인하는 서류. 각 은행 창구·앱에서 발급.',
    tags: ['금융', '은행', '거래확인'],
    source: '각 은행 공식사이트',
    url: 'https://finlife.fss.or.kr/',
    keywords: '금융거래확인서 은행 거래내역 금융'
  },

  // ────────────────────────────────
  // 부동산
  // ────────────────────────────────
  {
    id: 25, cat: 'realestate', emoji: '🏡',
    title: '주택 임대차계약서 (전세/월세)',
    desc: '법무부 권장 표준 주택 임대차계약서. 전세·월세 모두 사용 가능.',
    tags: ['임대차', '전세', '월세'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=52000',
    keywords: '임대차계약서 전세 월세 임대 집 주택'
  },
  {
    id: 26, cat: 'realestate', emoji: '🏢',
    title: '상가 임대차계약서',
    desc: '상가건물 임대차보호법에 따른 표준 상가 임대차계약서.',
    tags: ['상가', '임대차', '계약서'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=53000',
    keywords: '상가 임대차계약서 상가 건물 가게 사무실'
  },
  {
    id: 27, cat: 'realestate', emoji: '📬',
    title: '전월세 신고서',
    desc: '2021년부터 의무화된 주택 임대차 계약 신고 서식.',
    tags: ['전월세신고', '의무신고', '임대차'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A10003&CappBizCD=17100000007',
    keywords: '전월세신고서 임대차 신고 의무'
  },
  {
    id: 28, cat: 'realestate', emoji: '🔑',
    title: '부동산 매매계약서',
    desc: '토지·건물 매매 시 사용하는 부동산 표준 매매계약서.',
    tags: ['매매', '부동산', '계약서'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=54000',
    keywords: '부동산 매매계약서 매매 부동산 아파트 토지'
  },
  {
    id: 29, cat: 'realestate', emoji: '🗂️',
    title: '부동산거래 신고서',
    desc: '매매 계약 체결 후 30일 이내 의무 신고 서식.',
    tags: ['거래신고', '매매신고', '의무'],
    source: '국토교통부',
    url: 'https://rtms.molit.go.kr/',
    keywords: '부동산거래신고서 매매신고 거래신고'
  },
  {
    id: 30, cat: 'realestate', emoji: '🏗️',
    title: '건축물대장 발급 신청',
    desc: '건물의 구조·용도·면적 등 공식 현황을 확인하는 서류.',
    tags: ['건축물대장', '건물정보'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A02006&CappBizCD=13100000031',
    keywords: '건축물대장 건물 구조 용도'
  },
  {
    id: 31, cat: 'realestate', emoji: '📜',
    title: '등기사항증명서 (부동산)',
    desc: '토지·건물의 소유권 및 권리관계를 공식 확인하는 서류.',
    tags: ['등기', '소유권', '부동산'],
    source: '대법원 인터넷등기소',
    url: 'https://www.iros.go.kr/',
    keywords: '등기사항증명서 부동산 소유권 등기부등본'
  },

  // ────────────────────────────────
  // 의료·복지
  // ────────────────────────────────
  {
    id: 32, cat: 'health', emoji: '💊',
    title: '건강보험료 경감 신청서',
    desc: '저소득층·재난 피해자를 위한 건강보험료 감면 신청 서식.',
    tags: ['건강보험', '감면', '저소득'],
    source: '건강보험공단',
    url: 'https://www.nhis.or.kr/',
    keywords: '건강보험료 경감 신청서 감면 저소득'
  },
  {
    id: 33, cat: 'health', emoji: '🏥',
    title: '의료급여 신청서',
    desc: '기초생활수급자 등 의료비 지원을 받기 위한 신청서.',
    tags: ['의료급여', '기초생활', '수급'],
    source: '복지로',
    url: 'https://www.bokjiro.go.kr/',
    keywords: '의료급여 신청서 기초생활 수급 의료비'
  },
  {
    id: 34, cat: 'health', emoji: '♿',
    title: '장애인등록 신청서',
    desc: '장애인 복지서비스 수혜를 위한 장애등급 판정 신청 서식.',
    tags: ['장애인', '장애등록', '복지'],
    source: '복지로',
    url: 'https://www.bokjiro.go.kr/',
    keywords: '장애인등록 신청서 장애 복지 장애등급'
  },
  {
    id: 35, cat: 'health', emoji: '👴',
    title: '노인장기요양보험 신청서',
    desc: '치매·뇌졸중 등 노인성 질환으로 요양이 필요한 경우 신청.',
    tags: ['장기요양', '노인', '요양원'],
    source: '건강보험공단',
    url: 'https://www.nhis.or.kr/nhis/minwon/wbhacs04400m01.do',
    keywords: '장기요양보험 신청서 노인 요양 치매'
  },
  {
    id: 36, cat: 'health', emoji: '💉',
    title: '건강검진 신청서',
    desc: '국가 건강검진 대상자 확인 및 수검 신청 관련 서류.',
    tags: ['건강검진', '국가검진', '건강'],
    source: '건강보험공단',
    url: 'https://www.nhis.or.kr/nhis/healthin/wbhaia01900m01.do',
    keywords: '건강검진 신청서 국가검진 건강 진단'
  },
  {
    id: 37, cat: 'health', emoji: '🍼',
    title: '아동수당 신청서',
    desc: '만 8세 미만 아동에게 지급되는 아동수당 신청 서식.',
    tags: ['아동수당', '육아', '복지'],
    source: '복지로',
    url: 'https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/retrieveMkclAsisInfo.do?menuNo=10005',
    keywords: '아동수당 신청서 아이 육아 자녀 아동'
  },
  {
    id: 38, cat: 'health', emoji: '🤱',
    title: '출산급여 신청서',
    desc: '자녀 출산 후 지급받는 출산 지원금 신청 서식.',
    tags: ['출산급여', '출산지원금', '출산'],
    source: '고용보험',
    url: 'https://www.ei.go.kr/ei/eih/eg/pb/pbPersonBnef/retrievePb0302Info.do',
    keywords: '출산급여 신청서 출산지원 출산 아기'
  },

  // ────────────────────────────────
  // 법률·계약
  // ────────────────────────────────
  {
    id: 39, cat: 'legal', emoji: '⚖️',
    title: '위임장',
    desc: '법률 행위를 타인에게 위임할 때 사용하는 공식 양식.',
    tags: ['위임장', '대리', '법률'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/',
    keywords: '위임장 대리 법률 위임'
  },
  {
    id: 40, cat: 'legal', emoji: '✉️',
    title: '내용증명 양식',
    desc: '법적 분쟁 전 상대방에게 의사를 공식 전달하는 우체국 내용증명 양식.',
    tags: ['내용증명', '우편', '법적증명'],
    source: '우체국',
    url: 'https://www.epost.go.kr/main.retrieveMainPage.comm',
    keywords: '내용증명 우편 법적 분쟁 통지'
  },
  {
    id: 41, cat: 'legal', emoji: '💸',
    title: '차용증 (금전소비대차계약서)',
    desc: '개인 간 금전 대여 시 작성하는 공식 차용 계약서.',
    tags: ['차용증', '대여금', '계약서'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/',
    keywords: '차용증 금전 대여 빌려주기 계약서'
  },
  {
    id: 42, cat: 'legal', emoji: '🤝',
    title: '합의서 양식',
    desc: '민사 분쟁·사고 처리 시 당사자 간 합의 사항을 명시하는 서식.',
    tags: ['합의서', '분쟁해결', '계약'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/',
    keywords: '합의서 분쟁 해결 합의 계약'
  },
  {
    id: 43, cat: 'legal', emoji: '📄',
    title: '고소장 양식',
    desc: '형사 사건 접수를 위해 경찰서·검찰청에 제출하는 고소 서식.',
    tags: ['고소장', '형사', '경찰'],
    source: '대한법률구조공단',
    url: 'https://www.klac.or.kr/',
    keywords: '고소장 형사 고소 경찰 접수'
  },
  {
    id: 44, cat: 'legal', emoji: '🏛️',
    title: '지급명령 신청서',
    desc: '소송 없이 법원을 통해 채무 변제를 요구할 수 있는 간이 절차 서식.',
    tags: ['지급명령', '법원', '채무'],
    source: '대법원 전자소송',
    url: 'https://ecfs.scourt.go.kr/',
    keywords: '지급명령 신청서 법원 채무 빚'
  },

  // ────────────────────────────────
  // 교육·자격
  // ────────────────────────────────
  {
    id: 45, cat: 'edu', emoji: '🎓',
    title: '졸업증명서',
    desc: '학교 졸업 사실을 증명하는 서류. 정부24 온라인 발급 가능.',
    tags: ['졸업증명', '학력', '취업'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01006&CappBizCD=13100000025',
    keywords: '졸업증명서 학력 졸업 취업 학교'
  },
  {
    id: 46, cat: 'edu', emoji: '📊',
    title: '성적증명서',
    desc: '학교 성적 이수 내역을 공식 증명하는 서류.',
    tags: ['성적증명', '학교', '학력'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01006&CappBizCD=13100000026',
    keywords: '성적증명서 성적 학력 학교 이수'
  },
  {
    id: 47, cat: 'edu', emoji: '🏫',
    title: '재학증명서',
    desc: '현재 재학 중인 학교 및 학년을 증명하는 서류.',
    tags: ['재학증명', '학생', '재학'],
    source: '정부24',
    url: 'https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01006&CappBizCD=13100000027',
    keywords: '재학증명서 학생 재학 학교 학년'
  },
  {
    id: 48, cat: 'edu', emoji: '🎯',
    title: '국가자격증 신청서',
    desc: '한국산업인력공단에서 관리하는 각종 국가기술자격 응시 신청.',
    tags: ['자격증', '국가기술', '시험'],
    source: '한국산업인력공단 큐넷',
    url: 'https://www.q-net.or.kr/',
    keywords: '자격증 국가기술자격 큐넷 시험 신청'
  },
  {
    id: 49, cat: 'edu', emoji: '📚',
    title: '장학금 신청서',
    desc: '국가장학금 및 교내·외 장학금 신청을 위한 서식 안내.',
    tags: ['장학금', '대학', '교육비'],
    source: '한국장학재단',
    url: 'https://www.kosaf.go.kr/',
    keywords: '장학금 신청서 국가장학금 대학 교육비'
  },
  {
    id: 50, cat: 'edu', emoji: '🌐',
    title: '어학능력시험 성적표 발급',
    desc: 'TOEIC, TEPS, IELTS 등 공인어학시험 성적 공식 서류 발급.',
    tags: ['어학', 'TOEIC', '영어'],
    source: '각 시험기관 공식사이트',
    url: 'https://www.toeic.co.kr/',
    keywords: '어학 TOEIC 영어 성적표 토익'
  },

  // ────────────────────────────────
  // 사업·창업
  // ────────────────────────────────
  {
    id: 51, cat: 'business', emoji: '🚀',
    title: '창업지원 신청서',
    desc: '중소벤처기업부 청년창업·일반창업 지원사업 신청 안내.',
    tags: ['창업지원', '청년창업', '스타트업'],
    source: '중소벤처기업부',
    url: 'https://www.mss.go.kr/',
    keywords: '창업지원 신청서 창업 스타트업 청년'
  },
  {
    id: 52, cat: 'business', emoji: '📊',
    title: '사업계획서 표준 양식',
    desc: '정부 및 민간 기관 투자·지원 신청 시 활용하는 사업계획서 양식.',
    tags: ['사업계획서', '투자', '지원신청'],
    source: '창업진흥원',
    url: 'https://www.kised.or.kr/',
    keywords: '사업계획서 투자 지원 창업'
  },
  {
    id: 53, cat: 'business', emoji: '📋',
    title: '법인 설립 신청서',
    desc: '주식회사·유한회사 등 법인 설립을 위한 등기 신청 서식.',
    tags: ['법인설립', '주식회사', '등기'],
    source: '대법원 인터넷등기소',
    url: 'https://www.iros.go.kr/',
    keywords: '법인설립 주식회사 유한회사 등기 설립'
  },
  {
    id: 54, cat: 'business', emoji: '💼',
    title: '소상공인 지원 신청서',
    desc: '소상공인시장진흥공단의 융자·지원 사업 신청 서식.',
    tags: ['소상공인', '융자', '지원'],
    source: '소상공인시장진흥공단',
    url: 'https://www.semas.or.kr/',
    keywords: '소상공인 지원 신청서 융자 자영업'
  },
  {
    id: 55, cat: 'business', emoji: '🤝',
    title: '용역계약서 표준 양식',
    desc: '프리랜서·외주 용역 계약 시 활용하는 표준 용역계약서.',
    tags: ['용역계약서', '프리랜서', '외주'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/',
    keywords: '용역계약서 프리랜서 외주 계약'
  },
  {
    id: 56, cat: 'business', emoji: '📦',
    title: '납품계약서 양식',
    desc: '물품·서비스 납품 시 공급자와 수요자 간 체결하는 계약서.',
    tags: ['납품계약서', '공급', '물품'],
    source: '국가법령정보센터',
    url: 'https://www.law.go.kr/',
    keywords: '납품계약서 공급 물품 계약 납품'
  },
];

// ────────────────────────────────
// Category Config
// ────────────────────────────────
const CATEGORIES = {
  all:         { label: '전체' },
  admin:       { label: '행정·공공' },
  labor:       { label: '근로·취업' },
  tax:         { label: '세금·금융' },
  realestate:  { label: '부동산' },
  health:      { label: '의료·복지' },
  legal:       { label: '법률·계약' },
  edu:         { label: '교육·자격' },
  business:    { label: '사업·창업' },
};

// ────────────────────────────────
// State
// ────────────────────────────────
let currentCat = 'all';
let searchQuery = '';

// ────────────────────────────────
// Render
// ────────────────────────────────
function getFiltered() {
  return DOCS.filter(doc => {
    const matchCat = currentCat === 'all' || doc.cat === currentCat;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || 
      doc.title.toLowerCase().includes(q) ||
      doc.desc.toLowerCase().includes(q) ||
      doc.tags.some(t => t.toLowerCase().includes(q)) ||
      doc.source.toLowerCase().includes(q) ||
      (doc.keywords && doc.keywords.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });
}

function renderCards(docs) {
  const grid = document.getElementById('cardsGrid');
  const noResult = document.getElementById('noResult');
  const resultCount = document.getElementById('resultCount');
  const resultText = document.getElementById('resultText');

  resultCount.textContent = `${docs.length}개`;
  resultText.textContent = searchQuery 
    ? `"${searchQuery}" 검색 결과` 
    : (currentCat === 'all' ? '전체 서식' : CATEGORIES[currentCat].label);

  if (docs.length === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    return;
  }
  noResult.style.display = 'none';

  grid.innerHTML = docs.map((doc, i) => `
    <article class="card cat-${doc.cat}" style="animation-delay:${i * 0.04}s" 
             onclick="window.open('${doc.url}', '_blank', 'noopener')">
      <div class="card-top">
        <div class="card-icon">${doc.emoji}</div>
        <div class="card-meta">
          <div class="card-category">${CATEGORIES[doc.cat].label}</div>
          <div class="card-title">${doc.title}</div>
        </div>
      </div>
      <p class="card-desc">${doc.desc}</p>
      <div class="card-tags">
        ${doc.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="card-footer">
        <div class="card-source">
          <span class="source-dot"></span>
          <span>${doc.source}</span>
        </div>
        <a class="card-btn btn-primary" href="${doc.url}" target="_blank" rel="noopener"
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

function update() {
  renderCards(getFiltered());
}

// ────────────────────────────────
// Event Listeners
// ────────────────────────────────
function init() {
  // Total count
  document.getElementById('totalCount').textContent = DOCS.length;

  // Category buttons
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      update();
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    searchClear.style.display = searchQuery ? 'flex' : 'none';
    update();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    update();
  });

  // Initial render
  update();
}

document.addEventListener('DOMContentLoaded', init);
