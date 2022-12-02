import { Col, Row, Divider, Typography, Button } from "antd";
import Head from "next/head";
import { useState } from "react";
import DashboardLayout from "../../components/layout";
import Transactions from "../../components/transactions";

export default function Dashboard() {
  type currency = "NGN" | "USD";
  const [currency, setCurrency] = useState<currency>("NGN");
  const swapCurrency = () => setCurrency(currency === "NGN" ? "USD" : "NGN");
  return (
    <div>
      <Head>
        <title>Paypeer | Home</title>
        <meta name="description" content="Paypeer Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <Row gutter={16}>
          <Col span={11} offset={1}>
            <Divider>Wallet</Divider>
            <div
              className="balance-card"
              style={{
                border: "1px solid black",
                height: "250px",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
              >
                <button
                  onClick={swapCurrency}
                  style={{
                    border: "1px solid black",
                    padding: "4px",
                    width: "110px",
                    height: "40px",
                    borderRadius: "0.5rem",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "stretch",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ...(currency === "NGN" && {
                        background: "darkgrey",
                        borderRadius: "0.5rem",
                      }),
                    }}
                  >
                    NGN
                  </span>
                  <span
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ...(currency === "USD" && {
                        background: "darkgrey",
                        borderRadius: "0.5rem",
                      }),
                    }}
                  >
                    USD
                  </span>
                </button>
              </div>
              <div style={{ fontSize: "1.05rem" }}>Your {currency} Balance</div>
              <Typography.Title level={1} style={{ margin: "3rem 0" }}>
                {currency === "NGN" ? "₦" : "$"} 0.00
              </Typography.Title>
              <div>
                <Button style={{ marginRight: "1rem" }}>Add Funds</Button>
                <Button>Send Funds</Button>
              </div>
            </div>
          </Col>
          <Col span={11}>
            <Divider>Exchange</Divider>
            <div className="exchange-card">
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "inline-block" }}>$ 1 USD = ₦ 400</div>
                <div style={{ display: "inline-block", marginLeft: "auto" }}>
                  <Button>Refresh</Button> (1s ago)
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  position: "relative",
                  gridTemplateColumns: "1fr 1fr",
                  gridAutoRows: "auto",
                  columnGap: "1rem",
                  rowGap: 0,
                  margin: "2rem 0 2rem",
                }}
              >
                <div>NGN</div>
                <div>USD</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(0,0,0,0.05)",
                    borderRadius: "0.5rem",
                    padding: ".5rem .75rem",
                  }}
                >
                  <input
                    style={{
                      border: "none",
                      background: "transparent",
                      fontSize: "2rem",
                      width: "100%",
                      outline: "none",
                    }}
                    type="number"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(0,0,0,0.05)",
                    borderRadius: "0.5rem",
                    padding: ".5rem .75rem",
                  }}
                >
                  <input
                    style={{
                      border: "none",
                      background: "transparent",
                      fontSize: "2rem",
                      width: "100%",
                      outline: "none",
                    }}
                    type="number"
                  />
                </div>

              </div>
              <Button type="primary" block>Swap</Button>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={22} offset={1}>
            <Typography.Title level={5}>Transactions</Typography.Title>
            <Transactions />
          </Col>
        </Row>
      </DashboardLayout>
    </div>
  );
}
