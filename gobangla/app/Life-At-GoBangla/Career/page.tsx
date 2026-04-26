'use client';

import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import { useState } from "react";

interface JobCard {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  color: string;
}

const jobOpenings: JobCard[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team and build amazing user experiences with React and Next.js.',
    requirements: ['5+ years React experience', 'Next.js proficiency', 'TypeScript expertise', 'UI/UX collaboration skills'],
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Join our backend and frontend team to develop robust and scalable web applications serving millions of users.',
    requirements: ['Node.js experience', 'Database design', 'REST API development', 'Frontend frameworks knowledge'],
    color: '#0ea5e9',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user interfaces for our digital products. Work closely with product managers and developers.',
    requirements: ['Figma proficiency', 'Design system experience', 'User research knowledge', 'Prototyping skills'],
    color: '#ec4899',
  },
  {
    id: 4,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Lead our marketing initiatives and develop strategies to grow our brand presence and drive customer acquisition.',
    requirements: ['3+ years marketing experience', 'Campaign management', 'Analytics skills', 'Leadership ability'],
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'Data Analyst',
    department: 'Data & Analytics',
    location: 'Remote',
    type: 'Full-time',
    description: 'Analyze complex datasets to provide actionable insights using SQL, Python, and visualization tools.',
    requirements: ['SQL expertise', 'Python or R knowledge', 'Data visualization', 'Statistical analysis'],
    color: '#10b981',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage and optimize our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability.',
    requirements: ['AWS/GCP experience', 'Docker & Kubernetes', 'CI/CD pipeline setup', 'System administration'],
    color: '#8b5cf6',
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    description: 'Develop high-performance mobile applications for iOS and Android that delight our users.',
    requirements: ['React Native or Flutter', 'Mobile UI design', 'API integration', 'Version control expertise'],
    color: '#ef4444',
  },
];

const departments = ['All', ...Array.from(new Set(jobOpenings.map(j => j.department)))];
const googleFormLink = 'https://forms.gle/usSu3ogHc2K7QXcZ6';

