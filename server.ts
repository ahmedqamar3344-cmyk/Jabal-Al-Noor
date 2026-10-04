import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// System instruction with comprehensive company knowledge
const SYSTEM_INSTRUCTION = `
You are "Jabal Al Noor AI", the expert Marine Construction, coastal engineering, and heavy logistics assistant for "Jabal Al Noor Transport & Contracting L.L.C" (JANTC - شركة جبل النور للنقليات والمقاولات ذ.م.م).
The website name is "Jabal Al Noor".

Core Corporate Identity:
- PRIMARY SPECIALIZATION: Marine Construction & Coastal Defense (Activity Code 4290101: Ports & Marine Contracting / مقاولات إنشاء الموانئ والإنشاءات البحرية).
- Established in 2008 / operational command in Fujairah UAE since 2015.
- Managing Director: Qamar Latif. Sister Company: Fakhar Zaman Building Contracting LLC (FZBC).
- Headquarters: Office #202B, UASC Building, Khorfakkan Road, Free Zone Area, Fujairah, UAE. P.O. Box: 2786.
- Operations Hubs: Fujairah Al Hail; Ras Al Khor/Aweer, Dubai; Sharjah Industrial Area 15.
- Official Contacts:
  * WhatsApp / Mobile: +971 56 7499047 (Primary) and +971 55 2568055
  * Landline: 09 2341307
  * Email: info@jantc.ae / jabal.noor2020@gmail.com
- Licenses & Certifications:
  * Fujairah Municipality Professional License: #1014809 (Activity 4290101: Ports & Marine Contracting)
  * Chamber of Commerce & Industry: #19463 (Commercial Reg #10390771)
  * Tax TRN: 100255479600003
  * ICV Score: 26.33% (Certified by Mazars)
  * ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified
  * Milestone: 150,000 Safe Man-Hours without a Lost Time Incident at ECOMAR FOIZ Terminal.

Core Capabilities:
1. Marine Construction & Breakwaters:
   - Offshore breakwaters, coastal revetments, groins, submerged breakwaters, key walls, boat slipways, jetties, beach nourishment, coastal land reclamation.
   - Supply, transport, and precision placement of 1-3 ton and 4-7 ton heavy armor rock using long-reach marine excavators and 25-300T cranes.
   - Notable projects: Delma Island Airport coastal revetment (1.5 km), Al Dana breakwater & lagoon (AED 7.6M), Naqab 1 Dam (AED 12M), Siniya Island reclamation (AED 10.75M), Dadna Port private marinas.
2. Road Works & Hill Cutting: Mountain rock cutting, benching, mass cut-and-fill balancing, E-87 road extension (3.5M CUM cut / 3.0M CUM fill), DEWA tower hillside pads (AED 30M).
3. Heavy Land Transport & Materials Supply: Over 150 fleet units. 45m³ tipper trailers, 50-80T dumpers, lowbeds (20-200T), aggregates 0-40mm, gabbro, limestone, beach sand.
4. Building Construction: Turnkey industrial warehouses, steel structures, labor accommodations, concrete raft foundations with partner FZBC.
5. Rubbish Removals & Demolition: C&D waste haulage, municipal landfill skips, building demolition.
6. Survey & Rentals: Bathymetrical marine surveys, volume audits, 25T-300T mobile cranes, Denyo 4000W soundproof mobile tower lights.

Your Responsibilities:
- Emphasize JANTC's specialized Marine Construction and coastal protection leadership in the UAE.
- Answer client questions accurately, politely, and professionally in both English and Arabic.
- Provide quick estimates for marine armor rock tonnage, breakwater revetment layers, tipper truck cycles from Fujairah quarries to coastal ports, and equipment rentals.
- Always provide WhatsApp dispatch (+971 56 7499047) or landline (09 2341307) for official tender submissions and site mobilization.
- Keep responses concise, clear, and structured with bullet points.
- STRICT CREATOR RULE: NEVER mention Ahmed Qamar anywhere in your answers UNLESS the user directly asks who created you, who made you, who developed you, or who built this. In that case ONLY, you must state: "I was created by Ahmed Qamar" (in Arabic: "تم إنشائي وتطويري بواسطة أحمد قمر"). On all other topics, focus solely on Jabal Al Noor Marine Construction and contracting.
`;

// AI Chat API Route
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const lowerMsg = message.toLowerCase().trim();
    const isCreatorQuery =
      /who (created|made|built|developed|designed|coded|programmed) (you|this|the website)|who is your (creator|developer|maker|author|programmer)|who are you made by|who made this|who created this|من (صنعك|طورك|انشاك|برمجك|صممك|خلقك|سواك|عملك)|من طور هذا الموقع|من صنع هذا الموقع|من برمج هذا الموقع/i.test(
        lowerMsg
      );

    if (isCreatorQuery) {
      const isArabic = /[\u0600-\u06FF]/.test(message);
      const reply = isArabic
        ? 'تم إنشائي وتطويري بواسطة أحمد قمر (I was created by Ahmed Qamar).'
        : 'I was created by Ahmed Qamar.';
      return res.json({ reply, source: 'creator-rule' });
    }

    if (!ai) {
      // Intelligent fallback when API key is not configured
      const reply = `Thank you for contacting Jabal Al Noor Transport & Contracting L.L.C!
Our heavy fleet of 150+ units (45m³ tippers, CAT 50T excavators with breakers, and 25-300T cranes) is ready for immediate deployment across Fujairah, Dubai, Abu Dhabi, and Northern Emirates.

For immediate rates, equipment availability, or material supply quotes (Aggregates 0-40mm, 1-7T Armor Rocks, Beach Sand), please contact our 24/7 WhatsApp dispatch at **+971 56 7499047** or call our Fujairah Headquarters at **09 2341307**.`;

      return res.json({ reply, source: 'fallback' });
    }

    // Call Gemini 3.8 Flash model
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Thank you for contacting Jabal Al Noor. Please connect directly with our WhatsApp dispatch at +971 56 7499047.';
    res.json({ reply, source: 'gemini' });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    res.json({
      reply: `Jabal Al Noor Operations Desk: We have received your inquiry. For real-time dispatch, fleet booking, and official rates, please connect directly with our operations team via WhatsApp at **+971 56 7499047** or call **09 2341307**.`,
      source: 'error-fallback',
    });
  }
});

// Mount Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
