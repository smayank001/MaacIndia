import { Shield, Search, CheckCircle } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const VerifyCertificate = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<null | "valid" | "invalid">(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock verification
    setResult(certId.length > 5 ? "valid" : "invalid");
  };

  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40 min-h-[80vh] flex items-center">
        <div className="max-w-xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-3">VERIFY CERTIFICATE</h1>
              <p className="text-muted-foreground">Enter your certificate number to verify its authenticity.</p>
            </div>

            <div className="glass-strong rounded-2xl p-8 glow-red-sm">
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text" placeholder="Enter Certificate Number (e.g., MAAC-2024-XXXXX)"
                    value={certId} onChange={(e) => { setCertId(e.target.value); setResult(null); }}
                    className="w-full pl-10 pr-4 py-4 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider">
                  Verify Certificate
                </button>
              </form>

              {result && (
                <div className={`mt-6 p-4 rounded-lg ${result === "valid" ? "bg-primary/10 border border-primary/30" : "bg-destructive/10 border border-destructive/30"}`}>
                  {result === "valid" ? (
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Certificate Verified ✓</p>
                        <p className="text-xs text-muted-foreground">This certificate is authentic and issued by MAAC India.</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-destructive">Certificate not found. Please check the number and try again.</p>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default VerifyCertificate;
