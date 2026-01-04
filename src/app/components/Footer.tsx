export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white font-serif mb-2">大阪茨木ヴァイオリン教室</p>
          <p className="text-sm">© {currentYear} Rumi Kurakawa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
