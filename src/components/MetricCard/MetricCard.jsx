import "./MetricCard.css";
function MetricCard({ label, value }) {
  return (
    <div className="card">

        <div className="metric-card">
      <div className="metric-icon">
        📊
      </div>

      <h3 className="metric-value">
        {value}
      </h3>

      <p className="metric-label">
        {label}
      </p>
    </div>

    </div>
    
  );
}

export default MetricCard;