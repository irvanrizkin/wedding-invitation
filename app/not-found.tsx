export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Undangan Tidak Ditemukan
          </h1>
        </div>

        <p className="text-muted-foreground mb-8 text-lg">
          Kami tidak dapat menemukan undangan anda. Harap periksa kembali tautan
          anda
        </p>
      </div>
    </main>
  );
}
