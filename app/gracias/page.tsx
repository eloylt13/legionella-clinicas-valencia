import Link from "next/link";

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl items-center">
        <section className="w-full rounded-[32px] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
            Solicitud recibida
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Gracias. Hemos recibido tu solicitud.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Revisaremos la información enviada y, si encaja con el servicio,
            daremos el siguiente paso de forma clara y profesional.
          </p>

          <div className="mt-8 grid gap-4 rounded-[24px] border border-stone-200 bg-stone-50 p-5 sm:grid-cols-2 sm:p-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Revisión inicial
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                La solicitud ha quedado registrada y se tendrá en cuenta para
                su revisión.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Próximos pasos
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Si procede, se contactará para ampliar datos, resolver dudas o
                orientar la propuesta adecuada.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Volver al inicio
            </Link>
            <p className="flex items-center text-sm text-slate-500">
              Gracias por confiar en una solicitud clara y profesional.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
