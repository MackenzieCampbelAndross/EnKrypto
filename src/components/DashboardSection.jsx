export default function DashboardSection() {
  return (
    <section className="ent-section" id="interface" style={{ paddingBottom: '20vh' }}>
      <div className="ent-container">
        {/* Explicitly colored heading for visibility */}
        <h2 className="ent-heading reveal-up delay-1" style={{ color: '#F5F4F0' }}>
          Verifiable truth, <br/>
          <strong style={{ color: '#F5F4F0', webkitTextFillColor: '#F5F4F0' }}>visualized in real-time.</strong>
        </h2>
        
        <div className="dashboard-mockup reveal-up delay-2" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="dash-header" style={{ borderBottom: '1px solid #292929' }}>
            <div className="mac-dot"></div>
            <div className="mac-dot"></div>
            <div className="mac-dot"></div>
          </div>
          <div className="dash-body">
            <div className="dash-sidebar" style={{ borderRight: '1px solid #292929' }}>
              <div className="dash-nav-item active"></div>
              <div className="dash-nav-item"></div>
              <div className="dash-nav-item" style={{ width: '60%' }}></div>
            </div>
            <div className="dash-main">
              <div className="dash-top-metrics">
                <div className="metric-box">
                  <div className="metric-label" style={{ color: 'rgba(245,244,240,0.5)' }}>SYSTEM STATUS</div>
                  <div className="metric-value status-active" style={{ color: '#F5F4F0' }}>OPERATIONAL</div>
                </div>
                <div className="metric-box">
                  <div className="metric-label" style={{ color: 'rgba(245,244,240,0.5)' }}>LATEST BLOCK HASH</div>
                  <div className="metric-value" style={{ color: '#F5F4F0' }}>0x8f3C...9A21</div>
                </div>
                <div className="metric-box">
                  <div className="metric-label" style={{ color: 'rgba(245,244,240,0.5)' }}>EVENTS VERIFIED (24H)</div>
                  <div className="metric-value" style={{ color: '#F5F4F0' }}>1,402,993</div>
                </div>
              </div>
              <div className="dash-table">
                <div className="metric-label" style={{ marginBottom: '1rem', color: 'rgba(245,244,240,0.5)' }}>LIVE AUDIT TIMELINE</div>
                <div style={{ height: '24px', background: '#292929', borderRadius: '4px', marginBottom: '8px' }}></div>
                <div style={{ height: '24px', background: '#292929', borderRadius: '4px', marginBottom: '8px', width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}