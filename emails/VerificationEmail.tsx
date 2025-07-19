import {
  Html,
  Head,
  Preview,
  Font,
  Heading,
  Text,
  Button,
  Section,
  Container,
} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Inter"
                    fallbackFontFamily="Arial"
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
                        format: 'woff2',
                    }}
                />
            </Head>

            <Preview>Your OTP code for verifying your Mystery Message account</Preview>

            <Section style={{ backgroundColor: '#f4f4f4', padding: '40px 0' }}>
                <Container style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Inter, Arial, sans-serif', color: '#333' }}>
                    <Heading style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
                        Welcome to <span style={{ color: '#007bff' }}>Mystery Message</span>, {username}!
                    </Heading>

                    <Text style={{ fontSize: '16px', lineHeight: '1.5', textAlign: 'center', marginBottom: '30px' }}>
                        We're excited to have you on board. To complete your signup, please verify your account using the OTP below:
                    </Text>

                    <Text style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', color: '#007bff' }}>
                        {otp}
                    </Text>

                    <Button
                        href="https://mysterymessage.com/verify"
                        style={{
                            backgroundColor: '#007bff',
                            color: '#ffffff',
                            fontSize: '16px',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            textAlign: 'center',
                            display: 'block',
                            width: 'fit-content',
                            margin: '0 auto',
                        }}
                    >
                        Verify Account
                    </Button>

                    <Text style={{ fontSize: '14px', color: '#888', textAlign: 'center', marginTop: '40px' }}>
                        If you didn’t request this, please ignore this email or contact our support.
                    </Text>

                    <Text style={{ fontSize: '12px', color: '#aaa', textAlign: 'center', marginTop: '20px' }}>
                        © {new Date().getFullYear()} Mystery Message. All rights reserved.
                    </Text>
                </Container>
            </Section>
        </Html>
    );
}
