const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-white dark:bg-[#131217] border-t border-slate-200 dark:border-slate-800">
      <div className="main-container py-5 flex items-center justify-center">
        <p className="text-xs md:text-sm text-slate-500 dark:text-white/40 tracking-wide text-center">
          Designed &amp; built by{" "}
          <span className="text-cyan-600 dark:text-cyan-500 font-semibold">Vikash Kumhar</span>
          {" · "}
          &copy; {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
