export const SectionTitle = ({
  children,
  customClass,
}: {
  children: React.ReactNode;
  customClass?: string;
}) => {
  return (
    <h2 className={`text-3xl font-semibold text-center mb-6 lg:mb-8 ${customClass}`}>{children}</h2>
  );
};
