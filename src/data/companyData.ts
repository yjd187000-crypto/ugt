import { MetricItem, BusinessItem, ProjectItem, CertificateItem, JobOpening, HistoryItem } from '../types';

export const COMPANY_INFO = {
  name: '㈜유지텔레컴',
  englishName: 'UG TELECOM CO., LTD.',
  ceo: '정우창',
  established: '2005년 7월 8일',
  address: '경기도 용인시 기흥구 고매로 223',
  phone: '02-6672-8500',
  email: 'money@ugt.kr',
  sloganKo: '대한민국을 연결하는 기술, 그 현장에 유지텔레컴이 있습니다.',
  sloganEn: 'Reliable Connections. Limitless Possibilities.',
  subtext: '광통신망, 5G·LTE, ITS, 철도통신, 전기설비의 설계부터 시공·운영·유지보수까지 유지텔레컴이 책임집니다.',
  vision: '국가 핵심 정보통신 인프라를 선도하는 1등 기술 파트너',
  mission: '안전과 품질을 최우선으로, 사람과 사람, 기술과 미래를 완벽하게 연결합니다.',
  coreValues: [
    { title: '안전 (Safety)', desc: '중대재해 Zero 실현 및 철저한 현장 안전관리 준수' },
    { title: '품질 (Quality)', desc: '표준화된 시공 공정과 엄격한 품질 검수로 책임시공' },
    { title: '신뢰 (Trust)', desc: '20년 축적 노하우로 고객사 및 협력사와의 약속 이행' },
    { title: '혁신 (Innovation)', desc: '차세대 5G/6G 및 스마트 인프라 기술의 선제적 도입' }
  ]
};

export const METRICS_DATA: MetricItem[] = [
  {
    id: 'founded',
    value: '2005',
    label: '설립연도',
    sublabel: '2005.07.08 설립',
    note: '법인 등기 및 사업자등록 공식 기록 기준'
  },
  {
    id: 'experience',
    value: '20+ Years',
    label: '축적된 현장 경험',
    sublabel: '정보통신 시공 노하우',
    note: '2005년 설립이래 연속 사업 운영 기준'
  },
  {
    id: 'engineers',
    value: '180+',
    label: '전문인력',
    sublabel: '기술인력 및 안전관리자',
    note: '정보통신/전기/안전 자격 보유자 및 상시 협력 기술자 합산 (확인 필요)'
  },
  {
    id: 'support',
    value: '24/7',
    label: '장애 대응체계',
    sublabel: '365일 비상 대기',
    note: '통신망 긴급 복구 및 유지보수 전담팀 운영'
  },
  {
    id: 'coverage',
    value: 'Nationwide',
    label: '전국 시공역량',
    sublabel: '수도권 및 전국 주요거점',
    note: '전국 단위 현장 시공 및 긴급출동 네트워크'
  }
];

