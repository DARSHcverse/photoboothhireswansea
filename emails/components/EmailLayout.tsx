import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type EmailLayoutProps = {
  preview: string;
  children: React.ReactNode;
};

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: "32px 0",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden",
  width: "100%",
};

const header = {
  backgroundColor: "#0a3d8f",
  height: "80px",
  padding: "16px 24px",
  textAlign: "center" as const,
};

const headerLogo = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "bold" as const,
  lineHeight: "1.1",
  margin: 0,
  padding: 0,
  textAlign: "center" as const,
};

const headerTagline = {
  color: "#1a6fd4",
  fontSize: "11px",
  fontWeight: "bold" as const,
  letterSpacing: "0.18em",
  lineHeight: "1.2",
  margin: "4px 0 0",
  padding: 0,
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};

const body = {
  color: "#1a1a1a",
  fontSize: "15px",
  lineHeight: "1.6",
  padding: "32px 40px",
};

const footer = {
  backgroundColor: "#0a0a0a",
  color: "#a0aec0",
  fontSize: "12px",
  lineHeight: "1.6",
  padding: "24px 40px",
};

const footerTitle = {
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "bold" as const,
  margin: "0 0 8px",
  padding: 0,
};

const footerLine = {
  color: "#a0aec0",
  fontSize: "12px",
  margin: "2px 0",
  padding: 0,
};

const footerSmall = {
  color: "#718096",
  fontSize: "11px",
  margin: "12px 0 0",
  padding: 0,
};

const footerCopyright = {
  borderTop: "1px solid #1a1a1a",
  color: "#718096",
  fontSize: "11px",
  margin: "16px 0 0",
  padding: "12px 0 0",
};

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerLogo}>PBH</Text>
            <Text style={headerTagline}>Photo Booth Hire Swansea</Text>
          </Section>

          <Section style={body}>{children}</Section>

          <Section style={footer}>
            <Text style={footerTitle}>Photo Booth Hire Swansea</Text>
            <Text style={footerLine}>📧 photoboothhireinwales@gmail.com</Text>
            <Text style={footerLine}>📱 +44 7544 193175</Text>
            <Text style={footerLine}>📍 Swansea, Wales, UK</Text>
            <Text style={footerSmall}>
              Photo Booth Hire Swansea is the UK sister business of The Shan Booth, Australia.
            </Text>
            <Hr style={{ borderColor: "#1a1a1a", margin: "16px 0 0" }} />
            <Text style={footerCopyright}>
              © 2027 Photo Booth Hire Swansea. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export const emailStyles = {
  button: {
    backgroundColor: "#1a6fd4",
    borderRadius: "6px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "bold" as const,
    padding: "14px 28px",
    textDecoration: "none",
  },
  buttonSecondary: {
    backgroundColor: "#0a3d8f",
    borderRadius: "6px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "bold" as const,
    padding: "14px 28px",
    textDecoration: "none",
  },
  divider: {
    borderTop: "1px solid #e5e7eb",
    margin: "24px 0",
  },
  heading: {
    color: "#0a3d8f",
    fontSize: "20px",
    fontWeight: "bold" as const,
    margin: "0 0 16px",
  },
  subHeading: {
    color: "#0a3d8f",
    fontSize: "18px",
    fontWeight: "bold" as const,
    margin: "24px 0 12px",
  },
  paragraph: {
    color: "#1a1a1a",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0 0 16px",
  },
  summaryBox: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    margin: "16px 0 24px",
    padding: "20px",
  },
  summaryHeading: {
    color: "#0a3d8f",
    fontSize: "16px",
    fontWeight: "bold" as const,
    margin: "0 0 12px",
  },
  detailRow: {
    margin: "6px 0",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  detailLabel: {
    color: "#4a5568",
    display: "inline-block" as const,
    fontWeight: "bold" as const,
    width: "140px",
  },
  detailValue: {
    color: "#1a1a1a",
  },
  confirmedBox: {
    backgroundColor: "#f0f7ff",
    border: "1px solid #1a6fd4",
    borderRadius: "6px",
    margin: "16px 0 24px",
    padding: "20px",
  },
  confirmedHeader: {
    color: "#1a6fd4",
    fontSize: "14px",
    fontWeight: "bold" as const,
    letterSpacing: "0.08em",
    margin: "0 0 12px",
    textTransform: "uppercase" as const,
  },
  paymentBox: {
    backgroundColor: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: "6px",
    margin: "16px 0",
    padding: "16px",
  },
  signOff: {
    color: "#1a1a1a",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "24px 0 0",
  },
};
