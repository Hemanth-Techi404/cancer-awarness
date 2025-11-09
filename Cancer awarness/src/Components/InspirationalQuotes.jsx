import { useState, useEffect } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

export default function InspirationalQuotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'qIrp5RemTseDYUJxLl+M+w==7CrEg6cVknajEsSE'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setQuote({
        content: data[0].quote,
        author: data[0].author
      });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Inspiration</h2>
          <p className="text-lg text-gray-600">
            Words of hope and encouragement to brighten your day
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden border border-gray-100">
          <div className="absolute top-4 left-4 opacity-10">
            <Quote className="w-24 h-24 text-rose-500" />
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <RefreshCw className="w-8 h-8 text-rose-500 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Unable to load quote at the moment.</p>
              <button
                onClick={fetchQuote}
                className="text-rose-500 hover:text-rose-600 font-semibold"
              >
                Try Again
              </button>
            </div>
          ) : quote ? (
            <div className="relative z-10">
              <blockquote className="text-2xl sm:text-3xl font-serif text-gray-800 mb-6 leading-relaxed">
                "{quote.content}"
              </blockquote>
              <p className="text-lg text-gray-600 font-semibold">— {quote.author}</p>
            </div>
          ) : null}

          <div className="mt-8 flex justify-center">
            <button
              onClick={fetchQuote}
              disabled={loading}
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              New Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
