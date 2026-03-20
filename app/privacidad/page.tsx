export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <section className="rounded-[32px] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Privacidad
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Privacidad para captación B2B
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Esta página resume, de forma general, cómo se tratan los datos
            enviados por clínicas dentales y otros contactos profesionales a
            través del formulario de esta web.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Responsable del tratamiento
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Los datos serán tratados por la entidad titular de este
                proyecto. Antes de publicar, conviene completar aquí la
                identificación legal y el canal de contacto correspondiente.
              </p>
            </article>

            <article className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Finalidad
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Gestionar la solicitud recibida, valorar la información aportada
                y responder sobre revisión, presupuesto o derivación a una
                empresa colaboradora especializada en el servicio.
              </p>
            </article>

            <article className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Legitimación
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                La base del tratamiento es la solicitud realizada por la persona
                interesada y, en su caso, el interés legítimo en dar respuesta a
                un contacto profesional.
              </p>
            </article>

            <article className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Conservación
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Los datos se conservarán durante el tiempo necesario para
                atender la solicitud y cumplir con las obligaciones que
                correspondan, una vez definidos los criterios legales finales.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[24px] bg-slate-900 p-5 text-slate-100 sm:p-6">
            <h2 className="text-lg font-semibold">Comunicación a colaboradores</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Cuando sea necesario para gestionar la solicitud, los datos podrán
              ser comunicados a empresas colaboradoras especializadas en el
              servicio. Esta base debe revisarse antes de publicar para
              incorporar la información legal definitiva.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
