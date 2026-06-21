import "./ShareReferral.css";
function ShareReferral({ referral }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <section className="dashboard-card">
  <h2>Refer friends and earn more</h2>

  <div className="share-grid">

    <div>
      <label>Your Referral Link</label>

      <div className="copy-row">
        <input value={referral.link} readOnly />

        <button className="btnColor"
          onClick={() => copyToClipboard(referral.link)}
        >
          Copy
        </button>
      </div>
    </div>

    <div>
      <label>Your Referral Code</label>

      <div className="copy-row">
        <input value={referral.code} readOnly className = "input-box2" />

        <button className="btnColor"
          onClick={() => copyToClipboard(referral.code)}
        >
          Copy
        </button>
      </div>
    </div>

  </div>
</section>
  );
}

export default ShareReferral;