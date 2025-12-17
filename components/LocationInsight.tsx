import React, { useState } from 'react';
import { MapPin, Loader, ExternalLink, Leaf } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface LocationInsightProps {
  location: string;
}

export const LocationInsight: React.FC<LocationInsightProps> = ({ location }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [groundingUrls, setGroundingUrls] = useState<{title: string, uri: string}[]>([]);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(false);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";

      const response = await ai.models.generateContent({
        model: model,
        contents: `Describe brevemente (máx 50 palabras) el clima y la geografía agrícola de ${location} en Chile. ¿Por qué es buena zona para cultivar? Menciona 1 hito local.`,
        config: {
          tools: [{ googleMaps: {} }],
        },
      });

      const text = response.text;
      setInsight(text || "No se pudo obtener información de la zona.");

      // Extract Google Maps grounding chunks
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const urls: {title: string, uri: string}[] = [];
      
      if (chunks) {
        chunks.forEach((chunk: any) => {
          if (chunk.web?.uri) {
             urls.push({ title: chunk.web.title || 'Fuente Web', uri: chunk.web.uri });
          }
          if (chunk.maps?.uri) {
             urls.push({ title: chunk.maps.title || 'Ubicación en Maps', uri: chunk.maps.uri });
          }
          // Handle specific place answer sources if available
          if (chunk.maps?.placeAnswerSources?.reviewSnippets) {
              // Logic for snippets if needed
          }
        });
      }
      setGroundingUrls(urls);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (insight) {
    return (
      <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100 animate-in fade-in">
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 p-2 rounded-full mt-1">
            <MapPin className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 text-sm mb-1">Contexto Geográfico (Verificado con Maps)</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              {insight}
            </p>
            
            {/* Grounding Sources */}
            {groundingUrls.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {groundingUrls.map((url, idx) => (
                        <a 
                            key={idx}
                            href={url.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-2 py-1 bg-white border border-blue-200 rounded text-xs text-blue-600 hover:underline"
                        >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            {url.title}
                        </a>
                    ))}
                </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {!loading && !error && (
        <button 
          onClick={handleAnalyze}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-agro-green hover:text-agro-green hover:bg-green-50 transition-all font-medium text-sm"
        >
          <Leaf className="h-4 w-4" />
          Analizar Zona de Cultivo con IA
        </button>
      )}

      {loading && (
        <div className="w-full py-4 flex items-center justify-center text-gray-400 text-sm">
          <Loader className="h-4 w-4 animate-spin mr-2" />
          Consultando satélite y mapas...
        </div>
      )}

      {error && (
        <div className="w-full py-3 text-center text-red-500 text-sm bg-red-50 rounded-xl border border-red-100">
          No pudimos conectar con el servicio de mapas.
        </div>
      )}
    </div>
  );
};