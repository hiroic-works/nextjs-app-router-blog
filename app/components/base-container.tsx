export default async function BaseContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container px-5 py-10 md:py-20 mx-auto">
      {children}
    </section>
  );
}
