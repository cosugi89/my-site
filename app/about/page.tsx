import Hero from '@/app/about/components/hero'
import Features from '@/app/about/components/features'
import Contact from '@/app/about/components/contact'
import { Metadata } from "next";

// タイトル（タブ名、検索結果）の設定
export const metadata: Metadata = {
  title: "サービスについて",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div>
      <Hero />
      <Features />
      <Contact />
    </div>
  )
}