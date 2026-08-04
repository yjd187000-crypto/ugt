import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is missing or unconfigured.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

const SYSTEM_INSTRUCTION = `
너는 대한민국 대표 정보통신 및 전기 인프라 전문 기업 ㈜유지텔레컴(UG Telecom Co., Ltd.)의 'AI 스마트 상담원'이다.
방문자에게 친절하고 신뢰감 있으며 전문적인 톤(존댓말)으로 답변해라.

[회사 기본 정보]
- 회사명: ㈜유지텔레컴 (UG TELECOM CO., LTD.)
- 대표이사: 정우창
- 설립일: 2005년 7월 8일 (20년 이상의 풍부한 정보통신/전기 시공 축적 경험)
- 본사 주소: 경기도 용인시 기흥구 고매로 223
- 대표 전화: 02-6672-8500
- 대표 이메일: money@ugt.kr
- 비전: 국가 핵심 정보통신 인프라를 선도하는 1등 기술 파트너
- 경영 이념: 안전(Safety), 품질(Quality), 신뢰(Trust), 혁신(Innovation)

[주요 사업 분야]
1. 이동통신망: 5G/LTE 기지국 설치 및 고도화, 인빌딩 중계기 시공, 안테나/RRU 교체, 이음5G(특화망) 구축, 무선 품질 최적화
2. 광통신망: FTTH/FTTB 구내통신망, 기간 광전송망, 광케이블 포설 및 광융착 접속, OTDR 손실 정밀 측정
3. 네트워크 인프라: 통신국사, 데이터센터, 공공기관 및 기업 구내 통신실 백본 스위치, 랙 구성, CAT.6A/CAT.7 구조화 배선
4. ITS 및 스마트시티: 지능형 교통체계(ITS), C-ITS(차량·사물 통신), 도로/터널 CCTV, VMS(전광판), 교통관제센터 통신망
5. 철도 및 도로 통신: LTE-R/KTCS-2 철도 무선통신, 터널/지하철 누설비동축케이블(LCX), 철도 신호 및 제어 통신망
6. 전기 설비 및 신재생: 수배전반, 변전 인프라, 태양광/EV 충전소 전력 선로, 비상발전기 및 UPS 설비 시공

[핵심 강점 및 자격]
- 정보통신공사업 면허, 전기공사업 면허 보유
- ISO 9001 (품질경영시스템), ISO 14001 (환경경영시스템), ISO 45001 (안전보건경영시스템) 인증
- 중대재해 Zero 목표 및 현장 안전관리자 상주
- 24/7 365일 긴급 장애 대응 체계 보유

[문의 및 채용 안내]
- 견적 문의 및 프로젝트 협의: 전화 02-6672-8500 또는 홈페이지 '견적 및 사업 문의' 페이지 이용 안내
- 회사 소개서: 홈페이지 내 '회사소개서 브로슈어(PDF)' 다운로드 가능
- 채용: 통신/전기 현장 엔지니어, 사업관리, 안전관리자 상시/공채 모집 중

[응답 지침]
1. 유지텔레컴 관련 질문에 정성을 다해 정확히 답변해라.
2. 질문과 관련 있는 메뉴나 페이지(예: 견적 문의 페이지, 사업 분야, 브로슈어 다운로드)로 안내해라.
3. 관련 없는 개인적 질문이나 타사 정보에 대해서는 정중하게 유지텔레컴 관련 상담 전문임을 밝히고 안내해라.
4. 문단이나 요점을 깔끔하게 작성하여 읽기 쉽게 해라.
`;

