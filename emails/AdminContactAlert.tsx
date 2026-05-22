import { Button, Column, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, emailStyles } from "./components/EmailLayout";

export type AdminContactAlertProps = {
  firstName: string;
  lastName: string;
  clientEmail: string;
  clientPhone: string;
  message: string;
  submittedAt: string;
};

export default function AdminContactAlert(props: AdminContactAlertProps) {
  const { firstName, lastName, clientEmail, clientPhone, message, submittedAt } = props;

  const rows: Array<[string, string]> = [
    ["Name", `${firstName} ${lastName}`.trim() || "—"],
    ["Email", clientEmail || "—"],
    ["Phone", clientPhone || "—"],
    ["Message", message || "—"],
  ];

  return (
    <EmailLayout preview={`New message from ${firstName} ${lastName}`.trim()}>
      <Text style={emailStyles.heading}>New Contact Message</Text>

      <Text style={{ color: "#6b7280", fontSize: "13px", margin: "0 0 20px" }}>
        Submitted {submittedAt}
      </Text>

      <Section style={emailStyles.summaryBox}>
        {rows.map(([label, value]) => (
          <Row key={label} style={{ margin: "6px 0" }}>
            <Column style={{ width: "100px", verticalAlign: "top" }}>
              <Text
                style={{
                  color: "#4a5568",
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: "4px 0",
                }}
              >
                {label}:
              </Text>
            </Column>
            <Column>
              <Text
                style={{
                  color: "#1a1a1a",
                  fontSize: "14px",
                  margin: "4px 0",
                  whiteSpace: "pre-wrap",
                }}
              >
                {value}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>

      {clientEmail ? (
        <Section style={{ margin: "20px 0" }}>
          <Button href={`mailto:${clientEmail}`} style={emailStyles.button}>
            Reply to {firstName || "client"}
          </Button>
        </Section>
      ) : null}
    </EmailLayout>
  );
}
