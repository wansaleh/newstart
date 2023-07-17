export default async function Footer() {
  return (
    <footer>
      <p className="mx-auto max-w-4xl text-center text-xs font-semibold opacity-50">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