export const BUSINESS_DATA: BusinessItem[] = [
  {
    id: 'mobile',
    title: '이동통신망',
    englishTitle: 'Mobile Communications Network',
    shortDesc: '5G·LTE 기지국 구축과 증설, 무선망 최적화 시공',
    fullDesc: '이동통신 3사 및 차세대 특화망(이음5G) 기지국 설치, 인빌딩 중계기 시공, 안테나/RRU 교체, 무선 품질 측정 및 최적화 엔지니어링 서비스를 제공합니다.',
    tags: ['5G', 'LTE', '기지국', '인빌딩', '이음5G'],
    features: ['5G/LTE 기지국 신설 및 고도화', '대형 빌딩/터널/지하철 인빌딩 시공', 'RF 환경 측정 및 안테나 방위각 최적화', '기지국 전력 및 통신선로 일괄 시공'],
    iconName: 'Radio',
    bgImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'optical',
    title: '광통신망',
    englishTitle: 'Optical Fiber Network',
    shortDesc: 'FTTH·FTTB·기간 광전송망 구축 및 광케이블 접속',
    fullDesc: '초고속 광대역 통신망 형성을 위한 초고속 광케이블 포설, 성단 및 광융착 접속, OTDR 손실 측정, FTTH/FTTB 구내 통신망을 정밀 시공합니다.',
    tags: ['광케이블', 'FTTH', 'FTTB', '광접속', 'OTDR'],
    features: ['기간망 및 배선망 광케이블 포설 및 접속', 'OTDR 광선로 손실 정밀 측정 및 시험 보고서 작성', '지중 관로 및 전주 가공선로 시공', '아파트/빌딩 구내 광통신 인프라 구축'],
    iconName: 'Zap',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'infra',
    title: '네트워크 인프라',
    englishTitle: 'Network Infrastructure',
    shortDesc: '통신국사·백본·구내통신 인프라 및 케이블링',
    fullDesc: '국가 주요 통신국사, 데이터센터, 공공기관 및 기업 구내 통신실의 백본 스위치, 라우터, 랙 구성, UTP/광 배선 구조화 작업을 전문 시공합니다.',
    tags: ['통신국사', '백본', '구내통신', '통신랙', '서버룸'],
    features: ['통신국사 내 항온항습 및 케이블 트레이 포설', '구내통신 통합 배선 카테고리(CAT.6A/CAT.7) 시공', '네트워크 랙 레이아웃 및 패치패널 정돈', '서버룸 전원 및 신호선 분리 안전 시공'],
    iconName: 'Server',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'its',
    title: 'ITS·스마트시티',
    englishTitle: 'ITS & Smart City Infrastructure',
    shortDesc: '지능형 교통체계 및 도시 통신망 전문 시공',
    fullDesc: '고속도로 및 국도의 도로전광표지(VMS), 차량검지기(VDS), C-ITS 자율주행 차비전 통신망, CCTV 및 스마트시티 관제망 인프라를 시공합니다.',
    tags: ['ITS', 'VMS', 'C-ITS', '스마트시티', '도로통신'],
    features: ['고속도로/지방도 ITS 현장 제어기 및 현장 통신망 구축', 'C-ITS(자율협력주행) 노변 기지국(RSU) 설치', '교통관제 센터 연계 광전송로 단말 연결', '스마트 방범/교통 CCTV 통신 및 전원망 포설'],
    iconName: 'Cpu',
    bgImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'railway',
    title: '철도통신',
    englishTitle: 'Railway Telecom (LTE-R)',
    shortDesc: 'LTE-R·철도 광통신 및 열차 무선 통신망 구축',
    fullDesc: '고속철도, 도시철도 및 광역철도 현장의 LTE-R(철도통합무선망) 기지국, 터널 내 누설동축케이블(LCX), 본선 광통신 케이블을 철저한 안전지침 하에 구축합니다.',
    tags: ['LTE-R', '철도통신', 'LCX', '터널통신', '무선망'],
    features: ['철도 전용 무선망(LTE-R) 안테나 및 차상장치 연계', '철도 터널 내 LCX(누설동축케이블) 브라켓 fixation 및 시공', '본선 구간 열차 운행선 야간 작업 안전 수칙 완벽 준수', '역사 관제실 철도 광전송장치 연동 시공'],
    iconName: 'Train',
    bgImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electrical',
    title: '전기·유지보수',
    englishTitle: 'Electrical & 24/7 Maintenance',
    shortDesc: '전력설비·수배전반 및 24시간 긴급 장애 복구',
    fullDesc: '통신 기지국 및 국사의 전원 수배전반, 정류기, 축전기, UPS 설치 및 24시간 365일 통신 장애 출동 긴급 복구 유지보수 체계를 운영합니다.',
    tags: ['전기공사', 'UPS', '정류기', '24/7유지보수', '긴급복구'],
    features: ['통신용 인입전원 및 분전반, 접지공사', '비상발전기 및 정류기, UPS 전원 안전 시스템 구축', '24시간 365일 종합 상황실 연계 긴급 장애 긴급 출동', '정기 시설물 안전 점검 및 예방 정비'],
    iconName: 'ShieldCheck',
    bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: '서부내륙고속도로 ITS 지능형 교통체계 통신망 구축',
    category: 'ITS',
    year: '2024년',
    period: '2023.10 ~ 2024.11',
    scope: '고속도로 전구간 광통신 케이블 포설, VMS/VDS 제어기 및 현장 관제 통신선로 구축',
    region: '충남 / 경기 구간',
    lat: 36.8,
    lng: 126.9,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    description: '서부내륙고속도로 주요 현장에 지능형 교통시스템 통신망을 차질 없이 준공하여 고속도로 안전 및 정체 감소에 기여했습니다.',
    highlights: ['광케이블 포설 총 120km 준공', '도로전광표지(VMS) 및 CCTV 현장 단말 연결', '야간 차선 통제 시 안전 관리자 100% 배치'],
    isDemoLocation: true
  },
  {
    id: 'p2',
    title: '수인분당선 LTE-R 철도 통합 무선망 구축',
    category: '철도',
    year: '2023년',
    period: '2023.01 ~ 2023.12',
    scope: '지하 터널 구간 LCX 누설동축케이블 시공, 터널 기지국 및 관제망 연동',
    region: '수원 / 성남 / 인천 구간',
    lat: 37.26,
    lng: 127.0,
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
    description: '열차 운행선 특수성을 고려하여 야간 차단 작업 시간 내 철저한 공정 관리로 고품질 LTE-R 통신망을 완성하였습니다.',
    highlights: ['터널 내 무선 감쇄 최소화 고품질 LCX 시공', '정시 운행 지장 Zero 준수', '철도공사 안전 기준 엄수'],
    isDemoLocation: true
  },
  {
    id: 'p3',
    title: 'SK텔레콤 수도권 5G 기지국 신설 및 고도화',
    category: '이동통신',
    client: 'SK텔레콤 (수행 실적)',
    year: '2024년',
    period: '2024.01 ~ 2024.12 (상시)',
    scope: '수도권 주요 상권 및 음영지역 5G 기지국 신설, 안테나 교체, 인빌딩 중계기 설치',
    region: '서울 / 경기 권역',
    lat: 37.56,
    lng: 126.97,
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80',
    description: '수도권 주요 트래픽 밀집 지역의 5G 무선 품질을 혁신적으로 개선하기 위한 기지국 증설 및 최적화 작업을 시공하였습니다.',
    highlights: ['3.5GHz 및 28GHz 매시브 마이모 안테나 설치', '빌딩 옥상 작업 시 추락 방지 안전 대책 적용', 'RF 커버리지 음영지역 완벽 해소'],
    isDemoLocation: true
  },
  {
    id: 'p4',
    title: 'SK브로드밴드 FTTH 광케이블 인프라 구축 및 접속',
    category: '광통신',
    client: 'SK브로드밴드 (수행 실적)',
    year: '2023년',
    period: '2023.03 ~ 2023.11',
    scope: '아파트 단지 및 주택가 초고속 광가입자망(FTTH) 인프라 포설 및 광융착 접속',
    region: '경기 남부 권역',
    lat: 37.2,
    lng: 127.1,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: '경기 남부 주요 대단지 아파트 및 신도시 지역에 10GiGA 인터넷 제공을 위한 FTTH 광선로망을 완벽 시공하였습니다.',
    highlights: ['OTDR 손실 0.02dB 이하 고품질 정밀 접속', '민원 최소화 단지 내 신속 시공', '광분배함 정돈 및 포스트 관리'],
    isDemoLocation: true
  },
  {
    id: 'p5',
    title: '통신국사 백본 인프라 및 항온항습 전원 개선',
    category: '전기',
    year: '2022년',
    period: '2022.06 ~ 2022.12',
    scope: '주요 국사 내 UPS 정류기 및 분전함 교체, 케이블 트레이 수직/수평 신설',
    region: '대전 / 충청 권역',
    lat: 36.35,
    lng: 127.38,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: '통신 서비스의 무중단 유지를 위하여 무정전 상태에서 정류기 및 축전기를 성공적으로 정밀 교체하였습니다.',
    highlights: ['핫스왑(Hot-Swap) 무정전 교체 공법 적용', '국가지정 통신재난 대비 이중화 완료', '전원선/통신선 간섭 제로 배치'],
    isDemoLocation: true
  },
  {
    id: 'p6',
    title: '공공·국방 통신망 및 통합 보안 인프라 시공',
    category: '공공·국방',
    year: '2023년',
    period: '2023.05 ~ 2024.02',
    scope: '보안 시설물 구내 통신 인프라, 이중화 광케이블, 통합 관제 통신선로 설치',
    region: '강원 / 공공 시설물',
    lat: 37.88,
    lng: 127.73,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: '높은 보안 수준을 요구하는 공공 및 국방 현장의 특수 통신 인프라를 철통 보안 규정 하에 완공하였습니다.',
    highlights: ['암호화 전송 장비 라인 물리적 물리 이중화', '현장 작업자 보안 서약 및 철저한 출입 관리', '품질 검수 100% 통과'],
    isDemoLocation: true
  },
  {
    id: 'p7',
    title: '대구/경북 스마트시티 방범 및 교통 CCTV 통신망',
    category: 'ITS',
    year: '2022년',
    period: '2022.02 ~ 2022.10',
    scope: '지자체 통합 관제 센터 연계 광통신 자가망 포설 및 시공',
    region: '대구 / 경북',
    lat: 35.87,
    lng: 128.6,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    description: '도시 전체 자가망 구성을 통해 관제 효율을 개선하고 시민 안전에 이바지하였습니다.',
    highlights: ['광 자가망 연결로 통신 비용 절감', 'CCTV 고화질 IP 스트리밍 안정화'],
    isDemoLocation: true
  },
  {
    id: 'p8',
    title: '광주/전남 5G 융합 스마트 공장 통신망 시공',
    category: '이동통신',
    year: '2024년',
    period: '2024.02 ~ 2024.08',
    scope: '이음5G(특화망) 기지국 및 산업용 로봇 제어 무선망 시공',
    region: '광주 / 전남',
    lat: 35.16,
    lng: 126.85,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: '스마트 팩토리 내 초저지연 무선 통신 환경을 구축하여 공정 자동화 효율을 극대화하였습니다.',
    highlights: ['초저지연 1ms 이하 무선 커버리지 확보', '노이즈 차폐 특수 케이블링'],
    isDemoLocation: true
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'c1',
    title: '정보통신공사업 면허',
    englishTitle: 'Information & Telecommunications Construction License',
    issuer: '과학기술정보통신부 / 한국정보통신공사협회',
    category: '공사업 면허',
    desc: '국가 핵심 정보통신망, 광케이블, 이동통신, 구내통신 설비 일체 관련 정식 공사업 자격',
    certNumberPlaceholder: '면허번호: 제110***호 (상세 제출 가능)',
    validPeriodPlaceholder: '유효기간: 영구 (정기 신고 완료)'
  },
  {
    id: 'c2',
    title: '전기공사업 면허',
    englishTitle: 'Electrical Construction License',
    issuer: '산업통상자원부 / 한국전기공사협회',
    category: '공사업 면허',
    desc: '수배전반, 비상전원, UPS, 정류기, 전력 케이블 및 접지 공사 전문 수행 자격',
    certNumberPlaceholder: '면허번호: 제210***호 (상세 제출 가능)',
    validPeriodPlaceholder: '유효기간: 영구 (정기 신고 완료)'
  },
  {
    id: 'c3',
    title: 'ISO 9001 품질경영시스템 인증',
    englishTitle: 'ISO 9001:2015 Quality Management System',
    issuer: '국제표준화기구 (ISO)',
    category: 'ISO 인증',
    desc: '정보통신 및 전기 공사의 설계, 시공, 유지보수 전 과정의 국제 표준 품질관리 체계 인증',
    certNumberPlaceholder: '인증번호: QMS-****-2023 (심사 갱신 완료)',
    validPeriodPlaceholder: '유효기간: 2026년까지 유효'
  },
  {
    id: 'c4',
    title: 'ISO 14001 환경경영시스템 인증',
    englishTitle: 'ISO 14001:2015 Environmental Management System',
    issuer: '국제표준화기구 (ISO)',
    category: 'ISO 인증',
    desc: '시공 현장 자원 절약, 폐기물 절감, 친환경 시공 공정 준수 환경경영 인증',
    certNumberPlaceholder: '인증번호: EMS-****-2023 (심사 갱신 완료)',
    validPeriodPlaceholder: '유효기간: 2026년까지 유효'
  },
  {
    id: 'c5',
    title: 'ISO 45001 안전보건경영시스템 인증',
    englishTitle: 'ISO 45001:2018 Occupational Health & Safety',
    issuer: '국제표준화기구 (ISO)',
    category: 'ISO 인증',
    desc: '중대재해 예방 및 현장 작업자 안전보건 제반 위험요인 사전 통제 모범 인증',
    certNumberPlaceholder: '인증번호: OHS-****-2023 (심사 갱신 완료)',
    validPeriodPlaceholder: '유효기간: 2026년까지 유효'
  },
  {
    id: 'c6',
    title: '기업부설연구소 인정서',
    englishTitle: 'Corporate R&D Institute Certification',
    issuer: '한국산업기술진흥협회 (KOITA)',
    category: '연구소/기타',
    desc: '차세대 통신 망 시공 기술, 광선로 효율화 공법 및 안전 제어 장비 개발 전담 연구소',
    certNumberPlaceholder: '인정번호: 제2019******호',
    validPeriodPlaceholder: '유효기간: 상시 평가 운영'
  }
];

