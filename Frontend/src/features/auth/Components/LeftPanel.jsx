import logo from "../../../assets/images/logo.png"

export default function LeftPanel() {
  const stats = [
    {
      value: "12,480",
      label: "PCB Lots Tracked",
    },
    {
      value: "94.2%",
      label: "Pass Rate",
    },
    {
      value: "48",
      label: "Active Engineers",
    },
    {
      value: "18",
      label: "Workflows Configured",
    },
  ];

  return (
    <div className="w-200 bg-[#1C1C1C] h-full text-white flex flex-col justify-between p-12
    max-xl:hidden">

      {/* Logo */}
       <img
          src={logo}
          alt="Electrolyte"
          className="h-15 w-25 "
        />
      <div>
       

        {/* Tag */}
        <span className="inline-block bg-[#FFD400] text-black text-sm font-bold px-3 py-2 tracking-wider uppercase rounded-sm ">
          PCB Workflow Management
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-[2.5rem] font-black leading-wide tracking-wider">
          Digitize your PCB repair operations
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-[1.2rem] leading-8">
          Track lots, manage workflows, monitor engineer performance,
          and generate comprehensive reports — all in one platform.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-[#2A2A2A] rounded-lg p-5"
            >
              <h2 className="text-[#FFD400] text-[1.8rem] font-bold">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-400 text-[1rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-[1.2rem]">
        © 2024 Electrolyte Systems. All rights reserved.
      </p>
    </div>
  );
}