import { countBy } from "lodash"
import Plot from "react-plotly.js"
import React from "react"

const PieChartPoliciesByFocus = ({ items }) => {
  const data = countBy(
    items.flatMap((item) => {
      return item.about.focus ? item.about.focus : []
    })
  )

  return (
    <div className="w-full">
      <Plot
        style={{ width: "100%", minHeight: "500px" }}
        data={[
          {
            values: Object.values(data),
            labels: Object.keys(data),
            type: "pie",
            automargin: true,
            sort: true,
            showlegend: true,
            textinfo: "text",
            textposition: "inside",
            texttemplate: "%{percent:1%f}",
            mode: "text",
            hole: 0.7,
          },
        ]}
        layout={{
          autosize: true,
        }}
        config={{ displaylogo: false, responsive: true }}
      />
    </div>
  )
}

export default PieChartPoliciesByFocus
