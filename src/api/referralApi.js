import axios from "axios";
import Cookies from "js-cookie";

const REFERRAL_API =
  "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals";

export const getReferralDashboard = async () => {
  const token = Cookies.get("jwt_token");

  const response = await axios.get(REFERRAL_API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};