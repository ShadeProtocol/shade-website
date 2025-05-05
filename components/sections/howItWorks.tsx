export default function HowItWorks() {
  return (
    <section className="pt-[85px] pb-[119px] w-full bg-[url('/images/bg-works.png')] bg-cover bg-no-repeat bg-top px-4">
      <div className="max-w-[1010px] mx-auto">
        <div className="flex flex-col items-center justify-between">
          <span className="text-primary text-2xl rounded-3xl bg-brand-black-100 py-2 px-4 font-dm-sans">
            How it works
          </span>

          <h2 className="max-w-[650px] text-[64px] font-bold leading-none text-center mt-3 text-secondary font-inter tracking-[-9%]">
            From wallet to checkout in minutes
          </h2>
        </div>

        <div className="flex max-md:flex-col items-center justify-between mt-[94px] gap-2 max-md:gap-7">
          {workItems.map((item) => (
            <CardWorkItem
              key={item.number}
              title={item.title}
              description={item.description}
              number={item.number}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CardWorkItemProps {
  title: string
  description: string
  number: number
}

function CardWorkItem({ title, description, number }: CardWorkItemProps) {
  return (
    <div className="flex flex-col gap-2.5 justify-end bg-white dark:bg-[#070E17] tracking-[-9%] w-full max-w-[315px] h-[275px] rounded-[16px] p-4 text-secondary font-bold text-4xl leading-none font-dm-sans">
      <span>{number}.</span>
      <h3>{title}</h3>
      <p className="text-base tracking-[-3%] font-normal">{description}</p>
    </div>
  )
}

const workItems = [
  {
    title: 'Connect  wallet',
    description:
      'Sign up instantly using your crypto wallet — no passwords or paperwork.',
    number: 1,
  },
  {
    title: 'Create & Share Invoices',
    description:
      'Use the dashboard or SDKs to generate customizable crypto invoices.',
    number: 2,
  },
  {
    title: 'Get Paid & Withdraw',
    description:
      'Receive on-chain payments, track status in real-time, and withdraw anytime.',
    number: 3,
  },
]
