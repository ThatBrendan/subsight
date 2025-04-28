"use client";

import { formatLabel } from "../utils/formatLabel";

interface MetricDefinitionListProps {
  readonly data: Record<string, string | number | boolean | null | object>;
}

export function MetricDefinitionList({ data }: MetricDefinitionListProps) {
  return (
    <dl>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="row no-gutter">
          <p className="white-text col-6">{formatLabel(key)}</p>
          <span className="white-text col-6">{String(value)}</span>
        </div>
      ))}
    </dl>
  );
}
