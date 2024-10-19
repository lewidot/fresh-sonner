import { toast, Toaster } from "sonner";

export default function Toast() {
  return (
    <div class="m-auto">
      <Toaster />
      <button
        class="bg-neutral-950 text-neutral-100 hover:bg-neutral-800 rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
        onClick={() => toast("My first toast")}
      >
        Give me a toast
      </button>
    </div>
  );
}