// Fallback intelligent response generator when API key or quota is depleted
function getFallbackReply(message: string): string {
  const query = message.toLowerCase();

  if (query.includes('사업') || query.includes('분야') || query.includes('어떤') || query.includes('뭐')) {
    return `㈜유지텔레컴은 대한민국 최고 수준의 정보통신 및 전기 인프라 시공 기술력을 보유하고 있습니다.

주요 사업 분야:
1. **이동통신망**: 5G/LTE 기지국, 인빌딩 중계기, 특화망(이음5G) 시공
2. **광통신망**: FTTH/FTTB 구내통신, 광전송망, 광케이블 포설 및 정밀 접속
3. **네트워크 인프라**: 데이터센터, 통신국사, 백본 스위치, 구조화 배선(CAT.6A/7)
4. **ITS & 스마트시티**: 지능형 교통체계, C-ITS, 터널 CCTV, 교통관제 네트워크
5. **철도/도로 통신**: LTE-R, 철도 신호 제어망, 지하철/터널 LCX 시공
6. **전기설비 & 신재생**: 수배전반, 태양광/EV 충전 전력망, UPS 비상전원

자세한 내용은 상단 [사업분야] 메뉴에서 확인하실 수 있습니다.`;
  }

  if (query.includes('견적') || query.includes('문의') || query.includes('공사') || query.includes('단가') || query.includes('신청')) {
    return `㈜유지텔레컴 프로젝트 견적 및 사업 문의 안내드립니다. 📑

• **대표 전화**: 02-6672-8500
• **이메일**: money@ugt.kr
• **온라인 문의**: 상단 메뉴의 [견적 및 사업 문의] 페이지를 통해 프로젝트 관련 세부 사항을 남겨주시면 담당 사업부에서 신속히 안내해 드립니다.`;
  }

  if (query.includes('위치') || query.includes('주소') || query.includes('연락처') || query.includes('전화') || query.includes('어디')) {
    return `㈜유지텔레컴 본사 및 주요 연락처 안내입니다. 📍

• **본사 주소**: 경기도 용인시 기흥구 고매로 223
• **대표 전화**: 02-6672-8500
• **대표 이메일**: money@ugt.kr
• **설립일**: 2005년 7월 8일 (대표이사 정우창)`;
  }

  if (query.includes('자격') || query.includes('인증') || query.includes('면허') || query.includes('안전') || query.includes('품질')) {
    return `㈜유지텔레컴은 검증된 면허와 품질/안전보건 경영 시스템을 갖추고 있습니다. 🛡️

• **면허**: 정보통신공사업 면허, 전기공사업 면허 보유
• **국제 인증**: ISO 9001 (품질), ISO 14001 (환경), ISO 45001 (안전보건)
• **안전 관리**: 중대재해 Zero 지향, 전 현장 전담 안전관리자배치 및 24시간 긴급 장애 대응`;
  }

  if (query.includes('채용') || query.includes('입사') || query.includes('구직') || query.includes('취업')) {
    return `㈜유지텔레컴 채용 정보 안내입니다. 💼

• **모집 직군**: 정보통신 현장 엔지니어, 전기공사 기술자, 공사 관리자, 안전관리자
• **지원 방법**: 홈페이지 상단 [인재채용] 메뉴에서 상세 모집 요강 및 우대사항을 확인하실 수 있습니다.`;
  }

  if (query.includes('브로슈어') || query.includes('소개서') || query.includes('지명원') || query.includes('pdf')) {
    return `㈜유지텔레컴 공식 지명원 및 회사소개서(PDF)는 홈페이지 내 [회사소개서 다운로드] 버튼을 통해 편리하게 받아보실 수 있습니다.`;
  }

  return `안녕하세요! ㈜유지텔레컴 AI 스마트 상담원입니다. 😊

㈜유지텔레컴은 광통신, 5G/LTE 이동통신, ITS 지능형교통체계, 철도통신, 전기설비 공사를 전문으로 수행하는 국가 정보통신 기술 파트너입니다.

궁금하신 사업 분야, 프로젝트 견적, 회사 위치 등에 대해 질문해 주시면 친절히 안내해 드리겠습니다.
📞 **대표전화**: 02-6672-8500 | ✉️ **이메일**: money@ugt.kr`;
}

// AI Chatbot API Endpoint
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "메시지를 입력해주세요." });
    return;
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is unconfigured");
    }

    const ai = getGeminiClient();

    // Format chat history
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.role === "user" || item.role === "model") {
          contents.push({
            role: item.role,
            parts: [{ text: item.content }],
          });
        }
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || getFallbackReply(message);
    res.json({ reply: replyText });
  } catch (error: any) {
    console.warn("Gemini API call failed or quota depleted, using smart fallback reply:", error?.message || error);
    // Provide a smart fallback reply without returning an error code
    const fallbackReply = getFallbackReply(message);
    res.json({ reply: fallbackReply });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
