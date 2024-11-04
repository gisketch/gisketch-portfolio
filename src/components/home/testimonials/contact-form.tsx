"use client";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { User, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/services/email";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const emailData = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      user_subject: "Website Contact",
      message: formData.get("message") as string,
    };

    try {
      await sendEmail(emailData);
      setStatus("");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong :(");
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStatus("");
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center py-4">
        <h3 className="text-2xl font-semibold">Message in a Bottle! 🚀</h3>
        <p className="text-muted-foreground">
          Your message is now traveling through the digital waves. I&apos;ll get
          back to you faster than you can say &quot;The game is afoot!&quot;
        </p>
        <Button onClick={handleReset} variant="outline" className="mt-4">
          Send Another Message?
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="name"
            name="user_name"
            placeholder="Sherlock Holmes"
            className="pl-9"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            name="user_email"
            type="email"
            placeholder="sherlock@bakerstreet.com"
            className="pl-9"
            required
          />
        </div>
      </div>

      <div className="space-y-2 pb-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Elementary, my dear Watson! I deduce you're in need of a web developer who can solve your digital mysteries..."
          className="min-h-[140px]"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={status === "Sending..."}
      >
        {status === "Sending..." && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {status || "Send Message"}
      </Button>
    </form>
  );
}
