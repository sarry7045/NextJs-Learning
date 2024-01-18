export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2> Product Header</h2>
      {children}
      <h2> Product Footer</h2>
    </div>
  );
}
