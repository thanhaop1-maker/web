import svgPaths from "./svg-8ix63yfhpg";
import imgFrame23 from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Frame23() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[99px] rounded-[20px] shrink-0 w-full"
      style={{ backgroundImage: `url('${imgFrame23}')` }}
    />
  );
}

function Location2Fill() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-3.5"
      data-name="location_2_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p9a474c0}
            fill="var(--fill-0, #FFB366)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <Location2Fill />
      <div className="font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          Gbagada events center
        </p>
      </div>
    </div>
  );
}

function CalendarMonthFill() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-3.5"
      data-name="calendar_month_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p14862d70}
            fill="var(--fill-0, #FFB366)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <CalendarMonthFill />
      <div className="font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`Sat. August 13 2025 3:00 `}</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#ff7a00] box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative rounded-3xl shrink-0">
      <div className="font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          N3,000
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0">
      <Frame14 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-1 py-0 relative w-full">
          <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full">
            <p className="block leading-[normal]">Geo Tech submit 2025</p>
          </div>
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-5 p-[8px] rounded-2xl top-[701px] w-[362px]">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,179,102,0.8)] border-solid inset-0 pointer-events-none rounded-2xl"
      />
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Search3Line() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="search_3_line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            clipRule="evenodd"
            d={svgPaths.p855f700}
            fill="var(--fill-0, #FF7A00)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-5 px-4 py-3.5 rounded-3xl top-[120px] w-[362px]">
      <div
        aria-hidden="true"
        className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-3xl"
      />
      <Search3Line />
      <div className="basis-0 font-['Geist:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-[rgba(0,0,0,0.3)] text-left tracking-[0.24px]">
        <p className="block leading-[normal]">Search events or vendors</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ff7a00] box-border content-stretch flex flex-col gap-2 items-start justify-center p-[16px] relative rounded-3xl shrink-0 w-[73px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#ff7a00] border-solid inset-0 pointer-events-none rounded-3xl"
      />
      <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center tracking-[0.24px] w-full">
        <p className="block leading-[normal]">{`All `}</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative rounded-3xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-3xl"
      />
      <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-[rgba(9,36,75,0.6)] text-left text-nowrap tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Seminar events
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative rounded-3xl shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-3xl"
      />
      <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[12px] text-[rgba(9,36,75,0.6)] text-left text-nowrap tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Webinar events
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-5 p-0 top-[184px]">
      <Frame13 />
      <Frame21 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame15 key={i} />
      ))}
    </div>
  );
}

function Frame26() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[99px] rounded-[20px] shrink-0 w-full"
      style={{ backgroundImage: `url('${imgFrame23}')` }}
    />
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-1 py-0 relative w-full">
          <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full">
            <p className="block leading-[normal]">Geo Tech submit 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-5 p-[8px] rounded-2xl top-[310px] w-[206px]">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,179,102,0.8)] border-solid inset-0 pointer-events-none rounded-2xl"
      />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Home4Fill() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="home_4_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p2300ca00}
            fill="var(--fill-0, #FF7A00)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative w-full">
          <Home4Fill />
        </div>
      </div>
    </div>
  );
}

function CouponLine() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="coupon_line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p26169900}
            fill="var(--fill-0, #09244B)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative w-full">
          <CouponLine />
        </div>
      </div>
    </div>
  );
}

function StoreLine() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="store_line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            clipRule="evenodd"
            d={svgPaths.p142f3230}
            fill="var(--fill-0, #09244B)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative w-full">
          <StoreLine />
        </div>
      </div>
    </div>
  );
}

function User2Line() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="user_2_line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            clipRule="evenodd"
            d={svgPaths.p2d2aba80}
            fill="var(--fill-0, #09244B)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative w-full">
          <User2Line />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 pb-10 pt-5 px-5 top-[770px] w-[402px]">
      <div
        aria-hidden="true"
        className="absolute border-[#ffb366] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Frame5 />
    </div>
  );
}

function Frame28() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[99px] rounded-[20px] shrink-0 w-full"
      style={{ backgroundImage: `url('${imgFrame23}')` }}
    />
  );
}

function Location2Fill1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-3.5"
      data-name="location_2_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p9a474c0}
            fill="var(--fill-0, #FFB366)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <Location2Fill1 />
      <div className="font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-left text-nowrap tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Gbagada events center
        </p>
      </div>
    </div>
  );
}

function CalendarMonthFill1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-3.5"
      data-name="calendar_month_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p14862d70}
            fill="var(--fill-0, #FFB366)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <CalendarMonthFill1 />
      <div className="font-['Geist:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-left text-nowrap tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{`Sat. August 13 2025 3:00 `}</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#ff7a00] box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative rounded-3xl shrink-0">
      <div className="font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          N3,000
        </p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0">
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame32 />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-1 py-0 relative w-full">
          <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full">
            <p className="block leading-[normal]">Geo Tech submit 2025</p>
          </div>
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start left-5 p-[8px] rounded-2xl top-[508px] w-[362px]">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,179,102,0.8)] border-solid inset-0 pointer-events-none rounded-2xl"
      />
      <Frame28 />
      <Frame39 />
    </div>
  );
}

function Location2Fill2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-3.5"
      data-name="location_2_fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p9a474c0}
            fill="var(--fill-0, #FF7A00)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start p-0 top-[77px]"
      style={{ left: "calc(50% + 84px)" }}
    >
      <Location2Fill2 />
      <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap tracking-[0.24px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[99px] rounded-[20px] shrink-0 w-full"
      style={{ backgroundImage: `url('${imgFrame23}')` }}
    />
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-1 py-0 relative w-full">
          <div className="font-['Geist:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-left w-full">
            <p className="block leading-[normal]">Geo Tech submit 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-start justify-start p-[8px] rounded-2xl top-[310px] w-[206px]"
      style={{ left: "calc(50% + 45px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,179,102,0.8)] border-solid inset-0 pointer-events-none rounded-2xl"
      />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

export default function IPhone16Pro2() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="iPhone 16 Pro - 2"
    >
      <Frame30 />
      <Frame12 />
      <Frame25 />
      <div className="absolute font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] left-5 text-[#000000] text-[20px] text-left text-nowrap top-[268px] tracking-[0.4px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Upcoming events
        </p>
      </div>
      <div className="absolute font-['Geist:SemiBold',_sans-serif] font-semibold leading-[0] left-5 text-[#000000] text-[20px] text-left text-nowrap top-[466px] tracking-[0.4px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Events in Lagos
        </p>
      </div>
      <div className="absolute font-['Geist:Medium',_sans-serif] font-medium leading-[0] left-5 text-[#000000] text-[24px] text-left text-nowrap top-[70px] tracking-[0.48px]">
        <p className="leading-[normal] whitespace-pre">
          EvenTz<span className="adjustLetterSpacing text-[#ff7a00]">.</span>
        </p>
      </div>
      <Frame24 />
      <Frame6 />
      <Frame40 />
      <Frame35 />
      <Frame33 />
      <div
        className="absolute bg-[#e8e8e8] h-9 left-1/2 rounded-[18px] top-3.5 translate-x-[-50%] w-[124px]"
        data-name="Dynamic Island"
      />
    </div>
  );
}