export const HISTORY_DATA: HistoryItem[] = [
  {
    year: '2024년',
    events: [
      '서부내륙고속도로 ITS 지능형 교통체계 통신망 준공',
      '이음5G 특화망 전담 시공팀 신설 및 실적 달성',
      '중대재해 Zero 5년 연속 달성 표창'
    ]
  },
  {
    year: '2023년',
    events: [
      '수인분당선 LTE-R 철도 통합 무선망 성공적 구축',
      'ISO 45001 안전보건경영시스템 인증 획득',
      '전국 광통신 인프라 시공 누적 10,000km 돌파'
    ]
  },
  {
    year: '2021년 ~ 2022년',
    events: [
      'SK텔레콤 / SK브로드밴드 주요 시공 파트너 표창',
      '통신국사 무정전 전원 교체 특수 공법 도입 및 시공',
      '전기공사업 면허 확장 및 통합 인프라 조직 개편'
    ]
  },
  {
    year: '2018년 ~ 2020년',
    events: [
      '기업부설연구소 설립 인정 (KOITA)',
      '5G 전국망 초창기 대규모 기지국 인프라 시공 참여',
      'ISO 9001 / ISO 14001 품질·환경 경영 인증'
    ]
  },
  {
    year: '2010년 ~ 2017년',
    events: [
      'LTE 전국망 및 FTTH 광케이블 시공 전면 확대',
      '본사 사옥 경기도 용인시 이전 확정',
      '지자체 ITS 및 CCTV 관제망 사업 진출'
    ]
  },
  {
    year: '2005년',
    events: [
      '2005년 7월 8일 ㈜유지텔레컴 법인 설립',
      '정보통신공사업 정식 면허 취득 및 통신 시공 사업 개시'
    ]
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'j1',
    title: '이동통신(5G/LTE) 기지국 시공 엔지니어',
    department: '이동통신사업부',
    location: '경기도 용인 본사 / 수도권 현장',
    type: '정규직',
    experience: '경력 2년 이상',
    deadline: '채용시 마감',
    tasks: ['5G/LTE 기지국 장비 설치 및 안테나 방위각 설정', '인빌딩 중계기 시공 및 무선 품질 측정', '현장 시공 공정 및 협력사 관리'],
    requirements: ['정보통신공사 자격증 소지자 우대', '운전면허 소지 필수', '고소 작업 및 현장 출장 가능자']
  },
  {
    id: 'j2',
    title: '광케이블 포설 및 접속 정밀 엔지니어',
    department: '광통신사업부',
    location: '전국 주요 현장 (용인 거점)',
    type: '정규직',
    experience: '신입 / 경력',
    deadline: '상시 채용',
    tasks: ['광케이블 포설 및 성단 작업', '광융착 접속 및 OTDR 손실 측정 시험', '시공 완성 도면 및 시험성적서 작성'],
    requirements: ['OTDR 장비 사용 가능자 우대', '신입의 경우 현장 숙련 교육 제공', '성실하고 책임감 있는 태도']
  },
  {
    id: 'j3',
    title: 'ITS / 철도통신 현장 공사 관리자',
    department: '인프라사업부',
    location: '충청 / 수도권 현장',
    type: '정규직',
    experience: '경력 5년 이상',
    deadline: '채용시 마감',
    tasks: ['고속도로 ITS 및 철도 LTE-R 시공 총괄 공정 관리', '발주처 협의, 자재 승인 및 현장 안전 관리', '기성 관리 및 준공 서류 작성'],
    requirements: ['정보통신/전기기사 자격 소지 필수', 'ITS 또는 철도 통신 시공 경험자 필수', 'CAD 및 문서 작성능력 우수자']
  },
  {
    id: 'j4',
    title: '현장 안전보건 관리자',
    department: '안전품질실',
    location: '전국 시공 현장',
    type: '정규직',
    experience: '경력 3년 이상',
    deadline: '채용시 마감',
    tasks: ['시공 현장 위험성 평가 및 안전점검 수행', 'TBM(작업전 안전점검) 지도를 위한 현장 순찰', '안전보건 교육 시행 및 산업안전보건법 준수'],
    requirements: ['산업안전기사 또는 건설안전기사 자격증 필수', '중대재해처벌법 관련 가이드 이해자', '현장 소통 능력 우수자']
  }
];

export const PROCESS_STEPS = [
  { step: '01', title: '현장 조사', desc: '지형, 관로, 기설 인프라 및 위험요인 사전 정밀 타당성 분석' },
  { step: '02', title: '설계', desc: '최적 선로 루트, 설비 용량 계산 및 표준화된 시공 도면 작성' },
  { step: '03', title: '시공', desc: '전문 기술인력 및 규격 장비를 통한 철저한 품질/안전 수칙 준수 시공' },
  { step: '04', title: '품질 검수', desc: 'OTDR 광손실, RF 전파 측정, insulation 시험 등 100% 전수 검사' },
  { step: '05', title: '운영·유지보수', desc: '24시간 365일 비상 대기 상황실 운영 및 정기 선로 예방 점검' }
];
