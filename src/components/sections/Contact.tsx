import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { FiTerminal, FiSend } from 'react-icons/fi';
import { socials } from '@/constants/nav';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { usePortfolio } from '@/context/PortfolioContext';

export default function Contact() {
  const { landing } = usePortfolio();
  const currentSocials = landing?.socials || socials;
  
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const uniqueId = `<contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}@portfolio.local>`;
      
      console.log("Saving to Firestore messages collection...");
      // Save to Firestore Database for the Admin Dashboard
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        messageId: uniqueId,
        status: 'unread',
        createdAt: serverTimestamp()
      });

      console.log("Triggering email delivery via Firebase extension...");
      // Add to 'mail' collection to trigger the email to the owner
      await addDoc(collection(db, 'mail'), {
        to: 'gokulgangadharan79@gmail.com', // Replace with the owner's email
        replyTo: formData.email,
        message: {
          subject: `New Contact Form Submission from ${formData.name}`,
          text: `You have received a new message from your portfolio website.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          html: `<p>You have received a new message from your portfolio website.</p><p><strong>Name:</strong> ${formData.name}<br><strong>Email:</strong> ${formData.email}</p><p><strong>Message:</strong><br>${formData.message.replace(/\n/g, '<br>')}</p>`,
          headers: {
            'Message-ID': uniqueId
          }
        }
      });

      setSent(true);
    } catch (err: any) {
      console.error("Submission Error:", err);
      setError(err.message || "Connection error. Check browser console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16 relative z-10">
        <div className="md:col-span-5">
          <SectionHeading
            index="0x08"
            label="COMMS_LINK"
            title="Initialize Connection."
            description="Secure channel open. Available for enterprise SharePoint architecture, SPFx development, and M365 consulting."
          />

          <Reveal delay={0.2}>
            <div className="mt-16 border-t border-line/30 pt-0 flex flex-col gap-4">
              {currentSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between glass-panel border border-line/30 p-4 group max-w-sm rounded hover:glow-cyan transition-all duration-300"
                >
                  <span className="font-mono text-sm tracking-widest uppercase text-ink-soft group-hover:text-accent">{s.label}</span>
                  <FiTerminal className="text-xl text-ink-soft group-hover:text-accent" />
                </a>
              ))}
              <div className="flex items-center justify-between border border-line/10 p-4 max-w-sm rounded mt-4">
                <span className="font-mono text-sm tracking-widest text-ink-soft">LOCATION</span>
                <span className="font-mono font-bold uppercase text-sm text-secondary glow-text-cyan" style={{textShadow: '0 0 10px rgba(139, 92, 246, 0.5)'}}>Remote / UK</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.15}>
            {sent ? (
              <div className="glass-panel border border-accent/50 rounded-lg p-10 md:p-14 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <p className="font-mono text-accent mb-4">{'>'} STATUS: 200 OK</p>
                <p className="font-display font-bold text-4xl text-ink">Transmission Successful.</p>
                <p className="mt-6 text-ink-soft text-lg">
                  Protocol accepted. I will parse your payload and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel border border-line/30 rounded-lg p-8 md:p-12 space-y-8">
                <div className="flex items-center gap-2 mb-6 border-b border-line/30 pb-4">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  <span className="font-mono text-xs text-ink-soft ml-4">contact.sh</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-xs tracking-widest text-accent block mb-3" htmlFor="name">{'>'} IDENTIFIER</label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="w-full bg-base/50 border border-line/30 rounded p-4 font-mono text-sm text-ink focus:border-accent focus:glow-cyan outline-none transition-all duration-300"
                      placeholder="root@user"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-widest text-secondary block mb-3" htmlFor="email">{'>'} RETURN_ADDRESS</label>
                    <input
                      id="email"
                      required
                      type="email"
                      className="w-full bg-base/50 border border-line/30 rounded p-4 font-mono text-sm text-ink focus:border-secondary focus:glow-purple outline-none transition-all duration-300"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-ink-soft block mb-3" htmlFor="message">{'>'} PAYLOAD</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-base/50 border border-line/30 rounded p-4 font-mono text-sm text-ink focus:border-accent focus:glow-cyan outline-none transition-all duration-300 resize-none"
                    placeholder="Provide transmission details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <Button type="submit" disabled={loading} icon={!loading && <FiSend />}>
                    {loading ? "TRANSMITTING..." : "EXECUTE_TRANSMISSION"}
                  </Button>
                  {error && <p className="text-[#FF5F56] font-mono text-xs">{'>'} ERROR: {error}</p>}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
