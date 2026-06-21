import "./ServiceSummary.css"
function ServiceSummary({ serviceSummary }) {
  return (
    <section className="dashboard-card">
      <h2>Service summary</h2>

      <div className="summary-grid">
        <div className="summary-box">
          <span>Service</span>
          <h3 className="service">{serviceSummary.service}</h3>
        </div>

        <div className="summary-box">
          <span>Your Referrals</span>
          <h3>{serviceSummary.yourReferrals}</h3>
        </div>

        <div className="summary-box">
          <span>Active Referrals</span>
          <h3>{serviceSummary.activeReferrals}</h3>
        </div>

        <div className="summary-box">
          <span>Total Ref. Earnings</span>
          <h3>{serviceSummary.totalRefEarnings}</h3>
        </div>
      </div>
    </section>
  );
}

export default ServiceSummary;