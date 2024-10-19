import { toast, Toaster } from "sonner";

export default function Toast() {
  return (
    <>
      <Toaster />
      <div class="max-w-screen-md mx-auto flex flex-row justify-center gap-2 py-4">
        <button
          class="bg-neutral-950 text-neutral-100 hover:bg-neutral-800 rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
          onClick={() => toast("My first toast")}
        >
          Give me a toast
        </button>
        <button
          class="bg-neutral-950 text-neutral-100 hover:bg-neutral-800 rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
          onClick={() =>
            toast.message("Event has been created", {
              description: "Monday, January 3rd at 6:00pm",
            })}
        >
          Description
        </button>
      </div>
    </>
  );
}
