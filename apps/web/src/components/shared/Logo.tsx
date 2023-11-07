import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="group/logo flex uppercase">
      <span className="w-0 opacity-0 transition-all duration-base group-hover/logo:w-[0.375rem] group-hover/logo:text-secondary group-hover/logo:opacity-100">
        /
      </span>
      <span className="mr-1 w-0 opacity-0 transition-all duration-base group-hover/logo:w-2 group-hover/logo:text-primary-600 group-hover/logo:opacity-100">
        /
      </span>
      <span className="mr-1 font-medium duration-base group-hover/logo:text-primary-300">Edson Jaramillo</span>
      <span className="w-0 overflow-hidden text-secondary transition-all duration-base group-hover/logo:w-[0.375rem] group-hover/logo:animate-pulse">
        _
      </span>
    </Link>
  );
}
