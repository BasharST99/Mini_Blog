import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Emotion will inject style tags here */}
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body className="min-h-dvh bg-gray-50 text-slate-900">{children}</body>
    </html>
  );
}
