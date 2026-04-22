"use client";

import { useState } from "react";

interface DonateModalProps {
  charityName: string;
  campaignId?: string;
  onClose: () => void;
}

const PRESET_AMOUNTS = [10, 25, 50, 100];

export default function DonateModal({ charityName, campaignId, onClose }: DonateModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomChange = (value: string) => {
    setCustomAmount(value);
    const num = parseFloat(value);
    if (!isNaN(num) && num > 0) {
      setSelectedAmount(num);
    }
  };

  const handleDonate = async () => {
    if (selectedAmount < 1) {
      setError("Minimum donation is $1");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedAmount * 100, // convert dollars to cents
          charityName,
          campaignId,
          donorName,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      
      window.location.href = data.url; // redirect to Stripe hosted checkout
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start donation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-2xl border border-gold/30 bg-[#0a0f0d] p-6 shadow-2xl"
        style={{ background: '#111a14' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-display font-bold text-[#f0ede6]">
            Donate to {charityName}
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'rgba(240,237,230,0.65)' }}>
            Support this cause through GolfGives
          </p>
        </div>

        {/* Amount selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-3" style={{ color: 'rgba(240,237,230,0.65)' }}>
            Select Amount
          </label>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => handlePresetClick(amount)}
                className={`py-3 rounded-lg font-semibold transition-all ${
                  selectedAmount === amount && !isCustom
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-deep'
                    : 'border border-gold/30 text-gold hover:bg-gold/10'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
          
          {/* Custom amount */}
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={isCustom}
              onChange={() => setIsCustom(true)}
              className="w-4 h-4 accent-gold"
            />
            <input
              type="number"
              min="1"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => handleCustomChange(e.target.value)}
              onFocus={() => setIsCustom(true)}
              className="flex-1 rounded-lg px-4 py-2 outline-none transition-all focus:border-[rgba(201,168,76,0.5)]"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#f0ede6' }}
            />
          </div>
        </div>

        {/* Donor info */}
        <div className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(240,237,230,0.65)' }}>
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full rounded-lg px-4 py-2 outline-none transition-all focus:border-[rgba(201,168,76,0.5)]"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#f0ede6' }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(240,237,230,0.65)' }}>
              Message (Optional, max 200 chars)
            </label>
            <textarea
              placeholder="Add a message with your donation..."
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 200))}
              maxLength={200}
              rows={3}
              className="w-full rounded-lg px-4 py-2 outline-none transition-all focus:border-[rgba(201,168,76,0.5)] resize-none"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#f0ede6' }}
            />
            <p className="text-xs mt-1" style={{ color: 'rgba(240,237,230,0.3)' }}>
              {message.length}/200
            </p>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="mb-4 text-sm" style={{ color: '#f87171' }}>
            {error}
          </p>
        )}

        {/* Submit button */}
        <button
          onClick={handleDonate}
          disabled={loading || selectedAmount < 1}
          className="w-full py-4 rounded-full font-semibold text-deep transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 hover:shadow-glow"
          style={{ background: 'linear-gradient(to right, #c9a84c, #b8923e)' }}
        >
          {loading ? 'Processing...' : `Donate $${selectedAmount} with Card →`}
        </button>
      </div>
    </div>
  );
}
