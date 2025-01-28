import { Mail } from 'lucide-react';

interface EmailVerificationProps {
  email?: string;
}

export default function EmailVerification({ email = 'emmykeyz111@gmail.com' }: EmailVerificationProps) {
  return (
    <div className="verification-container">
      <div className="verification-card">
        <div className="mail-icon">
          <Mail size={32} />
        </div>
        <h1 className="verification-title">Verify your email to continue</h1>

        <div className="verification-info">
          <p>We just sent an email to the address: <strong>{email}</strong></p>
          <p>Please check your email and select the link provided to verify your address.</p>
        </div>

        <div className="verification-actions">
          <button className="btn-outline">Send again</button>
          <button className="btn-primary">Go to Gmail Inbox</button>
        </div>

        <a href="#" className="help-link">Didn't receive email?</a>
      </div>
    </div>
  );
}