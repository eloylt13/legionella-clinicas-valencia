import Link from "next/link";

const benefits = [
  "Solicitud clara de revisión o presupuesto, sin llamadas innecesarias.",
  "Mensaje pensado para clínicas dentales de Valencia y su día a día.",
  "Enfoque prudente en prevención, cumplimiento y gestión ordenada.",
  "Derivación sencilla hacia empresas especializadas cuando corresponda.",
];

const process = [
  {
    title: "1. Envío del formulario",
    description:
      "La clínica comparte sus datos y explica brevemente qué necesita.",
  },
  {
    title: "2. Revisión de la petición",
    description:
      "Se analiza la información para orientar el siguiente paso con criterio profesional.",
  },
  {
    title: "3. Contacto o presupuesto",
    description:
      "Si encaja con el servicio, se concreta la respuesta o se traslada a un especialista.",
  },
];

const faqs = [
  {
    question: "¿A quién va dirigido este servicio?",
    answer:
      "A clínicas dentales de Valencia que necesitan una vía seria para solicitar revisión o presupuesto de control de legionella.",
  },
  {
    question: "¿La referencia normativa es asesoramiento jurídico?",
    answer:
      "No. Se menciona de forma general el RD 487/2022 como marco orientativo, sin sustituir asesoramiento legal ni técnico.",
  },
  {
    question: "¿Qué pasa después de enviar el formulario?",
    answer:
      "La solicitud queda registrada para revisar el caso y gestionar el siguiente paso de forma profesional.",
  },
];

const trustPoints = [
  {
    title: "Enfoque técnico y preventivo",
    text: "La comunicación se centra en revisión, control y prevención con un tono serio y local.",
  },
  {
    title: "Proceso claro",
    text: "La clínica sabe qué ocurre desde el primer contacto hasta la respuesta final.",
  },
  {
    title: "Tratamiento profesional",
    text: "La solicitud se gestiona con un enfoque ordenado, claro y adecuado para un primer contacto profesional.",
  },
  {
    title: "Derivación a especialistas",
    text: "Cuando procede, el caso puede orientarse hacia empresas especializadas en el servicio.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <section className="relative overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.4),_transparent_40%)]" />
          <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                Clínicas dentales de Valencia
              </span>
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Control de legionella para clínicas dentales en Valencia
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Solicitud profesional para clínicas dentales que necesitan una
                vía clara de contacto en un contexto de prevención,
                cumplimiento y gestión ordenada.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#formulario"
                  className="inline-flex min-h-14 shrink-0 items-center justify-center self-start rounded-full bg-cyan-500 px-6 text-center text-sm font-semibold leading-tight text-slate-950 transition hover:bg-cyan-400"
                >
                  <span className="block text-center">Solicitar revisión</span>
                </a>
                <p className="max-w-md text-sm leading-6 text-slate-300">
                  Para clínicas dentales de Valencia que necesitan una respuesta
                  profesional y directa.
                </p>
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                Enfoque de la solicitud
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">Prevención</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Comunicación orientada a ordenar la gestión y evitar
                    improvisación.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">Cumplimiento</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Referencia prudente al marco normativo, sin convertir la
                    página en un documento legal.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">
                    Solicitud profesional
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Formulario pensado para recoger datos útiles y orientar el
                    caso con rapidez.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Problema / necesidad
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Las clínicas necesitan una gestión clara, preventiva y bien
              documentada.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              En una clínica dental, la prevención no debería depender de
              mensajes genéricos. Hace falta una forma simple de explicar la
              necesidad, revisar la situación y canalizar la solicitud con
              orden.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Primera toma de contacto
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  La clínica deja sus datos y explica qué necesita sin pasos
                  innecesarios.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Contexto local
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  El mensaje se centra en clínicas dentales de Valencia y su
                  entorno operativo.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Lo que facilita
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
              <li className="rounded-2xl bg-white p-4 shadow-sm">
                Centraliza la primera solicitud de contacto.
              </li>
              <li className="rounded-2xl bg-white p-4 shadow-sm">
                Aclara el alcance del servicio sin promesas exageradas.
              </li>
              <li className="rounded-2xl bg-white p-4 shadow-sm">
                Permite una respuesta profesional y cualificada.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Cumplimiento normativo
          </p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Referencia general al RD 487/2022 para solicitar revisión o
                presupuesto con un enfoque prudente.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Se menciona el RD 487/2022 como marco general de referencia para
                situar la conversación en prevención y control. La página sirve
                para solicitar revisión o presupuesto y, cuando corresponda,
                derivar la petición a empresas especializadas. No ofrece
                asesoramiento jurídico ni técnico.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-semibold">Referencia prudente</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  El marco normativo se menciona sin afirmaciones legales
                  cerradas.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Objetivo comercial
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  La solicitud se canaliza de forma seria para revisión o
                  presupuesto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Confianza profesional
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
              >
                <h2 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Beneficios
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
              >
                <p className="text-sm leading-7 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
            Cómo funciona
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="formulario" className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Formulario
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Solicitar revisión o presupuesto
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Comparta la información básica de la clínica para que podamos
              revisar la petición y responder con criterio profesional.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm leading-6 text-slate-300">
                Indique la dirección o zona y una breve descripción de la
                necesidad para agilizar la gestión.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
            <form
              action="https://formspree.io/f/xnjgrjlv"
              method="post"
              className="grid gap-4"
            >
              <input
                type="hidden"
                name="subject"
                value="Nueva solicitud - Legionella clínicas dentales Valencia"
              />
              <input type="hidden" name="page" value="home" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Nombre de la clínica
                  <input
                    type="text"
                    name="clinica"
                    placeholder="Clínica dental"
                    required
                    className="min-h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Persona de contacto
                  <input
                    type="text"
                    name="contacto"
                    placeholder="Nombre y apellidos"
                    required
                    className="min-h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Telefono
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="600 000 000"
                    required
                    className="min-h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="correo@clinica.com"
                    required
                    className="min-h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Dirección o zona
                <input
                  type="text"
                  name="zona"
                  placeholder="Valencia, barrio o dirección"
                  required
                  className="min-h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Tipo de necesidad
                <select
                  name="necesidad"
                  required
                  defaultValue=""
                  className="min-h-12 rounded-2xl border border-stone-300 bg-stone-50 px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600"
                >
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  <option value="revision">Solicitar revisión</option>
                  <option value="presupuesto">Pedir presupuesto</option>
                  <option value="mantenimiento">Mantenimiento preventivo</option>
                  <option value="consulta">Consulta general</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Comentario adicional
                <textarea
                  name="comentario"
                  rows={5}
                  placeholder="Explique brevemente la situación o el tipo de instalación"
                  className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600"
                />
              </label>

              <label className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm leading-6 text-slate-700">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                  className="mt-1 h-4 w-4 rounded border-stone-300 text-slate-900"
                />
                <span>
                  He leído la{" "}
                  <Link
                    href="/privacidad"
                    className="font-semibold text-slate-900 underline underline-offset-4"
                  >
                    política de privacidad
                  </Link>{" "}
                  y acepto el tratamiento de mis datos para gestionar esta
                  solicitud.
                </span>
              </label>

              <div className="flex flex-col gap-3 border-t border-stone-200 pt-2">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Solicitar revisión
                </button>
                <p className="text-xs leading-5 text-slate-500">
                  Envíe la solicitud para que podamos revisarla y responder con
                  el siguiente paso adecuado.
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="mt-6 pb-8 sm:pb-10">
          <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              FAQ
            </p>
            <div className="mt-4 grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                >
                  <h2 className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
