import Image from 'next/image'

export default function ShadeDevelopers() {
  return (
    <section className="flex max-md:px-4 max-md:flex-col items-center justify-between bg-[#070e17] w-full bg-[url('/images/bg-shade.png')] bg-no-repeat bg-cover bg-top pl-[100px] pt-[68px]">
      <div className="max-w-[564px] text-white shrink-2 max-md:text-center">
        <h2 className="font-inter font-bold text-5xl leading-none">
          Shade Developers
        </h2>
        <p className="text-2xl font-normal mt-8 font-dm-sans">
          With our ready-to-use and developer friendly APIs, SDKs and plugins,
          you can easily integrate to Shade to your website or app for FREE to
          start receiving payments in a breeze.
        </p>
        <button className="bg-primary mt-8 rounded-3xl py-3 px-5 font-bold mb-9">
          See Documentation
        </button>
      </div>

      <div className="self-end">
        <Image src="/images/code.svg" height={761} width={784} alt="code" />
      </div>
    </section>
  )
}
