import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import "./ReferralTable.css";

function ReferralTable({ referrals }) {
  const navigate = useNavigate();

  return (
    <section aria-label="All referrals">
      <h2>All Referrals</h2>

      <table className="referral-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {referrals.map((item) => (
            <tr
              key={item.id}
              onClick={() =>
                navigate(`/referral/${item.id}`)
              }
              style={{ cursor: "pointer" }}
            >
              <td>{item.name}</td>
              <td>{item.serviceName}</td>
              <td>{formatDate(item.date)}</td>
              <td className="color">{item.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ReferralTable;