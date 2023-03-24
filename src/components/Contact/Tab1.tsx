import dynamic from "next/dynamic"
const Calendar = dynamic(
  () => import('./Calendar'),
  { ssr: false }
)

const Tab1 = () => {
    return (
<section className="bg-gray-100" data-testid="tab1-section">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
          Prendre rendez-vous avec un conseiller vous assure d'avoir le design idéal pour votre logement.
        </p>

        <div className="mt-8">
            <h3> Siège social :</h3>
          <p className="text-2xl font-bold text-gold">
            01 51 47 54 45
          </p>

          <address className="mt-2 not-italic">
            282 rue de la Vilette, Paris
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Nom</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nom"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Téléphone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Téléphone"
                type="tel"
                id="phone"
              />
            </div>
          </div>

            <h4> Dans quelle ville se situe votre magasin ? </h4>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                tabIndex={-1}
                name="option"
              />

              <label
                htmlFor="option1"
                className="cursor-pointer block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex={0}
              >
                <span className="text-sm font-medium"> Paris </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option2"
                type="radio"
                tabIndex={-1}
                name="option"
              />

              <label
                htmlFor="option2"
                className="cursor-pointer block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex={0}
              >
                <span className="text-sm font-medium"> Lyon </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
                tabIndex={-1}
                name="option"
              />

              <label
                htmlFor="option3"
                className="cursor-pointer block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex={0}
              >
                <span className="text-sm font-medium"> Marseille </span>
              </label>
            </div>
          </div>
          <h4> Quand est-ce que vous souhaitez prendre rendez-vous ? </h4>
          <Calendar/>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows={8}
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black hover:bg-opacity-80 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    );
};

export default Tab1;