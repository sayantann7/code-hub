import { Blocks } from "lucide-react";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto flex justify-center">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Made with ❤ by Sayantan</span>
          </div>
      </div>
    </footer>
  );
}
export default Footer;
