import logo from "@/assets/img/logo text bawah.png";

export function Footer() {
  return (
    <footer className="dark:bg-white bg-primary">
      <div className="w-full p-4 px-8 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center justify-center">
              <img src={logo} className="h-40 me-3" alt="Bakesbangpol Badung" />
            </a>
          </div>
          <div className="w-full md:w-1/2 grid md:grid-cols-2 gap-8 sm:gap-6 md:text-left">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Pusat Pemerintahan Mangupraja Mandala,
              </h2>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  Jl. Raya Sempidi Badung Mangupura No.3 Unit 15 lantai 1,
                  Sempidi, Kabupaten Badung, Bali 80351
                </li>
                <li>(0361) 9009252</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Situs Terkait
              </h2>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://badungkab.go.id/"
                    className="hover:underline "
                  >
                    badungkab.go.id
                  </a>
                </li>
                <li>
                  <a
                    href="https://sidumas.badungkab.go.id/"
                    className="hover:underline"
                  >
                    sidumas.badungkab.go
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Badan Kesatuan Bangsa dan Politik
            Kabupaten Badung. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
