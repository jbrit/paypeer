import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  amount: number;
  timestamp: number;
  type: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text: number) => <>$ {(text / 100).toFixed(2)}</>,
  },
  {
    title: "Time",
    dataIndex: "timestamp",
    key: "timestamp",
    render: (text: number) => (
      <>{new Date(text).toLocaleString("en-US", { timeZone: "UTC" })}</>
    ),
  },
  {
    title: "",
    key: "type",
    dataIndex: "type",
    render: (_, { type }) => (
      <>
        <Tag color={type.includes("out") ? "volcano" : "green"}>
          {type.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: "",
    key: "more",
    render: (_, { type }) => (
      <>{type.includes("out") ? "To" : "From"} PayPeer</>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    amount: 10000,
    timestamp: 1669999534000,
    type: "transfer in",
  },
  {
    key: "2",
    amount: 53450,
    timestamp: 1669799534000,
    type: "transfer out",
  },
  {
    key: "3",
    amount: 12900,
    timestamp: 1669959534000,
    type: "transfer out",
  },
];

const Transactions: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default Transactions;
