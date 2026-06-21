import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getReferralDashboard } from "../../api/referralApi";
import MetricCard from "../../components/MetricCard/MetricCard";
import ServiceSummary from "../../components/ServiceSummary/ServiceSummary";
import ShareReferral from "../../components/ShareReferral/ShareReferral";
import ReferralTable from "../../components/ReferralTable/ReferralTable";
import "./DashboardPage.css";
import Footer from "../../components/Footer/Footer";

function DashboardPage() {
const [dashboardData, setDashboardData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [searchTerm, setSearchTerm] = useState("");
const [sortBy, setSortBy] = useState("");
const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getReferralDashboard();

// console.log(response.data.serviceSummary);


setDashboardData(response.data);
      
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

if (loading) {
  return <h2>Loading...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}
const filteredReferrals = dashboardData.referrals
  .filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    }

    return 0;
  });

const referralsPerPage = 10;

const indexOfLastReferral = currentPage * referralsPerPage;
const indexOfFirstReferral =
  indexOfLastReferral - referralsPerPage;

const currentReferrals = filteredReferrals.slice(
  indexOfFirstReferral,
  indexOfLastReferral
);

const totalPages = Math.ceil(
  filteredReferrals.length / referralsPerPage
);
  return (
  <>
  <div className="structure">

  
    <Navbar />

    <h1 className="dashboard-title">Referral Dashboard</h1>

    <p>
      Track your referrals, earnings, and partner activity in one place.
    </p>

<section className="dashboard-card">
  <h2>Overview</h2>

  <div className="metrics-grid">
    {dashboardData.metrics.map(metric => (
      <MetricCard
        key={metric.id}
        label={metric.label}
        value={metric.value}
      />
    ))}
  </div>
</section>
    <ServiceSummary
      serviceSummary={dashboardData.serviceSummary}
    />
    <ShareReferral referral={dashboardData.referral} />

<div className="search-sort-container">
  <input
    type="text"
    placeholder="Search referrals..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option value="">No Sorting</option>
    <option value="name">Sort by Name</option>
    <option value="date">Sort by Date</option>
  </select>
</div>

<ReferralTable referrals={currentReferrals} />

<div className="table-footer">

  <p>
    Showing {indexOfFirstReferral + 1}–
    {Math.min(
      indexOfLastReferral,
      filteredReferrals.length
    )} of {filteredReferrals.length} entries
  </p>

  <div className="pagination-container">

    <button
      className="pagination-btn"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Previous
    </button>

    {Array.from(
      { length: totalPages },
      (_, index) => (
        <button
          key={index + 1}
          className={
            currentPage === index + 1
              ? "page-btn active"
              : "page-btn"
          }
          onClick={() =>
            setCurrentPage(index + 1)
          }
        >
          {index + 1}
        </button>
      )
    )}

    <button
      className="pagination-btn"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>

  </div>

</div>
    {/* <ReferralTable referrals={filteredReferrals} /> */}
</div>
<Footer/>
  </>
);
}

export default DashboardPage;