"use client";

import { useState, useEffect } from "react";
import { MetricDefinitionList } from "../components/MetricDefinitionList";

const metrics = [
  { name: "MRR", href: "mrr" },
  { name: "ARR", href: "arr" },
  { name: "Churn Rate", href: "churn" },
  { name: "Active Users", href: "active" },
  { name: "LTV", href: "ltv" },
  { name: "CAC", href: "cac" },
  { name: "Gross Margin", href: "gross" },
];

export default function DashboardHome() {
  const [selectedMetric, setSelectedMetric] = useState<string>(metrics[0].href);

  interface MetricData {
    [key: string]: string | number | boolean | null | object;
  }

  const [data, setData] = useState<MetricData | null>(null);

  useEffect(() => {
    if (selectedMetric) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/metrics/${selectedMetric}`
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching metric data:", error);
          setData(null);
        }
      };

      fetchData();
    }
  }, [selectedMetric]);

  return (
    <div className="row no-gutter">
      {/* Sidebar */}
      <div className="col-3 sidebar">
        <ul className="sidebar-list">
          {metrics.map((metric) => (
            <button
              className="rounded-full"
              key={metric.name}
              onClick={() => {
                setSelectedMetric(metric.href);
              }}
            >
              {metric.name}
            </button>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="col-9 dashboard-content">
        {selectedMetric ? (
          <div>
            <h2 className="white-text text-uppercase">
              {selectedMetric} Values
            </h2>
            <div className="row no-gutter">
              <div className="dashboard-card col-lg-4">
                {data ? (
                  <MetricDefinitionList data={data} />
                ) : (
                  <p>Loading data...</p>
                )}
                
              </div>
            </div>

            

            {/* Optionally, add a button to clear the selected metric */}
            <button onClick={() => setSelectedMetric(metrics[0].href)}>
              Back
            </button>
          </div>
        ) : (
          <p>Please select a metric to view its details.</p>
        )}
      </div>
    </div>
  );
}
