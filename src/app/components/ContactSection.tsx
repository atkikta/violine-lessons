import { useForm } from "@formspree/react";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function ContactSection() {
  const formId = import.meta.env.VITE_FORMSPREE_ID
  const [state, handleSubmit] = useForm("mrebydpw");

  return (
    <section id="contact" className="min-h-screen py-20 md:py-32 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-neutral-500 mb-2">Contact</p>
          <h2 className="font-serif mb-4">お問い合わせ</h2>
          <p className="text-neutral-700">
            レッスンのお申し込み、演奏のご依頼、その他お問い合わせは下記フォームよりお気軽にご連絡ください。
          </p>
        </div>

        {state.succeeded && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            お問い合わせありがとうございます。内容を確認の上ご返信いたします。
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="name">お名前 *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="山田 太郎"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">件名 *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="レッスンについて"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">お問い合わせ内容 *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="お問い合わせ内容をご記入ください"
              rows={6}
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={state.submitting}>
            <Send size={18} />
            送信する
          </Button>
        </form>

        {/* <div className="mt-12 flex items-center justify-center gap-3 text-neutral-600">
          <Mail size={20} />
          <p>または直接メールでのお問い合わせ: contact@example.com</p>
        </div> */}
      </div>
    </section>
  );
}
