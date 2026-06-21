import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import { getReferralDashboard } from "../../api/referralApi";
import "./ReferralDetailsPage.css"

function ReferralDetailsPage() {
  const { id } = useParams();

  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReferral = async () => {
      try {
        const response = await getReferralDashboard();

        const selectedReferral = response.data.referrals.find(
          (item) => item.id.toString() === id
        );

        setReferral(selectedReferral);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReferral();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!referral) {
    return <h2>Referral not found</h2>;
  }

//   return (
//     <>
//       <Navbar />

//       <h1>Referral Details</h1>

//       <p><strong>Name:</strong> {referral.name}</p>
//       <p><strong>Service:</strong> {referral.service}</p>
//       <p><strong>Date:</strong> {referral.date}</p>
//       <p><strong>Profit:</strong> {referral.profit}</p>
//       <p><strong>Status:</strong> {referral.status}</p>
//     </>
//   );

return (
  <>
    <Navbar />

    <div className="details-container">

      <a href="/" className="back-link">
        ← Back to dashboard
      </a>

      <h1 className="details-title">
        Referral Details
      </h1>

      <p className="details-subtitle">
        Full information for this referral partner.
      </p>

      <div className="details-card">

        <div className="card-header">
          <h2>{referral.name}</h2>

          <span className="service-badge">
            {referral.serviceName}
          </span>
        </div>

        <div className="detail-row">
          <span>REFERRAL ID</span>
          <strong>{referral.id}</strong>
        </div>

        <div className="detail-row">
          <span>NAME</span>
          <strong>{referral.name}</strong>
        </div>

        <div className="detail-row">
          <span>SERVICE NAME</span>
          <strong>{referral.serviceName}</strong>
        </div>

        <div className="detail-row">
          <span>DATE</span>
          <strong>{referral.date}</strong>
        </div>

        <div className="detail-row">
          <span>PROFIT</span>
          <strong>${referral.profit}</strong>
        </div>

      </div>

    </div>
    <Footer/>
  </>
);
}

export default ReferralDetailsPage;