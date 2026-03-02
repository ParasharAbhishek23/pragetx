import DiagramNode from "./DiagramNode";
import Image from "next/image";

export default function IntegrationDiagram() {
  return (
    <div className="w-full px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative hidden md:block w-full min-h-[800px] lg:min-h-[950px] scale-[0.95] lg:scale-100 origin-top">
          <div className="absolute inset-0 rounded-3xl" />

          <svg
            className="absolute inset-0 h-full w-full text-white"
            viewBox="0 0 1000 900"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="2 8"
              strokeLinecap="round"
              opacity="0.85"
            >
              <line x1="500" y1="144" x2="500" y2="360" />
              <line x1="500" y1="360" x2="500" y2="405" />
              <line x1="120" y1="450" x2="440" y2="450" />
              <line x1="560" y1="450" x2="700" y2="450" />
              <line x1="700" y1="450" x2="880" y2="450" />
              <line x1="500" y1="495" x2="500" y2="670" />
              <path d="M 500 704 V 758 C 500 774 486 786 470 786 H 390" />
              <path d="M 500 704 V 758 C 500 774 514 786 530 786 H 610" />
            </g>
          </svg>

          <div className="absolute left-1/2 top-[8%] -translate-x-1/2">
            <div className="flex items-center justify-center gap-4 lg:gap-6">
              <DiagramNode
                label="ERP"
                className="bg-black text-white border border-white shadow-sm"
              />
              <DiagramNode
                label="CRM"
                className="bg-black text-white border border-white shadow-sm"
              />
              <DiagramNode
                label="Subscriptions"
                className="bg-black text-white border border-white shadow-sm"
              />
              <DiagramNode
                label="Legacy billing"
                className="bg-black text-white border border-white shadow-sm"
              />
              <DiagramNode
                label="Booking system"
                className="bg-black text-white border border-white shadow-sm"
              />
            </div>
          </div>

          <div className="absolute left-1/2 top-[25%] -translate-x-1/2">
            <DiagramNode
              label="SDK"
              className="bg-black text-white border border-white shadow-sm"
            />
          </div>

          <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="rounded-3xl bg-gradient-to-br from-[#635bff] to-[#7a73ff] px-14 py-10 shadow-[0_30px_80px_rgba(99,91,255,0.45)] ring-1 ring-white/10">
              <div className="text-white font-semibold text-xl lg:text-2xl tracking-tight">
                Stripe
              </div>
            </div>
          </div>

          <div className="absolute left-[25%] top-[48%] bg-black">
            <DiagramNode
              label="App Marketplace"
              className="bg-black text-white border border-white shadow-sm"
            />
          </div>

          <div className="absolute left-[2%] top-[50%] -translate-y-1/2 bg-black">
            <div className="rounded-2xl border border-task2-panelBorder/50 bg-task2-panel/50 px-5 py-1 shadow-sm bg-black w-48 flex items-center justify-center gap-8">
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-12 w-12 rounded-lg bg-task2-navy/60 p-2">
                  <Image
                    src="/assets/mobile/Google Cloude Mob.png"
                    alt="Cloude"
                    width={50}
                    height={50}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-12 w-12 rounded-lg bg-task2-navy/60 p-2">
                  <Image
                    src="/assets/mobile/Property 1=AWS Mob.png"
                    alt="AWS"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-12 w-12 rounded-lg bg-task2-navy/60 p-2">
                  <Image
                    src="/assets/mobile/Property 1=Azure mob.png"
                    alt="azure"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-12 w-12 rounded-lg bg-task2-navy/60 p-2">
                  <Image
                    src="/assets/mobile/Property 1=Copilot Mob.png"
                    alt="copilot"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-12 w-12 rounded-lg bg-task2-navy/60 p-2">
                  <Image
                    src="/assets/mobile/Property 1=crewai mob.png"
                    alt="crewai"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-12 w-12 rounded-lg bg-task2-navy/60 p-2">
                  <Image
                    src="/assets/mobile/Property 1=fastapi mob.png"
                    alt="Fastapi"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[70%] top-[41%] bg-black">
            <DiagramNode
              label="Event Destinations"
              className="bg-black text-white border border-white shadow-sm"
            />
          </div>
          <div className="absolute left-[70%] top-[48%] bg-black">
            <DiagramNode
              label="Data Pipeline"
              className="bg-black text-white border border-white shadow-sm"
            />
          </div>
          <div className="absolute left-[84%] top-[50%] -translate-y-1/2">
            <div className="h-12 w-12 rounded-xl bg-sky-500/90 p-2 shadow-sm">
              <Image
                src="/assets/snowflake-logo.png"
                alt="Snowflake"
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="absolute left-1/2 top-[75%] -translate-x-1/2 bg-black">
            <DiagramNode
              label="Orchestration"
              className="bg-black text-white border border-white shadow-sm"
            />
          </div>
          <div className="absolute left-1/2 top-[82%] -translate-x-1/2">
            <div className="flex items-center gap-6">
              <DiagramNode
                label="PSP"
                className="bg-black text-white border border-white shadow-sm px-3 py-2 text-sm"
              />
              <DiagramNode
                label="PSP"
                className="bg-black text-white border border-white shadow-sm px-3 py-2 text-sm"
              />
              <DiagramNode
                label="PSP"
                className="bg-black text-white border border-white shadow-sm px-3 py-2 text-sm"
              />
              <DiagramNode
                label="PSP"
                className="bg-black text-white border border-white shadow-sm px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden px-4">
          <div className="rounded-2xl border border-task2-panelBorder/50 bg-task2-navy/20 p-5">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <DiagramNode
                  label="ERP"
                  className="bg-black text-white border border-white"
                />
                <DiagramNode
                  label="CRM"
                  className="bg-black text-white border border-white"
                />
                <DiagramNode
                  label="Subscriptions"
                  className="bg-black text-white border border-white"
                />
                <DiagramNode
                  label="Legacy billing"
                  className="bg-black text-white border border-white"
                />
                <DiagramNode
                  label="Booking system"
                  className="bg-black text-white border border-white"
                />
                <DiagramNode
                  label="SDK"
                  className="bg-black text-white border border-white"
                />
              </div>

              <div className="mx-auto w-fit rounded-2xl bg-gradient-to-br from-[#635bff] to-[#7a73ff] px-10 py-7 shadow-[0_30px_80px_rgba(99,91,255,0.45)] ring-1 ring-white/10">
                <div className="text-white font-semibold text-xl tracking-tight">
                  Stripe
                </div>
              </div>

              <div className="rounded-2xl border border-task2-panelBorder/70 bg-task2-panel/70 px-5 py-5">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-white text-sm font-semibold">
                    App Marketplace
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-6 gap-3">
                  <div className="h-10 w-10 rounded-lg bg-task2-navy/60 p-2">
                    <Image
                      src="/assets/mobile/Google Cloude Mob.png"
                      alt="Google Cloud"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-task2-navy/60 p-2">
                    <Image
                      src="/assets/mobile/Property 1=AWS Mob.png"
                      alt="AWS"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-task2-navy/60 p-2">
                    <Image
                      src="/assets/mobile/Property 1=Azure mob.png"
                      alt="Azure"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-task2-navy/60 p-2">
                    <Image
                      src="/assets/mobile/Property 1=Copilot Mob.png"
                      alt="Copilot"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-task2-navy/60 p-2">
                    <Image
                      src="/assets/mobile/Property 1=crewai mob.png"
                      alt="crewai"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-task2-navy/60 p-2">
                    <Image
                      src="/assets/mobile/Property 1=fastapi mob.png"
                      alt="Fastapi"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <DiagramNode
                  label="Event Destinations"
                  className="bg-black text-white border border-white"
                />
                <DiagramNode
                  label="Data Pipeline"
                  className="bg-black text-white border border-white"
                />
              </div>

              <div className="mx-auto h-12 w-12 rounded-xl bg-sky-500/90 p-2">
                <Image
                  src="/assets/desktop/Property1=SlackWeb.png"
                  alt="Snowflake"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <div className="mx-auto w-fit">
                  <DiagramNode
                    label="Orchestration"
                    className="bg-black text-white border border-white"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <DiagramNode
                    label="PSP"
                    className="bg-black text-white border border-white px-3 py-2 text-sm"
                  />
                  <DiagramNode
                    label="PSP"
                    className="bg-black text-white border border-white px-3 py-2 text-sm"
                  />
                  <DiagramNode
                    label="PSP"
                    className="bg-black text-white border border-white px-3 py-2 text-sm"
                  />
                  <DiagramNode
                    label="PSP"
                    className="bg-black text-white border border-white px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
