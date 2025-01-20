export const Wrapper = ({
  children,
  customClass,
}: {
  children: React.ReactNode;
  customClass?: string;
}) => {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${customClass}`}>{children}</div>;
};
