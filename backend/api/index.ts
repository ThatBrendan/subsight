import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/metrics/:metric", (req: Request, res: Response) => {
  const { metric } = req.params;

  const sampleData: Record<string, any> = {
    mrr: { value: "$25,000", monthlyGrowth: "5%" },
    arr: { value: "$300,000", annualGrowth: "12%" },
    churn: { rate: "2.5%", monthlyChurnedCustomers: 5 },
    ltv: { value: "$1,250", averageLifespan: "10 months" },
    cac: { value: "$220", lastMonth: "$210" },
    activeUsers: { count: 1200, percentageChange: "8%" },
    grossMargin: { percentage: "75%", revenueAfterCosts: "$18,750" },
  };

  res.json(sampleData[metric.toLowerCase()] ?? { error: "Metric not found" });
});

app.listen(5000, () => {
  console.log("Adventure running on http://localhost:5000");
});
