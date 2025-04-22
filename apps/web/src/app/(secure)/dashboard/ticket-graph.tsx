"use client";
import { Column } from "@ant-design/plots";
import { useEffect, useState } from "react";

export default function TicketGraphComponent() {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		setTimeout(() => {
			setData([
				{
					date: "2025-01-01",
					sla: "compliance",
					amount: 8,
				},
				{
					date: "2025-01-02",
					sla: "compliance",
					amount: 16,
				},
				{
					date: "2025-01-03",
					sla: "compliance",
					amount: 11,
				},
				{
					date: "2025-01-04",
					sla: "compliance",
					amount: 12,
				},
				{
					date: "2025-01-05",
					sla: "compliance",
					amount: 2,
				},
				{
					date: "2025-01-05",
					sla: "warning",
					amount: 5,
				},
				{
					date: "2025-01-05",
					sla: "violated",
					amount: 7,
				},
				{
					date: "2025-01-06",
					sla: "compliance",
					amount: 20,
				},
				{
					date: "2025-01-07",
					sla: "compliance",
					amount: 15,
				},
			]);
		}, 1000);
	}, []);

	const config = {
		scale: { color: { palette: "spectral" } },
		xField: "date",
		yField: "amount",
		colorField: "sla",
		stack: true,
		legend: {
			color: {
				itemLabelFill: "rgba(255,255,255,0.85)",
			},
		},
		axis: {
			x: {
				labelFill: "rgba(255,255,255,0.85)",
				lineStroke: "rgba(255,255,255,0.85)",
			},
			y: {
				labelFill: "rgba(255,255,255,0.85)",
			},
		},
	};

	return <Column {...config} data={data} />;
}