const deptIcons: Record<string, string> = {
  Engineering: '⚙️',
  Design: '🎨',
  Marketing: '📣',
  'Data & Analytics': '📊',
  Infrastructure: '🏗️',
};

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeFilter === 'All'
    ? jobOpenings
    : jobOpenings.filter(j => j.department === activeFilter);

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }
        .career-page { font-family: 'Sora', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        .fu1 { animation: fadeUp 0.6s 0.05s ease both; }
        .fu2 { animation: fadeUp 0.6s 0.15s ease both; }
        .fu3 { animation: fadeUp 0.6s 0.25s ease both; }
        .fu4 { animation: fadeUp 0.6s 0.35s ease both; }
        .fu5 { animation: fadeUp 0.6s 0.45s ease both; }

        .grad-text {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 45%, #8b5cf6 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 5s ease infinite;
        }

        .pulse-ring { animation: pulseDot 2s infinite; }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.07;
          pointer-events: none;
        }

        .filter-btn {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1.5px solid #e5e7eb;
          background: #ffffff;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .filter-btn:hover {
          border-color: #d1d5db;
          color: #111827;
          background: #f9fafb;
        }
        .filter-btn.active {
          background: #111827;
          border-color: #111827;
          color: #ffffff;
        }

        .job-card {
          background: #ffffff;
          border: 1.5px solid #f0f0f0;
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .job-card:hover {
          border-color: #e0e0e0;
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.07);
        }

        .apply-btn {
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          display: block;
          transition: all 0.25s ease;
          color: #fff;
          margin-top: auto;
        }
        .apply-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .stat-card {
          background: #f9fafb;
          border: 1.5px solid #f0f0f0;
          border-radius: 16px;
          padding: 20px 28px;
          text-align: center;
          transition: all 0.25s ease;
        }
        .stat-card:hover {
          background: #f3f4f6;
          border-color: #e5e7eb;
          transform: translateY(-2px);
        }

        .req-tag {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 6px;
          background: #f3f4f6;
          color: #6b7280;
          border: 1px solid #e5e7eb;
          white-space: nowrap;
        }

        .loc-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 999px;
          background: #f3f4f6;
          color: #6b7280;
          border: 1px solid #e5e7eb;
        }

        .bottom-cta {
          background: #f9fafb;
          border: 1.5px solid #f0f0f0;
          border-radius: 24px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .main-cta-btn {
          font-family: 'Sora', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111827;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .main-cta-btn:hover {
          transform: translateY(-2px);
          background: #1f2937;
          box-shadow: 0 12px 32px rgba(17,24,39,0.2);
        }

        .dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.5;
          pointer-events: none;
        }
      `}</style>

      <Navbar />

      <div className="career-page" style={{ paddingTop: '96px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* ── Hero ── */}
          <div style={{ textAlign: 'center', padding: '80px 0 64px', position: 'relative' }}>
            <div className="dot-grid" />
            <div className="orb" style={{ width: 500, height: 500, background: '#6366f1', top: -100, left: '5%', animation: 'float 8s ease-in-out infinite' }} />
            <div className="orb" style={{ width: 400, height: 400, background: '#10b981', top: 0, right: '5%', animation: 'float 10s ease-in-out infinite reverse' }} />

            {/* Badge */}
            <div className="fu1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: 999, padding: '6px 16px', marginBottom: 28 }}>
              <span className="pulse-ring" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#059669', fontFamily: 'JetBrains Mono, monospace' }}>
                {jobOpenings.length} positions open now
              </span>
            </div>

            {/* Title */}
            <h1 className="fu2" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', fontWeight: 800, lineHeight: 1.1, color: '#0f172a', margin: '0 0 8px', letterSpacing: '-0.03em' }}>
              Build your Future<br />
              <span className="grad-text">with GoBangla</span>
            </h1>

            {/* Subtitle */}
            <p className="fu3" style={{ fontSize: 17, color: '#6b7280', lineHeight: 1.75, maxWidth: 520, margin: '20px auto 40px', fontWeight: 400 }}>
              We're assembling a world-class team. Join us and work on products that impact millions of lives across Bangladesh and beyond.
            </p>

            {/* Stats */}
            <div className="fu4" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { n: '50+', l: 'Team Members' },
                { n: `${jobOpenings.length}`, l: 'Open Roles' },
                { n: '4', l: 'Departments' },
                { n: '100%', l: 'Remote Friendly' },
              ].map(s => (
                <div key={s.l} className="stat-card">
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="fu5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="#jobs" className="main-cta-btn">
                View Open Roles <span style={{ fontSize: 18 }}>↓</span>
              </a>
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, fontWeight: 500, color: '#9ca3af', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationColor: '#d1d5db', transition: 'color 0.2s', fontFamily: 'Sora, sans-serif' }}
                onMouseOver={e => (e.currentTarget.style.color = '#374151')}
                onMouseOut={e => (e.currentTarget.style.color = '#9ca3af')}
              >
                Open application →
              </a>
            </div>
          </div>

          {/* ── Filter Tabs ── */}
          <div id="jobs" style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {departments.map(d => (
                <button
                  key={d}
                  className={`filter-btn ${activeFilter === d ? 'active' : ''}`}
                  onClick={() => setActiveFilter(d)}
                >
                  {d !== 'All' && deptIcons[d] ? `${deptIcons[d]} ` : ''}{d}
                  {d !== 'All' && (
                    <span style={{ marginLeft: 6, fontSize: 11, opacity: 0.6 }}>
                      {jobOpenings.filter(j => j.department === d).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Job Cards ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20, marginBottom: 80 }}>
            {filtered.map((job) => (
              <div
                key={job.id}
                className="job-card"
                onMouseEnter={() => setHoveredId(job.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  boxShadow: hoveredId === job.id ? `0 20px 60px ${job.color}15` : '0 2px 8px rgba(0,0,0,0.04)',
                  borderColor: hoveredId === job.id ? `${job.color}40` : '#f0f0f0',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${job.color}, ${job.color}44)`,
                  borderRadius: '20px 20px 0 0',
                  opacity: hoveredId === job.id ? 1 : 0.35,
                  transition: 'opacity 0.3s',
                }} />

                {/* Header */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: 12,
                      background: `${job.color}12`,
                      border: `1.5px solid ${job.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                    }}>
                      {deptIcons[job.department] || '💼'}
                    </div>
                    <span className="loc-badge">
                      <span style={{ fontSize: 10 }}>📍</span> {job.location}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {job.title}
                  </h2>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 999,
                      background: `${job.color}12`, color: job.color,
                      border: `1px solid ${job.color}25`,
                    }}>
                      {job.department}
                    </span>
                    <span style={{
                      fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 999,
                      background: '#f3f4f6', color: '#6b7280',
                      border: '1px solid #e5e7eb',
                    }}>
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: 13.5, color: '#6b7280', lineHeight: 1.7, margin: '0 0 20px', flexGrow: 1 }}>
                  {job.description}
                </p>

                {/* Requirements */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                    Requirements
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {job.requirements.map((req, i) => (
                      <span key={i} className="req-tag">{req}</span>
                    ))}
                  </div>
                </div>

                {/* Apply button */}
                <a
                  href={'https://forms.gle/usSu3ogHc2K7QXcZ6'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-btn"
                  style={{ background: `linear-gradient(135deg, ${job.color}dd, ${job.color})` }}
                >
                  Apply for this role →
                </a>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="bottom-cta" style={{ marginBottom: 80 }}>
            <div className="orb" style={{ width: 300, height: 300, background: '#8b5cf6', top: -60, left: '35%', opacity: 0.06 }} />
            <div style={{ fontSize: 44, marginBottom: 16 }}>🚀</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#0f172a', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
              Don't see the right role?
            </h2>
            <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.75 }}>
              We're always on the lookout for exceptional talent. Send us your portfolio and let's start a conversation.
            </p>
            <a href={'https://forms.gle/usSu3ogHc2K7QXcZ6'} target="_blank" rel="noopener noreferrer" className="main-cta-btn">
              Submit Open Application →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}