export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="JMH Pro'Sign"
      width={1208}
      height={538}
      className={className}
    />
  );
}
