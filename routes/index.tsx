import Toast from "../islands/Toast.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Fresh with Sonner</h1>
        <p class="my-4">
          Try out the different toasts below provided by{" "}
          <a class="underline" href="https://sonner.emilkowal.ski/">
            sonner
          </a>
          .
        </p>
        <Toast />
      </div>
    </div>
  );
}
