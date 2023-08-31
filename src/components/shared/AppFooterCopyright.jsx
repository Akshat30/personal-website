function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center mb-20">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a className="ml-1">Akshat Jain's Portfolio</a>.
        <a
          href="https://github.com/realstoman/react-tailwindcss-portfolio"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Copyright Information
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
